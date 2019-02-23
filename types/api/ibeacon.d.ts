/**
 * @file iBeacon
 */
declare namespace my {
  interface IStartBeaconDiscoveryOption {
    uuids: string[];
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }

  /**
   * 开始搜索附近的 iBeacon 设备
   */
  function startBeaconDiscovery(option: IStartBeaconDiscoveryOption): void;

  /**
   * 停止搜索附近的 iBeacon 设备
   */
  function stopBeaconDiscovery(option: {
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  interface IIBeacon {
    uuid: string;
    major: string;
    minor: string;
    proximity: number;
    accuracy: number;
    rssi: number;
  }

  /**
   * 获取已经搜索到的 iBeacon 设备
   */
  function getBeacons(option: {
    success?(res: { beacons: IIBeacon[]; errCode: string; errorMsg: string; }): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  /**
   * 监听 iBeacon 设备的更新事件
   */
  function onBeaconUpdate(option: {
    success: (res: { beacons: IIBeacon[]; }) => void;
  }): void;

  /**
   * 监听 iBeacon 服务的状态变化
   */
  function onBeaconServiceChange(option: {
    success?(res: { available: boolean; discovering: boolean; }): void;
  }): void;
}
