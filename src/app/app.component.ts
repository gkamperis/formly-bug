import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form = new FormGroup({});
  formUntouched = new FormGroup({});
  model = undefined;
  fields: FormlyFieldConfig[] = [];

  ngOnInit(): void {
    this.form.valueChanges
      // .pipe(debounceTime(500))
      .subscribe((v) => console.log('formly form sub', v));

    this.formUntouched.valueChanges
      // .pipe(debounceTime(500))
      .subscribe((v) => console.log('untouched form sub', v));
  }
}
