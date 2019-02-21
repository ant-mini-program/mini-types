/**
 * @file 设置
 */
declare namespace my {
  type SettingScopeList = 'scope.userInfo' | 'scope.location' | 'scope.album' | 'scope.camera' | 'scope.audioRecord';

  /**
   * 打开小程序设置界面，返回用户权限设置的结果；设置界面只会出现小程序已经向用户请求过的权限。
   */
  function openSetting(option: {
    success?(res: { authSetting: Record<SettingScopeList, boolean> }): void;
    fail?(): void;
    complete?(): void;
  }): void;

  /**
   * 获取用户的当前设置，返回值中只会出现小程序已经向用户请求过的权限。
   */
  function getSetting(option: {
    success?(res: { authSetting: Record<SettingScopeList, boolean> }): void;
    fail?(): void;
    complete?(): void;
  }): void;
}
