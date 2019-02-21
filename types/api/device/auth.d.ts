/**
 * @file 权限引导
 */
declare namespace my {
  type AuthType = 'BACKGROUNDER' | 'SHORTCUT' | 'MICROPHONE' | 'ADDRESSBOOK' | 'CAMERA'
    | 'PHOTO' | 'NOTIFICATION' | 'SELFSTARTING' | 'LBSSERVICE' | 'LBS';
  /**
   * 通过权限引导模块以图文等形式向用户弹出 Dialog，引导用户打开相应的权限。
   * 权限引导的核心是引导而非权限判断，调用时机应该在业务方确认所需权限被限制的时候；此外权限引导弹框受疲劳度等因素控制。
   */
  function showAuthGuide(option: { authType: AuthType; }): void;
}
