/**
 * @file 数据安全
 */
declare namespace my {
  interface IRSASuccessResult {
    text: string;
  }
  interface IRSAFailResult {
    error: 10 | 11;
  }
  interface IRSAOptions {
    action: 'encrypt' | 'decrypt';
    text: string;
    key: string;
    success?(res: IRSASuccessResult): void;
    fail?(res: IRSAFailResult): void;
    complete?(res: IRSASuccessResult | IRSAFailResult): void;
  }
  function rsa(options: IRSAOptions): void;
}
