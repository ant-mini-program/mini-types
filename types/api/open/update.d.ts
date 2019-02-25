/**
 * @file 升级支付宝最新版本
 */
declare namespace my {
  export namespace ap {
    function updateAlipayClient(options: { success?(res: { success: boolean; }): void; }): void;
  }
}
