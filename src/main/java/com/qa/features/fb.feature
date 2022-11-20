Feature: Facebook logIn Test

  Scenario: Validate facebook Homepage

    Given user opens browser
    Then user is on login page
    Then user enters username and password
    Then user clicks on logIn button
    Then validate HomePage logo
    Then click kon news
    Then user check is friendButton Displyed
