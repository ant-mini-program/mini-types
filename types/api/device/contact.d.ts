/**
 * @file 添加手机联系人
 */
declare namespace my {
  interface IAddPhoneContactOptions {
    photoFilePath?: string;
    nickName?: string;
    lastName?: string;
    middleName?: string;
    firstName?: string;
    remark?: string;
    mobilePhoneNumber?: string;
    alipayAccount?: string;
    addressCountry?: string;
    addressState?: string;
    addressCity?: string;
    addressStreet?: string;
    addressPostalCode?: string;
    organization?: string;
    title?: string;
    workFaxNumber?: string;
    workPhoneNumber?: string;
    hostNumber?: string;
    email?: string;
    url?: string;
    workAddressCountry?: string;
    workAddressState?: string;
    workAddressCity?: string;
    workAddressStreet?: string;
    workAddressPostalCode?: string;
    homeFaxNumber?: string;
    homePhoneNumber?: string;
    homeAddressCountry?: string;
    homeAddressState?: string;
    homeAddressCity?: string;
    homeAddressStreet?: string;
    homeAddressPostalCode?: string;
    success?(res: { success: true } | { error: 11 | 3; errorMessage: string; }): void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * 用户可以选择将该表单以“创建新联系人”或“添加到现有联系人”的方式，写入到手机系统的通讯录。
   */
  function addPhoneContact(options: IAddPhoneContactOptions): void;
}
