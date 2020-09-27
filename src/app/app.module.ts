import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RecapComponentComponent } from './recap-component/recap-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FooterComponentComponent, FormComponentComponent, HeaderComponentComponent, RecapComponentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
