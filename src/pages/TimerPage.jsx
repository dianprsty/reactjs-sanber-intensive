import FormBelanja from "../components/FormBelanja/FormBelanja";
import TabelHargaBuah from "../components/TabelHargaBuah/TabelHargaBuah";
import Timer from "../components/Timer/Timer";
import { dataHargaBuah } from "../data/dataHargaBuah";

const TimerPage = () => {
  return (
    <>
      <Timer />
      <FormBelanja />
      <TabelHargaBuah dataHargaBuah={dataHargaBuah} />
    </>
  );
};

export default TimerPage;
