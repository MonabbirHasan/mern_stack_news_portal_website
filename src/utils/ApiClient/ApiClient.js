import axios from "axios";
class ApiClient {
  constructor(baseApiUrl) {
    this.baseApiUrl = baseApiUrl;
  }
  async create(resource, data, accessToken) {
    const response = await axios.post(`${this.baseApiUrl}/${resource}`, data, {
      headers: {
        Authorization: accessToken,
      },
    });
    return response;
  }
  async read(resource, accessToken) {
    const response = await axios.get(`${this.baseApiUrl}/${resource}`, {
      headers: {
        Authorization: accessToken,
      },
    });
    return response;
  }

  async update(resource, data, accessToken) {
    const response = await axios.patch(`${this.baseApiUrl}/${resource}`, data, {
      headers: {
        Authorization: accessToken,
      },
    });
    return response;
  }

  async delete(resource, accessToken) {
    const response = await axios.delete(`${this.baseApiUrl}/${resource}`, {
      headers: {
        Authorization: accessToken,
      },
    });
    return response;
  }
}
export default ApiClient;
