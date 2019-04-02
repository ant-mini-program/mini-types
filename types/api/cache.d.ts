/**
 * @file 缓存
 */
declare namespace my {
  interface ISetStorageOptions {
    key?: string;
    data?: string | Record<string, any>;
    success?(): void;
    fail?(): void;
    complete?(): void;
  }

  function setStorage(options: ISetStorageOptions): void;

  interface ISetStorageSyncOptions {
    key: string;
    data: string | Record<string, any>;
  }

  function setStorageSync(options: ISetStorageSyncOptions): void;

  interface IGetStorageSuccessResult {
    data: string | Record<string, any>;
  }

  interface IGetStorageOptions {
    key: string;
    success?(res: IGetStorageSuccessResult): void;
    fail?(): void;
    complete?(): void;
  }

  function getStorage(option: IGetStorageOptions): void;

  interface IGetStorageSyncOptions {
    key: string;
  }
  function getStorageSync(options: IGetStorageSyncOptions): IGetStorageSuccessResult;

  interface IRemoveStorageOptions {
    key: string;
    success?(): void;
    fail?(): void;
    complete?(): void;
  }

  function removeStorage(options: IRemoveStorageOptions): void;

  interface IRemoveStorageSyncOptions {
    key: string;
  }
  function removeStorageSync(options: IRemoveStorageSyncOptions): void;

  function clearStorage(): void;

  function clearStorageSync(): void;

  interface IStorageInfo {
    keys: string[];
    currentSize: string;
    limitSize: string;
  }
  interface IGetStorageInfoOptions {
    success?(res: IStorageInfo): void;
    fail?(): void;
    complete?(): void;
  }
  function getStorageInfo(options: IGetStorageInfoOptions): void;

  function getStorageInfoSync(): IStorageInfo;
}
