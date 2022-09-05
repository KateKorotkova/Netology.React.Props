import './App.css';
import {Stars} from "./FirstTask/stars";
import {Listing} from "./SecondTask/listing";
import dataJson from "./SecondTask/data.json";


function App() {
  let isStars = false;

  const data = JSON.parse(JSON.stringify(dataJson));
  
  return (
    <>
      { isStars ? <Stars count={3} /> : <Listing items={data} /> }
    </>
  );
}


export default App;
