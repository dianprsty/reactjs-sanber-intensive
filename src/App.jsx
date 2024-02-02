/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormBelanja from "./components/FormBelanja/FormBelanja";
import TabelHargaBuah from "./components/TabelHargaBuah/TabelHargaBuah";
import "./index.css";
import { dataHargaBuah } from "./data/dataHargaBuah";
import FormAndTabelHargaBuahContext from "./components/FormAndTabelHargaBuah/FormAndTabelHargaBuahContext";
import { createContext } from "react";
import axios from "axios";
import Proptypes from "prop-types";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TimerPage from "./pages/TimerPage";
import FormAndTabelHargaBuah from "./components/FormAndTabelHargaBuah/FormAndTabelHargaBuah";
import ChangeColor from "./pages/ChangeColor";

export const BuahContext = createContext();

const BuahProvider = (props) => {
  const [dataBuah, setDataBuah] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [color, setColor] = useState("#FFFFFF");

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
      value={{
        dataBuah,
        setDataBuah,
        isLoading,
        setIsLoading,
        getDataBuah,
        color,
        setColor,
      }}
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
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route index element={<FormBelanja />} />
              <Route
                path="/tabel"
                element={<TabelHargaBuah dataHargaBuah={dataHargaBuah} />}
              />
              <Route path="/timer" element={<TimerPage />} />
              <Route path="/axios" element={<FormAndTabelHargaBuah />} />
              <Route
                path="/context"
                element={<FormAndTabelHargaBuahContext />}
              />
              <Route path="/router" element={<ChangeColor />} />
            </Routes>
          </BrowserRouter>
          {/* <FormAndTabelHargaBuahContext /> */}
        </BuahProvider>
      </div>
    </>
  );
}

export default App;
