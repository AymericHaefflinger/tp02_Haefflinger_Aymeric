import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { headerInscriptionComponent } from './headerInscription.component';
import { footerInscriptionComponent } from './footerInscription.component';
import { formInscriptionComponent } from './formInscription.component';
import { recapInscriptionComponent } from './recapInscription.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, headerInscriptionComponent, footerInscriptionComponent,
                   formInscriptionComponent, recapInscriptionComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
