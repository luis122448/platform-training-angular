import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-load-image',
  templateUrl: './lazy-load-image.component.html',
  styleUrls: ['./lazy-load-image.component.scss']
})
export class LazyLoadImageComponent implements OnInit{
  @Input() imageSrc: string | undefined;
  @Input() imageAlt: string | undefined;
  imagePlaceholder = 'https://via.placeholder.com/150';

  constructor() {
    this.imageSrc = this.imagePlaceholder;
  }

  ngOnInit(): void {
    this.imageSrc = this.imagePlaceholder;
    this.loadImage();
  }

  loadImage(): void {
    this.imageSrc = this.imageSrc;
  }

}
