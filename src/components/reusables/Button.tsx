import React from "react";
import classNames from "classnames";

interface IButtonProps {
  styles?: string;
  icon?: React.ReactNode;
  content: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<IButtonProps> = ({
  styles = "",
  icon,
  content,
  onClick,
  disabled = false,
  type='button'
}) => {
  return (
    <button    
    type={type}
      className={classNames(
        "px-4 py-2 rounded-lg flex items-center gap-2 font-medium text-white bg-primary hover:bg-blue-900 transition",
        styles
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {content}
    </button>
  );
};

export default Button;
