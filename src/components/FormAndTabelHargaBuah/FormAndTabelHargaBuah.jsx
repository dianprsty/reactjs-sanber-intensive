import { useEffect, useState } from "react";
import styles from "./FormAndTabel.module.css";
import axios from "axios";
import LoadingIndicator from "../LoadingIndicator";

const FormAndTabelHargaBuah = () => {
  const [dataBuah, setDataBuah] = useState([]);
  const [buah, setBuah] = useState({
    name: "",
    price: 0,
    weight: 0,
  });
  const [idEdit, setIdEdit] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const getDataBuah = async () => {
    try {
      const response = await axios.get(
        "https://backendexample.sanbercloud.com/api/fruits"
      );
      setDataBuah(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataBuah();
  }, []);

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

  const handleEdit = (item) => {
    setIdEdit(item.id);
    setBuah({
      name: item.name,
      price: item.price,
      weight: item.weight,
    });
  };

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(
        "https://backendexample.sanbercloud.com/api/fruits/" + id,
        buah
      );
      getDataBuah();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? <LoadingIndicator /> : null}
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
      <div className={styles.container}>
        <h1>Daftar Harga Buah</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataBuah.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>Rp {item.price}</td>
                  <td>{item.weight / 1000} Kg</td>
                  <td className={styles.action}>
                    <button
                      className={styles.btn_edit}
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.btn_delete}
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FormAndTabelHargaBuah;
