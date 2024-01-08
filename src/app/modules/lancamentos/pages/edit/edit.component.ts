import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ILancamento } from 'src/app/core/models/lancamento-form.model';
import { LancamentoService } from 'src/app/core/services/http/lancamento.service';
import { LancamentoFormBuilder } from '../../componentes/lancamento-form/lancamento.form-builder';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  public idLancamento: number = 0;
  public formGroup: FormGroup | null = null;
  public numeroLancamento: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private lancamentoService: LancamentoService,
    private formBuilder: LancamentoFormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idLancamento = this.activatedRoute.snapshot.params['id'];

    if (Number(this.idLancamento) > 0) {
      this.buildForm(this.idLancamento);
    }
  }

  private buildForm(id: number) {
    this.lancamentoService.getOne(id).subscribe((res) => {
      this.numeroLancamento = res.numeroLancamento.toString().padStart(4, '0');
      this.formGroup = this.formBuilder.build(res);
    });
  }

  handleSubmit(lancamento: ILancamento) {
    this.lancamentoService.put(this.idLancamento, lancamento).subscribe({
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
