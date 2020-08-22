import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const BackEndURL = environment.apiURL + '/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<{posts: Post[], postCount: number}>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts(postsPerPage: number, currentPage: number) {
    const queryParams = `?pageSize=${postsPerPage}&page=${currentPage}`;
    this.http.get<{message: string, posts: Post[], maxPosts: number}>( BackEndURL + '/' + queryParams)
      .pipe(map((postData) => {
        return {
          posts: postData.posts.map((post: any) => {
            return {
              title: post.title,
              content: post.content,
              id: post._id,
              imagePath: post.imagePath,
              creator: post.creator
            };
          }),
          maxPosts: postData.maxPosts
      };
      }))
      .subscribe((transformedPostData) => {
        this.posts = transformedPostData.posts;
        this.postUpdated.next({
          posts: [...this.posts],
          postCount: transformedPostData.maxPosts
        });
      });
  }

  getPost(id: string) {
    return this.http
    .get<{_id: string,
      title: string,
      content: string,
      imagePath: string,
      creator: string
    }>(BackEndURL + id);
  }

  deletePost(postId: string) {
    return this.http.delete(BackEndURL + '/' + postId);
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string, image: File) {
    const postData = new FormData();
    postData.append('title', title);
    postData.append('content', content);
    postData.append('image', image, title);
    this.http.post<{message: string, post: Post}>(BackEndURL,
      postData)
      .subscribe((responseData) => {
        this.router.navigate(['/']);
      });

  }

  updatePost(id: string, title: string, content: string, image: File|string) {
    let postData: Post | FormData;
    if (typeof image === 'object') {
      console.log('image type was object')
      // handling if image is of file type
      postData = new FormData();
      postData.append('id', id);
      postData.append('title', title);
      postData.append('content', content);
      postData.append('image', image, title);
    } else {
      console.log('image type was string');
      postData = { id, title, content, imagePath: image, creator: null };
    }

    this.http.put<{ message: string }>(`${BackEndURL}/${id}`,
    postData).subscribe((responseData) => {
      /**
       * this.post will remain empty until we do not visit post-list component
       */
      this.router.navigate(['/']);
    });
  }



}
