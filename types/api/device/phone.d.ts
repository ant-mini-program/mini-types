/**
 * @file 拨打电话
 */
declare namespace my {
  interface IMakePhoneCallOptions {
    number: string;
  }
  function makePhoneCall(options: IMakePhoneCallOptions): void;
}
