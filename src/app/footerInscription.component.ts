import { Component, Input } from '@angular/core';

@Component({
  selector: 'footerInscription',
  template: `<div>
              <p>Ceci est un footer</p>
            </div>`,
  styles: [`div { font-family: Lato; 
                  background-color : lightgrey; 
                  text-align: center; 
                  position:fixed; 
                  height:50px; 
                  bottom:0px; 
                  width : 100%;}
            p{top: 10px;}`]
})
export class footerInscriptionComponent  {
}
