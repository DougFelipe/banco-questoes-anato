import { Question, Alternative } from '../types';
import { generateId } from './idGenerator';

export function createEmptyQuestion(): Question {
  const alternatives: Alternative[] = [
    { letra: 'A', texto: '', correta: false, explicacao: '' },
    { letra: 'B', texto: '', correta: false, explicacao: '' },
    { letra: 'C', texto: '', correta: false, explicacao: '' },
    { letra: 'D', texto: '', correta: false, explicacao: '' },
    { letra: 'E', texto: '', correta: false, explicacao: '' },
  ];

  return {
    id: generateId(),
    pergunta: '',
    alternativas: alternatives,
    resposta_correta: 'A',
    tema: '',
    subtema: '',
    tags: [],
  };
}
