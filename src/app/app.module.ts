import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PageClassementComponent } from './components/page-classement/page-classement.component';
import { HistoriqueComponent } from './components/historique/historique.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        PageClassementComponent,
        HistoriqueComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
