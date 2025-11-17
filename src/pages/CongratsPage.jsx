import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
const CongratsPage = ({
  name,
  onLiberar
}) => <PageWrapper>
        <div className="w-full max-w-md text-center relative">
            <img class="w-24 h-24 mx-auto mb-2" alt="Trophy" src="https://horizons-cdn.hostinger.com/43619163-4fd6-4960-ba57-04c4420f1730/chatgpt-image-16_11_2025-02_40_52-OMqbl.png" />
            <h1 className="text-3xl font-bold text-white mb-2">🎉 Parabéns, {name}!</h1>
            <p className="text-white/90 mb-2">Você provou que conhece verdadeiramente Angola!</p>
            <p className="text-white/90 mb-6">Acertou todas as perguntas com maestria. És um verdadeiro angolano! 🇦🇴</p>
            <div className="bg-white rounded-2xl p-6 shadow-2xl mb-6">
                <p className="text-yellow-600 font-bold">🏆 O Seu Prémio Conquistado:</p>
                <p className="text-gray-700 my-2">Por demonstrar amor e conhecimento pela nossa querida Angola!</p>
                <div className="bg-yellow-100 rounded-lg p-4 my-4">
                    <p className="text-sm text-gray-600">Valor total conquistado:</p>
                    <p className="text-5xl font-extrabold text-gray-800">165 500 Kz</p>
                </div>
                <p className="text-sm text-gray-600">💖 Este prémio é seu por direito! Parabéns pela dedicação e conhecimento.</p>
            </div>
            <Button onClick={onLiberar} className="w-full bg-yellow-400 text-red-800 font-bold text-xl py-4 rounded-lg shadow-lg hover:bg-yellow-500">Liberar Agora</Button>
            <img class="w-24 h-24 mx-auto mt-4" alt="Decorations" src="https://horizons-cdn.hostinger.com/43619163-4fd6-4960-ba57-04c4420f1730/chatgpt-image-16_11_2025-02_46_26-UZ29c.png" />
        </div>
    </PageWrapper>;
export default CongratsPage;