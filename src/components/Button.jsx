const Button = ({ text, variant = 'primary' }) => {
  return (
    <button
      className={`px-6 py-3 rounded-xl font-medium transition
      ${
        variant === 'primary'
          ? 'bg-[var(--primary)] text-black hover:bg-lime-400'
          : 'border border-black hover:bg-black hover:text-white'
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
