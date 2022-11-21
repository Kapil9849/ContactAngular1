import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './Profile/Student.Component';
import { HomeComponent } from './Home/Home.component';
import { FilegridComponent } from './filegrid/filegrid.component';
import { UploadFileComponent } from './upload-file/components/upload-file.component';

const routes: Routes = [

  {
    path:"Home",
    component:HomeComponent
  },
  
  {
    path:"Student",
    component:StudentComponent
  },
  
  { 
    path:"Upload",
    component:UploadFileComponent
  },

  {
    path: 'enquiry',
    loadChildren: () => import('./department/enquiry.module').then((m) => m.EnquiryModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
