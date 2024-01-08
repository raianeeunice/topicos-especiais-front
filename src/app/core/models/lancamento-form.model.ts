export interface ILancamentoForm {
  anoOrcamento: string;
  contratado: string;
  dataLancamento: string;
  descricao: string;
  ged: string;
  idAcao: string;
  idElementoDespesa: string;
  idFonteRecurso: string;
  idGrupoDespesa: string;
  idLancamentoPai: string;
  idModalidadeAplicacao: string;
  idObjetivoEstrategico: string;
  idPrograma: string;
  idSolicitante: string;
  idTipoLancamento: string;
  idTipoTransacao: string;
  idUnidade: string;
  idUnidadeOrcamentaria: string;
  lancamentoInvalido: string;
  numeroLancamento: string;
  valor: string;
}

export interface ILancamentoDTO {
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
