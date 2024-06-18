import { ApiErrorResponse, ApiResponse, ApiSuccessResponse } from "./models/server.reponse";

const REQUEST_TIMEOUT_SECONDS = 30;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;
const TOKEN_STORAGE_KEY = "access_token";

const DEFAULT_FETCH_CONFIG: RequestInit = {
  mode: "cors",
  // credentials: "include", //Enable when cookies need to be sent
  headers: {
    "Content-Type": "application/json",
  },
};

class Client {
  private _configWithToken(): RequestInit {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    return {
      ...DEFAULT_FETCH_CONFIG,
      headers: {
        ...DEFAULT_FETCH_CONFIG.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }

  private async _execRequest<Res, Err>(
    url: string,
    init: RequestInit
  ): Promise<ApiResponse<Res, Err>> {
    const controller = new AbortController();
    const { signal } = controller;

    setTimeout(() => {
      controller.abort();
    }, REQUEST_TIMEOUT_SECONDS * 1000);

    const response = await fetch(url, { ...init, signal });
    const json = await response.json();
    if (response.ok) {
      return json as ApiSuccessResponse<Res>;
    }
    return json as ApiErrorResponse<Err>;
  }

  /**
   * Performs GET Request, provide generic parameters to get typed response
   *
   * `Res` : Type of data when request is successful
   *
   * `Err` : Type of messages array item property when request is unsuccessful
   * @param path url path, starts with `/`
   * @param includeToken flag indicating whether to include token in `Autorization` header sent to server
   * @returns returns result of GET operation on resource
   */
  async get<Res, Err>(path: string, includeToken = true) {
    const url = `${API_BASE_URL}${path}`;
    const init = includeToken ? this._configWithToken() : DEFAULT_FETCH_CONFIG;
    return this._execRequest<Res, Err>(url, init);
  }

  /**
   * Performs POST Request, provide generic parameters to get typed response,
   *
   * `Req` : Type of request body payload
   *
   * `Res` : Type of data property when request is successful
   *
   * `Err` : Type of messages array item property when request is unsuccessful
   * @param path url path, starts with `/`
   * @param body request body, body will be serialized to json before sending
   * @param includeToken default is true, flag indicating whether to include token in `Autorization` header sent to server
   * @returns returns result of POST operation on resource
   */
  async post<Req, Res, Err>(path: string, body: Req, includeToken = true) {
    const url = `${API_BASE_URL}${path}`;
    const config = includeToken ? this._configWithToken() : DEFAULT_FETCH_CONFIG;
    const init: RequestInit = {
      ...config,
      body: JSON.stringify(body),
      method: "POST",
    };
    return this._execRequest<Res, Err>(url, init);
  }

  /**
   * Performs PUT Request, provide generic parameters to get typed response,
   * `Req` : Type of request body payload
   *
   * `Res` : Type of data property when request is successful
   *
   * `Err` : Type of messages array item property when request is unsuccessful
   * @param path url path, starts with `/`
   * @param body request body, body will be serialized to json before sending
   * @param includeToken default is true, flag indicating whether to include token in `Autorization` header sent to server
   * @returns returns result of PUT operation on resource
   */
  async put<Req, Res, Err>(path: string, body: Req, includeToken = true) {
    const url = `${API_BASE_URL}${path}`;
    const config = includeToken ? this._configWithToken() : DEFAULT_FETCH_CONFIG;
    const init: RequestInit = {
      ...config,
      body: JSON.stringify(body),
      method: "PUT",
    };
    return this._execRequest<Res, Err>(url, init);
  }

  /**
   * Performs PATCH Request, provide generic parameters to get typed response,
   * `Req` : Type of request body payload
   *
   * `Res` : Type of data property when request is successful
   *
   * `Err` : Type of messages array item property when request is unsuccessful
   * @param path url path, starts with `/`
   * @param body request body, body will be serialized to json before sending
   * @param includeToken default is true, flag indicating whether to include token in `Autorization` header sent to server
   * @returns returns result of PATCH operation on resource
   */
  async patch<Req, Res, Err>(path: string, body: Req, includeToken = true) {
    const url = `${API_BASE_URL}${path}`;
    const config = includeToken ? this._configWithToken() : DEFAULT_FETCH_CONFIG;
    const init: RequestInit = {
      ...config,
      body: JSON.stringify(body),
      method: "PATCH",
    };
    return this._execRequest<Res, Err>(url, init);
  }

  /**
   * Performs Delete Request, provide generic parameters to get typed response -
   *
   * `Res` : Type of data property when request is successful
   *
   * `Err` : Type of messages array item property when request is unsuccessful
   * @param path url path, starts with `/`
   * @param includeToken default is true, flag indicating whether to include token in `Autorization` header sent to server
   * @returns returns result of DELETE operation on resource
   */
  async delete<Res, Err>(path: string, includeToken = true) {
    const url = `${API_BASE_URL}${path}`;
    const init = includeToken ? this._configWithToken() : DEFAULT_FETCH_CONFIG;
    return this._execRequest<Res, Err>(url, { ...init, method: "DELETE" });
  }
}

const client = new Client();
export default client;
