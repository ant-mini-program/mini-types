/**
 * @file 网络状态
 */
declare namespace my {
  type INetworkType = 'UNKNOWN' | 'NOTREACHABLE' | 'WIFI' | '3G' | '2G' | '4G' | 'WWAN';

  interface IGetNetworkTypeSuccessResult {
    networkAvailable: boolean;
    networkType: INetworkType;
  }

  interface IGetNetworkTypeOptions {
    success?(res: IGetNetworkTypeSuccessResult): void;
    fail?(): void;
    complete?(): void;
  }

  function getNetworkType(options: IGetNetworkTypeOptions): void;

  interface IOnNetworkStatusChangeEvent {
    isConnected: boolean;
    networkType: INetworkType;
  }
  function onNetworkStatusChange(callback: (res: IOnNetworkStatusChangeEvent) => void): void;

  function offNetworkStatusChange(): void;
}
