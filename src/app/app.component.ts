import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = new FormGroup({});
  model = { country: 1 };
  fields: FormlyFieldConfig[] = [
    {
      key: 'country',
      type: 'select',
      props: {
        options: [{ value: 1, label: 'a' }],
      },
    },
  ];
}
