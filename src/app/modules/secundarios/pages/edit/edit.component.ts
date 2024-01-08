import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {
  ISecundarioDTO,
  TabelaSecundaria,
  temCodigo,
} from 'src/app/core/models/secundario-form.model';
import { SecondaryUtilsService } from 'src/app/core/services/utils/secondary.utils.service';
import { SecundarioFormBuilder } from '../../components/secundario-form/secundario-form.form-builder';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [SecondaryUtilsService, SecundarioFormBuilder],
})
export class EditComponent implements OnInit {
  public formGroup: FormGroup | null = null;
  public id: number = 0;
  public tabela = 'acao' as TabelaSecundaria;

  constructor(
    private activatedRoute: ActivatedRoute,
    private secundarioService: SecondaryUtilsService,
    private formBuilder: SecundarioFormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.tabela = params['tabela'];
      this.id = params['id'];
      if (Number(this.id) > 0) {
        this.buildForm(this.id);
      }
    });
  }

  ngOnInit(): void {}

  private buildForm(id: number) {
    this.secundarioService.getItem(this.tabela, id).subscribe((res) => {
      this.id = res.id;
      const tabelaTemCodigo = temCodigo[this.tabela];
      this.formGroup = this.formBuilder.build(tabelaTemCodigo, res);
    });
  }

  handleSubmit({
    tabela,
    item,
  }: {
    tabela: TabelaSecundaria;
    item: ISecundarioDTO;
  }) {
    this.secundarioService.editarItem(tabela, this.id, item).subscribe({
      next: () => {
        this.handleSuccess();
      },
      error: (err) => this.handleError(err),
    });
  }

  handleSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Lançamento editado com sucesso!',
      life: 3000,
    });
    // this.router.navigate(['secundario']);
  }

  handleError(error: HttpErrorResponse) {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro',
      detail: error.message,
      life: 3000,
    });
  }
}
