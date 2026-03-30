import { Alternative, Question, QuestionBank } from '../types';

type QuestionBankInput = {
  version?: unknown;
  created_at?: unknown;
  updated_at?: unknown;
  questoes?: unknown;
};

type QuestionInput = {
  id?: unknown;
  pergunta?: unknown;
  alternativas?: unknown;
  resposta_correta?: unknown;
  tema?: unknown;
  subtema?: unknown;
  tags?: unknown;
};

type AlternativeInput = {
  letra?: unknown;
  texto?: unknown;
  correta?: unknown;
  explicacao?: unknown;
};

function normalizeAlternative(alternative: AlternativeInput): Alternative {
  return {
    letra: alternative.letra as Alternative['letra'],
    texto: alternative.texto as string,
    correta: alternative.correta as boolean,
    explicacao: alternative.explicacao as string,
  };
}

function normalizeQuestion(question: QuestionInput): Question {
  return {
    id: question.id as string,
    pergunta: question.pergunta as string,
    alternativas: (question.alternativas as AlternativeInput[]).map(normalizeAlternative),
    resposta_correta: question.resposta_correta as Question['resposta_correta'],
    tema: question.tema as string,
    subtema: question.subtema as string,
    tags: [...(question.tags as string[])],
  };
}

export function exportQuestionBank(questions: Question[], createdAt: string): string {
  const questionBank: QuestionBank = {
    version: 'v1',
    created_at: createdAt,
    updated_at: new Date().toISOString(),
    questoes: questions.map((question) => normalizeQuestion(question)),
  };

  return JSON.stringify(questionBank, null, 2);
}

export function validateQuestionBank(data: unknown): data is QuestionBank {
  if (!data || typeof data !== 'object') return false;

  const bank = data as QuestionBankInput;

  if (bank.version !== 'v1') return false;
  if (!bank.created_at || typeof bank.created_at !== 'string') return false;
  if (!bank.updated_at || typeof bank.updated_at !== 'string') return false;
  if (!Array.isArray(bank.questoes)) return false;

  return bank.questoes.every(validateQuestion);
}

function validateQuestion(q: unknown): q is QuestionInput {
  if (!q || typeof q !== 'object') return false;

  const question = q as QuestionInput;

  if (!question.id || typeof question.id !== 'string') return false;
  if (!question.pergunta || typeof question.pergunta !== 'string') return false;
  if (!question.tema || typeof question.tema !== 'string') return false;
  if (!question.subtema || typeof question.subtema !== 'string') return false;
  if (!Array.isArray(question.tags) || !question.tags.every((tag) => typeof tag === 'string')) return false;
  if (!['A', 'B', 'C', 'D', 'E'].includes(question.resposta_correta as string)) return false;

  if (!Array.isArray(question.alternativas) || question.alternativas.length !== 5) {
    return false;
  }

  const alternatives = question.alternativas as AlternativeInput[];
  if (!alternatives.every((alt) =>
    ['A', 'B', 'C', 'D', 'E'].includes(alt.letra as string) &&
    typeof alt.texto === 'string' &&
    typeof alt.correta === 'boolean' &&
    typeof alt.explicacao === 'string'
  )) {
    return false;
  }

  const letters = alternatives.map((a) => a.letra);
  if (!letters.includes('A') || !letters.includes('B') || !letters.includes('C') ||
      !letters.includes('D') || !letters.includes('E')) {
    return false;
  }

  const correctCount = alternatives.filter((a) => a.correta === true).length;
  if (correctCount !== 1) return false;

  return true;
}

export function importQuestionBank(jsonString: string): QuestionBank | null {
  try {
    const data = JSON.parse(jsonString);
    if (!validateQuestionBank(data)) return null;

    return {
      version: 'v1',
      created_at: data.created_at,
      updated_at: data.updated_at,
      questoes: data.questoes.map((question) => normalizeQuestion(question)),
    };
  } catch {
    return null;
  }
}
