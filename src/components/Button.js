import "./Button.css";

const STYLES = [
  "bttn-green",
  "bttn-light-green",
  "bttn-grey",
  "bttn-white",
  "bttn-blue",
];

const SIZES = ["bttn-sm", "bttn-md", "bttn-lg", "bttn-xlg"];

export const Button = ({
  onClick,
  customClass,
  children,
  buttonStyle,
  buttonSize,
  disabled,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bttn ${customClass} ${checkButtonStyle} ${checkButtonSize}`}
    >
      {children}
    </button>
  );
};
