const axios = require("axios");

exports.getHMPPSAuthToken = async function () {
  try {
    const response = await axios.post(
      "http://localhost:8090/auth/oauth/token?grant_type=client_credentials&scope=",
      {},
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            "prisonstaffhubclient:clientsecret",
            "utf8"
          ).toString("base64")}`,
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error(error);
  }
};
