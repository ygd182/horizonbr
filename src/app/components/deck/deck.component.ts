import { Component, OnInit } from '@angular/core';
import { DeckService } from './deck.service';


@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  public decks: Array<any> = [];

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.deckService.getDecks('7GgyhayNtdhBxXghkibthxBdJ').subscribe(data => {
      console.log(data);
      this.decks = data.lista;
    });
  }

}
