/**
 * @file 芝麻认证
 */
declare namespace my {
  interface IStartZMVerifySuccessResult {
    token: string;
    passed: string;
    reason?: string;
  }

  interface IStartZMVerifyOptions {
    bizNo: string;
    success?(res: IStartZMVerifySuccessResult): void;
    fail?(res: any): void;
    complete?(): void;
  }
  /**
   * 芝麻认证接口，调用此接口可以唤起芝麻认证页面并进行人脸身份验证。
   */
  function startZMVerify(options: IStartZMVerifyOptions): void;
}
