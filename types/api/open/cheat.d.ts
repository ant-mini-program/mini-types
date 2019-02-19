/**
 * @file 营销反作弊
 */
declare namespace my {
  interface IPreventCheatBizContext {
    service: 'marketing';
    risk_type: 'riskinfo_anticheat_common';
    mobile_no: string;
    pid: string;
    user_id?: string;
    bank_card_no?: string;
    cert_no?: string;
    client_ip?: string;
    email_address?: string;
    imei?: string;
    imsi?: string;
    mac_address?: string;
    extended_info?: string;
  }

  interface IPreventCheatOption {
    pid: string;
    appId: string;
    biz_context: IPreventCheatBizContext;
    success?(res: {
      riskResult: {
        riskinfo_anticheat_common: 'rank0' | 'rank1' | 'rank2' | 'rank3';
        riskinfo_anticheat_common_infocode: 171;
      };
      riskResultDesc: string;
      uniqueId: string;
    }): void;
    fail?(res: {
      error: 'serviceNoAuth' | 'riskTypeNoAuth' | 'bizContentEmpty'
        | 'paramMissingError' | 'param error' | 'SYSTEM_OUT_ERROR'
        | 'INVALID_PARAMETER' | 'OVER_LIMIT';
      errorMessage: string;
    }): void;
    complete?(): void;
  }

  interface ap {
    preventCheat(): void;
  }
}
