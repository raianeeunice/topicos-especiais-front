import { Component, OnInit } from '@angular/core';
import { LancamentoFormBuilder } from './lancamento.form-builder';
import { Form, FormGroup } from '@angular/forms';
import {
  ITabelaSecundaria,
  SelectOptionsUtilsService,
} from 'src/app/core/services/utils/select-options.utils.service';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.scss'],
  providers: [LancamentoFormBuilder, SelectOptionsUtilsService],
})
export class LancamentoFormComponent implements OnInit {
  public formGroup: FormGroup | null = null;
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
    { label: 'Sim', value: true },
    { label: 'Não', value: false },
  ];

  constructor(
    private formBuilder: LancamentoFormBuilder,
    public utils: SelectOptionsUtilsService
  ) {
    this.formGroup = this.formBuilder.build();

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
    if(this.formGroup?.invalid) {
      console.log('form invalido');
      return;
    }
    console.log(this.formGroup?.value);
  }

  public handleBack() {}
}
