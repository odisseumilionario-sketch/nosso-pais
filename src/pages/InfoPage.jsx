import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trophy } from 'lucide-react';
const InfoPage = ({
  name,
  setName,
  onStartGame
}) => <PageWrapper>
        <div className="w-full max-w-3xl text-center">
            <img alt="Palanca Negra" class="w-20 h-20 mx-auto mb-4" src="https://horizons-cdn.hostinger.com/43619163-4fd6-4960-ba57-04c4420f1730/chatgpt-image-16_11_2025-02_40_52-3ztHg.png" />
            <div className="bg-white rounded-lg p-4 mb-6">
                <h1 className="text-red-600 text-2xl font-bold">Mostre que conheces Angola</h1>
                <p className="text-gray-700">Responda 10 perguntas sobre Angola e ganhe até <span className="font-bold">165.000 Kz!</span></p>
            </div>
            <h2 className="text-white text-2xl font-bold mb-4">Marcas que apoiam</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <img alt="Influencer Bulayanga" class="rounded-lg shadow-lg w-full" src="https://horizons-cdn.hostinger.com/43619163-4fd6-4960-ba57-04c4420f1730/influencer-beach-c0wo-e-8-0Rgg7.jpg" />
                <img alt="Influencer" class="rounded-lg shadow-lg w-full" src="https://horizons-cdn.hostinger.com/43619163-4fd6-4960-ba57-04c4420f1730/influencer-buluzinha-czhpekyl-jEGD1.jpg" />
                <img alt="Influencer" class="rounded-lg shadow-lg w-full" src="https://horizons-cdn.hostinger.com/43619163-4fd6-4960-ba57-04c4420f1730/influencer-dubai-dvmenmku-5zTa1.jpg" />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-2xl mb-8">
                <p className="text-gray-600 mb-4">Insira o seu nome para começar a jogar</p>
                <Input type="text" placeholder="Digite o seu nome completo..." value={name} onChange={e => setName(e.target.value)} className="text-center mb-4" />
                <Button onClick={onStartGame} className="w-full bg-yellow-400 text-red-800 font-bold text-lg py-4 rounded-lg shadow-lg hover:bg-yellow-500">
                    <Trophy className="w-5 h-5 mr-2" /> COMEÇAR JOGO
                </Button>
            </div>
            <h2 className="text-white text-2xl font-bold mb-4">Quem Já Recebeu 🎉</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-red-800/70 rounded-lg p-4 text-white">
                    <img alt="Carlos Manuel" class="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-yellow-400" src="https://horizons-cdn.hostinger.com/43619163-4fd6-4960-ba57-04c4420f1730/testimonial-male-1-cwrmiphy-dS2o1.jpg" />
                    <p className="font-bold">Carlos Manuel</p>
                    <p className="text-sm text-white/80">Luanda</p>
                    <p className="font-bold text-yellow-400 mt-1">165.000 Kz</p>
                    <p className="text-xs text-white/80">Compras de Natal</p>
                </div>
                <div className="bg-red-800/70 rounded-lg p-4 text-white">
                    <img alt="Pedro & Amigos" class="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-yellow-400" src="https://images.unsplash.com/photo-1694979339081-19844d538bdf" />
                    <p className="font-bold">Pedro & Amigos</p>
                    <p className="text-sm text-white/80">Benguela</p>
                    <p className="font-bold text-yellow-400 mt-1">165.000 Kz</p>
                    <p className="text-xs text-white/80">Presentes para família</p>
                </div>
                <div className="bg-red-800/70 rounded-lg p-4 text-white">
                    <img alt="Ana Costa" class="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-yellow-400" src="https://horizons-cdn.hostinger.com/43619163-4fd6-4960-ba57-04c4420f1730/testimonial-female-cvvmzqfk-1Uyra.jpg" />
                    <p className="font-bold">Ana Costa</p>
                    <p className="text-sm text-white/80">Huambo</p>
                    <p className="font-bold text-yellow-400 mt-1">165.000 Kz</p>
                    <p className="text-xs text-white/80">Festas de fim de ano</p>
                </div>
            </div>
        </div>
    </PageWrapper>;
export default InfoPage;