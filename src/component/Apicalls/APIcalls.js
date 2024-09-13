import axios from "axios";
let baseUrl = "http://localhost:4000/LoginInfo";

function getData() {
  let data;
  axios.get(baseUrl).then((res) => {
    console.log(res);
  });
  return getData();
}

export { getData };
