# awsSolArchPro


sudo ionic cordova build --release android
rm *.apk
cp /Users/faeezshaikh/git/awsSolArchPro/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk .
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore awsArch-key.keystore app-release-unsigned.apk awsArch-
/Users/faeezshaikh/Library/Android/sdk/build-tools/23.0.2/zipalign -v 4 android-release-unsigned.apk AWS-Certified-Pro-Arch.apk

OR
/Users/faeezshaikh/Library/Android/sdk/build-tools/27.0.0/zipalign -v 4 app-release-unsigned.apk AWS-Certified-Pro-Arch.apk


For iOS Release:
https://ionicframework.com/docs/v1/guide/publishing.html
For Signing certs error (Udemy vid) & 
https://stackoverflow.com/questions/37806538/code-signing-is-required-for-product-type-application-in-sdk-ios-10-0-stic#answer-39498874



Troubleshooting:
===============
/Users/faeezshaikh/Library/Android/sdk/platform-tools/adb kill-server
/Users/faeezshaikh/Library/Android/sdk/platform-tools/adb start-server
/Users/faeezshaikh/Library/Android/sdk/platform-tools/adb devices


Known Issues:
0. Change icon. too think text
1. Reset Password , enter invalid email..nothing happened (Get 400 Bad Request) - Reset Password when tested with invalid or unpresent email does a 400 bad request with no response to user on UI.
2. Error Msg on Registration (blank Emails)..very ugly msg..But dont change since its dynamic
3. . Update links in Social sharing -? 
4. Randomize Questions and within questions randomize options


bug: Timer up causes page to crash when scrollToTop fails on menu list home page.
Bug: going back to list while timer is running will elapse timer on the lists page


Ionic serve not starting
=========================
npm install @ionic/app-scripts@1.1.4
npm run ionic:serve








Nice to have:
1. Ionic Cloud - Push Notification
3. Slides on login to walk through

Cross-promotion (in-house ads)
chat with author
Chat with other users
Comment on a question


Till ! # 81 (Q #67 in Exam2) from pdf / Jan 9, 2019


FB Mobile App Ads:
https://developers.facebook.com/videos/f8-2016/driving-growth-with-mobile-app-ads/
