/**
 * @file 分享
 */
declare namespace my {
  interface IHideShareMenuOptions {
    success?(): void;
    fail?(): void;
    complete?(): void;
  }

  function hideShareMenu(options?: IHideShareMenuOptions): void;
}
