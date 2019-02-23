/**
 * @file 小程序当前运行版本类型
 */
declare namespace my {
  /**
   * 获取当前小程序的运行版本
   */
  function getRunScene(res: {
    success(res: { envVersion: 'develop' | 'trial' | 'release'; }): void;
  }): void;
}
