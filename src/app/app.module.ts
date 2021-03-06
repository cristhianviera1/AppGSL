import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import {InicioPage} from '../pages/inicio/inicio';

import * as firebase from 'firebase';
import { UsersserviceProvider } from '../providers/usersservice/usersservice';

export const config = {
  apiKey: "AIzaSyB-KezPd0qE0_J1OJaFuJvmEKqu5Z3GP8w",
 authDomain: "fir-dc3aa.firebaseapp.com",
 databaseURL: "https://fir-dc3aa.firebaseio.com",
 projectId: "fir-dc3aa",
 storageBucket: "fir-dc3aa.appspot.com",
 messagingSenderId: "828479779749"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    InicioPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    InicioPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersserviceProvider,
    UsersserviceProvider
  ]
})
export class AppModule {}
