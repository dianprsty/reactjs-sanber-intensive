import styles from "./Tabel.module.css";
import PropTypes from "prop-types";
export default function TabelHargaBuah({ dataHargaBuah }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100dvh",
        }}
      >
        <div className={styles.table_container}>
          <h1>Tabel Harga Buah</h1>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
              </tr>
            </thead>
            <tbody>
              {dataHargaBuah.map((item, index) => {
                return (
                  <tr key={item.nama + index}>
                    <td>{item.nama}</td>
                    <td className={styles.align_right}>Rp {item.harga}</td>
                    <td className={styles.align_right}>{item.berat} Kg</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

TabelHargaBuah.propTypes = {
  //
  dataHargaBuah: PropTypes.array.isRequired,
};
