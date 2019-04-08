/**
 * @file 用户授权
 */
declare namespace my {
  type GetAuthCodeOptionsScope = 'auth_base' | 'auth_user' | 'auth_zhima';

  interface IGetAuthCodeSuccessResult {
    /**
     * 授权码
     */
    authCode: string;

    /**
     * 失败的授权类型，key是授权失败的 scope，value 是对应的错误码
     */
    authErrorScope: Record<GetAuthCodeOptionsScope, any>;

    /**
     * 成功的授权 scope
     */
    authSuccessScope: Record<GetAuthCodeOptionsScope, any>;
  }

  interface IGetAuthCodeOptions {
    /**
     * 授权类型，默认 auth_base。支持 auth_base（静默授权）/ auth_user（主动授权） / auth_zhima（芝麻信用）
     */
    scopes?: GetAuthCodeOptionsScope | GetAuthCodeOptionsScope[];

    /**
     * 调用成功的回调函数
     *
     * @param result
     */
    success?(result: IGetAuthCodeSuccessResult): void;

    /**
     * 调用失败的回调函数
     */
    fail?(): void;

    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(): void;
  }

  /**
   * 获取授权码。
   *
   * @param options
   */
  function getAuthCode(options: IGetAuthCodeOptions): void;
}
