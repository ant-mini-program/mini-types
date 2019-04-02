/**
 * @file 蓝牙
 */
declare namespace my {
  interface IOpenBluetoothAdapterSuccessResult {
    isSupportBLE: boolean;
  }
  interface IOpenBluetoothAdapterFailResult {
    error: 12 | 13 | 14 | 15;
  }
  interface IOpenBluetoothAdapterOptions {
    autoClose?: boolean;
    success?(res: IOpenBluetoothAdapterSuccessResult): void;
    fail?(res: IOpenBluetoothAdapterFailResult): void;
    complete?(res: IOpenBluetoothAdapterSuccessResult | IOpenBluetoothAdapterFailResult): void;
  }
  function openBluetoothAdapter(options?: IOpenBluetoothAdapterOptions): void;

  interface ICloseBluetoothAdapterOptions {
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }
  function closeBluetoothAdapter(options?: ICloseBluetoothAdapterOptions): void;

  interface IGetBluetoothAdapterStateSuccessResult {
    discovering: boolean;
    available: boolean;
  }
  interface IGetBluetoothAdapterStateOptions {
    success?(res: IGetBluetoothAdapterStateSuccessResult): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }
  function getBluetoothAdapterState(options: IGetBluetoothAdapterStateOptions): void;

  interface IStartBluetoothDevicesDiscoveryOptions {
    services?: string[];
    allowDuplicatesKey?: boolean;
    interval?: number;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }
  function startBluetoothDevicesDiscovery(options?: IStartBluetoothDevicesDiscoveryOptions): void;

  interface IStopBluetoothDevicesDiscoveryOptions {
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }
  function stopBluetoothDevicesDiscovery(options?: IStopBluetoothDevicesDiscoveryOptions): void;

  interface IBluetoothDevice {
    name: string;
    deviceName: string;
    localName: string;
    deviceId: string;
    RSSI: number;
    advertisData: string;
    manufacturerData: string;
  }

  interface IGetBluetoothDevicesSuccessResult {
    devices: IBluetoothDevice[];
  }
  interface IGetBluetoothDevicesOptions {
    success?(res: IGetBluetoothDevicesSuccessResult): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }
  function getBluetoothDevices(options: IGetBluetoothDevicesOptions): void;

  interface IGetConnectedBluetoothDevicesOptions {
    services?: string[];
    success?(res: { devices: IBluetoothDevice[]; }): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }
  function getConnectedBluetoothDevices(options: IGetConnectedBluetoothDevicesOptions): void;

  interface IConnectBLEDeviceOptions {
    deviceId: string;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }
  function connectBLEDevice(options: IConnectBLEDeviceOptions): void;

  interface IDisconnectBLEDeviceOptions {
    deviceId: string;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }
  function disconnectBLEDevice(options: IDisconnectBLEDeviceOptions): void;

  interface IWriteBLECharacteristicValueOptions {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    value: string;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }
  function writeBLECharacteristicValue(options: IWriteBLECharacteristicValueOptions): void;

  interface IReadBLECharacteristicValueSuccessResult {
    characteristic: {
      characteristicId: string;
      serviceId: string;
      value: string;
    };
  }
  interface IReadBLECharacteristicValueOptions {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    success?(res: IReadBLECharacteristicValueSuccessResult): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }
  function readBLECharacteristicValue(options: IReadBLECharacteristicValueOptions): void;

  interface INotifyBLECharacteristicValueChangeOptions {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    descriptorId?: string;
    state?: boolean;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }
  function notifyBLECharacteristicValueChange(options: INotifyBLECharacteristicValueChangeOptions): void;

  interface IGetBLEDeviceServicesSuccessResult {
    services: Array<{ serviceId: string; isPrimary: boolean; }>;
  }
  interface IGetBLEDeviceServicesOptions {
    deviceId: string;
    success?(res: IGetBLEDeviceServicesSuccessResult): void;
    fail?(): void;
    complete?(): void;
  }
  function getBLEDeviceServices(options: IGetBLEDeviceServicesOptions): void;

  interface IGetBLEDeviceCharacteristicsSuccessResult {
    characteristics: Array<{
      characteristicId: string;
      serviceId: string;
      value: string;
      properties: {
        read: boolean;
        write: boolean;
        notify: boolean;
        indicate: boolean;
      };
    }>;
  }
  interface IGetBLEDeviceCharacteristicsOptions {
    deviceId: string;
    serviceId: string;
    success?(res: IGetBLEDeviceCharacteristicsSuccessResult): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }
  function getBLEDeviceCharacteristics(options: IGetBLEDeviceCharacteristicsOptions): void;

  interface IOnBluetoothDeviceFoundEvent {
    devices: IBluetoothDevice[];
  }
  function onBluetoothDeviceFound(callback: (res: IOnBluetoothDeviceFoundEvent) => void): void;

  function offBluetoothDeviceFound(): void;

  interface IOnBLECharacteristicValueChangeEvent {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    value: string;
  }
  function onBLECharacteristicValueChange(callback: (res: IOnBLECharacteristicValueChangeEvent) => void): void;

  function offBLECharacteristicValueChange(): void;

  interface IOnBLEConnectionStateChangedEvent {
    deviceId: string;
    connected: string;
  }
  function onBLEConnectionStateChanged(callback: (res: IOnBLEConnectionStateChangedEvent) => void): void;

  function offBLEConnectionStateChanged(): void;

  interface IOnBluetoothAdapterStateChangeEvent {
    available: boolean;
    discovering: boolean;
  }
  function onBluetoothAdapterStateChange(callback: (res: IOnBluetoothAdapterStateChangeEvent) => void): void;

  function offBluetoothAdapterStateChange(): void;
}
