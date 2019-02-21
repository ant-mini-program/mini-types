/**
 * @file 系统信息
 */
declare namespace my {
  interface IGetSystemInfoResult {
    /**
     * 用户设置字体大小
     */
    fontSizeSetting: number;
    /**
     * 系统版本
     */
    system: string;
    /**
     * 支付宝版本号
     */
    version: string;
    /**
     * 手机品牌
     */
    brand: string;
    /**
     * 当前电量百分比
     */
    currentBattery: string;
    /**
     * 窗口高度
     */
    windowHeight: number;
    /**
     * 设备像素比
     */
    pixelRatio: number;
    /**
     * 系统名：Android，iOS
     */
    platform: 'Android' | 'iOS';
    /**
     * 屏幕高度
     */
    screenHeight: number;
    statusBarHeight: number;
    /**
     * 支付宝设置的语言
     */
    language: string;
    /**
     * 设备磁盘容量
     */
    storage: string;
    /**
     * 当前运行的客户端，当前是支付宝则有效值是"alipay"
     */
    app: string;
    titleBarHeight: number;
    /**
     * 手机型号
     */
    model: string;
    /**
     * 屏幕宽度
     */
    screenWidth: number;
    /**
     * 窗口宽度
     */
    windowWidth: number;
  }

  interface IGetSystemInfoOptions {
    /**
     * 接口调用成功的回调
     */
    success?(res?: IGetSystemInfoResult): void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * 获取系统信息。
   */
  function getSystemInfo(options: IGetSystemInfoOptions): void;

  function getSystemInfoSync(): IGetSystemInfoResult;
}
