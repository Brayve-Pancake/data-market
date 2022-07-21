export default function IdCard(props) {
  return (
    <div className="idCard">
      <h3>Source:Oura</h3>
      <h3>Quality: 99%</h3>
      <h3>Daily Data Points: 100</h3>
      <button onClick={props.buy}>Buy</button>
    </div>
  );
}
