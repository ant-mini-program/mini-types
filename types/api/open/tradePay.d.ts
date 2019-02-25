/**
 * @file 小程序唤起支付
 */
declare namespace my {
  interface ITradePayOptions {
    tradeNO: string;
    success?(resultCode: '9000' | '8000' | '4000' | '6001' | '6002' | '6004' | '99'): void;
    fail?(): void;
    complete?(): void;
  }

  function tradePay(options: ITradePayOptions): void;
}
