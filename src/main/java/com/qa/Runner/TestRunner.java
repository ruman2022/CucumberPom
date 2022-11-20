package com.qa.Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;



@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/Users/iftakerahmed/IdeaProjects/CucumberPOM/src/main/java/com/qa/features/fb.feature",
        glue = {"com/qa/stepDefination"},
        format = {"pretty", "html:Test-output"},
        dryRun = false,
        monochrome = false



)

public class TestRunner {


}
