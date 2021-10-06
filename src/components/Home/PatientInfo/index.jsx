import { useContext } from "react";
import { PatientContext } from "../../../contexts/patients";
import {
  BoxModal,
  BoxPatient,
  BoxProfileInfo,
  Icon,
  ProfileImage,
  ProfileInfos,
  ProfileName,
} from "./styles";
import user from "../../../assets/img/user.svg";
import email from "../../../assets/img/email.svg";
import gender from "../../../assets/img/gender.svg";
import birth from "../../../assets/img/birth.svg";
import phone from "../../../assets/img/phone.svg";
import nation from "../../../assets/img/nation.svg";
import address from "../../../assets/img/address.svg";
import id from "../../../assets/img/id.svg";
import link from "../../../assets/img/link.svg";


export default function Patient() {
  const { currentPatient, setCurrentPatient } = useContext(PatientContext);

  console.log(currentPatient);

  function renderModal() {
    if (currentPatient?.results[0]) {
      console.log(currentPatient.results[0]);
      return (
        <>
          <ProfileImage img={currentPatient.results[0].picture.large} alt="profile-image" title={`${currentPatient.results[0].name.first} image`}  />
          <BoxProfileInfo>
            <ProfileName>
              {" "}
              <Icon src={user} alt="user-icon" title="name"/> {" - "}
              {currentPatient.results[0].name.first}{" "}
              {currentPatient.results[0].name.last}
            </ProfileName>
            <ProfileInfos>
              <Icon src={email} alt="email-icon" title="email" /> {" - "}
              {currentPatient.results[0].email}
            </ProfileInfos>
            <ProfileInfos>
              <Icon src={gender} alt="gender-icon" title="gender" /> {" - "}
              {currentPatient.results[0].gender}
            </ProfileInfos>
            <ProfileInfos>
              <Icon src={birth} alt="birth-icon" title="birth" /> {" - "}
              {currentPatient.results[0].dob.date.substr(0, 10)}
            </ProfileInfos>
            <ProfileInfos>
              <Icon src={phone} alt="phone-icon" title="phone" /> {" - "}
              {currentPatient.results[0].phone}
            </ProfileInfos>
            <ProfileInfos>
              <Icon src={nation} alt="nationality-icon" title="nationality" />  {" - "}
              {currentPatient.results[0].nat}
            </ProfileInfos>
            <ProfileInfos>
            <Icon src={address} alt="address-icon" title="address"  /> {" - "} Street {currentPatient.results[0].location.street.name},
              n° {currentPatient.results[0].location.street.number} / State -{" "}
              {currentPatient.results[0].location.state} / Country -{" "}
              {currentPatient.results[0].location.country}
            </ProfileInfos>
            <ProfileInfos>
            <Icon src={id} alt="id-icon" title="id"  /> {" - "}
               {currentPatient.results[0].id.value}
            </ProfileInfos>
            <ProfileInfos>
            <Icon src={link} alt="url-icon" title="url"  /> {"  "}
              {`/patient/${currentPatient.results[0].id.value}`}
            </ProfileInfos>
          </BoxProfileInfo>
        </>
      );
    }
  }

  return (
    <BoxPatient>
      <BoxModal>{renderModal()}</BoxModal>
    </BoxPatient>
  );
}
