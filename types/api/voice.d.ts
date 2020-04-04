/**
 * @file 小程序端-小程序VGUI接口
 * @see https://miniapp.alios.cn/#/document/info?path=%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/%E5%A4%9A%E6%A8%A1%E8%83%BD%E5%8A%9B/%E8%AF%AD%E9%9F%B3%E8%83%BD%E5%8A%9B%E6%96%87%E6%A1%A3/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%AB%AF-%E5%B0%8F%E7%A8%8B%E5%BA%8FVGUI%E6%8E%A5%E5%8F%A3
 */
declare namespace my {
  namespace aliauto {
    interface SayOptions {
      /**
       * 语音播报后麦克风的状态，可选的值为 default, on, off，如果不是上述三个值之一，会用 default 处理。
       */
      micState?: "default" | "on" | "off";
      /**
       * 语音播报过程中的事件返回，包含一个参数表示状态，其值可以为 start, finish, cancel, error。
       */
      statechange?: (status: "start" | "finish" | "cancel" | "error") => void;
    }

    /**
     * 使用TTS播报一段内容，可控制播报结束后开关麦克风，可监听播报时的状态变化
     * @param words 语音合成的内容，也会展示在小云上。
     * @param options 语音播报选项
     */
    function say(words: string, options?: SayOptions): void;

    /**
     * 通过使用 API 主动发起一段语音对话。
     * @param words 发起主动对话的内容
     */
    function startConversation(words: string): void;

    /**
     * VoiceEvent 是 UIEvent 的子类，包含其父类的 type, target 等属性，VoiceEvent 带的属性见下表。
     */
    interface VoiceEvent {
      /**
       * 语音命中的热词
       */
      text: string;
      /**
       * 语音命令中“第X个”和“第X页”中的X。
       */
      index: number;
      /**
       * 语音命令，如 select。
       */
      command: string;
    }
    /**
     * 语音经过识别和理解后，通过云端配置的 skill 返回结果，小程序通过该方法处理。
     */
    function onSkillResult(handler: (event: VoiceEvent) => void): void;
  }
}
