/**
 * @file 网络状态
 */
declare namespace my {
  type INetworkType = 'UNKNOWN' | 'NOTREACHABLE' | 'WIFI' | '3G' | '2G' | '4G' | 'WWAN';

  interface IGetNetworkTypeOptions {
    success?(res: {
      networkAvailable: boolean;
      networkType: INetworkType;
    }): void;
    fail?(): void;
    complete?(): void;
  }

  function getNetworkType(options: IGetNetworkTypeOptions): void;

  function onNetworkStatusChange(callback: (res: { isConnected: boolean; networkType: INetworkType; }) => void): void;

  function offNetworkStatusChange(): void;
}
