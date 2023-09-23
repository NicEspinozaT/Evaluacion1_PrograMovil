import { Component, OnInit, Input } from '@angular/core';
import { IParticipante } from '../Types/IParticipante';

@Component({
  selector: 'app-mostrar-participante',
  templateUrl: './mostrar-participante.component.html',
  styleUrls: ['./mostrar-participante.component.scss'],
})
export class MostrarParticipanteComponent implements OnInit {
  @Input()
  public participante!: IParticipante;
  constructor() {}

  ngOnInit() {}
}
