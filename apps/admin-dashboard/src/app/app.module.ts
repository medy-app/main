import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';

import { SignInModule } from './pages/sign-in/sign-in.module';
import { ListOfNewsModule } from './pages/list-of-news/list-of-news.module';
import { ListOfAdviceModule } from './pages/list-of-advice/list-of-advice.module';
import { ActiveComponent } from './components/modals/active/active.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    SignInModule,
    ListOfAdviceModule,
    ListOfNewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
