export interface Alternative {
  letra: 'A' | 'B' | 'C' | 'D' | 'E';
  texto: string;
  correta: boolean;
  explicacao: string;
}

export interface Question {
  id: string;
  pergunta: string;
  alternativas: Alternative[];
  resposta_correta: 'A' | 'B' | 'C' | 'D' | 'E';
  tema: string;
  subtema: string;
  tags: string[];
}

export interface QuestionBank {
  version: string;
  created_at: string;
  updated_at: string;
  questoes: Question[];
}
