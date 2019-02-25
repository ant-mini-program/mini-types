/**
 * @file 多媒体
 */
declare namespace my {
  interface IChooseImageResult {
    /**
     * 本地文件路径列表
     */
    apFilePaths?: string[];
  }

  interface IChooseImageOptions {
    /**
     * 最多可以选择的图片张数，默认9
     */
    count?: number;

    /**
     * original 原图，compressed 压缩图，默认二者都有
     */
    sizeType?: string[];

    /**
     * album 从相册选图，camera 使用相机，默认二者都有
     */
    sourceType?: string[];

    /**
     * 成功则返回图片的本地文件路径列表 tempFilePaths
     */
    success?: (res?: IChooseImageResult) => void;

    fail?(): void;

    complete?(): void;
  }

  /**
   * 从本地相册选择图片或使用相机拍照。
   */
  function chooseImage(options: IChooseImageOptions): void;

  interface IPreviewImageOptions {
    /**
     * 当前显示图片的链接，不填则默认为 urls 的第一张
     */
    current?: string;

    /**
     * 需要预览的图片链接列表
     */
    urls: string[];

    success?(): void;

    fail?(): void;

    complete?(): void;
  }

  /**
   * 预览图片。
   */
  function previewImage(options: IPreviewImageOptions): void;

  interface IGetImageInfoResult {
    /**
     * 图片宽度，单位px
     */
    width: number;

    /**
     * 图片高度 单位px
     */
    height: number;
  }

  interface IGetImageInfoOptions {
    /**
     * 图片的路径，可以是相对路径，临时文件路径，存储文件路径
     */
    src: string;

    /**
     * 接口调用成功的回调函数，包含图片信息
     */
    success?: (res?: IGetImageInfoResult) => void;

    fail?(): void;

    complete?(): void;
  }

  /**
   * 获取图片信息
   */
  function getImageInfo(options: IGetImageInfoOptions): void;

  interface ISaveImageOptions {
    url: string;

    success?(): void;

    fail?(): void;

    complete?(): void;
  }

  function saveImage(options: ISaveImageOptions): void;
}
