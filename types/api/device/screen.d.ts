/**
 * @file 屏幕亮度
 */
declare namespace my {
  interface ISetKeepScreenOnOptions {
    keepScreenOn: boolean;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(): void;
  }
  /**
   * 设置是否保持屏幕长亮状态。仅在当前小程序生效，离开小程序后失效。
   */
  function setKeepScreenOn(options: ISetKeepScreenOnOptions): void;

  interface IGetScreenBrightnessOptions {
    success?(res: any): void;
    fail?(res: any): void;
    complete?(): void;
  }
  /**
   * 获取屏幕亮度
   */
  function getScreenBrightness(options: IGetScreenBrightnessOptions): void;

  interface ISetScreenBrightnessOptions {
    brightness: number;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(): void;
  }
  /**
   * 设置屏幕亮度
   */
  function setScreenBrightness(options: ISetScreenBrightnessOptions): void;
}
