import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const BackEndURL = environment.apiURL + '/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private isLogin = false;
  private authStatusListener = new Subject<boolean>();
  private tokenTimer: any;
  private userId: string;

  constructor(private http: HttpClient, private router: Router) {}

  getAuthStatus() {
    return this.isLogin;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  creatUser(email: string, password: string) {
    const authData: AuthData = { email, password };
    return this.http.post( BackEndURL + '/signup', authData )
    .subscribe(response => {
      this.router.navigate(['/']);
    }, (error) => {
      this.authStatusListener.next(false);
    });
  }

  login(email: string, password: string) {
    const authData = {email, password};
    this.http.post<{token: string, expiresIn: number, userId: string}>( BackEndURL + '/login', authData )
      .subscribe(response => {
        this.token = response.token;
        if (this.token) {
          this.setAuthTimer(response.expiresIn);
          this.isLogin = true;
          this.userId = response.userId;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + response.expiresIn * 1000);
          this.saveAuthData(this.token, expirationDate, this.userId);
          this.router.navigate(['/']);
        }
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000 );
  }

  getToken(): string {
    return this.token;
  }

  logout() {
    clearTimeout(this.tokenTimer);
    this.token = null;
    this.isLogin = false;
    this.userId = null;
    this.authStatusListener.next(false);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isLogin = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token,
      expirationDate: new Date(expirationDate),
      userId: localStorage.getItem('userId')
    };
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
  }

  getUserId(): string {
    return this.userId;
  }

}
