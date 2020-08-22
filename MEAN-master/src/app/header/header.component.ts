import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLogin = false;
  $authSubscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLogin = this.authService.getAuthStatus();
    this.$authSubscription = this.authService.getAuthStatusListener()
    .subscribe( isLogin => {
      this.isLogin = isLogin;
    });
  }

  ngOnDestroy() {
    this.$authSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

}
