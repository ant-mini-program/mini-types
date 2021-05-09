/**
 * @file 扫码
 */
declare namespace my {
  /**
   * 扫码识别类型，默认值为 ['qrCode','barCode']
   * 二维码 | 条码 | DM码 | PDF417码 | 窄条二维码 | 异构码
   */
  type IScanType = 'qrCode' | 'barCode' | 'dmCode' | 'pdf417Code' | 'narrowCode' | 'hmCode';

  interface IScanSuccessResult {
    /**
     * 扫码所得数据
     */
    readonly code: string;

    /**
     * 扫描二维码时返回二维码数据
     */
    readonly qrCode: string;

    /**
     * 扫描条形码时返回条形码数据
     */
    readonly barCode: string;

    /**
     * 码类型。
     */
    readonly scanType: string;

    /**
     * 码内容。
     */
    readonly result: string;

    /**
     * 来源。
     */
    readonly imageChannel: string;

    /**
     * Base64 字节流。
     */
    readonly rawData: string;
  }

  interface IScanFailResult {
    /**
     * 1. 10，用户取消；
     * 2. 11，操作失败。
     */
    readonly error: 10 | 11;
  }

  interface IScanOptions {
    /**
     * @deprecated
     * 扫码样式(默认 qr)：
     * 1. qr，扫码框样式为二维码扫码框；
     * 2. bar，扫码样式为条形码扫码框。
     */
    type?: 'qr' | 'bar';

    /**
     * 扫码识别类型，默认值为 ['qrCode','barCode']。
     * 可选值：
     * 二维码：'qrCode'。
     * 条码：'barCode'。
     * DM码：'dmCode'。
     * PDF417码：'pdf417Code'。
     * 窄条二维码：'narrowCode'。
     * 异构码：'hmCode'。
     */
    scanType?: IScanType[];

    /**
     * 是否隐藏相册（不允许从相册选择图片），只能从相机扫码
     */
    hideAlbum?: boolean;

    /**
     * 调用成功的回调函数
     */
    success?(res: IScanSuccessResult): void;

    /**
     * 调用失败的回调函数
     */
    fail?(res: IScanFailResult): void;

    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(res: IScanSuccessResult | IScanFailResult): void;
  }

  /**
   * 调用扫一扫功能。
   */
  function scan(options: IScanOptions): void;
}
