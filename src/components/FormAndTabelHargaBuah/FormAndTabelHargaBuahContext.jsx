import { useContext, useState } from "react";
import LoadingIndicator from "../LoadingIndicator";
import { BuahContext } from "../../App";
import FormBuah from "./FormBuah";
import TabelBuah from "./TabelBuah";

const FormAndTabelHargaBuahContext = () => {
  const [idEdit, setIdEdit] = useState(-1);
  const { isLoading } = useContext(BuahContext);
  const [buah, setBuah] = useState({
    name: "",
    price: 0,
    weight: 0,
  });

  return (
    <>
      {isLoading ? <LoadingIndicator /> : null}
      <FormBuah props={{ buah, setBuah, idEdit, setIdEdit }} />
      <TabelBuah props={{ buah, setBuah, idEdit, setIdEdit }} />
    </>
  );
};

export default FormAndTabelHargaBuahContext;
