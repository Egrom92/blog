import HttpClient from "./HttpClient";

const hc = new HttpClient({
  host: '127.0.0.1:8000/',
  api: 'api/V1'
});

export default hc;
