106.14.56.249


rn项目真机调试

360手机解锁手势密码： U形


单独启动android模拟器：
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

运行项目
1. git clone https://github.com/ivanyb/tanhua0599.git
2. cd tanhua0599
3. yarn install （或者npm install 或者 cnpm install）
4. react-native link
5. npm install --save-dev jetifier
6. npx jetify
7. npx react-native run-android 
8. react-native run-android  (执行这个命令前，请先开启android模拟器)





访问地址验证js server是否启动起来
http://localhost:8081/index.delta?platform=android


react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

adb reverse tcp:8081 tcp:8081
adb devices

真机调试 
adb shell input keyevent 82

React Native常用三方组件库大全
https://www.jianshu.com/p/18fd4b438958


react-native 阴影效果不支持  android 安卓支持阴影需要
参考 https://www.npmjs.com/package/react-native-shadow


npm i react-native-action-button --save
react-native link react-native-vector-icons

https://segmentfault.com/a/1190000014186219

## RN 表情包


 python /usr/local/shadowsocks/server.py -c /etc/shadowsocks.json -d start root      11611

 python /usr/local/shadowsocks/server.py -c /etc/shadowsocks.json -d start


打包apk
1. 生成秘钥
keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048


【react-native】0.57版本打包错误，SDK版本不匹配问题：Execution failed for task 'xxx:verifyReleaseResources'

react-native版本：0.57.1

这个问题原本不是rn版本的问题，原因是0.57.1将Android SDK的版本更新到27了，这与大多第三方使用了原生代码的插件不兼容了，因为第三方更新不及时，SDK还是旧的版本。
解决方案：
1.首先在node_modules中找到报错的包里面的build.gradle，比如我这个就是\node_modules\react-native-version-number\android\build.gradle；

2.修改这个build.gradle，使其与android/build.gradle（也可能是android/app/build.gradle）里面的SDK版本保持一致；

3.将build.gradle里的compile改为implementation，因为compile已过时。

```

android {
    compileSdkVersion 27 // 23 -> 27
    buildToolsVersion "27.0.3" // 23.0.1 -> 27.0.3
 
    defaultConfig {
        minSdkVersion 16
        targetSdkVersion 26 // 22 -> 26
        versionCode 1
        versionName "1.0"
        ndk {
            abiFilters "armeabi-v7a", "x86"
        }
    }
    lintOptions {
       warning 'InvalidPackage'
    }
}
 
dependencies {
    implementation 'com.facebook.react:react-native:+' // compile -> implementation
}

```
然后重新发布就好了。

发布的方式
npx  react-native run-android --variant=release


docker run -p 81:81 --name mynginx --privileged=true -v /data/nginx/html:/usr/share/nginx/html -v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /data/nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf -v /data/nginx/logs:/var/log/nginx -d nginx

 
docker run -p 80:80 --name nginxforp --privileged=true -v /data/nginx/html:/usr/share/nginx/html -v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /data/nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf -v /data/nginx/logs:/var/log/nginx -d nginx

airbnb RN 开发代码风格
https://www.jianshu.com/p/a19ccdecdfe9


预习周：数据结构和算法总览
第一周：数组与链表、栈与队列
第二周：哈希表、映射、集合
第二周：树、二叉数和图
第三周：递归、分治和回溯
第四周：深度、广度优先搜索与剪枝
第四周：贪心算法与二分查找
第五周：动态规划
第六周：并查集、字典树、红黑树和 AVL 树
第七周：位运算、布隆过滤器和 LRU Cache
第七周：排序、字符串操作串讲
毕业周：整体知识总结