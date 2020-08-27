/**
 * @file IntersectionObserver 对象，用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。
 */
declare namespace my {
  namespace intersectionObserver {
    interface ICreateOptions {
      /**
       * 一个数值数组，包含所有阈值
       */
      thresholds?: number[];

      /**
       * 初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数
       */
      initialRatio?: number;

      /**
       * 是否同时观测多个目标节点（而非一个），如果设为 `true` ，observe 的 targetSelector 将选中多个节点（注意：同时选中过多节点将影响渲染性能）
       */
      selectAll?: boolean;
    }

    interface IRect {
      /**
       * 左边界
       */
      left: number;

      /**
       * 右边界
       */
      right: number;

      /**
       * 上边界
       */
      top: number;

      /**
       * 下边界
       */
      bottom: number;
    }

    interface IObserveResult {
      /**
       * 相交比例
       */
      intersectionRatio: number;

      /**
       * 相交区域的边界
       */
      intersectionRect: IRect;

      /**
       * 目标边界
       */
      boundingClientRect: IRect;

      /**
       * 参照区域的边界
       */
      relativeRect: IRect;

      /**
       * 相交检测时的时间戳
       */
      time: number;
    }

    interface IIntersectionObserverInstance {
      /**
       * 指定页面显示区域作为参照区域之一
       */
      relativeToViewport(margins?: Partial<IRect>): IIntersectionObserverInstance;

      /**
       * 使用选择器指定一个节点，作为参照区域之一
       */
      relativeTo(selector: string, margins?: Partial<IRect>): IIntersectionObserverInstance;

      /**
       * 指定目标节点，并开始监听相交状态变化情况
       */
      observe(
        targetSelector: string,
        callback: (res: IObserveResult) => any,
      ): IIntersectionObserverInstance;

      /**
       * 停止监听回调函数将不再触发
       */
      disconnect(): void;
    }
  }

  /**
   * 获取一个相交监测对象 IntersectionObserver
   */
  function createIntersectionObserver(
    options?: intersectionObserver.ICreateOptions,
  ): intersectionObserver.IIntersectionObserverInstance;
}
