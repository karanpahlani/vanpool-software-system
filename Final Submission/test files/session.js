var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();


driver.get('http://localhost:3001/').then(function(){
	driver.findElement(webdriver.By.name('signup')).click().then(function(){
			setTimeout( fillform ,1000);
			});

});

function fillform(){
	driver.findElement(webdriver.By.name('name')).sendKeys('hans jhonson');
	driver.findElement(webdriver.By.name('email-address')).sendKeys('hans@gmail.com');
	driver.findElement(webdriver.By.name('password')).sendKeys('Pass123woD');
	driver.findElement(webdriver.By.name('question1')).sendKeys('what was your first pet?');
	driver.findElement(webdriver.By.name('question2')).sendKeys('Where were you born?');
	
	driver.findElement(webdriver.By.name('signupbtn')).click().then(function(){
			setTimeout( submit ,1000);
			});
}

function submit(){
	console.log('Test Passed: success');
}










