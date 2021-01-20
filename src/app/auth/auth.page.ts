import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLogin = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  ngOnInit() {
  }

  onLogin(){
    this.authService.login();
    this.router.navigateByUrl('/app/pages/products');
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if(this.isLogin){
      //Send a request to login servers
    }else{
      //Send a request to signup servers
    }
  }

  onSwitchAuthMode(){
    this.isLogin = !this.isLogin;
  }
}
