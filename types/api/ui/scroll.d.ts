/**
 * @file 滚动
 */
declare namespace my {
  interface IPageScrollToOptions {
    scrollTop: number;
  }
  /**
   * 滚动到页面的目标位置。
   */
  function pageScrollTo(options: IPageScrollToOptions): void;
}
