/**
 * @file 设置
 */
declare namespace my {
  type SettingScopeList = 'scope.userInfo' | 'scope.location' | 'scope.album' | 'scope.camera' | 'scope.audioRecord';

  interface IOpenSettingSuccessOptions {
    authSetting: Record<SettingScopeList, boolean>;
  }
  interface IOpenSettingOptions {
    success?(res: IOpenSettingSuccessOptions): void;
    fail?(): void;
    complete?(): void;
  }
  /**
   * 打开小程序设置界面，返回用户权限设置的结果；设置界面只会出现小程序已经向用户请求过的权限。
   */
  function openSetting(options: IOpenSettingOptions): void;

  interface IGetSettingSuccessResult {
    authSetting: Record<SettingScopeList, boolean>;
  }
  interface IGetSettingOptions {
    success?(res: IGetSettingSuccessResult): void;
    fail?(): void;
    complete?(): void;
  }
  /**
   * 获取用户的当前设置，返回值中只会出现小程序已经向用户请求过的权限。
   */
  function getSetting(options: IGetSettingOptions): void;
}
