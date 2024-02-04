import { Component, Input } from '@angular/core';
import { UserClassModel } from '@platform-model/user-class.model';

@Component({
  selector: 'app-resources-class',
  templateUrl: './resources-class.component.html',
  styleUrls: ['./resources-class.component.scss']
})
export class ResourcesClassComponent {

  @Input() userClassModel: UserClassModel | undefined = undefined;

}
