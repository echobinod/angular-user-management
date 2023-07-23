import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoComponent, NavbarComponent, LayoutComponent, FooterComponent } from './lib/components/';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { USER_STATE_NAME, reducer } from 'src/app/store';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        LogoComponent,
        LayoutComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(USER_STATE_NAME, reducer),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
