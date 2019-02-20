import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { defer, Observable } from 'rxjs';

/**
 *
 * Described the RxAx methods
 * @interface IRxAx
 */
interface IRxAx {
  config: (config: AxiosRequestConfig) => AxiosRequestConfig;
  request: <T = any>(config: AxiosRequestConfig) => Observable<AxiosResponse<T>>;
  get: <T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ) => Observable<AxiosResponse<T>>;
  delete: <T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ) => Observable<AxiosResponse<T>>;
  head: <T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ) => Observable<AxiosResponse<T>>;
  post: <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Observable<AxiosResponse<T>>;
  put: <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Observable<AxiosResponse<T>>;
  patch: <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Observable<AxiosResponse<T>>;
}

/**
 *
 *
 * @class RxAx
 * @implements {IRxAx}
 */
class RxAx implements IRxAx {
  constructor(private readonly instance: AxiosInstance = Axios) {}

  /**
   *
   * Return config for Axios
   *
   * @param {AxiosRequestConfig} config
   */
  public config(config: AxiosRequestConfig): AxiosRequestConfig {
    return config;
  }

  /**
   *
   * Request method
   *
   * @param {AxiosRequestConfig} config
   */
  public request<T = any>(config: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return defer(() => this.instance.request<T>(config));
  }

  /**
   *
   * Get method
   *
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   */
  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    return defer(() => this.instance.get<T>(url, config));
  }

  /**
   *
   * Delete method
   *
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   */
  public delete<T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    return defer(() => this.instance.delete(url, config));
  }

  /**
   *
   * Head method
   *
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   */
  public head<T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    return defer(() => this.instance.head(url, config));
  }

  /**
   *
   * Post method
   *
   * @param {string} url
   * @param {*} [data]
   * @param {AxiosRequestConfig} [config]
   */
  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    return defer(() => this.instance.post(url, data, config));
  }

  /**
   *
   * Put method
   *
   * @param {string} url
   * @param {*} [data]
   * @param {AxiosRequestConfig} [config]
   */
  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    return defer(() => this.instance.put(url, data, config));
  }

  /**
   *
   * Patch method
   *
   * @param {string} url
   * @param {*} [data]
   * @param {AxiosRequestConfig} [config]
   */
  public patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    return defer(() => this.instance.patch(url, data, config));
  }
}

/**
 *
 * The instance of the RxAx class
 * @exports RxAxInstance
 */
const RxAxInstance = new RxAx();

export { RxAx, IRxAx, RxAxInstance };
