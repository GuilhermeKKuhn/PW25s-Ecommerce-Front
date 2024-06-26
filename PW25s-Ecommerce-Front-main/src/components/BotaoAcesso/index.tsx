interface IBotaoAcesso {
  className?: string;
  disabled: boolean;
  text: string;
  onClick: () => void;
}

export function BotaoAcesso({
  className,
  disabled,
  text,
  onClick,
}: IBotaoAcesso) {
  return (
    <button
      className={className || "btn btn-primary btn-block"}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
