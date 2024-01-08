import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

export interface ITabelaSecundaria {
  codigo: number;
  dataAlteracao: string;
  dataCadastro: string;
  id: number;
  nome: string;
}

@Injectable()
export class SelectOptionsUtilsService {
  private readonly baseUrl = `${environment.baseURL}`;

  constructor(private httpClient: HttpClient) {}

  private listarTabela(tabela: string) {
    const url = `${this.baseUrl}/${tabela}`;
    return this.httpClient.get<ITabelaSecundaria[]>(url);
  }

  listarLancamentoPai() {
    return this.listarTabela('lancamento');
  }

  listarAcao() {
    return this.listarTabela('acao');
  }

  listarElementoDespesa() {
    return this.listarTabela('elementoDespesa');
  }

  listarFonteRecurso() {
    return this.listarTabela('fonteRecursos');
  }

  listarGrupoDespesa() {
    return this.listarTabela('grupoDespesas');
  }

  listarModalidadeAplicacao() {
    return this.listarTabela('modalidadeAplicacoes');
  }

  listarObjetivoEstrategico() {
    return this.listarTabela('objetivoEstrategico');
  }

  listarPrograma() {
    return this.listarTabela('programa');
  }

  listarSolicitante() {
    return this.listarTabela('solicitante');
  }

  listarTipoLancamento() {
    return this.listarTabela('tipoLancamento');
  }

  listarTipoTransacao() {
    return this.listarTabela('tipoTransacoes');
  }

  listarUnidade() {
    return this.listarTabela('unidade');
  }

  listarUnidadeOrcamentaria() {
    return this.listarTabela('unidadeOrcamentaria');
  }
}
