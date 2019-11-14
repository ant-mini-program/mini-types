declare namespace my {
  interface IGetOpenUserInfoSuccessResult {
    /**
     * 获取用户信息后，应使用 `let userInfo = JSON.parse(res.response).response` 解析数据
     *
     * 成功返回 res.response 报文格式示例如下：
     * ```
     * `{"response": {"code": "10000","msg": "Success","countryCode": "CN","gender": "f","nickName": "XXX","avatar": "https://tfs.alipayobjects.com/images/partner/XXXXXXXX","city": "南通市","province": "江苏省"}}`
     * ```
     *
     * 未接入“获取用户基础信息”的功能包，返回 res.response 报文格式示例如下：
     * ```
     * `{"response":{"code":"40006","msg":"Insufficient Permissions","subCode":"isv.insufficient-isv-permissions","subMsg":"ISV权限不足，建议在开发者中心检查对应功能是否已经添加"}}`
     * ```
     */
    response: string;
  }
  interface IGetOpenUserInfoOptions {
    /**
     * 调用成功的回调函数
     */
    success?(res: IGetOpenUserInfoSuccessResult): void;
    /**
     * 调用失败的回调函数
     */
    fail?(): void;
    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(): void;
  }
  /**
   * 获取支付宝会员的基础信息
   */
  function getOpenUserInfo(option?: IGetOpenUserInfoOptions): void;
}
