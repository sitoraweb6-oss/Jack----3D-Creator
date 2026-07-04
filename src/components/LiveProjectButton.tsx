interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
}

export function LiveProjectButton({ onClick, className = '' }: LiveProjectButtonProps) {
  return (
    <button
      id="btn-live-project"
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm md:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 cursor-pointer inline-flex items-center justify-center ${className}`}
    >
      Live Project
    </button>
  );
}
