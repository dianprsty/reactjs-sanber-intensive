import styles from "./Form.module.css";

function FormBelanja() {
  return (
    <>
      <div>
        <form className={styles.form_card}>
          <h1 className={styles.h1}>Form Pembelian Buah</h1>
          <div className={styles.input_row}>
            <label htmlFor="nama" className={styles.input_label}>
              Nama Pelanggan
            </label>
            <input type="text" id="nama" name="nama" required />
          </div>
          <div className={styles.input_row}>
            <label className={styles.input_label}>Daftar Buah</label>
            <div className={styles.input_checkbox}>
              <input type="checkbox" name="semangka" id="semangka" />
              <label htmlFor="semangka">Semangka</label>
            </div>
            <div className={styles.input_checkbox}>
              <input type="checkbox" name="jeruk" id="jeruk" />
              <label htmlFor="jeruk">Jeruk</label>
            </div>
            <div className={styles.input_checkbox}>
              <input type="checkbox" name="nanas" id="nanas" />
              <label htmlFor="nanas">Nanas</label>
            </div>
            <div className={styles.input_checkbox}>
              <input type="checkbox" name="salak" id="salak" />
              <label htmlFor="salak">Salak</label>
            </div>
            <div className={styles.input_checkbox}>
              <input type="checkbox" name="anggur" id="anggur" />
              <label htmlFor="anggur">Anggur</label>
            </div>
          </div>
          <div className={styles.input_row}>
            <button type="submit" className={styles.button_submit}>
              Beli
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormBelanja;
