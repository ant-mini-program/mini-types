/**
 * @file 自定义通用菜单
 */
declare namespace my {
  interface IHideShareMenuOptions {
    success?(): void;
    fail?(): void;
    complete?(): void;
  }
  function hideShareMenu(options?: IHideShareMenuOptions): void;

  function hideAddToDesktopMenu(): void;

  function hideAllAddToDesktopMenu(): void;

  function hideFavoriteMenu(): void;

  function hideAllFavoriteMenu(): void;
}
