export interface ILancamento {
  id: number;
  lancamentoInvalido: number;
  numeroLancamento: number;
  idTipoLancamento: number;
  dataLancamento: string;
  idLancamentoPai: number;
  idUnidade: number;
  descricao: string;
  idUnidadeOrcamentaria: number;
  idPrograma: number;
  idAcao: number;
  idFonteRecurso: number;
  idGrupoDespesa: number;
  idModalidadeAplicacao: number;
  idElementoDespesa: number;
  idSolicitante: number;
  ged: string;
  contratado: string;
  idObjetivoEstrategico: number;
  valor: number;
  idTipoTransacao: number;
  dataCadastro: string;
  dataAlteracao: string;
  anoOrcamento: number;
}
