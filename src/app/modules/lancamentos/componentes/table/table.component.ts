import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ILancamento } from 'src/app/core/models/lancamento-form.model';

@Component({
  selector: 'app-lancamento-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class LancamentoTableComponent implements OnInit {
  @Input() lancamentos: ILancamento[] = [];

  @Output() editarLancamento = new EventEmitter<number>();
  @Output() deletarLancamento = new EventEmitter<ILancamento>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public addLancamento() {
    this.router.navigate(['/lancamento/cadastro']);
  }
}
