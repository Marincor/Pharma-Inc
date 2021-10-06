export default function getUser(
  currentId,
  currentName,
  currentEmail,
  currentGender,
  currentBirth,
  currentPhone,
  currentNat,
  currentAdd,
  currentImg,
  funcChandeId,
  funcChangeCurrentPatient,
  history
) {
  if (currentId !== null) {
    funcChandeId(currentId);
    funcChangeCurrentPatient({
      name: currentName,
      email: currentEmail,
      gender: currentGender,
      birth: currentBirth,
      phone: currentPhone,
      nationality: currentNat,
      address: currentAdd,
      id: currentId,
      url: `/patient/${currentId}`,
      img: currentImg,
    });
    history.push(`/patient/${currentId}`);
  } else {
    const newId = JSON.stringify(Math.round(Math.random() * 14));
    funcChandeId(newId);
    funcChangeCurrentPatient({
      name: currentName,
      email: currentEmail,
      gender: currentGender,
      birth: currentBirth,
      phone: currentPhone,
      nationality: currentNat,
      address: currentAdd,
      id: currentId,
      url: `/patient/${newId}`,
      img: currentImg,
    });
    history.push(`/patient/${newId}`);
  }
}
