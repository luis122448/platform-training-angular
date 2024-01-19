import { Component, Input } from '@angular/core';
import { CommentClassModel } from '../../models/comment-class.model';

@Component({
  selector: 'app-item-comment-class',
  templateUrl: './item-comment-class.component.html',
  styleUrls: ['./item-comment-class.component.scss']
})
export class ItemCommentClassComponent {

  @Input() commentClass : CommentClassModel | undefined;

  constructor(){}

  markdownContent = `
  # Título del contenido

  Esto es un ejemplo de contenido en Markdown utilizando ngx-markdown en Angular.

  - Lista 1
  - Lista 2
  - Lista 3

  **Texto en negrita**
  *Texto en cursiva*
`;

}
