import "./Card.css";

const Card = (props) => {
  return <div className={`crd ${props.className}`}> {props.children} </div>;
};

export default Card;
