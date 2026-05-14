import { QRCodeSVG } from 'qrcode.react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappUrl: string;
  productName: string;
}

export function WhatsAppModal({ isOpen, onClose, whatsappUrl, productName }: WhatsAppModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-8 rounded-[40px] max-w-sm w-full relative shadow-2xl border border-border"
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-muted-bg rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center space-y-8">
                <div className="space-y-3">
                   <div className="flex justify-between items-center mb-4">
                     <span className="text-[10px] font-bold uppercase text-primary tracking-[0.3em]">Desktop Scan</span>
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   </div>
                  <h3 className="text-3xl font-serif">Scan to Order</h3>
                  <p className="text-xs text-ink/40 uppercase tracking-widest">
                    Ordering: <span className="font-bold text-ink">{productName}</span>
                  </p>
                </div>

                <div className="bg-muted-bg p-6 rounded-3xl inline-block shadow-inner border border-border">
                  <QRCodeSVG value={whatsappUrl} size={180} fgColor="#4A4A4A" bgColor="transparent" />
                </div>

                <div className="space-y-6 pt-4">
                  <p className="text-[11px] text-ink/50 leading-relaxed italic">
                    Scan to share product details directly on WhatsApp Web
                  </p>
                  <div className="w-full h-[1px] bg-border"></div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-primary text-white py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:bg-black transition-all active:scale-95"
                  >
                    Open WhatsApp Web
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
