import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post-card.component.html',
})
export class PostCardComponent {
  @Input() post: any;
}
