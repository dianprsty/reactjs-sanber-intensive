// import { useState } from "react";
import { useState } from "react";
import FormBelanja from "./components/FormBelanja/FormBelanja";
import TabelHargaBuah from "./components/TabelHargaBuah/TabelHargaBuah";
import Timer from "./components/Timer/Timer";
import "./index.css";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          minHeight: "100dvh",
        }}
      >
        {visible ? <Timer setVisible={setVisible} /> : null}
        <FormBelanja />
        <TabelHargaBuah dataHargaBuah={dataHargaBuah} />
      </div>
    </>
  );
}

export default App;
