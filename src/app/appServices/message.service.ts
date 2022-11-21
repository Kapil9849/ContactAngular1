import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messageAlert(){
    alert("thank to use service..!")
  }
}
