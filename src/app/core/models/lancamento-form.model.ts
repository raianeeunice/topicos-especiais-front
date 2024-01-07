export interface ILancamentoForm {
  lancamentoInvalido: string;
  numeroLancamento: string;
  idTipoLancamento: string;
  dataLancamento: string;
  idLancamentoPai: string;
  idUnidade: string;
  descricao: string;
  idUnidadeOrcamentaria: string;
  idPrograma: string;
  idAcao: string;
  idFonteRecurso: string;
  idGrupoDespesa: string;
  idModalidadeAplicacao: string;
  idElementoDespesa: string;
  idSolicitante: string;
  ged: string;
  contratado: string;
  idObjetivoEstrategico: string;
  valor: string;
  idTipoTransacao: string;
  anoOrcamento: string;
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
