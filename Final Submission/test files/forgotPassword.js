var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();


driver.get('http://localhost:3001/').then(function(){
	driver.findElement(webdriver.By.name('forgotpass')).click().then(function(){
			setTimeout( fillform ,1000);
			});

});

function fillform(){
	driver.findElement(webdriver.By.name('question1response')).sendKeys('black dog');
	driver.findElement(webdriver.By.name('question2response')).sendKeys('Indore');
	
	driver.findElement(webdriver.By.name('b1')).click().then(function(){
			setTimeout( newpass ,1000);
			});
}

function newpass(){
	driver.findElement(webdriver.By.name('password')).sendKeys('jv45Dert');
	
	driver.findElement(webdriver.By.name('b2')).click().then(function(){
			setTimeout( submit ,1000);
			});
}

function submit(){
	console.log('Test Passed: success');
}












