import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

const RetryPage = ({ questionData, questionNumber, totalQuestions, onAnswer, score, name, selectedAnswer, isAnswered }) => {
    const { question, options, value } = questionData;
    return (
        <PageWrapper>
            <div className="w-full max-w-2xl">
                <div className="bg-red-900/50 rounded-lg p-4 mb-4 text-center text-white">
                    <RefreshCw className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                    <h2 className="text-2xl font-bold">Segunda Chance!</h2>
                    <p>Responda corretamente para recuperar o valor.</p>
                    <p className="font-bold mt-2">Pergunta {questionNumber} de {totalQuestions}</p>
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
                        }
                        return (
                            <Button key={index} onClick={() => onAnswer(index)} disabled={isAnswered} className={`w-full justify-start h-auto py-3 text-left ${buttonClass} rounded-lg shadow-md`}>
                                <div className="flex items-center">
                                    <div className="bg-yellow-400 text-red-800 font-bold rounded-md w-8 h-8 flex items-center justify-center mr-3">{String.fromCharCode(65 + index)}</div>
                                    <span className="font-semibold">{option}</span>
                                </div>
                            </Button>
                        );
                    })}
                </div>
                <div className="bg-red-900/50 rounded-lg p-3 text-center text-white shadow-inner">
                    <p>💎 Valor desta pergunta:</p>
                    <p className="font-bold text-yellow-400 text-lg">{new Intl.NumberFormat('pt-AO').format(value)} Kz</p>
                </div>
            </div>
        </PageWrapper>
    );
};

export default RetryPage;