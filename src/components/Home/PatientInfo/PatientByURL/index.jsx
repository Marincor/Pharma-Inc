import { useContext } from "react";
import { PatientContext } from "../../../../contexts/patients";
import {
  BoxProfileInfo,
  Icon,
  ProfileImage,
  ProfileInfos,
  ProfileName,
} from "../styles";
import user from "../../../../assets/img/user.svg";
import email from "../../../../assets/img/email.svg";
import gender from "../../../../assets/img/gender.svg";
import birth from "../../../../assets/img/birth.svg";
import phone from "../../../../assets/img/phone.svg";
import link from "../../../../assets/img/link.svg";
import nation from "../../../../assets/img/nation.svg";
import address from "../../../../assets/img/address.png";
import id from "../../../../assets/img/id.svg";

export default function PatientByURL() {
  const { currentPatient } = useContext(PatientContext);

  return (
    <>
      <ProfileImage
        data-cy="profileImg"
        img={currentPatient?.results[0]?.picture.large}
        alt="profile-image"
        title={`${currentPatient.results[0].name.first} image`}
      />
      <BoxProfileInfo>
        <ProfileName data-cy="profileName">
          {" "}
          <Icon src={user} alt="user-icon" title="name" /> {" - "}
          {currentPatient.results[0].name.first}{" "}
          {currentPatient.results[0].name.last}
        </ProfileName>
        <ProfileInfos data-cy="profileEmail">
          <Icon src={email} alt="email-icon" title="email" /> {" - "}
          {currentPatient.results[0].email}
        </ProfileInfos>
        <ProfileInfos data-cy="profileGender">
          <Icon src={gender} alt="gender-icon" title="gender" /> {" - "}
          {currentPatient.results[0].gender}
        </ProfileInfos>
        <ProfileInfos data-cy="profileBirth">
          <Icon src={birth} alt="birth-icon" title="birth" /> {" - "}
          {currentPatient.results[0].dob.date.substr(0, 10)}
        </ProfileInfos>
        <ProfileInfos data-cy="profilePhone">
          <Icon src={phone} alt="phone-icon" title="phone" /> {" - "}
          {currentPatient.results[0].phone}
        </ProfileInfos>
        <ProfileInfos data-cy="profileNat">
          <Icon src={nation} alt="nationality-icon" title="nationality" />{" "}
          {" - "}
          {currentPatient.results[0].nat}
        </ProfileInfos>
        <ProfileInfos data-cy="profileAddress">
          <Icon src={address} alt="address-icon" title="address" /> {" - "}{" "}
          {currentPatient.results[0].location.street.name}, n°{" "}
          {currentPatient.results[0].location.street.number} / State -{" "}
          {currentPatient.results[0].location.state} / Country -{" "}
          {currentPatient.results[0].location.country}
        </ProfileInfos>
        <ProfileInfos data-cy="profileId">
          <Icon src={id} alt="id-icon" title="id" />  ID {" - "}
          {currentPatient.results[0].id.value}
        </ProfileInfos>
        <ProfileInfos data-cy="profileURL">
          <Icon src={link} alt="url-icon" title="url" />  URL {" - "}
          {`/patient/${currentPatient.results[0]?.id.value}`}
        </ProfileInfos>
      </BoxProfileInfo>
    </>
  );
}
