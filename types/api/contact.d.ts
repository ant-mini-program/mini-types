/**
 * @file 联系人
 */
declare namespace my {
  interface IChoosePhoneContactSuccessResult {
    /**
     * 选中的联系人姓名
     */
    name: string;
    /**
     * 选中的联系人手机号
     */
    mobile: string;
  }
  interface IChoosePhoneContactFailResult {
    /**
     * 10 -> 没有权限；11 -> 用户取消操作(或设备未授权使用通讯录)
     */
    error: 10 | 11;
  }
  interface IChoosePhoneContactOption {
    success?(result: IChoosePhoneContactSuccessResult): void;
    fail?(result: IChoosePhoneContactFailResult): void;
    complete?(result: IChoosePhoneContactSuccessResult | IChoosePhoneContactFailResult): void;
  }
  /**
   * 选择本地系统通信录中某个联系人的电话。
   */
  function choosePhoneContact(option: IChoosePhoneContactOption): void;

  interface IChooseAlipayContactSuccessResult {
    /**
     * 选中的支付宝联系人数组
     */
    contacts: Array<{
      /**
       * 账号的真实姓名
       */
      realName: string;
      /**
       * 账号对应的手机号码
       */
      mobile?: string;
      /**
       * 账号的邮箱
       */
      email?: string;
      /**
       * 账号的头像链接
       */
      avatar: string;
      /**
       * 支付宝账号唯一 userId
       */
      userId: string;
    }>;
  }
  interface IChooseAlipayContactFailResult {
    /**
     * 10 -> 没有权限；11 -> 用户取消操作(或设备未授权使用通讯录)
     */
    error: 10 | 11;
  }
  interface IChooseAlipayContactOption {
    /**
     * 单次最多选择联系人个数，默认 1，最大 10
     */
    count?: number;
    success?(result: IChooseAlipayContactSuccessResult): void;
    fail?(result: IChooseAlipayContactFailResult): void;
    complete?(result: IChooseAlipayContactSuccessResult | IChooseAlipayContactFailResult): void;
  }
  function chooseAlipayContact(option: IChooseAlipayContactOption): void;

  interface IChooseContactSuccessResult {
    contactsDicArray: Array<{
      /**
       * 支付宝账号唯一 userId
       */
      userId: string;
      /**
       * 账号的头像链接
       */
      avatar: string;
      /**
       * 账号对应的手机号码
       */
      mobile: string;
      /**
       * 账号的真实姓名
       */
      realName: string;
      /**
       * 账号的显示名称：也即支付宝设置的备注名称，默认为朋友圈里面的昵称
       */
      displayName: string;
    }>;
  }
  interface IChooseContactOption {
    /**
     * 选择类型，值为single（单选）或者 multi（多选）
     */
    chooseType: 'single' | 'multi';
    /**
     * 包含手机通讯录联系人的模式：默认为不包含（none）、或者仅仅包含双向通讯录联系人（known）、或者包含手机通讯录联系人（all）
     */
    includeMobileContactMode?: 'none' | 'known' | 'all';
    /**
     * 是否包含自己
     */
    includeMe?: boolean;
    /**
     * 最大选择人数，仅 chooseType 为 multi 时才有效
     */
    multiChooseMax?: number;
    /**
     * 多选达到上限的文案，仅 chooseType 为 multi 时才有效
     */
    multiChooseMaxTips?: string;
    success?(result: IChooseContactSuccessResult): void;
    fail?(): void;
    complete?(result?: IChooseContactSuccessResult): void;
  }
  /**
   * 唤起选人组件，默认只包含支付宝联系人，可以通过修改参数包含手机通讯录联系人或者双向通讯录联系人。
   */
  function chooseContact(option: IChooseContactOption): void;
}
