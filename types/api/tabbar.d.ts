declare namespace my {
  interface ISwitchTabOption extends INavigateBaseCallbackOption {
    /**
     * 跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面）。注意：路径后不能带参数
     */
    url: string;
  }
  /**
   * 跳转到指定 tabBar 页面，并关闭其他所有非 tabBar 页面。
   */
  function switchTab(): void;
}
