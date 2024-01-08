import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ILancamentoForm } from 'src/app/core/models/lancamento-form.model';

@Injectable()
export class LancamentoFormBuilder {
  constructor(private formBuilder: FormBuilder) {}

  build(model?: ILancamentoForm): FormGroup {
    return this.formBuilder.group({
      lancamentoInvalido: this.formBuilder.control(
        model?.lancamentoInvalido || null,
        [Validators.required]
      ),
      numeroLancamento: this.formBuilder.control(
        model?.numeroLancamento || null,
        [Validators.required]
      ),
      idTipoLancamento: this.formBuilder.control(
        model?.idTipoLancamento || null,
        [Validators.required]
      ),
      dataLancamento: this.formBuilder.control(model?.dataLancamento || null, [
        Validators.required,
      ]),
      idLancamentoPai: this.formBuilder.control(
        model?.idLancamentoPai || null,
        [Validators.required]
      ),
      idUnidade: this.formBuilder.control(model?.idUnidade || null, [
        Validators.required,
      ]),
      descricao: this.formBuilder.control(model?.descricao || null, [
        Validators.required,
      ]),
      idUnidadeOrcamentaria: this.formBuilder.control(
        model?.idUnidadeOrcamentaria || null,
        [Validators.required]
      ),
      idPrograma: this.formBuilder.control(model?.idPrograma || null, [
        Validators.required,
      ]),
      idAcao: this.formBuilder.control(model?.idAcao || null, [
        Validators.required,
      ]),
      idFonteRecurso: this.formBuilder.control(model?.idFonteRecurso || null, [
        Validators.required,
      ]),
      idGrupoDespesa: this.formBuilder.control(model?.idGrupoDespesa || null, [
        Validators.required,
      ]),
      idModalidadeAplicacao: this.formBuilder.control(
        model?.idModalidadeAplicacao || null,
        [Validators.required]
      ),
      idElementoDespesa: this.formBuilder.control(
        model?.idElementoDespesa || null,
        [Validators.required]
      ),
      idSolicitante: this.formBuilder.control(model?.idSolicitante || null, [
        Validators.required,
      ]),
      ged: this.formBuilder.control(model?.ged || null, [Validators.required]),
      contratado: this.formBuilder.control(model?.contratado || null, [
        Validators.required,
      ]),
      idObjetivoEstrategico: this.formBuilder.control(
        model?.idObjetivoEstrategico || null,
        [Validators.required]
      ),
      valor: this.formBuilder.control(model?.valor || null, [
        Validators.required,
      ]),
      idTipoTransacao: this.formBuilder.control(
        model?.idTipoTransacao || null,
        [Validators.required]
      ),
      anoOrcamento: this.formBuilder.control(model?.anoOrcamento || null, [
        Validators.required,
      ]),
    });
  }
}
