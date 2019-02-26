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

  interface IGetLocationResult {
    cityAdcode?: string;
    countryCode?: string;
    province?: string;
    districtAdcode?: string;
    pois?: Array<{ name: string; address: string; }>;
    city?: string;
    district?: string;
    streetNumber?: {
      street: string;
      number: string;
    };
    country?: string;
    bearing: string;
    latitude: string;
    accuracy: string;
    longitude: string;
    horizontalAccuracy: string;
  }

  interface IGetLocationOptions {
    cacheTimeout?: number;

    type?: 0 | 1 | 2 | 3;

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
