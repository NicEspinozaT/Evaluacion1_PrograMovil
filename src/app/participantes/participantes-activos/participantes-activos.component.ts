import { Component, OnInit, Input } from '@angular/core';
import { IParticipante } from '../Types/IParticipante';

@Component({
  selector: 'app-participantes-activos',
  templateUrl: './participantes-activos.component.html',
  styleUrls: ['./participantes-activos.component.scss'],
})
export class ParticipantesActivosComponent implements OnInit {
  @Input()
  public activos: IParticipante[] = [];
  constructor() {}

  ngOnInit() {}
}
