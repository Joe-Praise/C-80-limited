import AxiosInstance from "./config";
import axios, {
  AxiosRequestConfig,
} from "axios";

let isOnline = (): boolean => navigator.onLine;
let delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetch<T>(
  method: "get" | "post" | "patch" | "put" | "delete",
  url: string,
  data?: any,
  has_token: boolean = true,
  config?: AxiosRequestConfig,
  timeout = 20000,
  retryDelay = 2000
): Promise<T> {
  try {
    let controller = new AbortController();
    let id = setTimeout(() => controller.abort(), timeout);

    let response = await AxiosInstance.request<T>({
      method,
      url,
      data,
      ...config,
      signal: controller.signal,
    });
    
   
    clearTimeout(id);

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.code === "ECONNABORTED") {
      //   console.log("Request timed out, retrying in 2 seconds...");
    } else {
      if (process.env.NEXT_PUBLIC_MODE === "dev") {
        console.log("An error occurred:", error?.response);
      }
      //   throw error;
    }

    // await delay(retryDelay);
    return error?.response?.data;
  }
  //   break
  // }
}

function fnGet<T>(
  url: string,
  has_token: boolean = true,
  config?: AxiosRequestConfig
) {
  return fetch<T>("get", url, null, has_token, config);
}
function fnPost<T>(
  url: string,
  data?: any,
  has_token: boolean = true,
  config?: AxiosRequestConfig
) {
  return fetch<T>("post", url, data, has_token, config);
}
function fnPut<T>(
  url: string,
  data?: any,
  has_token: boolean = true,
  config?: AxiosRequestConfig
) {
  return fetch<T>("put", url, data, has_token, config);
}
function fnPatch<T>(
  url: string,
  data?: any,
  has_token: boolean = true,
  config?: AxiosRequestConfig
) {
  return fetch<T>("patch", url, data, has_token, config);
}
function fnDel<T>(
  url: string,
  has_token: boolean = true,
  config?: AxiosRequestConfig
) {
  return fetch<T>("delete", url, null, has_token, config);
}

const Axios = {
  get: fnGet,
  post: fnPost,
  put: fnPut,
  patch: fnPatch,
  delete: fnDel,
};

export default Axios