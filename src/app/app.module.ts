import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstService } from './first.service';
import { OtherComponent } from './other/other.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, OtherComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FirstService]
})
export class AppModule { }
