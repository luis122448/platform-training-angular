import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-count',
  templateUrl: './rating-count.component.html',
  styleUrls: ['./rating-count.component.scss']
})
export class RatingCountComponent {
  
  @Input() rating: number | undefined;
  @Input() totalReview: number | undefined;
  @Input() linkReview: string | undefined;

  constructor() { }

}
