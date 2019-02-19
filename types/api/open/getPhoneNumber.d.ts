/**
 * @file 获取用户手机号
 */
declare namespace my {
  interface IGetPhoneNumberOption {
    success?(res: { response: string; }): void;
    fail?(res: any): void;
  }

  function getPhoneNumber(option: IGetPhoneNumberOption): void;
}
