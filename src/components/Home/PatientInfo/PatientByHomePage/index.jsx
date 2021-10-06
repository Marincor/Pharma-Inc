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

export default function PatientByHomePage() {
  const { currentPatient } = useContext(PatientContext);

  return (
    <>
      <ProfileImage
        data-cy="profileImg"
        img={currentPatient.img}
        alt="profile-image"
        title={`${currentPatient.name} image`}
      />
      <BoxProfileInfo>
        <ProfileName data-cy="profileName">
          {" "}
          <Icon src={user} alt="user-icon" title="name" /> {" - "}
          {currentPatient.name}
        </ProfileName>
        <ProfileInfos data-cy="profileEmail">
          <Icon src={email} alt="email-icon" title="email" /> {" - "}
          {currentPatient.email}
        </ProfileInfos>
        <ProfileInfos data-cy="profileGender">
          <Icon src={gender} alt="gender-icon" title="gender" /> {" - "}
          {currentPatient.gender}
        </ProfileInfos>
        <ProfileInfos data-cy="profileBirth">
          <Icon src={birth} alt="birth-icon" title="birth" /> {" - "}
          {currentPatient.birth}
        </ProfileInfos>
        <ProfileInfos data-cy="profilePhone">
          <Icon src={phone} alt="phone-icon" title="phone" /> {" - "}
          {currentPatient.phone}
        </ProfileInfos>
        <ProfileInfos data-cy="profileNat">
          <Icon src={nation} alt="nationality-icon" title="nationality" />{" "}
          {" - "}
          {currentPatient.nationality}
        </ProfileInfos>
        <ProfileInfos data-cy="profileAddress">
          <Icon src={address} alt="address-icon" title="address" /> {" - "}{" "}
          {currentPatient.address.street.name}, n°{" "}
          {currentPatient.address.street.number} / State -{" "}
          {currentPatient.address.state} / Country -{" "}
          {currentPatient.address.country}
        </ProfileInfos>
        <ProfileInfos data-cy="profileId">
          <Icon src={id} alt="id-icon" title="id" /> {" - "}
          {currentPatient.id}
        </ProfileInfos>
        <ProfileInfos data-cy="profileURL">
          <Icon src={link} alt="url-icon" title="url" /> {"  "}
          {`/patient/${currentPatient.id}`}
        </ProfileInfos>
      </BoxProfileInfo>
    </>
  );
}
