import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome: string;
  listaBuoni: boolean = true;
  listaCattivi: boolean = true;
  arrayBuoni: string[] = [];
  arrayCattivi: string[] = [];

  rimuoviBuono(i: number) {
    this.arrayBuoni.splice(i, 1);
  }
  rimuoviCattivo(i: number) {
    this.arrayCattivi.splice(i, 1);
  }
  buono(n: string) {
    this.arrayBuoni.push(n);
    n = "";
  }
  cattivo(n: string) {
    this.arrayCattivi.push(n);
    n = "";
  }

  spostaInBuoni(n: string, i: number) {
    this.arrayCattivi.splice(i, 1);
    this.arrayBuoni.push(n);


  }
  spostaInCattivi(n: string, i: number) {
    this.arrayBuoni.splice(i, 1);
    this.arrayCattivi.push(n);
  }
}
