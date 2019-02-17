/**
 * @file 选择日期
 */
declare namespace my {
  interface IDatePickerOption {
    /**
     * 返回的日期格式
     */
    format?: string;
    /**
     * 初始选择的日期时间，默认当前时间
     */
    currentDate?: string;
    /**
     * 最小日期时间
     */
    startDate?: string;
    /**
     * 最大日期时间
     */
    endDate?: string;
    success?(result: { date: string; }): void;
    fail?(result: { error: 11; }): void;
    complete?(result: { error: 11; } | { date: string; }): void;
  }
  /**
   * 打开日期选择列表
   */
  function datePicker(option: IDatePickerOption): void;
}
