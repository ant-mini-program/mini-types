/**
 * @file 选择城市
 */
declare namespace my {
  interface IChooseCityOption {
    /**
     * 是否显示当前定位城市，默认 false
     */
    showLocatedCity?: boolean;
    /**
     * 是否显示热门城市，默认 true
     */
    showHotCities?: boolean;
    /**
     * 自定义城市列表
     */
    cities?: Array<{ city: string; adCode: string; spell: string; }>;
    /**
     * 自定义热门城市列表
     */
    hotCities?: Array<{ city: string; adCode: string; spell: string; }>;
    success?(result: { city: string; adCode: string; }): void;
    fail?(): void;
    complete?(): void;
  }
  /**
   * 打开城市选择列表。
   * 如果用户没有选择任何城市直接点击了返回，将不会触发回调函数。
   */
  function chooseCity(option: IChooseCityOption): void;
}
