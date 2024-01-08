import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILancamentoDTO } from '../../models/lancamento-form.model';
import { Observable } from 'rxjs';

@Injectable()
export class LancamentoService {
  private readonly url = `${environment.baseURL}/lancamento`;

  constructor(private http: HttpClient) {}

  getAll() : Observable<ILancamentoDTO[]> {
    return this.http.get<ILancamentoDTO[]>(this.url);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
