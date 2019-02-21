/**
 * @file 剪贴板
 */
declare namespace my {
  interface IClipboardOption {
    success?(test: string): void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * 获取剪贴板数据。
   */
  function getClipboard(option: IClipboardOption): void;

  /**
   * 设置剪贴板数据。
   */
  function setClipboard(option: IClipboardOption & { text: string; }): void;
}
