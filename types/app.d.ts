declare namespace tinyapp {
  type Query = Record<string, string | number>;

  interface IAppLaunchOption {
    query?: Query;
    path?: string;
  }

  interface IAppOptionMethods {
    /**
     * 生命周期函数--监听小程序初始化。当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     */
    onLaunch?(option: IAppLaunchOption): void;

    /**
     * 生命周期函数--监听小程序显示。当小程序启动，或从后台进入前台显示，会触发 onShow
     */
    onShow?(option: IAppLaunchOption): void;

    /**
     * 生命周期函数--监听小程序隐藏。当小程序从前台进入后台，会触发 onHide
     */
    onHide?(): void;

    /**
     * 错误监听函数--当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
     */
    onError?(): void;
  }

  interface IAppInstance<G> {
    globalData: G;
  }

  /**
   * App 实现的接口对象
   * 参考: https://docs.alipay.com/mini/framework/app
   */
  type AppOption<G> = IAppOptionMethods
    & {
        globalData?: G;
        [name: string]: any;
      }
    & ThisType<IAppInstance<G>>;
}

/**
 * App() 函数用来注册一个小程序。接受一个 object 参数，其指定小程序的生命周期函数等。
 */
declare function App(option: tinyapp.AppOption<any>): void;

/**
 * 获取小程序实例
 */
declare function getApp(): { globalData: any };
