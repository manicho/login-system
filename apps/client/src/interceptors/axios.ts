import axios from "axios";

const api_base_url = import.meta.env.VITE_API_BASE_URL;
axios.defaults.baseURL = `${api_base_url}/api`;

let refresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      const response = await axios.post(
        "refresh",
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;

        return axios(error.config);
      }
    }
    refresh = false;
    return error;
  }
);
