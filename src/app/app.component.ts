import { Component } from '@angular/core';
import { Child, Reddit } from './Reddit';
import { RedditService } from './reddit.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPaupersReddit';
  
  posts: Child[] = [];

  constructor(private redditAPI: RedditService){
  }

  ngOnInit(): void{
    
    this.GetTopRAwwPosts("aww");
  }

  GetTopRAwwPosts(name:string):void{
    this.redditAPI.GetRedditPost(name).subscribe((result:Reddit) => {
      for(let i = 0; i < 10; i++){
        this.posts.push(result.data.children[i])
      }
    })
  }
}
