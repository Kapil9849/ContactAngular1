import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Table } from 'primeng/table';
import { MessageService } from "src/app/appServices/message.service";


@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent {

  customers: any = [];
  first = 0;
  rows = 10;
  cols : any;

  constructor(private http: HttpClient, private _msg_sevice: MessageService) { }

  ngOnInit(): void {

    this.http.get('http://20.81.111.0/api')
      .subscribe(posts => {
        console.log(posts)
        this.customers = posts
      });
    this.cols = [{ field: 'id', header: 'Id' }, { field: 'name', header: 'Name' }, { field: 'email', header: 'Email' }, { field: 'phone', header: 'Phone' },{ field: 'address', header: 'Address' }];
  }


  DownloadMsg() {
    alert("thank to use Click Button..!")
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.customers ? this.first === (this.customers.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }

  msgclick() {
    this._msg_sevice.messageAlert();
  }

}
