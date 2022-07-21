import { useEffect, useState } from "react";
import IdCard from "./comoponents/IdCard";
import UserData from "./comoponents/UserData";

function App() {
  const [streamOpen, setStreamOpen] = useState(false);
  const [ouraData, setOuraData] = useState({});
  const ouraPAT = import.meta.env.VITE_OURA_PAT;

  // useEffect for sideEffects(outside of react's reamit)
  useEffect(() => {
    console.log("running");
    fetch(`https://api.ouraring.com/v1/userinfo?access_token=${ouraPAT}`)
      .then((results) => results.json()) // converts the response from JSON to JS Object
      .then((data) => setOuraData(data));
  }, []);

  function buy() {
    setStreamOpen(true);
    console.log("buy");
    console.log("open stream");
  }

  return (
    <div className="body">
      <h1>Hello World!</h1>
      <IdCard buy={buy} />
      {streamOpen && <UserData ouraData={ouraData} />}
    </div>
  );
}

export default App;
