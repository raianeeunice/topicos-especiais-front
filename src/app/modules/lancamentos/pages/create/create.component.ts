import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LancamentoFormBuilder } from '../../componentes/lancamento-form/lancamento.form-builder';
import { ILancamento } from 'src/app/core/models/lancamento-form.model';
import { LancamentoService } from 'src/app/core/services/http/lancamento.service';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  public formGroup: FormGroup | null = null;

  constructor(
    private formBuilder: LancamentoFormBuilder,
    private lancamentoService: LancamentoService,
    private messageService: MessageService
  ) {
    this.formGroup = this.formBuilder.build();
  }

  handleSubmit(lancamento: ILancamento) {
    this.lancamentoService.post(lancamento).subscribe(
      () => {
        this.formGroup?.reset();
        this.handleSuccess();
      },
      (err) => this.handleError(err)
    );
  }

  handleSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Lançamento adicionado com sucesso!',
      life: 3000,
    });
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
