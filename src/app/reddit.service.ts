import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reddit } from './Reddit';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  baseURL: string = "https://www.reddit.com/r/";

  constructor(private http: HttpClient) { }

  GetRedditPost(name: string) : Observable<Reddit>{
    return this.http.get<Reddit>(this.baseURL + name);
  }
}
