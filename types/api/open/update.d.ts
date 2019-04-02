/**
 * @file 升级支付宝最新版本
 */
declare namespace my {
  interface IUpdateAlipayClientSuccessResult {
    success: boolean;
  }

  interface IUpdateAlipayClientOptions {
    success?(res: IUpdateAlipayClientSuccessResult): void;
  }

  namespace ap {
    function updateAlipayClient(options: IUpdateAlipayClientOptions): void;
  }
}
