import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faFlag, faHeart, faImage } from '@fortawesome/free-regular-svg-icons';
import { faReply, faAnglesDown, faEye, faBold, faItalic,faUnderline,faCode,faLink, faQuoteLeft,faListUl, faListOl } from '@fortawesome/free-solid-svg-icons';
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
  @Input() sizeIcon: string = 'xl';
  @Input() colorIcon: Colors = 'gray';
  @Input() number: number = 0;
  sizeIconProp: SizeProp | undefined;
  validSizes: SizeProp[] = ['xs', 'sm', 'lg', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'];
  mapBoxColors = COLORICONBOX;
  mapColors = COLORICON;
  constructor() { }
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
      default:
        return faCircle;
    }
  }

  // Método para convertir una cadena en SizeProp
  convertToSizeProp(sizeStr: string): SizeProp | undefined {
    if (this.validSizes.includes(sizeStr as SizeProp)) {
      return sizeStr as SizeProp; // Conversión segura porque sizeStr coincide con los valores válidos
    } else {
      return undefined; // Si la cadena no coincide con ningún valor válido, se devuelve undefined
    }
  }
}

