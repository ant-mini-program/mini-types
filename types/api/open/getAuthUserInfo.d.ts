/**
 * @file 客户端获取会员信息
 */
declare namespace my {
  interface IGetAuthUserInfo {
    success?(result: { nickName: string; avatar: string; }): void;
    fail?(): void;
    complete?(): void;
  }
  function getAuthUserInfo(): void;
}
