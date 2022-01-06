import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Transferiu');
    this.service
      .adicionar({ valor: this.valor, destino: this.destino })
      .subscribe(
        (resultado) => {
          console.log(resultado);
          this.limparCampos();
          this.router.navigateByUrl('extrato');
        },
        (error) => console.error(error)
      );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
