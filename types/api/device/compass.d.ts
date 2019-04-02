/**
 * @file 罗盘
 */
declare namespace my {
  interface IOnCompassChangeEvent {
    direction: number;
  }
  /**
   * 监听罗盘数据，接口调用后会自动开始监听，回调间隔为500ms，可使用my.offCompassChange停止监听。
   */
  function onCompassChange(cb: (res: IOnCompassChangeEvent) => void): void;

  /**
   * 停止监听罗盘数据。
   */
  function offCompassChange(): void;
}
