import { Component, OnInit } from '@angular/core';

@Component({

    selector: 'app-Student',
    templateUrl: './Student.component.html',
    styleUrls: ['./Student.component.css']
  
  })
  
  export class StudentComponent implements OnInit {
    firstName:string="Rahul";
    lastName:string="";
    email:string="";
    PSW:string="";
    repeatPSW:string="";

    ngOnInit(): void {
    
    }

    msgclick(){
      alert("hi")
    }

    Save(){
      if(this.lastName=="")
      {
      alert('Enter valid Last Name')
      }else if(this.email=="")
      {
        alert('Enter valid Email')
      }else if(this.PSW=="")
      {
        alert('Enter valid Password')
      }else if(this.PSW!=this.repeatPSW)
      {
        alert('Enter Password Not Match')
      }else{
        alert(this.firstName+'  '+this.lastName +' Data Sumited Successfully.');

      }
      this.lastName="";
      this.email="";
      this.PSW="";
      this.repeatPSW="";
  
    }

}