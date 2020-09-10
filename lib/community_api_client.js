const axios = require("axios");

exports.getServiceUserDetailsByCRN = async function (crn, authToken) {
  try {
    const response = await axios.get(
      `http://localhost:8096/secure/offenders/crn/${crn}/all`,
      {
        headers: {
          "Content-Type": "application / json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
