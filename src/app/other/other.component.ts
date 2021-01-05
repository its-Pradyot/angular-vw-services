import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  mydata;
  constructor(private ser:FirstService) { }

  ngOnInit() {
    this.mydata = this.ser.showDate();
  }

  mymethod(){
    console.log(this.mydata);
  }
}