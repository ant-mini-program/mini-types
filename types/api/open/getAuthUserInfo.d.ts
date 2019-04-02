/**
 * @file 客户端获取会员信息
 */
declare namespace my {
  interface IGetAuthUserInfoSuccessResult {
    nickName: string;
    avatar: string;
  }
  interface IGetAuthUserInfoOptions {
    success?(result: IGetAuthUserInfoSuccessResult): void;
    fail?(): void;
    complete?(): void;
  }
  function getAuthUserInfo(options: IGetAuthUserInfoOptions): void;
}
