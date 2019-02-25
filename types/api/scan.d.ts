/**
 * @file 扫码
 */
declare namespace my {
  interface IScanOptions {
    type?: 'qr' | 'bar';
    hideAlbum?: boolean;
    success?(res: { code: string; qrCode: string; barCode: string; }): void;
    fail?(res: { error: 10 | 11; }): void;
    complete?(): void;
  }

  function scan(options: IScanOptions): void;
}
