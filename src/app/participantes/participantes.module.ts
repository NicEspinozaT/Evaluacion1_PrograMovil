import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantesPageRoutingModule } from './participantes-routing.module';

import { ParticipantesPage } from './participantes.page';
import { MostrarParticipanteComponent } from './mostrar-participante/mostrar-participante.component';
import { ParticipantesActivosComponent } from './participantes-activos/participantes-activos.component';
import { ParticipantesInactivosComponent } from './participantes-inactivos/participantes-inactivos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantesPageRoutingModule
  ],
  declarations: [ParticipantesPage,MostrarParticipanteComponent,ParticipantesActivosComponent,ParticipantesInactivosComponent]
})
export class ParticipantesPageModule {}
