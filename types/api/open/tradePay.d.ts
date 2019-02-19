/**
 * @file 小程序唤起支付
 */
declare namespace my {
  interface ITradePayOption {
    tradeNO: string;
    success?(resultCode: '9000' | '8000' | '4000' | '6001' | '6002' | '6004' | '99'): void;
    fail?(): void;
    complete?(): void;
  }

  function tradePay(option: ITradePayOption): void;
}
