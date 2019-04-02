/**
 * @file 刷脸认证
 */
declare namespace my {
  interface IFaceVerifySuccessResult {
    zimId: string;
    faceRetCode?: '1000' | '1001' | '1003' | '2002' | '2006';
    retCode: 'OK_SUCCESS' | 'SYSTEM_ERROR' | 'ACCOUNT_SERVICE_SUSPEND' | 'HIGH_RISK' | 'DEVICE_NOT_SUPPORT'
      | 'OS_NOT_SUPPORT' | 'SDKVERSION_NOT_SUPPORT' | 'ASSET_NOT_AVAILABLE' | 'UNABLE_GET_IMAGE'
      | 'ALG_NOT_SUPPORT' | 'NOT_REAL_NAME';
    retCodeSub: string;
    retMessageSub?: string;
  }
  interface IFaceVerifyOptions {
    bizId: string;
    bizType: string;
    success?(res: IFaceVerifySuccessResult): void;
    fail?(): void;
  }

  namespace ap {
    function faceVerify(options: IFaceVerifyOptions): void;
  }
}
