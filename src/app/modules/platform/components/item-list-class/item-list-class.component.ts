import { Component, Input, OnInit, OnChanges, SimpleChanges  } from '@angular/core';
import { UserClassModel } from '../../models/user-class.model';

@Component({
  selector: 'app-item-list-class',
  templateUrl: './item-list-class.component.html',
  styleUrls: ['./item-list-class.component.scss']
})
export class ItemListClassComponent implements OnInit, OnChanges {

  @Input() objectUserClassModel: UserClassModel | null = null;
  @Input() isOpenSidebar: boolean = false;
  status : string = 'none';

  constructor(
  ) {
  }
  ngOnInit(): void {
    this.updateStatus(this.objectUserClassModel);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['objectUserClassModel']) {
      this.updateStatus(this.objectUserClassModel);
    }
  }

  private updateStatus(objectUserClassModel: UserClassModel | null): void {
    if (objectUserClassModel === null) {
      this.status = 'none';
      return;
    } else if (objectUserClassModel.finalized) {
      this.status = 'complete';
    } else if (objectUserClassModel.progress) {
      this.status = 'incomplete';
    } else {
      this.status = 'notShow';
    }
  }

}
