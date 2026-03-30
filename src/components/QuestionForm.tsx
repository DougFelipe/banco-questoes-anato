import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Question } from '../types';
import AlternativeInput from './AlternativeInput';

interface QuestionFormProps {
  question: Question;
  onChange: (question: Question) => void;
  onRemove: () => void;
  index: number;
}

export default function QuestionForm({ question, onChange, onRemove, index }: QuestionFormProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleFieldChange = (field: 'pergunta' | 'tema' | 'subtema', value: string) => {
    onChange({ ...question, [field]: value });
  };

  const handleTagsChange = (value: string) => {
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    onChange({ ...question, tags });
  };

  const handleAlternativesChange = (alternatives: typeof question.alternativas) => {
    const correctAlternative = alternatives.find(alt => alt.correta);
    onChange({
      ...question,
      alternativas: alternatives,
      resposta_correta: correctAlternative?.letra || 'A',
    });
  };

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
          <h3 className="text-lg font-semibold text-gray-800">
            Questão {index + 1}
          </h3>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pergunta *
            </label>
            <textarea
              value={question.pergunta}
              onChange={(e) => handleFieldChange('pergunta', e.target.value)}
              placeholder="Digite a pergunta..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          <AlternativeInput
            alternatives={question.alternativas}
            onChange={handleAlternativesChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tema *
              </label>
              <input
                type="text"
                value={question.tema}
                onChange={(e) => handleFieldChange('tema', e.target.value)}
                placeholder="Ex: Sistema Muscular"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subtema *
              </label>
              <input
                type="text"
                value={question.subtema}
                onChange={(e) => handleFieldChange('subtema', e.target.value)}
                placeholder="Ex: Composição do sistema muscular"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags *
            </label>
            <input
              type="text"
              value={question.tags.join(', ')}
              onChange={(e) => handleTagsChange(e.target.value)}
              placeholder="Ex: nervo, tendão, contração"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">Separe as tags por vírgula</p>
          </div>
        </div>
      )}
    </div>
  );
}
