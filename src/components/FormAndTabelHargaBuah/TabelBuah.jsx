import { useContext } from "react";
import styles from "./FormAndTabel.module.css";
import { BuahContext } from "../../App";
import axios from "axios";
import Proptypes from "prop-types";

const TabelBuah = ({ props: { setIdEdit, buah, setBuah } }) => {
  const { setIsLoading, dataBuah, getDataBuah } = useContext(BuahContext);
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
            {console.log(Array.isArray(dataBuah))}
            {Array.isArray(dataBuah)
              ? dataBuah.map((item, index) => {
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
                })
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};

TabelBuah.propTypes = {
  props: Proptypes.object,
  buah: Proptypes.array,
  setIdEdit: Proptypes.func,
  setBuah: Proptypes.func,
};

export default TabelBuah;
