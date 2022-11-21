import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { HomeCoupmponent } from './uploadfile.component';
import { UploadFileComponent } from './components/upload-file.component';
import {TableModule} from 'primeng/table';

@NgModule({

 

    imports: [CommonModule, RouterModule,TableModule],
    declarations: [UploadFileComponent],
  
  })
  
  export class UploadFileModule {}