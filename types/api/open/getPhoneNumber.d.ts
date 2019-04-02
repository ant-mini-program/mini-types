/**
 * @file 获取用户手机号
 */
declare namespace my {
  interface IGetPhoneNumberSuccessResult {
    response: string;
  }

  interface IGetPhoneNumberOptions {
    success?(res: IGetPhoneNumberSuccessResult): void;
    fail?(res: any): void;
  }

  function getPhoneNumber(options: IGetPhoneNumberOptions): void;
}
