import { useReducer, useRef } from 'react';
import { FileDown, FileUp, Plus } from 'lucide-react';
import { Question } from './types';
import QuestionForm from './components/QuestionForm';
import { createEmptyQuestion } from './utils/questionFactory';
import { exportQuestionBank, importQuestionBank } from './utils/jsonUtils';

interface State {
  questions: Question[];
  createdAt: string;
}

type Action =
  | { type: 'ADD_QUESTION' }
  | { type: 'REMOVE_QUESTION'; index: number }
  | { type: 'UPDATE_QUESTION'; index: number; question: Question }
  | { type: 'IMPORT_QUESTIONS'; questions: Question[]; createdAt: string }
  | { type: 'MOVE_QUESTION'; fromIndex: number; toIndex: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_QUESTION':
      return { ...state, questions: [...state.questions, createEmptyQuestion()] };
    case 'REMOVE_QUESTION':
      return {
        ...state,
        questions: state.questions.filter((_, i) => i !== action.index),
      };
    case 'UPDATE_QUESTION':
      return {
        ...state,
        questions: state.questions.map((q, i) =>
          i === action.index ? action.question : q
        ),
      };
    case 'IMPORT_QUESTIONS':
      return { questions: action.questions, createdAt: action.createdAt };
    case 'MOVE_QUESTION': {
      const questions = [...state.questions];
      const [moved] = questions.splice(action.fromIndex, 1);
      questions.splice(action.toIndex, 0, moved);
      return { ...state, questions };
    }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    questions: [],
    createdAt: new Date().toISOString(),
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddQuestion = () => {
    dispatch({ type: 'ADD_QUESTION' });
  };

  const handleRemoveQuestion = (index: number) => {
    dispatch({ type: 'REMOVE_QUESTION', index });
  };

  const handleUpdateQuestion = (index: number, question: Question) => {
    dispatch({ type: 'UPDATE_QUESTION', index, question });
  };

  const validateQuestion = (q: Question): boolean => {
    if (!q.pergunta.trim()) return false;
    if (!q.tema.trim()) return false;
    if (!q.subtema.trim()) return false;
    if (q.tags.length === 0) return false;
    if (!q.alternativas.every(alt => alt.texto.trim())) return false;
    if (!q.alternativas.some(alt => alt.correta)) return false;
    return true;
  };

  const handleExport = () => {
    const invalidQuestions = state.questions.filter(q => !validateQuestion(q));

    if (invalidQuestions.length > 0) {
      alert('Por favor, preencha todos os campos obrigatórios em todas as questões antes de exportar.');
      return;
    }

    if (state.questions.length === 0) {
      alert('Adicione pelo menos uma questão antes de exportar.');
      return;
    }

    const json = exportQuestionBank(state.questions, state.createdAt);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `banco-questoes-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const questionBank = importQuestionBank(content);

      if (questionBank) {
        dispatch({
          type: 'IMPORT_QUESTIONS',
          questions: questionBank.questoes,
          createdAt: questionBank.created_at,
        });
      } else {
        alert('Arquivo JSON inválido. Verifique o formato e tente novamente.');
      }
    };
    reader.readAsText(file);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Editor de Banco de Questões
            </h1>
            <div className="flex gap-3">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <FileUp size={18} />
                Importar Banco de Questões
              </button>
              <button
                onClick={handleExport}
                disabled={state.questions.length === 0}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FileDown size={18} />
                Download banco de questões
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <button
            onClick={handleAddQuestion}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
          >
            <Plus size={18} />
            Adicionar Questão
          </button>
        </div>

        {state.questions.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-4">
              Nenhuma questão adicionada ainda
            </p>
            <p className="text-gray-400 text-sm">
              Clique em "Adicionar Questão" para começar ou importe um JSON existente
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {state.questions.map((question, index) => (
              <QuestionForm
                key={question.id}
                question={question}
                onChange={(q) => handleUpdateQuestion(index, q)}
                onRemove={() => handleRemoveQuestion(index)}
                index={index}
              />
            ))}
          </div>
        )}
      </main>

      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleImport}
        className="hidden"
      />
    </div>
  );
}

export default App;
