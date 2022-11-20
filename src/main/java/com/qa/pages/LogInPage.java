package com.qa.pages;

import com.qa.util.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class LogInPage extends TestBase {

    @FindBy(name= "email")
    WebElement Username;

    @FindBy ( name ="pass")
    WebElement password;

    @FindBy( name = "login")
    WebElement logInButton;

    @FindBy(xpath = "//*[@id=\"content\"]/div/div/div/div[1]/div")
    WebElement Fblogo;


    public LogInPage() throws IOException {
        PageFactory.initElements(dr, this);
    }

    public String validateLogInPageTitle(){
        return dr.getTitle();
    }

    public boolean validateFbImage(){
       return Fblogo.isDisplayed();
    }

    public void ClickOnLogInButton(){
        logInButton.click();
    }

    public HomePage logIn(String un, String pwd) throws IOException {
        Username.sendKeys(un);
        password.sendKeys(pwd);



        return new HomePage();
    }
}
