import { gedInformationType, informationType } from 'src/constance/information';
import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const information = async (access_token: string, informationRequest: informationType) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    let grade = '';
    if (informationRequest.stdNumber.length === 1) {
      grade = `${informationRequest.stdGrade}${informationRequest.stdClass}0${informationRequest.stdNumber}`;
    } else
      grade = `${informationRequest.stdGrade}${informationRequest.stdClass}${informationRequest.stdNumber}`;
    let birthDay = '';
    if (informationRequest.birthMonth < 10) {
      if (informationRequest.birthDate < 10)
        birthDay = `${informationRequest.birthYear}0${informationRequest.birthMonth}0${informationRequest.birthDate}`;
      else
        birthDay = `${informationRequest.birthYear}0${informationRequest.birthMonth}${informationRequest.birthDate}`;
    } else {
      if (informationRequest.birthDate < 10)
        birthDay = `${informationRequest.birthYear}${informationRequest.birthMonth}0${informationRequest.birthDate}`;
      else
        birthDay = `${informationRequest.birthYear}${informationRequest.birthMonth}${informationRequest.birthDate}`;
    }
    return await request.patch(uri.information, {
      name: informationRequest.name,
      sex: informationRequest.gender,
      birthday: birthDay,
      school_code: informationRequest.schoolCode,
      school_tel: informationRequest.schoolPhoneNumber,
      parent_name: informationRequest.parentName,
      parent_tel: informationRequest.parentPhoneNumber,
      telephone_number: informationRequest.phoneNumber,
      home_tel: informationRequest.homePhoneNumber,
      address: informationRequest.baseAddress,
      detail_address: informationRequest.detailAddress,
      post_code: informationRequest.zipCode,
      student_number: grade,
    });
  } catch (error) {
    throw error;
  }
};

export const gedInformation = async (
  access_token: string,
  gedInformationRequest: gedInformationType,
) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    let birthDay = '';
    if (gedInformationRequest.birthMonth < 10) {
      if (gedInformationRequest.birthDate < 10)
        birthDay = `${gedInformationRequest.birthYear}0${gedInformationRequest.birthMonth}0${gedInformationRequest.birthDate}`;
      else
        birthDay = `${gedInformationRequest.birthYear}0${gedInformationRequest.birthMonth}${gedInformationRequest.birthDate}`;
    } else {
      if (gedInformationRequest.birthDate < 10)
        birthDay = `${gedInformationRequest.birthYear}${gedInformationRequest.birthMonth}0${gedInformationRequest.birthDate}`;
      else
        birthDay = `${gedInformationRequest.birthYear}${gedInformationRequest.birthMonth}${gedInformationRequest.birthDate}`;
    }
    await request.patch(uri.gedInformation, {
      name: gedInformationRequest.name,
      sex: gedInformationRequest.gender,
      birthday: birthDay,
      parent_name: gedInformationRequest.parentName,
      parent_tel: gedInformationRequest.parentPhoneNumber,
      telephone_number: gedInformationRequest.phoneNumber,
      home_tel: gedInformationRequest.homePhoneNumber,
      address: gedInformationRequest.baseAddress,
      detail_address: gedInformationRequest.detailAddress,
      post_code: gedInformationRequest.zipCode,
      average_score: Number((gedInformationRequest.totalScore / 6).toFixed(2)),
    });
  } catch (error) {
    throw error;
  }
};

export const autoSaveInformation = async (
  access_token: string,
  informationRequest: informationType,
) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    let grade = '';
    if (informationRequest.stdNumber.length === 1) {
      grade = `${informationRequest.stdGrade}${informationRequest.stdClass}0${informationRequest.stdNumber}`;
    } else
      grade = `${informationRequest.stdGrade}${informationRequest.stdClass}${informationRequest.stdNumber}`;
    let birthDay = '';
    if (informationRequest.birthMonth < 10) {
      if (informationRequest.birthDate < 10)
        birthDay = `${informationRequest.birthYear}0${informationRequest.birthMonth}0${informationRequest.birthDate}`;
      else
        birthDay = `${informationRequest.birthYear}0${informationRequest.birthMonth}${informationRequest.birthDate}`;
    } else {
      if (informationRequest.birthDate < 10)
        birthDay = `${informationRequest.birthYear}${informationRequest.birthMonth}0${informationRequest.birthDate}`;
      else
        birthDay = `${informationRequest.birthYear}${informationRequest.birthMonth}${informationRequest.birthDate}`;
    }
    return await request.patch(uri.information, {
      name: informationRequest.name,
      sex: informationRequest.gender,
      birthday: birthDay,
      school_code: informationRequest.schoolCode,
      school_tel: informationRequest.schoolPhoneNumber,
      parent_name: informationRequest.parentName,
      parent_tel: informationRequest.parentPhoneNumber,
      telephone_number: informationRequest.phoneNumber,
      home_tel: informationRequest.homePhoneNumber,
      address: informationRequest.baseAddress,
      detail_address: informationRequest.detailAddress,
      post_code: informationRequest.zipCode,
      student_number: grade,
    });
  } catch (error) {
    throw error;
  }
};

export const getInformation = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.information);
  } catch (error) {
    throw error;
  }
};

export const getGedInformation = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return console.log(await request.get(uri.gedInformation));
  } catch (error) {
    throw error;
  }
};

export const informationImage = async (access_token: string, informationImageRequest: File) => {
  const formData = new FormData();
  formData.append('file', informationImageRequest);
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.post(uri.informationImage, formData);
  } catch (error) {
    throw error;
  }
};

export const searchSchool = async (access_token: string, searchSchoolRequest) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(
      `${uri.searchSchool}?name=${encodeURI(searchSchoolRequest.schoolSearchName)}&size=${
        searchSchoolRequest.size
      }&page=${searchSchoolRequest.page}`,
    );
  } catch (error) {
    throw error;
  }
};

export const autoSaveGedInformation = async (
  access_token: string,
  informationRequest: gedInformationType,
) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    let birthDay = '';
    if (informationRequest.birthMonth < 10) {
      if (informationRequest.birthDate < 10)
        birthDay = `${informationRequest.birthYear}0${informationRequest.birthMonth}0${informationRequest.birthDate}`;
      else
        birthDay = `${informationRequest.birthYear}0${informationRequest.birthMonth}${informationRequest.birthDate}`;
    } else {
      if (informationRequest.birthDate < 10)
        birthDay = `${informationRequest.birthYear}${informationRequest.birthMonth}0${informationRequest.birthDate}`;
      else
        birthDay = `${informationRequest.birthYear}${informationRequest.birthMonth}${informationRequest.birthDate}`;
    }
    return await request.patch(uri.information, {
      name: informationRequest.name,
      sex: informationRequest.gender,
      birthday: birthDay,
      totalScore: informationRequest.totalScore,
      parent_name: informationRequest.parentName,
      parent_tel: informationRequest.parentPhoneNumber,
      telephone_number: informationRequest.phoneNumber,
      home_tel: informationRequest.homePhoneNumber,
      address: informationRequest.baseAddress,
      detail_address: informationRequest.detailAddress,
      post_code: informationRequest.zipCode,
    });
  } catch (error) {
    throw error;
  }
};
