/**
 * @file 级联选择
 */
declare namespace my {
  type MultiLevelSelectOptionsList = Array<{ name: string; subList?: MultiLevelSelectOptionsList; }>;
  type MultiLevelSelectSuccessResult = { success: false } | { success: true; result: MultiLevelSelectOptionsList };
  interface IMultiLevelSelectOptions {
    title?: string;
    list: MultiLevelSelectOptionsList;
    success?(result: MultiLevelSelectSuccessResult): void;
    fail?(): void;
    complete?(): void;
  }
  /**
   * 级联选择功能主要使用在于多级关联数据选择，比如说省市区的信息选择。
   */
  function multiLevelSelect(options: IMultiLevelSelectOptions): void;
}
