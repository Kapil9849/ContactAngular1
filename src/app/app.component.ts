import { Component } from '@angular/core';
import { MessageService } from './appServices/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _msg_sevice:MessageService){}

  ngOnInit(): void {

    let element:HTMLElement = document.getElementById('auto_trigger') as HTMLElement;
    element.click();
    }


  msgclick(){
    this._msg_sevice.messageAlert();
  }
  

  }