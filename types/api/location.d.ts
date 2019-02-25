/**
 * @file 位置
 */
declare namespace my {
  interface ILocation {
    /**
     * 纬度，浮点数，范围为-90~90，负数表示南纬
     */
    latitude: number;

    /**
     * 经度，浮点数，范围为-180~180，负数表示西经
     */
    longitude: number;
  }

  interface IGetLocationResult extends ILocation {
    /**
     * 速度，浮点数，单位m/s
     */
    speed: number;

    /**
     * 位置的精确度
     */
    accuracy: number;
  }

  interface IGetLocationOptions {
    /**
     * 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 `my.openLocation` 的坐标
     */
    type?: string;

    /**
     * 接口调用成功的回调函数
     */
    success?: (res?: IGetLocationResult) => void;

    fail?(): void;

    complete?(): void;
  }

  /**
   * 获取当前的地理位置、速度。
   */
  function getLocation(options: IGetLocationOptions): void;

  interface IChooseLocationResult extends ILocation {
    /**
     * 位置名称
     */
    name: string;

    /**
     * 详细地址
     */
    address: string;
  }

  interface IChooseLocationOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (res?: IChooseLocationResult) => void;

    fail?(): void;

    complete?(): void;
  }

  /**
   * 打开地图选择位置
   */
  function chooseLocation(options: IChooseLocationOptions): void;

  interface IOpenLocationOptions extends ILocation {
    /**
     * 缩放比例，范围1~28，默认为28
     */
    scale?: number;

    /**
     * 位置名
     */
    name?: string;

    /**
     * 地址的详细说明
     */
    address?: string;

    success?(): void;

    fail?(): void;

    complete?(): void;
  }

  /**
   * 使用支付宝内置地图查看位置
   */
  function openLocation(options: IOpenLocationOptions): void;
}
