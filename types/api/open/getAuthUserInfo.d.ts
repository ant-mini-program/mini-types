/**
 * @file 客户端获取会员信息
 */
declare namespace my {
  interface IGetAuthUserInfoSuccessResult {
    /**
     * 用户昵称
     */
    readonly nickName: string;

    /**
     * 用户头像链接
     */
    readonly avatar: string;
  }

  interface IGetAuthUserInfoOptions {
    /**
     * 调用成功的回调函数
     */
    success?(result: IGetAuthUserInfoSuccessResult): void;

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
   * 客户端获取会员信息。
   * @deprecated 对于 2019 年 5 月 25 日及以后创建的小程序，已不再支持使用此接口。建议查看升级后的 my.getOpenUserInfo 接口文档。
   */
  function getAuthUserInfo(options: IGetAuthUserInfoOptions): void;
}
