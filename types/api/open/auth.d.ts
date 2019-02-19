/**
 * @file 用户授权
 */
declare namespace my {
  type GetAuthCodeOptionScope = 'auth_base' | 'auth_user' | 'auth_zhima';

  interface IGetAuthCodeOption {
    scopes?: GetAuthCodeOptionScope | GetAuthCodeOptionScope[];
    success?(result: {
      authCode: string;
      authErrorScope: Record<GetAuthCodeOptionScope, any>;
      authSuccessScope: Record<GetAuthCodeOptionScope, any>;
    }): void;
    fail?(): void;
    complete?(): void;
  }

  function getAuthCode(option: IGetAuthCodeOption): void;
}
