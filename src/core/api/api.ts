import axios, { AxiosRequestConfig } from 'axios';
import { getAccessToken, getRefreshToken, logout, setTokens } from './auth';
import qs from 'qs';

function paramsSerializer(params: unknown): string {
  return qs.stringify(params);
}

const initialConfig: AxiosRequestConfig = Object.freeze({
  baseURL: import.meta.env.BASE_URL,
  timeout: 0,
  paramsSerializer: paramsSerializer,
});

/**
 * set base url for api
 * @param baseUrl string
 */
function setBaseUrl(baseUrl: string): void {
  api.defaults.baseURL = baseUrl;
}

/** The API */
export const api = createApiInstance(getAccessToken({ bearer: true }));

api.interceptors.response.use(
  (result) => result,
  async (error) => {
    // Server does not response
    if (error === undefined) throw error;

    if (error.response?.status === 401 && !getAccessToken()) {
      logout();
      return;
    }

    if (
      error.response?.status === 401 &&
      !error.request?.responseURL?.endsWith('/api/auth/login')
    ) {
      // 401 Unauthorized
      try {
        // Get next access token
        const { token } = await updateToken();

        // Retry failed request
        const retryConfig = {
          ...error.config,
          headers: { ...error.config.headers, Authorization: `Bearer ${token}` },
        };

        return api(retryConfig);
      } catch (error) {
        logout();
        return;
      }
    } else if (error) {
      const e = { ...error.response?.data, status: error.response?.status };
      throw e;
    }

    throw error;
  },
);

function createApiInstance(bearerJwt = '') {
  const api = axios.create({
    ...initialConfig,
  });
  api.defaults.headers.common['Authorization'] = bearerJwt;
  return api;
}

/**
 * Refresh the `token` and update the API's header.
 */
export async function updateToken(): Promise<{ token: string; refreshToken: string }> {
  const refreshApi = createApiInstance(getRefreshToken({ bearer: true }));

  try {
    const result = await refreshApi({
      url: `${import.meta.env.BASE_URL}/api/refresh-token`,
      method: 'get',
    });
    const { token, refreshToken } = result.data;
    setTokens(token, refreshToken);
    return result.data;
  } catch (error) {
    logout();
    console.log(error);
    throw error;
  }
}

/**
 * Set bearer token to the API.
 * @param token A JWT. Not bearer.
 */
function setApiJwt(token: string): void {
  const bearerToken = `Bearer ${token}`;
  api.defaults.headers.common.Authorization = bearerToken;
}

export { setBaseUrl, setApiJwt };

export default api;
