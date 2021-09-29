import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home-a',
  templateUrl: './home-a.page.html',
  styleUrls: ['./home-a.page.scss'],
})

export class HomeAPage {
 
  user = {
    name: 'Simon Grimm',
    website: 'www.ionicacademy.com',
    address: {
      zip: 48149,
      city: 'Muenster',
      country: 'DE'
    },
    interests: [
      'Ionic', 'Angular', 'YouTube', 'Sports'
    ]
    
  };
  constructor(private router: Router) { }
 
openDetailsWithState() {
  let navigationExtras: NavigationExtras = {
    state: {
      user: this.user
    }
  };
  this.router.navigate(['pagina-inicio'], navigationExtras);
}
}


