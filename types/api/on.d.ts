/**
 * @file 监听特殊事件
 */
declare namespace my {
  /**
   * 监听特殊事件
   * @param eventName 时间名称
   * @param callback 回调函数
   */
  function on(eventName: string, callback: (res?: any) => void): void;
}
