/**
 * @file 陀螺仪
 */
declare namespace my {
  /**
   * 监听陀螺仪数据变化事件，接口调用后会自动开始监听，回调间隔为500ms，可使用my.offGyroscopeChange()停止监听。
   */
  function onGyroscopeChange(cb: (res: { x: number; y: number; z: number; }) => void): void;

  /**
   * 停止监听陀螺仪数据。
   */
  function offGyroscopeChange(): void;
}
