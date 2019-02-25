/**
 * @file 获取用户手机号
 */
declare namespace my {
  interface IGetPhoneNumberOptions {
    success?(res: { response: string; }): void;
    fail?(res: any): void;
  }

  function getPhoneNumber(options: IGetPhoneNumberOptions): void;
}
