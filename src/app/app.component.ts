import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  loggedIn = false;

  appPages = [
    {
      title: 'Ürünler',
      url: '/app/pages/products',
      icon: 'cart'
    },
    {
      title: 'Filtre',
      url: '/app/pages/search',
      icon: 'search'
    },
    {
      title: 'Ürün Ekle',
      url: '/app/pages/add',
      icon: 'add'
    },
    {
      title: 'Favoriler',
      url: '/app/pages/favorites',
      icon: 'heart'
    },
    {
      title: 'Profil',
      url: '/app/pages/user',
      icon: 'person'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('auth');
  }
  logout() {
    // this.userData.logout().then(() => {
    //   return this.router.navigateByUrl('/app/tabs/schedule');
    // });
  }
}
