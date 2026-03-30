import { useState } from 'react';
import { Alternative } from '../types';
import { ChevronDown } from 'lucide-react';

interface AlternativeInputProps {
  alternatives: Alternative[];
  onChange: (alternatives: Alternative[]) => void;
}

export default function AlternativeInput({ alternatives, onChange }: AlternativeInputProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleTextChange = (index: number, texto: string) => {
    const updated = alternatives.map((alt, i) =>
      i === index ? { ...alt, texto } : alt
    );
    onChange(updated);
  };

  const handleExplicacaoChange = (index: number, explicacao: string) => {
    const updated = alternatives.map((alt, i) =>
      i === index ? { ...alt, explicacao } : alt
    );
    onChange(updated);
  };

  const handleCorrectChange = (index: number) => {
    const updated = alternatives.map((alt, i) => ({
      ...alt,
      correta: i === index,
    }));
    onChange(updated);
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        Alternativas *
      </label>
      <p className="text-xs text-gray-500">Selecione a alternativa correta e adicione explicações</p>
      {alternatives.map((alt, index) => (
        <div key={alt.letra} className="border border-gray-200 rounded-md">
          <div className="flex items-start gap-3 p-3 bg-gray-50">
            <input
              type="radio"
              name="correct-alternative"
              checked={alt.correta}
              onChange={() => handleCorrectChange(index)}
              className="mt-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-sm text-gray-700">{alt.letra}</span>
                {alt.correta && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                    Correta
                  </span>
                )}
              </div>
              <input
                type="text"
                value={alt.texto}
                onChange={(e) => handleTextChange(index, e.target.value)}
                placeholder={`Texto da alternativa ${alt.letra}`}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="mt-2 p-1 hover:bg-gray-200 rounded transition-colors"
              type="button"
            >
              <ChevronDown
                size={18}
                className={`text-gray-600 transition-transform ${
                  expandedIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
          {expandedIndex === index && (
            <div className="p-3 border-t border-gray-200 bg-white">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Explicação desta alternativa
              </label>
              <textarea
                value={alt.explicacao}
                onChange={(e) => handleExplicacaoChange(index, e.target.value)}
                placeholder={`Por que a alternativa ${alt.letra} é ${alt.correta ? 'correta' : 'incorreta'}?`}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
