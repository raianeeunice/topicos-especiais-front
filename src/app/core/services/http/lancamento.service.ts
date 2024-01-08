import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILancamento } from '../../models/lancamento-form.model';
import { Observable } from 'rxjs';

@Injectable()
export class LancamentoService {
  private readonly url = `${environment.baseURL}/lancamento`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ILancamento[]> {
    return this.http.get<ILancamento[]>(this.url);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getOne(id: number): Observable<ILancamento> {
    return this.http.get<ILancamento>(`${this.url}/${id}`);
  }

  post(lancamento: ILancamento) {
    return this.http.post(`${this.url}`, lancamento);
  }

  put(id: number, lancamento: ILancamento) {
    return this.http.put(`${this.url}/${id}`, lancamento);
  }
}
