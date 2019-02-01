/**
 * Page 实现的接口对象
 */
declare interface IPage {
  /**
   * [read-only]页面的初始数据
   */
  data?: any;

  /**
   * 生命周期函数--监听页面加载
   * @param query query 参数为 my.navigateTo 和 my.redirectTo 中传递的 query 对象。
   */
  onLoad?: (query?: my.IData) => void;

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady?: () => void;

  /**
   * 生命周期函数--监听页面显示
   */
  onShow?: () => void;

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide?: () => void;

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload?: () => void;

  /**
   * 页面相关事件处理--监听用户点击标题栏
   */
  onTitleClick?: () => void;

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh?: () => void;

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom?: () => void;

  /**
   * 返回自定义分享信息
   */
  onShareAppMessage?: () => my.ShareOptions;

  /**
   * 将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值
   */
  setData?: (data: any) => void;

  /**
   * 同setData，但是相比于setData，在处理长列表的时候，其具有更高的性能
   */
  $spliceData?: { [key: string]: any[] };

  [key: string]: any;
}

/**
 * Page() 函数用来注册一个页面。
 * 接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
 */
declare function Page(page: IPage): void;
