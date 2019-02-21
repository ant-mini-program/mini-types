/**
 * @file 震动
 */
declare namespace my {
  /**
   * 调用振动功能。
   */
  function vibrate(option: { success(): void; }): void;

  /**
   * 较长时间的振动 (400ms)。
   */
  function vibrateLong(option: { success(): void; }): void;

  /**
   * 较短时间的振动 (40ms)。
   */
  function vibrateShort(option: { success(): void; }): void;
}
