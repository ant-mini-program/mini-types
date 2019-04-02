/**
 * @file 选择日期
 */
declare namespace my {
  interface IDatePickerFailResult {
    error: 11;
  }
  interface IDatePickerSuccessResult {
    date: string;
  }
  interface IDatePickerOptions {
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
    success?(result: IDatePickerSuccessResult): void;
    fail?(result: IDatePickerFailResult): void;
    complete?(result: IDatePickerFailResult | IDatePickerSuccessResult): void;
  }
  /**
   * 打开日期选择列表
   */
  function datePicker(options: IDatePickerOptions): void;
}
