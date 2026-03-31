import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Question } from '../types';
import AlternativeInput from './AlternativeInput';

interface QuestionFormProps {
  question: Question;
  onChange: (question: Question) => void;
  onRemove: () => void;
  index: number;
  showValidationErrors: boolean;
}

export default function QuestionForm({
  question,
  onChange,
  onRemove,
  index,
  showValidationErrors,
}: QuestionFormProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [tagsInput, setTagsInput] = useState(question.tags.join(', '));

  const handleFieldChange = (field: 'pergunta' | 'tema' | 'subtema', value: string) => {
    onChange({ ...question, [field]: value });
  };

  const handleTagsChange = (value: string) => {
    setTagsInput(value);
    const tags = value
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    onChange({ ...question, tags });
  };

  const handleAlternativesChange = (alternatives: typeof question.alternativas) => {
    const correctAlternative = alternatives.find((alt) => alt.correta);
    onChange({
      ...question,
      alternativas: alternatives,
      resposta_correta: correctAlternative?.letra || 'A',
    });
  };

  const isPerguntaInvalid = showValidationErrors && !question.pergunta.trim();
  const isTemaInvalid = showValidationErrors && !question.tema.trim();
  const isSubtemaInvalid = showValidationErrors && !question.subtema.trim();
  const isTagsInvalid = showValidationErrors && question.tags.length === 0;

  const getInputClasses = (isInvalid: boolean) =>
    `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-sm ${
      isInvalid
        ? 'border-red-500 bg-red-50 focus:ring-red-500'
        : 'border-gray-300 focus:ring-blue-500'
    }`;

  const getLabelClasses = (isInvalid: boolean) =>
    `block text-sm font-medium mb-1 ${isInvalid ? 'text-red-700' : 'text-gray-700'}`;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center p-6 bg-gray-50 border-b border-gray-200">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 flex-1 text-left"
          type="button"
        >
          <ChevronDown
            size={20}
            className={`text-gray-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          />
          <h3 className="text-lg font-semibold text-gray-800">Questao {index + 1}</h3>
        </button>
        <button
          onClick={onRemove}
          className="text-red-600 hover:text-red-800 text-sm font-medium"
          type="button"
        >
          Remover
        </button>
      </div>

      {isExpanded && (
        <div className="p-6 space-y-4">
          <div>
            <label className={getLabelClasses(isPerguntaInvalid)}>Pergunta *</label>
            <textarea
              value={question.pergunta}
              onChange={(e) => handleFieldChange('pergunta', e.target.value)}
              placeholder="Digite a pergunta..."
              rows={3}
              className={getInputClasses(isPerguntaInvalid)}
            />
          </div>

          <AlternativeInput
            alternatives={question.alternativas}
            onChange={handleAlternativesChange}
            showValidationErrors={showValidationErrors}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={getLabelClasses(isTemaInvalid)}>Tema *</label>
              <input
                type="text"
                value={question.tema}
                onChange={(e) => handleFieldChange('tema', e.target.value)}
                placeholder="Ex: Sistema Muscular"
                className={getInputClasses(isTemaInvalid)}
              />
            </div>

            <div>
              <label className={getLabelClasses(isSubtemaInvalid)}>Subtema *</label>
              <input
                type="text"
                value={question.subtema}
                onChange={(e) => handleFieldChange('subtema', e.target.value)}
                placeholder="Ex: Composicao do sistema muscular"
                className={getInputClasses(isSubtemaInvalid)}
              />
            </div>
          </div>

          <div>
            <label className={getLabelClasses(isTagsInvalid)}>Tags *</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => handleTagsChange(e.target.value)}
              placeholder="Ex: nervo, tendao, contracao"
              className={getInputClasses(isTagsInvalid)}
            />
            <p className="text-xs text-gray-500 mt-1">Separe as tags por virgula</p>
          </div>
        </div>
      )}
    </div>
  );
}
