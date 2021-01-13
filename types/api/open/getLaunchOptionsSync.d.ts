/**
 * @file 同步获取小程序启动参数
 */
declare namespace my {
  interface IReferrerInfo {
    /**
     * 来源小程序。
     */
    appId: string;

    /**
     * 来源插件，当处于插件运行模式时可见。（注意：基础库 1.11.0 版本开始支持）
     */
    sourceServiceId: string;

    /**
     * 来源小程序传过来的数据。
     */
    extraData: Record<string, any>;
  }

  interface IGetLaunchOptionsSync {
    /**
     * 启动小程序的路径
     */
    path: string;

    /**
     * 启动小程序的场景值
     * https://opendocs.alipay.com/mini/framework/scene
     */
    scene: number | undefined;

    /**
     * 当前小程序的 query，从启动参数的 query 字段解析而来。（注意：若没有启动参数，则不会返回 query 参数）
     */
    query?: Record<string, any>;

    /**
     * 来源消息。
     */
    referrerInfo?: IReferrerInfo;
  }

  /**
   * 同步获取小程序启动时的参数。与 App.onLaunch 的回调参数一致。
   * https://opendocs.alipay.com/mini/013t19
   */
  function getLaunchOptionsSync(): IGetLaunchOptionsSync;
}
