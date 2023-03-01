
import "./Main.css";
import InputNum from "../components/InputNum";
import Selection from "../components/Selection";
 


export default function Main() {

  return (
    <main>
      <h1>Currency Converter</h1>

      <div>
        <InputNum />
        <hr />
        <Selection/>
      </div>

      <div>
        <InputNum />
        <hr />
        <Selection />
      </div>

    </main>
  );
}