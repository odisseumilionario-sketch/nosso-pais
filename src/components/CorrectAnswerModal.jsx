import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const CorrectAnswerModal = ({
  accumulated,
  onContinue
}) => <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <motion.div initial={{
    scale: 0.7,
    opacity: 0
  }} animate={{
    scale: 1,
    opacity: 1
  }} className="bg-white rounded-2xl p-8 text-center max-w-sm w-full shadow-2xl">
            <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
            <img class="w-16 h-16 mx-auto mb-4" alt="Confetti" src="https://horizons-cdn.hostinger.com/43619163-4fd6-4960-ba57-04c4420f1730/chatgpt-image-16_11_2025-02_46_26-5j4SZ.png" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Respondida com Sucesso!</h2>
            <div className="bg-yellow-100 rounded-lg p-4 my-4">
                <p className="text-sm text-gray-600">Total Acumulado:</p>
                <p className="text-3xl font-bold text-gray-800">{new Intl.NumberFormat('pt-AO').format(accumulated)} Kz</p>
            </div>
            <Button onClick={onContinue} className="w-full bg-yellow-400 text-red-800 font-bold text-lg py-3 rounded-lg hover:bg-yellow-500">Continuar</Button>
        </motion.div>
    </div>;
export default CorrectAnswerModal;