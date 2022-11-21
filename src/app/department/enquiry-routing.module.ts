import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EnquiryComponent } from './components/enquiry.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EnquiryComponent }]),
  ],
  declarations: [],
})
export class EnquiryRoutingModule {}
