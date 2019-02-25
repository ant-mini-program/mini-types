/**
 * @file 获取服务器时间
 */
declare namespace my {
  /**
   * 获取当前服务器时间的毫秒数。
   */
  function getServerTime(options: {
    success?(res: { time: number; }): void;
    fail?(): void;
    complete?(): void;
  }): void;
}
