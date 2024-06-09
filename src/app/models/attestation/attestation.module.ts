import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StagiareModule } from '../stagiare/stagiare.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AttestationModule {
  idAttestation!: number;
  startDate!: Date;
  endDate!: Date;
  repoDate!: Date;
  attestationImage!: string;
  contact!: string;
  entreprise!: string;
  stagiaire!: StagiareModule;
 }
