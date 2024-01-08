export interface ISecundarioForm {
  id: string;
  nome: string;
  codigo?: number;
  dataCadastro: string;
  dataAlteracao: string;
}

export type TabelaSecundaria =
  | 'acao'
  | 'elementoDespesa'
  | 'fonteRecursos'
  | 'grupoDespesas'
  | 'modalidadeAplicacoes'
  | 'objetivoEstrategico'
  | 'programa'
  | 'solicitante'
  | 'tipoLancamento'
  | 'tipoTransacoes'
  | 'unidade'
  | 'unidadeOrcamentaria';

export interface ISecundarioDTO {
  nome: string;
  codigo?: number;
}

export const temCodigo: Record<TabelaSecundaria, boolean> = {
  acao: true,
  elementoDespesa: true,
  fonteRecursos: true,
  grupoDespesas: true,
  modalidadeAplicacoes: true,
  objetivoEstrategico: false,
  programa: true,
  solicitante: false,
  tipoLancamento: false,
  tipoTransacoes: false,
  unidade: false,
  unidadeOrcamentaria: true,
};
