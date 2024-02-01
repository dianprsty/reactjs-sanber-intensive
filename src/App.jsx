/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import FormBelanja from "./components/FormBelanja/FormBelanja";
// import TabelHargaBuah from "./components/TabelHargaBuah/TabelHargaBuah";
// import Timer from "./components/Timer/Timer";
import "./index.css";
// import { dataHargaBuah } from "./data/dataHargaBuah";
import FormAndTabelHargaBuah from "./components/FormAndTabelHargaBuah/FormAndTabelHargaBuah";
import { createContext } from "react";
import axios from "axios";
import Proptypes from "prop-types";

export const BuahContext = createContext();

const BuahProvider = (props) => {
  const [dataBuah, setDataBuah] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDataBuah = async () => {
    try {
      const response = await axios.get(
        "https://backendexample.sanbercloud.com/api/fruits"
      );
      setDataBuah(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDataBuah();
  }, []);

  return (
    <BuahContext.Provider
      value={{ dataBuah, setDataBuah, isLoading, setIsLoading, getDataBuah }}
    >
      {props.children}
    </BuahContext.Provider>
  );
};

BuahProvider.propTypes = {
  props: Proptypes.object,
  children: Proptypes.node,
};

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
        <BuahProvider>
          <FormAndTabelHargaBuah />
        </BuahProvider>
      </div>
    </>
  );
}

export default App;
