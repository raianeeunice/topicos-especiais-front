import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ISecundarioDTO,
  TabelaSecundaria,
  temCodigo,
} from 'src/app/core/models/secundario-form.model';
import { SecondaryUtilsService } from 'src/app/core/services/utils/secondary.utils.service';
import { SecundarioFormBuilder } from './secundario-form.form-builder';
import {
  formatTabelaNome,
  selectionOptionsSecundario,
} from '../../utils/option-table.selection';

@Component({
  selector: 'app-secundario-form',
  templateUrl: './secundario-form.component.html',
  styleUrls: ['./secundario-form.component.scss'],
  providers: [SecundarioFormBuilder, SecondaryUtilsService],
})
export class SecundarioFormComponent implements OnInit {
  @Input() form: FormGroup | null = null;
  @Input() edit: boolean = false;

  @Output() emitSubmit = new EventEmitter<{
    tabela: TabelaSecundaria;
    item: ISecundarioDTO;
  }>();

  public selectionOptionsSecundario = selectionOptionsSecundario;
  public tabela = 'acao' as TabelaSecundaria;
  public temCodigo: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.tabela = params['tabela'];
      const tabelaTemCodigo = temCodigo[this.tabela];
      this.temCodigo = tabelaTemCodigo;
    });
  }

  public onSubmit() {
    if (this.form?.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const tabela = this.tabela;
    const item: ISecundarioDTO = {
      codigo: this.form?.get('codigo')?.value,
      nome: this.form?.get('nome')?.value,
    };
    this.emitSubmit.emit({
      tabela,
      item,
    });
  }

  handleBack() {
    this.router.navigate(['secundario']);
  }
}
