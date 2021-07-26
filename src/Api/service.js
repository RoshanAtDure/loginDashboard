import axios from "axios";

const mainURL = "https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/";

let header = { "Content-Type": "application/json" };

class RestServices {
  getRequest(url) {
    return axios({
      method: "get",
      url: mainURL + url,
      headers: header,
    }).then((response) => {
      return Promise.resolve(response);
    }).catch((error) => {
      console.log("getRequest err>>", error);
      return Promise.reject(error.message);
    });
  }
  postRequest(url, data, customheaders) {
    return axios({
      method: "post",
      url: mainURL + url,
      headers: header,
      data: data,
    }).then((response) => {
      return Promise.resolve(response);
    }).catch((error) => {
      console.log(error);

      return Promise.reject(error.message);
    });
  }

}

const service = new RestServices();
export default service;
