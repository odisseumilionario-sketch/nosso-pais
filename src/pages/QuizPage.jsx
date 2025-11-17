import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
const QuizPage = ({
  questionData,
  questionNumber,
  totalQuestions,
  onAnswer,
  score,
  name,
  selectedAnswer,
  isAnswered
}) => {
  const progress = questionNumber / totalQuestions * 100;
  const {
    question,
    options,
    value
  } = questionData;
  return <PageWrapper>
            <div className="w-full max-w-2xl">
                <div className="bg-red-900/50 rounded-lg p-2 px-4 mb-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img class="w-8 h-8 rounded-full" alt="User avatar" src="https://horizons-cdn.hostinger.com/43619163-4fd6-4960-ba57-04c4420f1730/chatgpt-image-16_11_2025-02_48_30-IFH6P.png" />
                        <span className="text-white font-bold">{name}</span>
                    </div>
                    <div className="text-right">
                        <p className="text-white font-bold">Pergunta {questionNumber}/{totalQuestions}</p>
                        <div className="w-24 bg-gray-600 rounded-full h-2.5 mt-1">
                            <div className="bg-yellow-400 h-2.5 rounded-full" style={{
              width: `${progress}%`
            }}></div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center text-gray-800 font-bold text-xl mb-4 shadow-lg">{question}</div>
                <div className="bg-yellow-400 rounded-lg p-4 text-center mb-4 shadow-lg">
                    <p className="text-red-800 text-sm font-bold">💰 TOTAL ACUMULADO 💰</p>
                    <p className="text-red-800 text-4xl font-extrabold">{new Intl.NumberFormat('pt-AO').format(score)} Kz</p>
                </div>
                <div className="space-y-3 mb-4">
                    {options.map((option, index) => {
          const isCorrect = index === questionData.correct;
          let buttonClass = "bg-white text-gray-800";
          if (isAnswered && selectedAnswer === index) {
            buttonClass = isCorrect ? "bg-green-500 text-white" : "bg-red-700 text-white";
          } else if (isAnswered && isCorrect) {
            buttonClass = "bg-green-500 text-white";
          }
          return <Button key={index} onClick={() => onAnswer(index)} disabled={isAnswered} className={`w-full justify-start h-auto py-3 text-left ${buttonClass} rounded-lg shadow-md`}>
                                <div className="flex items-center">
                                    <div className="bg-yellow-400 text-red-800 font-bold rounded-md w-8 h-8 flex items-center justify-center mr-3">{String.fromCharCode(65 + index)}</div>
                                    <span className="font-semibold">{option}</span>
                                </div>
                            </Button>;
        })}
                </div>
                <div className="bg-red-900/50 rounded-lg p-3 text-center text-white shadow-inner">
                    <p>💎 Valor desta pergunta:</p>
                    <p className="font-bold text-yellow-400 text-lg">{new Intl.NumberFormat('pt-AO').format(value)} Kz</p>
                </div>
            </div>
        </PageWrapper>;
};
export default QuizPage;