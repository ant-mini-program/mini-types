/**
 * @file 网络
 */
declare namespace my {
  interface IHttpRequestSuccessResult {
    data?: any;
    status?: 11 | 12 | 13 | 14 | 19;
    headers?: Record<string, string>;
  }

  interface IHttpRequestOptions {
    url: string;
    headers?: Record<string, string>;
    method?: 'GET' | 'POST';
    data?: Record<string, any>;
    timeout?: number;
    dataType?: 'json' | 'text' | 'base64';
    success?(res: IHttpRequestSuccessResult): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }

  function httpRequest(options: IHttpRequestOptions): void;

  interface IUploadFileResult {
    /**
     * 开发者服务器返回的数据
     */
    data: string;

    /**
     * HTTP状态码
     */
    statusCode: number;

    /**
     * 服务器返回的 header
     */
    header: Record<string, string>;
  }

  interface IUploadFileOptions {
    /**
     * 开发者服务器 url
     */
    url: string;

    /**
     * 要上传文件资源的路径
     */
    filePath: string;

    /**
     * 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
     */
    fileName: string;

    /**
     * 文件类型，image / video / audio
     */
    fileType?: 'image' | 'video' | 'audio';

    /**
     * HTTP 请求 Header , header 中不能设置 Referer
     */
    header?: Record<string, string>;

    /**
     * HTTP 请求中其他额外的 form data
     */
    formData?: Record<string, any>;

    /**
     * 收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}
     */
    success?: (res?: IUploadFileResult) => void;

    fail?(res: { error: 11 | 12 | 13 }): void;

    complete?(): void;
  }

  /**
   * 将本地资源上传到开发者服务器。
   * 如页面通过 [my.chooseImage](#my.chooseImage) 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。
   * 客户端发起一个 HTTPS POST 请求，其中 `Content-Type` 为 `multipart/form-data` 。
   */
  function uploadFile(options: IUploadFileOptions): void;

  interface IDownloadFileResult {
    /**
     * 文件的临时路径
     */
    tempFilePath: string;
  }

  interface IDownloadFileOptions {
    /**
     * 下载资源的 url
     */
    url: string;

    /**
     * HTTP 请求 Header
     */
    header?: Record<string, string>;

    /**
     * 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}
     */
    success?: (res?: IDownloadFileResult) => void;

    fail?(res: { error: 12 | 13 }): void;

    complete?(): void;
  }

  /**
   * 下载文件资源到本地。
   * 客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。
   */
  function downloadFile(options: IDownloadFileOptions): void;

  interface IConnectSocketOptions {
    /**
     * 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
     */
    url: string;

    /**
     * 请求的数据
     */
    data?: string;

    /**
     * HTTP Header , header 中不能设置 Referer
     */
    header?: Record<string, string>;

    /**
     * 默认是GET，有效值为： OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     */
    method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

    success?(): void;

    fail?(): void;

    complete?(): void;
  }

  /**
   * 创建一个 [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket?t=1477656499061) 连接；
   * **一个支付宝小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接**。
   */
  function connectSocket(options: IConnectSocketOptions): void;

  /**
   * 监听WebSocket连接打开事件。
   */
  function onSocketOpen(callback: (res?: any) => void): void;

  /**
   * 监听WebSocket错误。
   */
  function onSocketError(callback: (res?: any) => void): void;

  interface ISendSocketMessageOptions {
    /**
     * 需要发送的内容
     */
    data: string | any[];

    success?(): void;

    fail?(): void;

    complete?(): void;
  }

  /**
   * 通过 WebSocket 连接发送数据，需要先 [my.connectSocket](#my.connectSocket)，并在 [my.onSocketOpen](#my.onSocketOpen) 回调之后才能发送。
   */
  function sendSocketMessage(options: ISendSocketMessageOptions): void;

  interface ISocketMessageResponse {
    /**
     * 服务器返回的消息
     */
    data: string | any[];
  }

  /**
   * 监听WebSocket接受到服务器的消息事件。
   */
  function onSocketMessage(
    callback: (res?: ISocketMessageResponse) => void
  ): void;

  /**
   * 关闭WebSocket连接。
   */
  function closeSocket(): void;

  /**
   * 监听WebSocket关闭。
   */
  function onSocketClose(callback: (res?: any) => void): void;

  /**
   * 取消监听WebSocket关闭。
   */
  function offSocketClose(): void;
}
