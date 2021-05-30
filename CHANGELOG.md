# 0.1.7

* **Bug Fix**

  - 修复 `IFailResult` 类型引入问题。

# 0.1.6

* **主要变更**

  - [+] `IGetFileInfoOptions` 的 `digestAlgorithm` 参数类型新增 `sha1`。
  - [+] 优化 `offAccelerometerChange`、`offUserCaptureScreen`、`offUserCaptureScreen`、`offCompassChange`、`offGyroscopeChange` 的返回类型。
  - [+] 完善 `my.scan` 参数。
  - [+] 引入 `audio` 文件。

# 0.1.5

* **主要变更**

  - [+] 增加 `my.createInnerAudioContext()`、`my.getLaunchOptionsSync()`、`my.createLottieContext()` 类型声明。

# 0.1.4

* **主要变更**

  - [+] 增加 `my.getExtConfigSync()`、`my.getAppIdSync()`、`my.getUpdateManager()`、`my.showSharePanel()` 类型声明。

* **Refactor**

  - 将 `getApp` 返回的 `{ globalData: any; }` 重构成 `tinyapp.IGetAppResult`。

* **Bug Fix**

  - 修复 animation 类型。

# 0.1.3

* **Bug Fix**
  - 修复 `IPreviewImageOptions` 的 `current` 属性为 `number` 类型；
  - 修复 `pageInstance.$spliceData` 和 `componentInstance.$spliceData` 没有回调函数的问题。

# 0.0.2

`2019-06-10`

* **Bug Fix**
  - 将 destructiveBtnIndex 参数设为可选；
  - 删掉没有使用到且与新版 TypeScript 底层库冲突的 Omit 类型。
