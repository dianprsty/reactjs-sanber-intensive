import { useContext } from "react";
import styles from "./FormAndTabel.module.css";
import Proptypes from "prop-types";
import { BuahContext } from "../../App";
import axios from "axios";

const FormBuah = ({ props: { idEdit, setIdEdit, buah, setBuah } }) => {
  const { setIsLoading, getDataBuah } = useContext(BuahContext);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setBuah((state) => {
      return { ...state, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      if (idEdit >= 0) {
        await axios.put(
          "https://backendexample.sanbercloud.com/api/fruits/" + idEdit,
          buah
        );
        setIdEdit(-1);
      } else {
        await axios.post(
          "https://backendexample.sanbercloud.com/api/fruits",
          buah
        );
      }
      setBuah({
        name: "",
        price: 0,
        weight: 0,
      });
    } catch (error) {
      console.log(error);
    } finally {
      getDataBuah();
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <h1>Form Harga Buah</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_row}>
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={buah.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_row}>
            <label htmlFor="price">Harga</label>
            <input
              type="number"
              name="price"
              id="price"
              min={1}
              required
              value={buah.price > 0 && buah.price}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_row}>
            <label htmlFor="weight">Berat (Dalam gram)</label>
            <input
              type="number"
              name="weight"
              id="weight"
              min={1}
              required
              value={buah.weight > 0 && buah.weight}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_button}>
            <button type="submit" className={styles.btn_submit}>
              {idEdit == -1 ? "Tambah" : "Edit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

FormBuah.propTypes = {
  props: Proptypes.object,
  idEdit: Proptypes.number,
  buah: Proptypes.array,
  setIdEdit: Proptypes.func,
  setBuah: Proptypes.func,
};

export default FormBuah;
