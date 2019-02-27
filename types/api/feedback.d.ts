/**
 * @file 交互反馈
 */
declare namespace my {
  interface IShowToastOptions {
    /**
     * 提示的内容
     */
    content?: string;

    /**
     * toast 类型，展示相应图标,success, fail, exception, none(默认值)。其中 exception 类型必须传文字信息
     */
    type?: 'success' | 'fail' | 'exception' | 'none';
    /**
     * 提示的延迟时间，单位毫秒，默认：1500, 最大为10000
     */
    duration?: number;

    success?: () => void;

    fail?: () => void;

    complete?: () => void;
  }

  /**
   * 显示消息提示框
   */
  function showToast(options: IShowToastOptions): void;

  /**
   * 隐藏消息提示框
   */
  function hideToast(): void;

  interface IAlertOptions {
    title?: string;
    content?: string;
    buttonText?: string;
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }

  function alert(options: IAlertOptions): void;

  interface IConfirmSuccessCallbackParam {
    // 是否点击了确认
    confirm: boolean;
    // 是否点击了确认
    ok?: boolean;
  }
  interface IConfirmOptions {
    title?: string;
    content?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    success?: (result: IConfirmSuccessCallbackParam) => void;
    fail?: (result: IConfirmSuccessCallbackParam) => void;
    complete?: (result: IConfirmSuccessCallbackParam) => void;
  }
  function confirm(options: IConfirmOptions): void;

  interface IPromptSuccessCallbackParam {
    ok: boolean;
    inputValue?: string;
  }
  interface IPromptOptions {
    title?: string;
    message?: string;
    placeholder?: string;
    align?: string;
    okButtonText?: string;
    cancelButtonText?: string;
    success?: (result: IPromptSuccessCallbackParam) => void;
    fail?: () => void;
    complete: () => void;
  }
  function prompt(options: IPromptOptions): void;

  interface IShowLoadingOptions {
    /**
     * loading内容
     */
    content?: string;

    /**
     * loading延迟时间,默认 0。如果在此时间之前调用了 my.hideLoading 则不会显示
     */
    delay?: number;

    success?(): void;

    fail?(): void;

    complete?(): void;
  }

  /**
   * 显示消息提示框
   */
  function showLoading(options?: string | IShowLoadingOptions): Promise<void>;

  interface IHideLoadingOptions {
    // 页面实例, 每个页面实例有一个loading, 如果不传入该参数可能会导致loading无法取消。
    // 无语的设计@小程序
    // 参考: https://docs.alipay.com/mini/api/ui-feedback#a-name7bgvmdamyhideloading
    page?: tinyapp.IPageInstance<any>;
  }
  /**
   * 显示消息提示框
   */
  function hideLoading(options?: IHideLoadingOptions): Promise<void>;

  interface IShowActionSheetOptions {
    title?: string;
    items: string[];
    cancelButtonText?: string;
    destructiveBtnIndex: number;
    badges: Array<{
      index: number;
      type: 'none' | 'point' | 'num' | 'text' | 'more';
      text?: string;
    }>;
    success?(res: { index: number; }): void;
    fail?(): void;
    complete?(): void;
  }

  function showActionSheet(options: IShowActionSheetOptions): void;
}
