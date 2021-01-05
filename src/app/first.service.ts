import { Injectable } from '@angular/core';

@Injectable()
export class FirstService {

  constructor() { }

  showDate(){
   return new Date(); 
  }

}