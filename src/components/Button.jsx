const Button = ({ text, variant = 'primary' }) => {
  return (
    <button
      className={`px-6 py-3 rounded-xl font-medium transition
      ${
        variant === 'primary'
          ? 'bg-black text-white hover:bg-pink-400 hover:text-white'
          : 'border border-black hover:bg-black hover:text-white'
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
