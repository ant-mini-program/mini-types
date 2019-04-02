/**
 * @file 小程序当前运行版本类型
 */
declare namespace my {
  interface IGetRunSceneSuccessResult {
    envVersion: 'develop' | 'trial' | 'release';
  }
  interface IGetRunSceneOptions {
    success(res: IGetRunSceneSuccessResult): void;
  }
  /**
   * 获取当前小程序的运行版本
   */
  function getRunScene(res: IGetRunSceneOptions): void;
}
