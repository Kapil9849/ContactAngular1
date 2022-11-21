import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EnquiryService} from './service/enquiry.service';
import { EnquiryRoutingModule} from './enquiry-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
//import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
//import { AccountModule } from '../account/account.module';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { StepsModule } from 'primeng/steps';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { EnquiryquestionaryComponent } from './components/enquiryquestionary/enquiryquestionary.component';
import { EnquiryComponent } from './components/enquiry.component';
import { SliderModule } from 'primeng/slider';


@NgModule({
  providers:[EnquiryService],
  imports: [CommonModule,
    RouterModule, 
    EnquiryRoutingModule,
    FormsModule,ButtonModule,
    InputTextModule,CheckboxModule,
    //RecaptchaModule,
    //RecaptchaFormsModule,
    //AccountModule,
    DialogModule,
    ToastModule,
    TableModule,
    StepsModule,
    DividerModule,
    DropdownModule,
    CalendarModule,
    SliderModule,
  ],
  declarations: [EnquiryComponent, EnquiryquestionaryComponent],
  exports:[EnquiryquestionaryComponent]
})
export class EnquiryModule {}
