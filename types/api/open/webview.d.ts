/**
 * @file webview 组件控制
 */
declare namespace my {
  interface IWebViewContext {
    postMessage(msg: Record<string, any>): void;
  }

  function createWebViewContext(webviewId: string): IWebViewContext;
}
