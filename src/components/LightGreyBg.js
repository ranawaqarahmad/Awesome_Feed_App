import "./LightGreyBg.css";

const LightGreyBg = (props) => {
  return (
    <div className={`light-grey-bg ${props.className}`}> {props.children} </div>
  );
};

export default LightGreyBg;
