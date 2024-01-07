import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ILancamentoForm } from 'src/app/core/models/lancamento-form.model';

@Injectable()
export class LancamentoFormBuilder {
  constructor(private formBuilder: FormBuilder) {}

  build(model?: ILancamentoForm): FormGroup {
    return this.formBuilder.group({
      lancamentoInvalido: this.formBuilder.control(
        model?.lancamentoInvalido || '',
        [Validators.required]
      ),
      numeroLancamento: this.formBuilder.control(
        model?.numeroLancamento || null,
        [Validators.required]
      ),
      idTipoLancamento: this.formBuilder.control(model?.idTipoLancamento || ''),
      dataLancamento: this.formBuilder.control(model?.dataLancamento || 1, [
        Validators.required,
      ]),
      idLancamentoPai: this.formBuilder.control(model?.idLancamentoPai || '', [
        Validators.required,
      ]),
      idUnidade: this.formBuilder.control(model?.idUnidade || null),
      descricao: this.formBuilder.control(model?.descricao || ''),
      idUnidadeOrcamentaria: this.formBuilder.control(
        model?.idUnidadeOrcamentaria || ''
      ),
      idPrograma: this.formBuilder.control(model?.idPrograma || null),
      idAcao: this.formBuilder.control(model?.idAcao || '', [
        Validators.required,
      ]),
      idFonteRecurso: this.formBuilder.control(model?.idFonteRecurso || '', [
        Validators.required,
      ]),
      idGrupoDespesa: this.formBuilder.control(model?.idGrupoDespesa || '', [
        Validators.required,
      ]),
      idModalidadeAplicacao: this.formBuilder.control(
        model?.idModalidadeAplicacao || '',
        [Validators.required]
      ),
      idElementoDespesa: this.formBuilder.control(
        model?.idElementoDespesa || '',
        [Validators.required]
      ),
      idSolicitante: this.formBuilder.control(model?.idSolicitante || '', [
        Validators.required,
      ]),
      ged: this.formBuilder.control(model?.ged || '', [Validators.required]),
      contratado: this.formBuilder.control(model?.contratado || '', [
        Validators.required,
      ]),
      idObjetivoEstrategico: this.formBuilder.control(
        model?.idObjetivoEstrategico || '',
        [Validators.required]
      ),
      valor: this.formBuilder.control(model?.valor || '', [
        Validators.required,
      ]),
      idTipoTransacao: this.formBuilder.control(model?.idTipoTransacao || '', [
        Validators.required,
      ]),
      anoOrcamento: this.formBuilder.control(model?.anoOrcamento || '', [
        Validators.required,
      ]),
    });
  }
}
