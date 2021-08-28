import "./Button.css";

const STYLES = [
  "bttn-green",
  "bttn-light-green",
  "bttn-grey",
  "bttn-white",
  "bttn-blue",
  "bttn-outline",
];

const SIZES = ["bttn-sm", "bttn-md", "bttn-lg", "bttn-xlg", "bttn-sub"];

// export const Button = ({
//   onClick,
//   customClass,
//   children,
//   buttonStyle,
//   buttonSize,
//   disabled,
// }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];

//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

//   return (
//     <button
//       disabled={disabled}
//       onClick={onClick}
//       className={`bttn ${customClass} ${checkButtonStyle} ${checkButtonSize}`}
//     >
//       {children}
//     </button>
//   );
// };

const Button = (props) => {
  const checkButtonStyle = STYLES.includes(props.buttonStyle)
    ? props.buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(props.buttonSize)
    ? props.buttonSize
    : SIZES[1];
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`bttn ${props.customClass} ${checkButtonStyle} ${checkButtonSize}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
