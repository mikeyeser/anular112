import { Component } from '@angular/core';
import { user } from '../Model/user';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  public user?: user
  
    public usersData: user[] = [
        {
          "id": 7,
          "email": "michael.lawson@reqres.in",
          "first_name": "Michael",
          "last_name": "Lawson",
          "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
          "id": 8,
          "email": "lindsay.ferguson@reqres.in",
          "first_name": "Lindsay",
          "last_name": "Ferguson",
          "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
          "id": 9,
          "email": "tobias.funke@reqres.in",
          "first_name": "Tobias",
          "last_name": "Funke",
          "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
          "id": 10,
          "email": "byron.fields@reqres.in",
          "first_name": "Byron",
          "last_name": "Fields",
          "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
          "id": 11,
          "email": "george.edwards@reqres.in",
          "first_name": "George",
          "last_name": "Edwards",
          "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
          "id": 12,
          "email": "rachel.howell@reqres.in",
          "first_name": "Rachel",
          "last_name": "Howell",
          "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }]
    
      constructor(private router: ActivatedRoute){
        this.router.params.subscribe(params => {
          console.log(params);
          this.user = this.usersData.find(user => user.id == params['id']);
        })
      }
}

