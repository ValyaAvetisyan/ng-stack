import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormBuilder } from './form-builder';

@NgModule({
  imports: [ReactiveFormsModule],
  providers: [FormBuilder],
})
export class NgStackFormsModule {}
