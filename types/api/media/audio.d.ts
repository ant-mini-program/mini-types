/**
 * @file 内部音频控制
 */
declare namespace my {
  interface IInnerAudioContext {
    /**
     * 音频码，用于直接播放。支持音频格式：AAC，MP3。如果开发者不传入音频码，控制台不会报错，但无音频播放。
     * 注意：只支持来源于优酷的音频码。
     */
    src: string;

    /**
     * 是否循环播放，默认为 false。
     */
    loop: boolean;

    /**
     * 当前是否为暂停或停止状态，true 表示暂停或停止，false 表示正在播放。
     */
    paused: boolean;

    /**
     * 音量。范围 0~1.0
     */
    volume: number;

    /**
     * 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。
     */
    buffered: number;

    /**
     * 当前音频的长度，单位为秒（s），只有在当前有合法的 src 时返回。
     */
    duration: number;

    /**
     * 是否自动开始播放，默认为 false。
     * 注意：一定要先声明此属性，再去赋值src，否则自动播放会失效
     */
    autoplay: boolean;

    /**
     * 开始播放的位置，单位为秒（s），默认从 0 开始播放。
     */
    startTime: number;

    /**
     * 当前音频的播放位置，单位为秒（s），只有在当前有合法的 src 时返回，时间不取整。
     */
    currentTime: number;

    /**
     * 是否遵循系统静音开关，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音，默认值为 true (注意：此参数仅 iOS 支持)。
     */
    obeyMuteSwitch?: boolean;

    /**
     * 标记是否记录当前url播放进度到本地存储，记录的可以通过接口查询，以便恢复播放现场；（Since 10.1.62）
     */
    isRecordAudioPlayState?: boolean;

    /**
     * 播放。
     */
    play: () => void;

    /**
     * 停止。
     */
    stop: () => void;

    /**
     * 暂停。
     */
    pause: () => void;

    /**
     * 跳转到指定位置，单位为秒（s）。精确到小数点后 3 位，即支持 毫秒（ms） 级别精确度。
     */
    seek: (position: number) => void;

    /**
     * 销毁当前实例。
     */
    destroy: () => void;

    /**
     * 监听前景音频进入可以播放状态，但不保证后面可以流畅播放。
     */
    onCanplay: (callback: () => void) => void;

    /**
     * 监听前景音频进入可以播放状态，但不保证后面可以流畅播放。
     */
    onPlay: (callback: () => void) => void;

    /**
     * 监听前景音频暂停事件。
     */
    onPause: (callback: () => void) => void;

    /**
     * 监听前景音频停止事件。
     */
    onStop: (callback: () => void) => void;

    /**
     * 监听前景音频自然播放结束事件。
     */
    onEnded: (callback: () => void) => void;

    /**
     * 监听前景音频播放进度更新事件。
     */
    onTimeUpdate: (callback: () => void) => void;

    /**
     * 监听前景音频播放错误事件。
     */
    onError: (callback: () => void) => void;

    /**
     * 监听前景音频加载中事件，当音频因为数据不足，需要停下来加载时会触发。
     */
    onWaiting: (callback: () => void) => void;

    /**
     * 监听前景音频开始播放进度跳转的操作事件。
     */
    onSeeking: (callback: () => void) => void;

    /**
     * 监听前景音频完成播放进度跳转的操作事件。
     */
    onSeeked: (callback: () => void) => void;

    /**
     * 取消监听 onCanplay 事件。
     */
    offCanplay: (callback: () => void) => void;

    /**
     * 取消监听 onPlay 事件。
     */
    offPlay: (callback: () => void) => void;

    /**
     * 取消监听 onPause 事件。
     */
    offPause: (callback: () => void) => void;

    /**
     * 取消监听 onStop 事件。
     */
    offStop: (callback: () => void) => void;

    /**
     * 取消监听 onEnded 事件。
     */
    offEnded: (callback: () => void) => void;

    /**
     * 取消监听 onTimeUpdate 事件。
     */
    offTimeUpdate: (callback: () => void) => void;

    /**
     * 取消监听 onError 事件。
     */
    offError: (callback: () => void) => void;

    /**
     * 取消监听 onWaiting 事件。
     */
    offWaiting: (callback: () => void) => void;

    /**
     * 取消监听 onSeeking 事件。
     */
    offSeeking: (callback: () => void) => void;

    /**
     * 取消监听 onSeeked 事件。
     */
    offSeeked: (callback: () => void) => void;
  }

  /**
   * 创建并返回内部音频Context
   * （与背景音频相对应 innerAudioContext 对象的 API。又称“前景音频”，用户离开页面即停止播放。)
   * https://opendocs.alipay.com/mini/00bg4q
   */
  function createInnerAudioContext(): IInnerAudioContext;
}
