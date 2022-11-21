import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { catchError, map, Subject, throwError } from 'rxjs';
import { uploadedFileservice } from '../service/uploadfile.service';
import { MessageService } from 'primeng/api';
import { Car } from '../upload-file.model';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
  providers:[MessageService],


})
export class UploadFileComponent implements OnInit {
  FileFormat:string="";
  Filesize:any="";
  MsgFormat:boolean=true;
  MsgSize: boolean=true;
  dtOptions = {};
  list_product:any=[];
  
  cars: any;
  cols: any=[
    { field: 'id', header: 'ID' },
    { field: 'title', header: 'Title' },
    ];

  products:any=[];
  
  constructor(private uploadfilesservice:uploadedFileservice,private http: HttpClient,private messageService: MessageService) {}
  
  ngOnInit(): void {
  //this.getDataTemplates();
  //this.get_data()

  this.uploadfilesservice.GetDataTemplates().subscribe(posts => {
  this.cars=posts
});

}


  GetEnquiryQuestions() {
    throw new Error('Method not implemented.');
  }
  uploadedFiles: any[] = [];
  Size:number=1000;

 
  GetTableData(){
    this.getDataTemplates()
  }

  DownloadMsg(){
    alert("thank to use Click Button..!")
  }

  onChangeExcelFile($event:any)
  {
      if ($event.target.files && $event.target.files[0]) {
        let file = $event.target.files[0];
        this.MsgFormat=true;
        this.MsgSize=true;
        if (file.type === "application/vnd.ms-excel" || file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || (file.type === "" && (file.name.endsWith("xls") || file.name.endsWith("xlsx"))))
         {
         }
         else {
          this.MsgFormat=false;
             this.FileFormat="Select Excel file Format.....!"
             $event.target.value = null;
             return 
          }
         const FSize = $event.target.files[0];
        if(10 > FSize.size/1024)
        {
        }else{       
          this.MsgSize=false;
          this.Filesize="Select File Size less than 10 kb."
          $event.target.value = null;
          return
        }
      }
  }


  onUpload(event:any) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
      }

getDataTemplates()
{
 this.http.get('https://contactsapiazure.azurewebsites.net/api/GetWeatherForecast')
 .subscribe(posts => {
 console.log(posts)
 this.list_product=posts
 });
  
  // this.uploadfilesservice.GetDataTemplates().subscribe(posts => {
  //     console.log(posts)
  //     this.list_product=posts
  //});

}










}

