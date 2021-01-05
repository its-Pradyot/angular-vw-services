import { Component, VERSION } from '@angular/core';
import {FirstService} from "./first.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  mydata;

  constructor(private myser:FirstService) {}

  ngOnInit(): void{
    this.mydata = this.myser.showDate();
  }

  hello(){
    console.log(this.mydata);
  }

}
