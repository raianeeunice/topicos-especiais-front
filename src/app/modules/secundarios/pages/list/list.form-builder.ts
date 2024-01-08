import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { TabelaSecundaria } from 'src/app/core/models/secundario-form.model';

@Injectable()
export class SecundarioListFormBuilder {
  constructor(private formBuilder: FormBuilder) {}

  build(model?: { tabela: TabelaSecundaria }): FormGroup {
    return this.formBuilder.group({
      tabela: this.formBuilder.control(model?.tabela || null, [
        Validators.required,
      ]),
    });
  }
}
