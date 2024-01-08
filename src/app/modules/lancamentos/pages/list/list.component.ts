import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ILancamento } from 'src/app/core/models/lancamento-form.model';
import { LancamentoService } from 'src/app/core/services/http/lancamento.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public lancamentos: ILancamento[] = [];

  constructor(
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.lancamentoService
      .getAll()
      .subscribe((res) => (this.lancamentos = res));
  }

  handleDeleteLancamento(lancamento: ILancamento) {
    this.confirmationService.confirm({
      message: `Você tem certeza que deseja deletar o lançamento:
        "${lancamento.contratado}"?`,
      header: 'Confirmar exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'p-button-success',
      rejectButtonStyleClass: 'p-button-danger',
      accept: () => {
        console.log('accept');
        this.lancamentoService.delete(lancamento.id).subscribe({
          next: () => this.handleSuccess(),
          error: (err) => this.handleError(err),
        });
      },
    });
  }

  handleEditLancamento(id: number) {
    this.router.navigate(['/lancamento/cadastro', id]);
  }

  handleSuccess() {
    this.lancamentoService
      .getAll()
      .subscribe((res) => (this.lancamentos = res));
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Lançamento excluído com sucesso!',
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
