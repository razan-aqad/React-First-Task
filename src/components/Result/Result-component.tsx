interface Iprops {
  input: string;
  result: number | string;
}

const Result = (props: Iprops) => {
  return (
    <div className="result">
      {/* Equation & Output*/}
      <div className="input">{props.input};</div>
      <div className="output">{props.result};</div>
    </div>
  );
};
export default Result;
