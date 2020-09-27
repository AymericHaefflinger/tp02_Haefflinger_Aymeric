import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor() { }

  nom: string;
  prenom: string;
  mail: string;
  tel: string;
  adresse: string;
  cp: string;
  ville: string;
  civ: string;
  mdp: string;
  mdpc: string;


  ngOnInit() {
  }

    onSubmit(){

      let regexChar = new RegExp("^[a-zA-Z]+$");
      let regexTel = new RegExp("[0-9]{10}");
      let regexCP = new RegExp("[0-9]{5}");
      let regexEmpty = new RegExp("^$");


      if( this.mdp != this.mdpc ){
          document.getElementById('recap').innerHTML = "Le mot de passe ne correspond pas à sa confirmation";
          return false;
      }
      else if( !regexChar.exec(this.nom) || this.nom==null){
          document.getElementById('recap').innerHTML = "Le nom est mal formaté ou vide";
          return false;
      }
      else if( !regexChar.exec(this.prenom) || this.prenom==null){
          document.getElementById('recap').innerHTML = "Le prénom est mal formaté ou vide";
          return false;
      }
      else if(regexEmpty.exec(this.adresse) || this.adresse==null){
          document.getElementById('recap').innerHTML = "L'adresse est vide";
          return false;
      }
      else if( !regexCP.exec(this.cp) || this.cp==null){
          document.getElementById('recap').innerHTML = "Le code postal est mal formaté ou vide";
          return false;
      }
        else if( !regexChar.exec(this.ville) || this.ville==null){
          document.getElementById('recap').innerHTML = "La ville est mal formaté ou vide";
          return false;
      }
      else if( !regexTel.exec(this.tel) || this.tel==null){
          document.getElementById('recap').innerHTML = "Le numéro de téléphone est mal formaté ou vide";
          return false;
      }
      else if( regexEmpty.exec(this.mail)){
          document.getElementById('recap').innerHTML = "Le mail est vide vide";
          return false;
      }
      else if( !regexChar.exec(this.civ) || this.civ==null){
          document.getElementById('recap').innerHTML = "La civilité est mal formaté ou vide";
          return false;
      }
      else if(regexEmpty.exec(this.mdp)){
          document.getElementById('recap').innerHTML = "Le mot de passe est vide";
          return false;
      }
      else if(regexEmpty.exec(this.mdpc)){
          document.getElementById('recap').innerHTML = "La vérification est vide";
          return false;
      }
      

      document.getElementById('recap').innerHTML = "L'inscription a bien été enregistrée." +
       " Voici un récapitulatif rapide." + 
       " Nom : "+this.nom + "\n" +
       " Prenom : "+this.prenom + "\n" +
       " Mail : "+this.mail + "\n" + 
       " Téléphone : "+this.tel + "\n" + 
       " Adresse : "+this.adresse + "\n" + 
       " Code postal : "+this.cp + "\n" + 
       " Ville : "+this.ville;
      return true;
  }

}