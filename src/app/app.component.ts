import { Component, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ExamService } from './service/exam.service';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import { FieldConfig } from './dynamic-form/models/field-config.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked{
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  config: FieldConfig[] = [
    {
      type: 'placeholder',
      label: 'Full name',
      name: 'name1',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'placeholder',
      label: 'Full name',
      name: 'name11',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'placeholder',
      label: 'Full name',
      name: 'name111',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'placeholder',
      label: 'Full name',
      name: 'name1111',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'placeholder',
      label: 'Full name',
      name: 'name5',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'placeholder',
      label: 'Full name',
      name: 'name6',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'placeholder',
      label: 'Full name',
      name: 'name7',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'placeholder',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];
  constructor(public examService: ExamService) {

  }
  title = 'admin';
  detach() {
    this.examService.questionToAttach = null;
  }


  ngAfterViewChecked() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    // this.form.setDisabled('submit', true);
    // this.form.setValue('name', 'Todd Motto');
  }

  submit(value: {[name: string]: any}) {
    console.log(value);
  }
}
