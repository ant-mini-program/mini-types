/**
 * @file iBeacon
 */
declare namespace my {
  interface IStartBeaconDiscoveryOptions {
    uuids: string[];
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }

  /**
   * 开始搜索附近的 iBeacon 设备
   */
  function startBeaconDiscovery(options: IStartBeaconDiscoveryOptions): void;

  interface IStopBeaconDiscoveryOptions {
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }
  /**
   * 停止搜索附近的 iBeacon 设备
   */
  function stopBeaconDiscovery(options: IStopBeaconDiscoveryOptions): void;

  interface IIBeacon {
    uuid: string;
    major: string;
    minor: string;
    proximity: number;
    accuracy: number;
    rssi: number;
  }

  interface IGetBeaconsSuccessResult {
    beacons: IIBeacon[];
    errCode: string;
    errorMsg: string;
  }
  interface IGetBeaconsOptions {
    success?(res: IGetBeaconsSuccessResult): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }
  /**
   * 获取已经搜索到的 iBeacon 设备
   */
  function getBeacons(options: IGetBeaconsOptions): void;

  interface IOnBeaconUpdateSuccessResult {
    beacons: IIBeacon[];
  }
  interface IOnBeaconUpdateOptions {
    success: (res: IOnBeaconUpdateSuccessResult) => void;
  }
  /**
   * 监听 iBeacon 设备的更新事件
   */
  function onBeaconUpdate(options: IOnBeaconUpdateOptions): void;

  interface IOnBeaconServiceChangeSuccessResult {
    available: boolean;
    discovering: boolean;
  }
  interface IOnBeaconServiceChangeOptions {
    success?(res: IOnBeaconServiceChangeSuccessResult): void;
  }
  /**
   * 监听 iBeacon 服务的状态变化
   */
  function onBeaconServiceChange(options: IOnBeaconServiceChangeOptions): void;
}
