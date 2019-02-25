/// <reference path="./ui/index.d.ts" />
/// <reference path="./open/index.d.ts" />
/// <reference path="./media/index.d.ts" />
/// <reference path="./cache.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./location.d.ts" />
/// <reference path="./network.d.ts" />
/// <reference path="./device/index.d.ts" />
/// <reference path="./scan.d.ts" />
/// <reference path="./bluetooth.d.ts" />
/// <reference path="./ibeacon.d.ts" />
/// <reference path="./data.d.ts" />
/// <reference path="./share.d.ts" />
/// <reference path="./menu.d.ts" />
/// <reference path="./scene.d.ts" />
/// <reference path="./analytics.d.ts" />

declare namespace my {
  /**
   * 节点查询 https://docs.alipay.com/mini/api/selector-query
   */
  interface IBoundingClientRect {
    width: number;
    height: number;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }

  type ScrollOffset = Record<"scrollTop" | "scrollLeft", number>;

  type SelectorResult = Array<
    null
    | IBoundingClientRect
    | ScrollOffset
  >;

  type ISelectorExecCallback = (ret: SelectorResult) => void;

  interface ISelectorQuery {
    select(selector: string): ISelectorQuery;
    selectAll(selector: string): ISelectorQuery;
    selectViewport(): ISelectorQuery;
    boundingClientRect(): ISelectorQuery;
    scrollOffset(): ISelectorQuery;
    exec(ret: ISelectorExecCallback): void;
  }

  function createSelectorQuery(params?: Record<string, any>): ISelectorQuery;

  function canIUse(query: string): boolean;

  function reportCustomError(error: Error): void;

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

  function call(apiName: string, params?: Record<string, any>): void;
  function call(apiName: string, callback?: (...args: any[]) => void): void;
  function call(apiName: string, params?: Record<string, any>, callback?: (...args: any[]) => void): void;
}
