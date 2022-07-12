import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormlyModule.forRoot(),
        FormlyBootstrapModule,
        ReactiveFormsModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('BUG', () => {
    component.fields = [
      {
        key: 'bla.foo', // nested key + required causes bug
        type: 'select',
        templateOptions: {
          required: true,
        },
      },
    ];
    fixture.detectChanges();
    expect(component.form.get('bla')?.value).toEqual({ foo: null });
  });

  it('OK 1', () => {
    component.fields = [
      {
        key: 'bla.foo',
        type: 'select',
        templateOptions: {
          required: false,
        },
      },
    ];
    fixture.detectChanges();
    expect(component.form.get('bla')?.value).toEqual({ foo: null });
  });

  it('OK 2', () => {
    component.fields = [
      {
        key: 'bla',
        type: 'select',
        templateOptions: {
          required: true,
        },
      },
    ];
    fixture.detectChanges();
    expect(component.form.get('bla')?.value).toEqual(null);
  });
});
