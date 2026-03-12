import React, { useState } from 'react';
import { X, Check, Loader2, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'submitting' | 'success' | 'error'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discord: '',
    thumbnailCount: 1,
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('submitting');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "fdd7eeeb-e31a-4432-b947-d20482ecac11",
          name: formData.name,
          email: formData.email,
          discord: formData.discord,
          thumbnail_count: formData.thumbnailCount,
          message: formData.description,
          subject: `New Project Request from ${formData.name}`
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStep('success');
      } else {
        console.error("Form submission failed", result);
        setStep('error');
      }
    } catch (error) {
      console.error("Form submission error", error);
      setStep('error');
    }
  };

  const handleClose = () => {
    if (step === 'success' || step === 'error') {
      setStep('form');
      setFormData({ name: '', email: '', discord: '', thumbnailCount: 1, description: '' });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-zinc-900 border border-zinc-800 w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-1"
        >
            <X size={24} />
        </button>

        {step === 'form' || step === 'submitting' ? (
          <>
            <div className="mb-6">
              <h2 className="text-3xl font-black text-white mb-2">Start a Project</h2>
              <p className="text-zinc-400 text-sm">Fill out the details below and I'll get back to you within 24 hours.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8c59e4] transition-colors placeholder:text-zinc-700"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    disabled={step === 'submitting'}
                  />
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Discord / Twitter</label>
                   <input 
                    type="text" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8c59e4] transition-colors placeholder:text-zinc-700"
                    placeholder="@username"
                    value={formData.discord}
                    onChange={e => setFormData({...formData, discord: e.target.value})}
                    disabled={step === 'submitting'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8c59e4] transition-colors placeholder:text-zinc-700"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  disabled={step === 'submitting'}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Thumbnail Count (0-10)</label>
                  <input 
                    type="number"
                    min="0"
                    max="10"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8c59e4] transition-colors placeholder:text-zinc-700"
                    value={formData.thumbnailCount}
                    onChange={e => {
                        let val = parseInt(e.target.value);
                        if (isNaN(val)) val = 0;
                        if (val > 10) val = 10;
                        if (val < 0) val = 0;
                        setFormData({...formData, thumbnailCount: val});
                    }}
                    disabled={step === 'submitting'}
                  />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Price</label>
                    <div className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white/60 select-none">
                        DM for price
                    </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8c59e4] transition-colors resize-none placeholder:text-zinc-700"
                  placeholder="Tell me about your video idea, target audience, and any specific styles you like..."
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  disabled={step === 'submitting'}
                ></textarea>
              </div>

              <div className="pt-2">
                <Button type="submit" fullWidth disabled={step === 'submitting'}>
                  {step === 'submitting' ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="animate-spin" size={18} />
                      Sending...
                    </span>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </div>
            </form>
          </>
        ) : step === 'success' ? (
          <div className="text-center py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Request Received!</h3>
            <p className="text-zinc-400 mb-8 max-w-xs mx-auto">
              Thanks {formData.name}! I'll review your project details and send a response to <span className="text-white font-medium">{formData.email}</span> shortly.
            </p>
            <Button onClick={handleClose} variant="secondary">Close</Button>
          </div>
        ) : (
           <div className="text-center py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
             <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={40} className="text-red-500" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Submission Failed</h3>
            <p className="text-zinc-400 mb-8 max-w-xs mx-auto">
              Something went wrong while sending your request. Please check your connection or try again later.
            </p>
            <Button onClick={() => setStep('form')} variant="secondary">Try Again</Button>
          </div>
        )}
      </div>
    </div>
  );
};