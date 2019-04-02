/**
 * @file 打开支付宝应用或页面
 */
declare namespace my {
  interface INavigateToAlipayPageSuccessResult {
    success: boolean;
  }

  interface INavigateToAlipayPageOptions {
    path: string;
    success?(res: INavigateToAlipayPageSuccessResult): void;
  }

  namespace ap {
    function navigateToAlipayPage(options: INavigateToAlipayPageOptions): void;
  }
}
