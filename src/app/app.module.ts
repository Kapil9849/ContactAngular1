import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { HomeComponent } from './Home/Home.component';
import { MessageService } from './appServices/message.service';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { FilegridComponent } from './filegrid/filegrid.component';
import { UploadFileComponent } from './upload-file/components/upload-file.component';
import { ApiService } from './shared/services/api.service';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,HomeComponent, FilegridComponent, UploadFileComponent
  ],
  imports: [
    BrowserModule,TableModule,
    AppRoutingModule,FormsModule,InputTextModule,FileUploadModule,HttpClientModule
  ],
  providers: [MessageService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

