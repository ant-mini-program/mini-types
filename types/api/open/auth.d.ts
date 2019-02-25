/**
 * @file 用户授权
 */
declare namespace my {
  type GetAuthCodeOptionsScope = 'auth_base' | 'auth_user' | 'auth_zhima';

  interface IGetAuthCodeOptions {
    scopes?: GetAuthCodeOptionsScope | GetAuthCodeOptionsScope[];
    success?(result: {
      authCode: string;
      authErrorScope: Record<GetAuthCodeOptionsScope, any>;
      authSuccessScope: Record<GetAuthCodeOptionsScope, any>;
    }): void;
    fail?(): void;
    complete?(): void;
  }

  function getAuthCode(options: IGetAuthCodeOptions): void;
}
