/**
 * @file 数据安全
 */
declare namespace my {
  interface IRSAOptions {
    action: 'encrypt' | 'decrypt';
    text: string;
    key: string;
    success?(res: { text: string; }): void;
    fail?(res: { error: 10 | 11; }): void;
    complete?(): void;
  }

  function rsa(options: IRSAOptions): void;
}
