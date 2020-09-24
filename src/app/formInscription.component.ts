import { Component, Input } from '@angular/core';

@Component({
  selector: 'formInscription',
  templateUrl: './formInscription.component.html',
  styleUrls: ['./formInscription.component.css']
})
export class formInscriptionComponent  {

  onSubmit(){

      if( document.getElementById('inPassword').innerHTML != document.getElementById('inLogin').innerHTML ){
          document.getElementById('recap').innerHTML = "Le mot de passe ne correspond pas à sa confirmation";
          return false;
      }

      document.getElementById('recap').innerHTML = "L'";
      return true;
  }

}