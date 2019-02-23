/**
 * @file 蓝牙
 */
declare namespace my {
  function openBluetoothAdapter(option?: {
    autoClose?: boolean;
    success?(res: { isSupportBLE: boolean; }): void;
    fail?(res: { error: 12 | 13 | 14 | 15; }): void;
    complete?(): void;
  }): void;

  function closeBluetoothAdapter(option?: {
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function getBluetoothAdapterState(option: {
    success?(res: {
      discovering: boolean;
      available: boolean;
    }): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  interface IStartBluetoothDevicesDiscoveryOption {
    services?: string[];
    allowDuplicatesKey?: boolean;
    interval?: number;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }

  function startBluetoothDevicesDiscovery(option?: IStartBluetoothDevicesDiscoveryOption): void;

  function stopBluetoothDevicesDiscovery(option?: {
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

  function getBluetoothDevices(option: {
    success?(res: {
      devices: IBluetoothDevice[];
    }): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function getConnectedBluetoothDevices(option: {
    services?: string[];
    success?(res: { devices: IBluetoothDevice[]; }): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function connectBLEDevice(option: {
    deviceId: string;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function disconnectBLEDevice(option: {
    deviceId: string;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function writeBLECharacteristicValue(option: {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    value: string;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function readBLECharacteristicValue(option: {
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

  function notifyBLECharacteristicValueChange(option: {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    descriptorId?: string;
    state?: boolean;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }): void;

  function getBLEDeviceServices(option: {
    deviceId: string;
    success?(res: {
      services: Array<{ serviceId: string; isPrimary: boolean; }>;
    }): void;
    fail?(): void;
    complete?(): void;
  }): void;

  function getBLEDeviceCharacteristics(option: {
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
