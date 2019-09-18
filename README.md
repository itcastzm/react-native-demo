emulator.exe -netdelay none -netspeed full -avd Nexus_5X_API_27 

emulator.exe -netdelay none -netspeed full -avd Pixel_2_API_28 


解决androidx.annotation.Nullable 问题 

.gradle.properties 中添加

android.useAndroidX = true
android.enableJetifier = true
3.安装jetifier，找到RN项目的根目录，敲入下面命令行。可以参考这篇文章https://github.com/mikehardy/jetifier

npm install --save-dev jetifier
npx jetify
npx react-native run-android (your app should correctly compile and work)
Call npx jetify run in the postinstall target of your package.json (Any time your dep

npm install --save-dev jetifier
npx jetify
npx react-native run-android 


访问地址验证js server是否启动起来
http://localhost:8081/index.delta?platform=android


react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

adb reverse tcp:8081 tcp:8081

React Native常用三方组件库大全
https://www.jianshu.com/p/18fd4b438958


npm i react-native-action-button --save
react-native link react-native-vector-icons

https://segmentfault.com/a/1190000014186219


167.179.83.231

198.13.45.109

149.28.16.96 