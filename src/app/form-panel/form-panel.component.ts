import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {
  @Input() nomeInput: string;
  @Output() buonoOutput = new EventEmitter<string>();
  @Output() cattivoOutput = new EventEmitter<string>();

  nome: string;
  constructor() { }

  ngOnInit(): void {
    this.nome = this.nomeInput;
  }

  buono() {
    this.buonoOutput.emit(this.nome);
  }
  cattivo() {
    this.cattivoOutput.emit(this.nome);
  }

}
