package com.qa.pages;

import com.qa.util.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class HomePage extends TestBase {

    @FindBy (xpath="//*[@id=\"mount_0_0_5/\"]/div/div[1]/div/div[2]/div[1]/a")
    WebElement logo;

    @FindBy (xpath = "//*[@id=\"mount_0_0_5/\"]/div/div[1]/div/div[3]/div/div/div/div[1]" +
            "/div[1]/div/div[1]/div/div/div[1]/div/div/div[1]/div[1]/ul/li[26]")
    WebElement news;

    @FindBy(xpath = "//*[@id=\"mount_0_0_5/\"]/div/div[1]/div/div[2]/div[3]/div/div[1]/div[1]/ul/li[2]")
    WebElement friends;

    public HomePage() throws IOException {
        PageFactory.initElements(dr, this);
    }


    public boolean verifyHomePageLogo(){
       return logo.isDisplayed();
    }

    public void isnewsClickable(){

        news.click();
        dr.navigate().back();

    }
    public boolean isfriendsButtonDisplayed(){
       return  friends.isDisplayed();
    }

}
