import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { defer, Observable } from 'rxjs';

/**
 *
 * Described the RxAx methods
 * @interface IRxAx
 */
interface IRxAx {
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
  public static rxAxConfig: AxiosRequestConfig;

  constructor(private readonly instance: AxiosInstance = Axios) {}

  public request<T = any>(config: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return defer(() => this.instance.request<T>(config));
  }

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    return defer(() => this.instance.get<T>(url, config));
  }

  public delete<T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    return defer(() => this.instance.delete(url, config));
  }

  public head<T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    return defer(() => this.instance.head(url, config));
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    return defer(() => this.instance.post(url, data, config));
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    return defer(() => this.instance.put(url, data, config));
  }

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
