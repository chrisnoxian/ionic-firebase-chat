import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { SigninPage } from '../pages/signin/signin';


var config = {
    apiKey: "AIzaSyDr405GtNeqnnK8eYUlWdnB7_jpy2e_f0M",
    authDomain: "geotracker-d252b.firebaseapp.com",
    databaseURL: "https://geotracker-d252b.firebaseio.com",
    projectId: "geotracker-d252b",
    storageBucket: "geotracker-d252b.appspot.com",
    messagingSenderId: "373591609777"
  };

  
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
     
  firebase.initializeApp(config);
  }
}

