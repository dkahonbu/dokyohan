import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamsComponent } from './components/teams/teams.component';
import { EventsComponent } from './components/events/events.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeltingComponent } from './components/events-details/belting/belting.component';
import { BatangPinoyComponent } from './components/events-details/batang-pinoy/batang-pinoy.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    TeamsComponent,
    EventsComponent,
    BeltingComponent,
    BatangPinoyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    })
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"dka-honbu-f71c2","appId":"1:174889089136:web:9c1ce5d6c5b5a0cca8dcb5","storageBucket":"dka-honbu-f71c2.firebasestorage.app","apiKey":"AIzaSyCf2Yrm15hAWa-DAwygZlPLlExqaJlzUX0","authDomain":"dka-honbu-f71c2.firebaseapp.com","messagingSenderId":"174889089136","measurementId":"G-3087C5V4VY"})),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
