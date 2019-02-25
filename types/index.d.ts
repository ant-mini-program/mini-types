// TypeScript Version: 3.3

/// <reference path="./app.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="./page.d.ts" />
/// <reference path="./api/index.d.ts" />

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

declare namespace tinyapp {
  /**
   * 事件对象 https://docs.alipay.com/mini/framework/events#a-namefc3wdba%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1
   */
  interface IBaseEvent {
    type: string;
    timeStamp: number;
    target: {
      tagName: string;
      dataset: Record<string, string | number>;
      targetDataset: Record<string, string | number>;
      offsetLeft: number;
      offsetTop: number;
    };
    currentTarget: {
      tagName: string;
      dataset: Record<string, string | number>;
      offsetLeft: number;
      offsetTop: number;
    };
  }

  interface ICustomEvent extends IBaseEvent {
    /**
     * 自定义事件所携带的数据，如表单组件的提交事件会携带用户的输入信息，
     * 媒体的错误事件会携带错误信息，详细的描述请参考组件定义中各个事件的定义。
     */
    detail: Record<string, any>;
  }

  interface ITouch {
    identifier: number;
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
  }

  interface ICanvasTouch {
    identifier: number;
    x: number;
    y: number;
  }

  interface ITouchEvent extends IBaseEvent {
    touches: Array<ITouch | ICanvasTouch>;
    changedTouches: Array<ITouch | ICanvasTouch>;
  }
}
