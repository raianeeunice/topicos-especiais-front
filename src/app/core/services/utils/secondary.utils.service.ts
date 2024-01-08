import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  ISecundarioDTO,
  ISecundarioForm,
  TabelaSecundaria,
} from '../../models/secundario-form.model';

@Injectable()
export class SecondaryUtilsService {
  private readonly baseUrl = `${environment.baseURL}`;

  constructor(private httpClient: HttpClient) {}

  public criarItem(tabela: TabelaSecundaria, item: ISecundarioDTO) {
    const url = `${this.baseUrl}/${tabela}`;
    return this.httpClient.post<ISecundarioDTO>(url, item);
  }

  public getItens(tabela: TabelaSecundaria) {
    const url = `${this.baseUrl}/${tabela}`;
    return this.httpClient.get<ISecundarioForm[]>(url);
  }

  public getItem(tabela: TabelaSecundaria, id: string) {
    const url = `${this.baseUrl}/${tabela}/${id}`;
    return this.httpClient.get<ISecundarioForm>(url);
  }

  public editarItem(
    tabela: TabelaSecundaria,
    id: string,
    item: ISecundarioDTO
  ) {
    const url = `${this.baseUrl}/${tabela}/${id}`;
    return this.httpClient.put<ISecundarioDTO>(url, item);
  }

  public deletarItem(tabela: TabelaSecundaria, id: string) {
    const url = `${this.baseUrl}/${tabela}/${id}`;
    return this.httpClient.delete(url);
  }
}
