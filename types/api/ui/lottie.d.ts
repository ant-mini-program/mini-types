/**
 * @file Lottie动画
 */
declare namespace my {
  interface ILottieContext {
    /**
     * Lottie组件的id
     */
    id?: string;
    /**
     * pageId，默认0
     */
    page?: number;

    /**
     * 是否暂停状态
     */
    paused: boolean;

    /**
     * 是否是插件
     */
    isPlugin?: any;

    /**
     * 	开始播放
     */
    play: () => void;

    /**
     * 停止播放
     */
    stop: () => void;

    /**
     * 暂停
     */
    pause: () => void;

    /**
     * 设置播放速度。正数为正向播放，负数负向播放。
     * 默认值：1
     */
    setSpeed: (value: number) => void;

    /**
     * 返回总时长，单位毫秒
     */
    getDuration: () => void;

    /**
     * goto 到 value 并停在该进度。
     * value: [0.0～1.0]
     */
    goToAndPlay: (value: number) => void;

    /**
     * goto 到 value 并从该进度开始播。
     * value: [0.0～1.0]
     */
    goToAndStop: (value: number) => void;

    /**
     * 获取Lottie信息
     */
    getLottieInfo: () => void;

    /**
     * 设置参数化Key-Value
     */
    fillVariableValue: () => void;

    /**
     * 当前Lottie视图指定降级为展示placeholder
     */
    downgradeToPlaceholder: () => void;

    /**
     * 从最小到最大的Frame区间进行播放
     * min: 最小帧
     * max: 最大帧 整数值
     */
    playFromMinToMaxFrame: (min: number, max: number) => void;

    /**
     * 从最小到最大的进度区间进行播放
     * 进度区间进行播放
     * min: 最小进度
     * max: 最大进度 百分比 [0.0～1.0]
     */
    playFromMinToMaxProgress: (min: number, max: number) => void;
  }

  /**
   * 创建并返回Lottie实例对象：LottieContext
   */
  function createLottieContext(id: string): ILottieContext;
}
