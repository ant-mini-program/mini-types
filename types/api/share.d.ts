/**
 * @file 分享
 */
declare namespace my {
  interface IHideShareMenuOption {
    success?(): void;
    fail?(): void;
    complete?(): void;
  }

  function hideShareMenu(option?: IHideShareMenuOption): void;
}
