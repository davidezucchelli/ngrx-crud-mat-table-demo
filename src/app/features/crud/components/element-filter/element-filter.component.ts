import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UiFilterCrud } from '../../store/reducers/ui-reducer';

@Component({
  selector: 'app-element-filter',
  templateUrl: './element-filter.component.html',
  styleUrls: ['./element-filter.component.css'],
})
export class ElementFilterComponent {
  @Output() setFilter: EventEmitter<UiFilterCrud> =
    new EventEmitter<UiFilterCrud>();

  @Input() set filter(filter: UiFilterCrud | null) {
    this.form.setValue(filter ? { ...filter } : { name: '' });
  }

  form: FormGroup = new FormGroup({
    name: new FormControl(null),
  });

  setFilterHandler() {
    this.setFilter.emit(this.form.value);
  }
}
