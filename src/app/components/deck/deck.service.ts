import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private http: HttpClient) { }

  getDecks(token: string): Observable<any> {
    const data =  {
      Token: token,
      Acao: 'listarDecks'
    };
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('authentication', 'howdy' );

    const url = 'https://horizon.ampereconsultoria.com.br/montador.php';
    return this.http.post(url, data);

  }
}