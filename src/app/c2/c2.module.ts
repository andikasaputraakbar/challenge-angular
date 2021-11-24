import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cc2aComponent } from './cc2a/cc2a.component';
import { Cc2bComponent } from './cc2b/cc2b.component';



@NgModule({
  declarations: [
    Cc2aComponent,
    Cc2bComponent
  ],
  imports: [
    CommonModule
  ]
})
export class C2Module { }
