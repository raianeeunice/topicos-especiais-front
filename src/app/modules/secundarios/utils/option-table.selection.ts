export const selectionOptionsSecundario = [
  { label: 'Ação', value: 'acao' },
  { label: 'Elemento Despesa', value: 'elementoDespesa' },
  { label: 'Fonte Recurso', value: 'fonteRecursos' },
  { label: 'Grupo Despesa', value: 'grupoDespesas' },
  { label: 'Modalidade Aplicação', value: 'modalidadeAplicacoes' },
  { label: 'Objetivo Estratégico', value: 'objetivoEstrategico' },
  { label: 'Programa', value: 'programa' },
  { label: 'Solicitante', value: 'solicitante' },
  { label: 'Tipo Lancamento', value: 'tipoLancamento' },
  { label: 'Tipo Transação', value: 'tipoTransacoes' },
  { label: 'Unidade', value: 'unidade' },
  { label: 'Unidade Orçamentaria', value: 'unidadeOrcamentaria' },
];

export const formatTabelaNome = (nome: string): string => {
  const format: { [key: string]: string } = {
    acao: 'Ação',
    elementoDespesa: 'Elemento Despesa',
    fonteRecursos: 'Fonte Recurso',
    grupoDespesas: 'Grupo Despesa',
    modalidadeAplicacoes: 'Modalidade Aplicação',
    objetivoEstrategico: 'Objetivo Estratégico',
    programa: 'Programa',
    solicitante: 'Solicitante',
    tipoLancamento: ' Tipo Lancamento',
    tipoTransacoes: 'Tipo Transação',
    unidade: 'Unidade',
    unidadeOrcamentaria: 'Unidade Orçamentaria',
  };

  return format[nome];
};
