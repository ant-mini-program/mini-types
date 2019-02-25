/**
 * @file 打开支付宝应用或页面
 */
declare namespace my {
  namespace ap {
    function navigateToAlipayPage(options: { path: string; success?(res: { success: boolean; }): void; }): void;
  }
}
