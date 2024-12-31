import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email : string = '';
  password : string = '';
  errorMessage : string = '';
  typeButtonPassword = 'password';

  constructor(private authService: AuthService, private router: Router) {}

  changeTypeButtonPassword() {
    this.typeButtonPassword = this.typeButtonPassword === 'password' ? 'text' : 'password';
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        this.router.navigate(['urna/1']);
      },
      (error) => {
        this.errorMessage = 'Email ou senha inválidos';
      }
    )
  }

}
