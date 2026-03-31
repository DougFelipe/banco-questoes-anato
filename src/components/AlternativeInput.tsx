import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Alternative } from '../types';

interface AlternativeInputProps {
  alternatives: Alternative[];
  onChange: (alternatives: Alternative[]) => void;
  showValidationErrors: boolean;
}

export default function AlternativeInput({
  alternatives,
  onChange,
  showValidationErrors,
}: AlternativeInputProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleTextChange = (index: number, texto: string) => {
    const updated = alternatives.map((alt, i) => (i === index ? { ...alt, texto } : alt));
    onChange(updated);
  };

  const handleExplicacaoChange = (index: number, explicacao: string) => {
    const updated = alternatives.map((alt, i) => (i === index ? { ...alt, explicacao } : alt));
    onChange(updated);
  };

  const handleCorrectChange = (index: number) => {
    const updated = alternatives.map((alt, i) => ({
      ...alt,
      correta: i === index,
    }));
    onChange(updated);
  };

  const hasCorrectAlternative = alternatives.some((alt) => alt.correta);
  const isCorrectInvalid = showValidationErrors && !hasCorrectAlternative;

  return (
    <div className="space-y-3">
      <label className={`block text-sm font-medium ${isCorrectInvalid ? 'text-red-700' : 'text-gray-700'}`}>
        Alternativas *
      </label>
      <p className={`text-xs ${isCorrectInvalid ? 'text-red-600' : 'text-gray-500'}`}>
        Selecione a alternativa correta e preencha texto e explicacao de todas as alternativas.
      </p>

      {alternatives.map((alt, index) => {
        const isTextoInvalid = showValidationErrors && !alt.texto.trim();
        const isExplicacaoInvalid = showValidationErrors && !alt.explicacao.trim();
        const hasAnyInvalid = isTextoInvalid || isExplicacaoInvalid;

        return (
          <div
            key={alt.letra}
            className={`border rounded-md ${hasAnyInvalid ? 'border-red-300 bg-red-50/30' : 'border-gray-200'}`}
          >
            <div className="flex items-start gap-3 p-3 bg-gray-50">
              <input
                type="radio"
                name="correct-alternative"
                checked={alt.correta}
                onChange={() => handleCorrectChange(index)}
                className={`mt-2 h-4 w-4 ${isCorrectInvalid ? 'text-red-600 focus:ring-red-500' : 'text-blue-600 focus:ring-blue-500'}`}
              />

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-sm text-gray-700">{alt.letra}</span>
                  {alt.correta && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Correta</span>
                  )}
                  {hasAnyInvalid && (
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Obrigatorio</span>
                  )}
                </div>

                <input
                  type="text"
                  value={alt.texto}
                  onChange={(e) => handleTextChange(index, e.target.value)}
                  placeholder={`Texto da alternativa ${alt.letra}`}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-sm ${
                    isTextoInvalid
                      ? 'border-red-500 bg-red-50 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-blue-500'
                  }`}
                />
              </div>

              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="mt-2 p-1 hover:bg-gray-200 rounded transition-colors"
                type="button"
              >
                <ChevronDown
                  size={18}
                  className={`text-gray-600 transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {expandedIndex === index && (
              <div className="p-3 border-t border-gray-200 bg-white">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isExplicacaoInvalid ? 'text-red-700' : 'text-gray-700'
                  }`}
                >
                  Explicacao desta alternativa *
                </label>
                <textarea
                  value={alt.explicacao}
                  onChange={(e) => handleExplicacaoChange(index, e.target.value)}
                  placeholder={`Explique por que a alternativa ${alt.letra} esta ${alt.correta ? 'correta' : 'incorreta'}.`}
                  rows={3}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-sm ${
                    isExplicacaoInvalid
                      ? 'border-red-500 bg-red-50 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-blue-500'
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
