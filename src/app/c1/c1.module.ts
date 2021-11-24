import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1aComponent } from './c1a/c1a.component';
import { C1bComponent } from './c1b/c1b.component';



@NgModule({
  declarations: [
    C1aComponent,
    C1bComponent
  ],
  imports: [
    CommonModule
  ]
})
export class C1Module { }
