import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-ph',
  styleUrls: ['form-ph.component.scss'],
  template: `
    <div
      class="dynamic-field form-ph"
      [formGroup]="group">
    </div>
  `
})
export class FormPhComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
