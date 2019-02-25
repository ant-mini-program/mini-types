/**
 * @file 蓝牙
 */
declare namespace my {
  function openBluetoothAdapter(options?: {
    autoClose?: boolean;
    success?(res: { isSupportBLE: boolean; }): void;
    fail?(res: { error: 12 | 13 | 14 | 15; }): void;
    complete?(): void;
  }): void;

  function closeBluetoothAdapter(options?: {
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function getBluetoothAdapterState(options: {
    success?(res: {
      discovering: boolean;
      available: boolean;
    }): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  interface IStartBluetoothDevicesDiscoveryOptions {
    services?: string[];
    allowDuplicatesKey?: boolean;
    interval?: number;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }

  function startBluetoothDevicesDiscovery(options?: IStartBluetoothDevicesDiscoveryOptions): void;

  function stopBluetoothDevicesDiscovery(options?: {
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  interface IBluetoothDevice {
    name: string;
    deviceName: string;
    localName: string;
    deviceId: string;
    RSSI: number;
    advertisData: string;
    manufacturerData: string;
  }

  function getBluetoothDevices(options: {
    success?(res: {
      devices: IBluetoothDevice[];
    }): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function getConnectedBluetoothDevices(options: {
    services?: string[];
    success?(res: { devices: IBluetoothDevice[]; }): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function connectBLEDevice(options: {
    deviceId: string;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function disconnectBLEDevice(options: {
    deviceId: string;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function writeBLECharacteristicValue(options: {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    value: string;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function readBLECharacteristicValue(options: {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    success?(
      res: {
        characteristic: {
          characteristicId: string;
          serviceId: string;
          value: string;
        };
      },
    ): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function notifyBLECharacteristicValueChange(options: {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    descriptorId?: string;
    state?: boolean;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function getBLEDeviceServices(options: {
    deviceId: string;
    success?(res: {
      services: Array<{ serviceId: string; isPrimary: boolean; }>;
    }): void;
    fail?(): void;
    complete?(): void;
  }): void;

  function getBLEDeviceCharacteristics(options: {
    deviceId: string;
    serviceId: string;
    success?(res: { characteristics: Array<{
      characteristicId: string;
      serviceId: string;
      value: string;
      properties: {
        read: boolean;
        write: boolean;
        notify: boolean;
        indicate: boolean;
      };
    }>; }): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function onBluetoothDeviceFound(callback: (res: {
    devices: IBluetoothDevice[];
  }) => void): void;

  function offBluetoothDeviceFound(): void;

  function onBLECharacteristicValueChange(callback: (res: {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    value: string;
  }) => void): void;

  function offBLECharacteristicValueChange(): void;

  function onBLEConnectionStateChanged(callback: (res: {
    deviceId: string;
    connected: string;
  }) => void): void;

  function offBLEConnectionStateChanged(): void;

  function onBluetoothAdapterStateChange(callback: (res: {
    available: boolean;
    discovering: boolean;
  }) => void): void;

  function offBluetoothAdapterStateChange(): void;
}
