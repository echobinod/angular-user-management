import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent, NavbarComponent, LayoutComponent, FooterComponent } from './lib/components/';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
    declarations: [AppComponent, NavbarComponent, FooterComponent, LogoComponent, LayoutComponent, NotFoundComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
