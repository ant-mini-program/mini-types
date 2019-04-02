/**
 * @file 获取服务器时间
 */
declare namespace my {
  interface IGetServerTimeSuccessResult {
    time: number;
  }
  interface IGetServerTimeOptions {
    success?(res: IGetServerTimeSuccessResult): void;
    fail?(): void;
    complete?(): void;
  }
  /**
   * 获取当前服务器时间的毫秒数。
   */
  function getServerTime(options: IGetServerTimeOptions): void;
}
