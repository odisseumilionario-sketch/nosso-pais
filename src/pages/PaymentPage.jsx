import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Radio, Banknote, Smartphone } from 'lucide-react';
const PaymentPage = ({
  name,
  paymentMethod,
  setPaymentMethod,
  paymentInput,
  setPaymentInput,
  onSacar
}) => <PageWrapper>
        <div className="w-full max-w-md text-center">
            <img class="w-12 h-8 mx-auto mb-4 rounded" alt="Angola Flag" src="https://horizons-cdn.hostinger.com/43619163-4fd6-4960-ba57-04c4420f1730/chatgpt-image-16_11_2025-02_40_52-B8DQH.png" />
            <h1 className="text-3xl font-bold text-white mb-1">Olá, {name}!</h1>
            <p className="text-white/80 mb-6">Retira os teus dados</p>
            <div className="bg-white rounded-2xl p-4 text-gray-800 mb-6 shadow-lg">
                <p className="text-sm">Valor disponível:</p>
                <p className="text-4xl font-extrabold">165 500 Kz</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl text-left">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">Escolha o método de retirada</h2>
                <div className="space-y-3">
                    <div onClick={() => setPaymentMethod('multicaixa')} className={`flex items-center p-4 border-2 rounded-lg cursor-pointer ${paymentMethod === 'multicaixa' ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
                        <Radio className={`w-6 h-6 mr-4 ${paymentMethod === 'multicaixa' ? 'text-red-500' : 'text-gray-400'}`} />
                        <Smartphone className="w-6 h-6 mr-3 text-gray-600" />
                        <div>
                            <p className="font-bold text-gray-800">Multicaixa Express</p>
                            <p className="text-sm text-gray-500">Pagamento rápido e seguro</p>
                        </div>
                    </div>
                    <div onClick={() => setPaymentMethod('transferencia')} className={`flex items-center p-4 border-2 rounded-lg cursor-pointer ${paymentMethod === 'transferencia' ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
                        <Radio className={`w-6 h-6 mr-4 ${paymentMethod === 'transferencia' ? 'text-red-500' : 'text-gray-400'}`} />
                        <Banknote className="w-6 h-6 mr-3 text-gray-600" />
                        <div>
                            <p className="font-bold text-gray-800">Transferência Bancária</p>
                            <p className="text-sm text-gray-500">Direto para sua conta</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    {paymentMethod === 'multicaixa' ? <>
                            <label className="font-semibold text-gray-700">Número Multicaixa Express</label>
                            <Input type="text" inputMode="numeric" placeholder="9 dígitos" value={paymentInput} onChange={e => setPaymentInput(e.target.value.replace(/\D/g, '').slice(0, 9))} maxLength="9" className="mt-1" />
                            <p className="text-xs text-gray-500 mt-1">Digite os 9 dígitos do seu número</p>
                        </> : <>
                            <label className="font-semibold text-gray-700">IBAN (21 dígitos)</label>
                            <Input type="text" inputMode="numeric" placeholder="000000000000000000000" value={paymentInput} onChange={e => setPaymentInput(e.target.value.replace(/\D/g, '').slice(0, 21))} maxLength="21" className="mt-1" />
                            <p className="text-xs text-gray-500 mt-1">Digite o IBAN começando com 00 (21 dígitos no total)</p>
                        </>}
                </div>
                <Button onClick={onSacar} className="w-full bg-yellow-500 text-red-900 font-bold text-lg py-4 rounded-lg shadow-lg mt-6 hover:bg-yellow-600">Sacar Agora</Button>
            </div>
        </div>
    </PageWrapper>;
export default PaymentPage;