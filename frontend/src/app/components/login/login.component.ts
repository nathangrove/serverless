import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  error: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: Http
  ) { 
    if (this.authService.isLoggedIn()) this.router.navigate(['/']);
  }

  ngOnInit() {
  }

  login(){
    this.http.post('http://localhost:3000/login',{ username: this.username, password: this.password }).subscribe( response => {
      let result = response.json();
      if (!result.token) this.error = response.toString();
      else {
        this.error = '';
        localStorage.setItem('profile',atob(result.token.split('.')[1]));
        this.router.navigate(['/']);
      }
    })
  }

}
