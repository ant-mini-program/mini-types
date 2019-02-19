/**
 * @file 打开支付宝应用或页面
 */
declare namespace my {
  interface ap {
    navigateToAlipayPage(option: { path: string; success?(res: { success: boolean; }): void; }): void;
  }
}
