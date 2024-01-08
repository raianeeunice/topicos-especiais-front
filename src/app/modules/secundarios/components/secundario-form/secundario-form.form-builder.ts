import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ISecundarioDTO } from 'src/app/core/models/secundario-form.model';

@Injectable()
export class SecundarioFormBuilder {
  constructor(private formBuilder: FormBuilder) {}

  build(temCodigo: boolean, model?: ISecundarioDTO): FormGroup {
    if (temCodigo) {
      return this.formBuilder.group({
        nome: this.formBuilder.control(model?.nome || null, [
          Validators.required,
        ]),
        codigo: this.formBuilder.control(model?.codigo || null, [
          Validators.required,
        ]),
      });
    }

    return this.formBuilder.group({
      nome: this.formBuilder.control(model?.nome || null, [
        Validators.required,
      ]),
    });
  }
}
