import "./Button.css";

const STYLES = [
  "btn-green",
  "btn-light-green",
  "btn-grey",
  "btn-white",
  "btn-blue",
];

const SIZES = ["btn-sm", "btn-md", "btn-lg", "btn-xlg"];

export const Button = ({ customClass, children, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

  return (
    <button
      className={`btn ${customClass} ${checkButtonStyle} ${checkButtonSize}`}
    >
      {children}
    </button>
  );
};
