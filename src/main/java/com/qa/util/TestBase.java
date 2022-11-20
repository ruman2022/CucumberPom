package com.qa.util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class TestBase {



   public static WebDriver dr;

   public static Properties prop;

   public TestBase() throws IOException {

       try {
           prop = new Properties();
           FileInputStream file =new FileInputStream
                   ("/Users/iftakerahmed/IdeaProjects/CucumberPOM/" +
                           "src/main/java/com/qa/config/config.properties");
                   prop.load(file);
       } catch (FileNotFoundException e) {
           e.getMessage();
       }
   }


   public static void initialization(){
       String browserName =prop.getProperty("browser");

       if (browserName.equalsIgnoreCase("chrome")){
           System.setProperty("webdriver.chrome.driver", "/Users/iftakerahmed/Downloads/chromedriver");

           dr= new ChromeDriver();

       }
       else if (browserName.equalsIgnoreCase("firefox")){
            System.setProperty("webdriver.gecko.driver","/Users/iftakerahmed/Downloads/geckodriver");

            dr= new FirefoxDriver();
       }
       dr.manage().window().maximize();
       dr.manage().deleteAllCookies();
       dr.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS );
       dr.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);

       dr.get(prop.getProperty("url"));





   }

}
