import { Component, OnInit } from '@angular/core';

@Component({

    selector: 'app-Home',
    templateUrl: './Home.component.html',
    styleUrls: ['./Home.component.css']
  
  })
  
  export class HomeComponent implements OnInit {
    presentDate = new Date();
    ngOnInit(): void {

    }

  }