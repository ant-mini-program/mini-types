/**
 * @file 剪贴板
 */
declare namespace my {
  interface IClipboardOptions {
    success?(test: string): void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * 获取剪贴板数据。
   */
  function getClipboard(options: IClipboardOptions): void;

  /**
   * 设置剪贴板数据。
   */
  function setClipboard(options: IClipboardOptions & { text: string; }): void;
}
