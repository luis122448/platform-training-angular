import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faFlag, faHeart, faImage, faClock, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faReply, faAnglesDown, faBold, faItalic,faUnderline,faCode,faLink, faQuoteLeft,faListUl, faListOl } from '@fortawesome/free-solid-svg-icons';
import { Colors, COLORICON, COLORICONBOX } from '../../models/color.model';

@Component({
  selector: 'app-font-icon',
  templateUrl: './font-icon.component.html',
  styleUrls: ['./font-icon.component.scss']
})
export class FontIconComponent implements OnInit {
  @Input() isDivider: boolean = false;
  @Input() isBox: boolean = true;
  @Input() optionIcon: string = '';
  @Input() sizeIcon: string = 'lg';
  @Input() colorIcon: Colors = 'gray';
  @Input() number: number = 0;
  sizeIconProp: SizeProp | undefined;
  validSizes: SizeProp[] = ['xs', 'sm', 'lg', 'xl', '2xl'];
  mapBoxColors = COLORICONBOX;
  mapColors = COLORICON;
  constructor() {
    this.sizeIconProp = this.convertToSizeProp(this.sizeIcon);
  }
  ngOnInit(): void {
    this.sizeIconProp = this.convertToSizeProp(this.sizeIcon);
  }

  get colors() {
    let colors = this.mapBoxColors[this.colorIcon];
    if (!this.isBox) {
      colors = this.mapColors[this.colorIcon];
    }
    if (colors){
      return colors
    }
    return {}
  }

  getIcon(optionIcon: string): IconDefinition {
    switch (optionIcon) {
      case 'flag':
        return faFlag;
      case 'circle':
        return faCircle;
      case 'heart':
        return faHeart;
      case 'reply':
        return faReply;
      case 'angles-down':
        return faAnglesDown
      case 'eye':
        return faEye
      case 'eye-slash':
        return faEyeSlash
      case 'bold':
        return faBold
      case 'italic':
        return faItalic
      case 'underline':
        return faUnderline
      case 'code':
        return faCode
      case 'link':
        return faLink
      case 'quote-left':
        return faQuoteLeft
      case 'list-ul':
        return faListUl
      case 'list-ol':
        return faListOl
      case 'image':
        return faImage
      case 'clock':
        return faClock
      default:
        return faCircle;
    }
  }

  // Método para convertir una cadena en SizeProp
  convertToSizeProp(sizeStr: string): SizeProp | undefined {
    if (this.validSizes.includes(sizeStr as SizeProp)) {
      return sizeStr as SizeProp; // Conversión segura porque sizeStr coincide con los valores válidos
    } else {
      console.error(`El tamaño ${sizeStr} no es válido`);
      return undefined; // Si la cadena no coincide con ningún valor válido, se devuelve undefined
    }
  }
}

