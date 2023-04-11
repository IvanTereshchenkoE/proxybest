import axios from "axios";

import { mainUrl } from "../baseUrls/mainUrl";

const postAuth = (data) =>
  axios({
    
    method: "post",
    url: "https://proxydbtest.proxyline.net/projectapi/v1/1/auth-user/",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin" : "",
      apikey: "project-1-apikey",
    },
    data,
  });

export default postAuth;
