import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Copy, Check, Mail, Phone, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const officialEmail = 'amitumif54321@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(officialEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-full max-w-2xl bg-[#0F0F0F] border border-[#D7E2EA]/15 rounded-[30px] overflow-hidden shadow-2xl z-10 p-6 sm:p-8 md:p-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-[#D7E2EA]/60 hover:text-white transition-colors duration-200 cursor-pointer p-2 hover:bg-white/5 rounded-full"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-8">
              <h3 className="hero-heading text-4xl sm:text-5xl font-black uppercase tracking-tight select-none">
                Get In Touch
              </h3>
              <p className="text-[#D7E2EA]/60 text-sm sm:text-base mt-2">
                Have an exciting project or idea? Let&apos;s build something incredible together.
              </p>
            </div>

            {/* Two Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Column: Direct Links & Info */}
              <div className="md:col-span-5 flex flex-col gap-6 text-[#D7E2EA]">
                <div className="flex flex-col gap-4">
                  <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest font-semibold">
                    Direct Contact
                  </span>
                  
                  {/* Email block */}
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex flex-col gap-2 relative group">
                    <span className="text-[#D7E2EA]/50 text-xs uppercase font-light">Email Jack</span>
                    <span className="text-sm font-medium tracking-wide truncate pr-8">{officialEmail}</span>
                    <button
                      onClick={handleCopyEmail}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D7E2EA]/60 hover:text-white transition-all cursor-pointer p-2 hover:bg-white/10 rounded-lg"
                      title="Copy to clipboard"
                    >
                      {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3 text-sm font-light text-[#D7E2EA]/75">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-[#D7E2EA]/40" />
                    <span>{officialEmail}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-[#D7E2EA]/40" />
                    <span>San Francisco, California</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#D7E2EA]/40" />
                    <span>+1 (415) 555-0199</span>
                  </div>
                </div>

                {/* Aesthetic footer */}
                <div className="border-t border-white/5 pt-4 mt-2">
                  <p className="text-xs text-[#D7E2EA]/30 uppercase tracking-widest font-mono">
                    AVAILABILITY: ACCEPTING NEW CLIENTS
                  </p>
                </div>
              </div>

              {/* Right Column: Message Form */}
              <div className="md:col-span-7">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-8 px-4 bg-green-500/10 border border-green-500/20 rounded-2xl gap-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                      <Check size={24} />
                    </div>
                    <h4 className="font-bold text-lg text-white">Message Sent Successfully!</h4>
                    <p className="text-sm text-green-200/70">
                      Thank you for reaching out. Jack will get back to you shortly!
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs text-green-400 underline hover:text-white cursor-pointer transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1">
                      <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA]/40 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                      <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA]/40 transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1">
                      <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-medium">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Describe your project, timeline, and goals..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA]/40 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-[#0C0C0C] font-semibold uppercase tracking-widest py-3 rounded-xl hover:bg-[#D7E2EA] transition-colors cursor-pointer disabled:opacity-50 text-xs sm:text-sm flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
