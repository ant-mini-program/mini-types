/**
 * @file 滚动
 */
declare namespace my {
  interface IPageScrollToOptions {
    /**
     * 滚动到页面的目标位置，单位 px
     */
    scrollTop: number;
    /**
     * 调用成功的回调函数
     */
    success?(): void;

    /**
     * 调用失败的回调函数
     */
    fail?(): void;

    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(): void;
  }

  /**
   * 滚动到页面的目标位置。
   */
  function pageScrollTo(options: IPageScrollToOptions): void;
}
