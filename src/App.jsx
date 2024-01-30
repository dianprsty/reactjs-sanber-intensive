// import { useState } from "react";
// import FormBelanja from "./components/FormBelanja/FormBelanja";
import TabelHargaBuah from "./components/TabelHargaBuah/TabelHargaBuah";
import "./index.css";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <FormBelanja /> */}
      <TabelHargaBuah dataHargaBuah={dataHargaBuah} />
    </>
  );
}

export default App;
