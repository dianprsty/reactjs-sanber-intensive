// import { useState } from "react";
// import FormBelanja from "./components/FormBelanja/FormBelanja";
// import TabelHargaBuah from "./components/TabelHargaBuah/TabelHargaBuah";
// import Timer from "./components/Timer/Timer";
import "./index.css";
import { dataHargaBuah } from "./data/dataHargaBuah";
import FormAndTabelHargaBuah from "./components/FormAndTabelHargaBuah/FormAndTabelHargaBuah";

function App() {
  //useState for Timer
  // const [visible, setVisible] = useState(true);

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
        {/* {visible ? <Timer setVisible={setVisible} /> : null}
        <FormBelanja />
        <TabelHargaBuah dataHargaBuah={dataHargaBuah} /> */}
        <FormAndTabelHargaBuah dataHargaBuah={dataHargaBuah} />
      </div>
    </>
  );
}

export default App;
