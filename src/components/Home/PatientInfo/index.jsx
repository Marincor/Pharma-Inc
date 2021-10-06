import { useContext } from "react";
import { PatientContext } from "../../../contexts/patients";
import { BoxModal, BoxPatient } from "./styles";
import PatientByHomePage from "./PatientByHomePage";
import PatientByURL from "./PatientByURL";

export default function Patient() {
  const { currentPatient } = useContext(PatientContext);

  function renderModal() {
    if (currentPatient?.name) {
      return <PatientByHomePage />;
    } else if (currentPatient?.results[0]) {
      return <PatientByURL />;
    }
  }

  return (
    <BoxPatient>
      <BoxModal>{renderModal()}</BoxModal>
    </BoxPatient>
  );
}
