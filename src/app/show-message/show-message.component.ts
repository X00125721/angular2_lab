import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {
  //declare and initialize a string
  clickMessage: string="";

  constructor() { }
  //handles button click sets clickMessage property = text input
  //no validation = bad idea
  onClickMe(myMessage: string) {
    this.clickMessage = myMessage;
  }

  ngOnInit() {
  }

}
