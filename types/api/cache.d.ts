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

  interface IGetStorageResult {
    data: string | Record<string, any>;
  }

  interface IGetStorageOptions {
    key: string;
    success?(res: IGetStorageResult): void;
    fail?(): void;
    complete?(): void;
  }

  function getStorage(option: IGetStorageOptions): void;

  function getStorageSync(options: { key: string; }): IGetStorageResult;

  interface IRemoveStorageOptions {
    key: string;
    success?(): void;
    fail?(): void;
    complete?(): void;
  }

  function removeStorage(options: IRemoveStorageOptions): void;

  function removeStorageSync(options: { key: string; }): void;

  function clearStorage(): void;

  function clearStorageSync(): void;

  interface IStorageInfo {
    keys: string[];
    currentSize: string;
    limitSize: string;
  }

  function getStorageInfo(options: {
    success?(res: IStorageInfo): void;
    fail?(): void;
    complete?(): void;
  }): void;

  function getStorageInfoSync(): IStorageInfo;
}
