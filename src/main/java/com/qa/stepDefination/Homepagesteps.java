package com.qa.stepDefination;

import com.qa.pages.HomePage;
import com.qa.pages.LogInPage;
import com.qa.util.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class Homepagesteps extends TestBase{

    LogInPage lognPage;
    HomePage   homePage;


    public Homepagesteps() throws IOException {
        PageFactory.initElements(dr, this);
    }

    @Given("^user opens browser$")
    public void user_opens_browser() {

        TestBase.initialization();
    }

    @Then("^user is on login page$")
    public void user_is_on_login_page() throws IOException {

        lognPage=new LogInPage();
       String title =lognPage.validateLogInPageTitle();
        System.out.println(title);
        Assert.assertEquals("Facebook - log in or sign up", title);
    }

    @Then("^user enters username and password$")
    public void user_enters_username_and_password() throws IOException, InterruptedException {
        Thread.sleep(4000);
        homePage=lognPage.logIn(prop.getProperty("username"), prop.getProperty("password"));


    }

    @Then("^user clicks on logIn button$")
    public void user_clicks_on_logIn_button()  {

        lognPage.ClickOnLogInButton();

    }



    @Then("^validate HomePage logo$")
    public void validate_HomePage_logo()  {

       boolean logo= homePage.verifyHomePageLogo();
        Assert.assertTrue(logo);


    }

    @Then("^click kon news$")
    public void click_kon_news()  {
        homePage.isnewsClickable();

    }

    @Then("^user check is friendButton Displyed$")
    public void user_check_is_friendButton_Displyed()  {

        homePage.isfriendsButtonDisplayed();
    }
}
