import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ILancamento } from 'src/app/core/models/lancamento-form.model';
import {
  ITabelaSecundaria,
  SelectOptionsUtilsService,
} from 'src/app/core/services/utils/select-options.utils.service';
import { LancamentoFormBuilder } from './lancamento.form-builder';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.scss'],
  providers: [SelectOptionsUtilsService],
})
export class LancamentoFormComponent implements OnInit {
  @Input() form: FormGroup | null = null;
  @Input() edit: boolean = false;

  @Output() emitSubmit = new EventEmitter<ILancamento>();

  public maxDateValue = new Date();
  public maxYear = new Date().getFullYear();
  public selectionOptionsLancamentoPai: ITabelaSecundaria[] = [];
  public selectionOptionsAcao: ITabelaSecundaria[] = [];
  public selectionOptionsElementoDespesa: ITabelaSecundaria[] = [];
  public selectionOptionsFonteRecurso: ITabelaSecundaria[] = [];
  public selectionOptionsGrupoDespesa: ITabelaSecundaria[] = [];
  public selectionOptionsModalidadeAplicacao: ITabelaSecundaria[] = [];
  public selectionOptionsObjetivoEstrategico: ITabelaSecundaria[] = [];
  public selectionOptionsPrograma: ITabelaSecundaria[] = [];
  public selectionOptionsSolicitante: ITabelaSecundaria[] = [];
  public selectionOptionsTipoLancamento: ITabelaSecundaria[] = [];
  public selectionOptionsTipoTransacao: ITabelaSecundaria[] = [];
  public selectionOptionsUnidade: ITabelaSecundaria[] = [];
  public selectionOptionsUnidadeOrcamentaria: ITabelaSecundaria[] = [];
  public selectionOptionsLancamentoInvalido = [
    { label: 'Sim', value: 1 },
    { label: 'Não', value: 0 },
  ];

  constructor(
    public utils: SelectOptionsUtilsService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private formBuilder: LancamentoFormBuilder
  ) {
    utils.listarLancamentoPai().subscribe((res) => {
      this.selectionOptionsLancamentoPai = res;
    });

    utils.listarAcao().subscribe((res) => {
      this.selectionOptionsAcao = res;
    });
    utils.listarElementoDespesa().subscribe((res) => {
      this.selectionOptionsElementoDespesa = res;
    });
    utils.listarFonteRecurso().subscribe((res) => {
      this.selectionOptionsFonteRecurso = res;
    });
    utils.listarGrupoDespesa().subscribe((res) => {
      this.selectionOptionsGrupoDespesa = res;
    });
    utils.listarModalidadeAplicacao().subscribe((res) => {
      this.selectionOptionsModalidadeAplicacao = res;
    });
    utils.listarObjetivoEstrategico().subscribe((res) => {
      this.selectionOptionsObjetivoEstrategico = res;
    });
    utils.listarPrograma().subscribe((res) => {
      this.selectionOptionsPrograma = res;
    });
    utils.listarSolicitante().subscribe((res) => {
      this.selectionOptionsSolicitante = res;
    });
    utils.listarTipoLancamento().subscribe((res) => {
      this.selectionOptionsTipoLancamento = res;
    });
    utils.listarTipoTransacao().subscribe((res) => {
      this.selectionOptionsTipoTransacao = res;
    });
    utils.listarUnidade().subscribe((res) => {
      this.selectionOptionsUnidade = res;
    });
    utils.listarUnidadeOrcamentaria().subscribe((res) => {
      this.selectionOptionsUnidadeOrcamentaria = res;
    });
  }

  ngOnInit(): void {}

  public onSubmit() {
    if (this.form?.valid) {
      const lancamentoForm = this.formBuilder.parseFormToModel(
        this.form,
        this.edit
      );

      this.emitSubmit.emit(lancamentoForm);
    } else {
      if (this.form) {
        this.highlightInvalidFields(this.form);
      }
    }
  }

  public handleBack() {
    this.router.navigateByUrl('/lancamento');

    // this.confirmationService.confirm({
    //   message: `Você tem certeza que deseja deletar o lançamento:
    //     ""?`,
    //   header: 'Confirmar exclusão',
    //   icon: 'pi pi-exclamation-triangle',
    //   acceptLabel: 'Sim',
    //   rejectLabel: 'Não',
    //   acceptButtonStyleClass: 'p-button-success',
    //   rejectButtonStyleClass: 'p-button-danger',
    //   accept: () => {
    //     console.log('accept');
    //   },
    // });
  }

  private highlightInvalidFields(form: FormGroup) {
    const invalidControls = Object.keys(form.controls).filter(
      (controlName) => form?.get(controlName)?.invalid
    );

    invalidControls.forEach((controlName) => {
      form?.get(controlName)?.markAsTouched();
    });
  }
}
