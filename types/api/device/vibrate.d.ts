/**
 * @file 震动
 */
declare namespace my {
  /**
   * 调用振动功能。
   */
  function vibrate(options: { success(): void; }): void;

  /**
   * 较长时间的振动 (400ms)。
   */
  function vibrateLong(options: { success(): void; }): void;

  /**
   * 较短时间的振动 (40ms)。
   */
  function vibrateShort(options: { success(): void; }): void;
}
