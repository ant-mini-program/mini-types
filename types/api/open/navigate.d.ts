/**
 * @file 小程序跳转
 */
declare namespace my {
  interface INavigateToMiniProgram {
    appId: string;
    path?: string;
    extraData?: Record<string, any>;
    envVersion?: 'develop' | 'trial' | 'release';
    success?(res: any): void;
    fail?(res: any): void;
    complete?(): void;
  }
  function navigateToMiniProgram(options: INavigateToMiniProgram): void;

  interface INavigateBackMiniProgram {
    extraData?: Record<string, any>;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(): void;
  }
  function navigateBackMiniProgram(options: INavigateBackMiniProgram): void;
}
