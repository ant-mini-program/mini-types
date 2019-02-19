/**
 * @file 网络
 */
declare namespace my {
  interface IHttpRequestOption {
    url: string;
    headers?: Record<string, string>;
    method?: 'GET' | 'POST';
    data?: Record<string, any>;
    timeout?: number;
    dataType?: 'json' | 'text' | 'base64';
    success?(res: { data?: string; status?: 11 | 12 | 13 | 14 | 19, headers?: Record<string, string>; }): void;
    fail?(): void;
    complete?(): void;
  }

  function httpRequest(option: IHttpRequestOption): void;
}
