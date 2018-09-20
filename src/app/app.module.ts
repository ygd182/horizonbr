import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { DeckComponent } from './components/deck/deck.component';
import { DeckService } from './components/deck/deck.service';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [DeckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
