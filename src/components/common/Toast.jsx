import React from 'react';
import { usePortal } from '../../context/PortalContext';
import { CheckCircle2, AlertCircle, Info, ShieldAlert } from 'lucide-react';

export const Toast = () => {
  const { toastMessage } = usePortal();

  if (!toastMessage) return null;

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />,
    warning: <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />,
    error: <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />,
    info: <Info className="w-4 h-4 text-cyan-400 shrink-0" />
  };

  const borderColors = {
    success: 'border-emerald-500/50 bg-[#071F17]',
    warning: 'border-amber-500/50 bg-[#251B08]',
    error: 'border-rose-500/50 bg-[#250910]',
    info: 'border-cyan-500/50 bg-[#091B2E]'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-2xl backdrop-blur-md text-xs text-white max-w-md ${
          borderColors[toastMessage.type] || borderColors.info
        }`}
      >
        {icons[toastMessage.type] || icons.info}
        <span className="font-medium">{toastMessage.message}</span>
      </div>
    </div>
  );
};
