/**
 * @file 打开支付宝应用或页面
 */
declare namespace my {
  export namespace ap {
    function navigateToAlipayPage(option: { path: string; success?(res: { success: boolean; }): void; }): void;
  }
}
