/**
 * @file 自定义通用菜单
 */
declare namespace my {
  function hideShareMenu(option?: {
    success?(): void;
    fail?(): void;
    complete?(): void;
  }): void;

  function hideAddToDesktopMenu(): void;

  function hideAllAddToDesktopMenu(): void;

  function hideFavoriteMenu(): void;

  function hideAllFavoriteMenu(): void;
}
