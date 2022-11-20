$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/iftakerahmed/IdeaProjects/CucumberPOM/src/main/java/com/qa/features/fb.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook logIn Test",
  "description": "",
  "id": "facebook-login-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate facebook Homepage",
  "description": "",
  "id": "facebook-login-test;validate-facebook-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on logIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate HomePage logo",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click kon news",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user check is friendButton Displyed",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepagesteps.user_opens_browser()"
});
formatter.result({
  "duration": 4891728853,
  "status": "passed"
});
formatter.match({
  "location": "Homepagesteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 38394773,
  "status": "passed"
});
formatter.match({
  "location": "Homepagesteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 4216342346,
  "status": "passed"
});
formatter.match({
  "location": "Homepagesteps.user_clicks_on_logIn_button()"
});
formatter.result({
  "duration": 92452829,
  "status": "passed"
});
formatter.match({
  "location": "Homepagesteps.validate_HomePage_logo()"
});
formatter.result({
  "duration": 34659623714,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"mount_0_0_5/\"]/div/div[1]/div/div[2]/div[1]/a\"}\n  (Session info: chrome\u003d107.0.5304.110)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Iftakers-MacBook-Pro-2.local\u0027, ip: \u00272603:7000:cd01:d4ce:0:0:0:1427%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/qv/54ky6gkd0wv...}, goog:chromeOptions: {debuggerAddress: localhost:56774}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fc8d0397e263105b95792c75e01003b4\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"mount_0_0_5/\"]/div/div[1]/div/div[2]/div[1]/a}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy15.isDisplayed(Unknown Source)\n\tat com.qa.pages.HomePage.verifyHomePageLogo(HomePage.java:28)\n\tat com.qa.stepDefination.Homepagesteps.validate_HomePage_logo(Homepagesteps.java:58)\n\tat ✽.Then validate HomePage logo(/Users/iftakerahmed/IdeaProjects/CucumberPOM/src/main/java/com/qa/features/fb.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "location": "Homepagesteps.click_kon_news()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Homepagesteps.user_check_is_friendButton_Displyed()"
});
formatter.result({
  "status": "skipped"
});
});