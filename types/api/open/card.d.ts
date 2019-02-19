/**
 * @file 支付宝卡包
 */
declare namespace my {
  /**
   * 打开支付宝卡列表。
   */
  function openCardList(): void;

  /**
   * 打开当前用户的某个商户的卡列表
   */
  function openMerchantCardList(params: { partnerId: string; }): void;

  /**
   * 打开当前用户的某张卡的详情页
   */
  function openCardDetail(params: { passId: string; }): void;

  /**
   * 打开支付宝券列表
   */
  function openVoucherList(): void;

  /**
   * 打开当前用户的某个商户的券列表
   */
  function openMerchantVoucherList(params: { partnerId: string; }): void;

  type OpenDetailOption = {
    passId: string;
  } | {
    partnerId: string;
    serialNumber: string;
  };
  /**
   * 打开当前用户的某张券的详情页（非口碑）
   */
  function openVoucherDetail(params: OpenDetailOption): void;

  /**
   * 打开当前用户的某张券的详情页（口碑）
   */
  function openKBVoucherDetail(params: OpenDetailOption): void;

  /**
   * 打开支付宝票列表。
   */
  function openTicketList(): void;

  /**
   * 打开某个商户的票列表
   */
  function openMerchantTicketList(params: { partnerId: string; }): void;

  /**
   * 打开当前用户的某张票的详情页
   */
  function openTicketDetail(params: OpenDetailOption): void;

  type AddCardAuthSuccessResult = {
    success: true;
    resultStatus: string;
    result: {
      app_id: string;
      auth_code: string;
      state: string;
      scope: string;
      template_id: string;
      request_id: string;
      out_string: string;
    };
  } | {
    success: false;
    code: 'JSAPI_SERVICE_TERMINATED' | 'JSAPI_PARAM_INVALID' | 'JSAPI_SYSTEM_ERROR';
  };
  interface IAddCardAuthOption {
    url: string;
    success?(res: AddCardAuthSuccessResult): void;
    fail?(): void;
    complete?(): void;
  }
  function addCardAuth(option: IAddCardAuthOption): void;
}
