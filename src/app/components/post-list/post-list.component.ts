import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../post-card/post-card.component';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterModule, CommonModule, PostCardComponent],
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}
