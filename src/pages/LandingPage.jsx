import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import Countdown from '@/components/Countdown';
import { Button } from '@/components/ui/button';

const LandingPage = ({ onStart }) => (
    <PageWrapper>
        <div className="w-full max-w-2xl text-center">
            <Countdown />
            <div className="bg-red-800/50 rounded-2xl p-8 shadow-inner">
                <p className="text-yellow-400 font-bold text-sm mb-2">PROMOÇÃO ESPECIAL DE NOVEMBRO</p>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Você Quer Ganhar Dinheiro Respondendo Perguntas Sobre Angola?</h1>
                <p className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">Ganhe até 165.000 Kz</p>
                <div className="bg-red-900/50 rounded-lg p-3 mb-4">
                    <p className="text-white">Antes era <span className="line-through">70.000 Kz</span></p>
                    <p className="text-white font-bold">Agora é 165.000 Kz!</p>
                </div>
                <p className="text-white/90 mb-6">Neste mês de Novembro estamos a disponibilizar esses valores para ajudar nas compras das épocas festivas. Aproveite e comece agora!</p>
                <Button onClick={onStart} className="w-full md:w-auto bg-yellow-400 text-red-800 font-bold text-xl px-12 py-6 rounded-lg shadow-lg hover:bg-yellow-500 transition-transform hover:scale-105">Começar Agora</Button>
            </div>
        </div>
    </PageWrapper>
);

export default LandingPage;