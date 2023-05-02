import { Component } from '@angular/core';

/* //!C'est juste une classe typescript mais un peu boostée
le décorateur est une feature de ts pour améliorer les classes
ici pour Angular on utilise un décorateur de classe @ pour 
qu'elle se comporte comme un composant */

//Bien sûr on va configurer cette classe de composant :
@Component({
  // le nom de la balise html que l'on veut crée (ne pas overwriter des balises html)
  selector: '[app-main]',
  // un chemin relatif
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {}
