import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttestationModule } from '../attestation/attestation.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StagiareModule { 

   identifiant!: string;
  nom!: string;
  prenom!: string;
  attestations!: AttestationModule[];
}
