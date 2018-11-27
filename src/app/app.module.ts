import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {UserService} from './user/user.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {TableModule, WavesModule} from 'angular-bootstrap-md';


@NgModule({
    declarations: [
        AppComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
        TableModule,
        WavesModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
