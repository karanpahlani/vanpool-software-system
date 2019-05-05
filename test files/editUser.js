var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();


driver.get('http://localhost:3001/').then(function(){
	driver.findElement(webdriver.By.name('email-address')).sendKeys('pahlani@gmail.com');
	driver.findElement(webdriver.By.name('password')).sendKeys('123');
	

	driver.findElement(webdriver.By.name('signin')).click().then(function(){
			setTimeout( select_route ,1000);
			});

});

function select_route(){
	driver.findElement(webdriver.By.name('edit')).click().then(function(){
			setTimeout( enter_details ,1000);
			});

}

function enter_details(){
	driver.findElement(webdriver.By.id('name')).sendKeys('Gaurav');
	driver.findElement(webdriver.By.id('email')).sendKeys('gaurav@gmail.com');
	driver.findElement(webdriver.By.id('phone')).sendKeys('9039630794');
	driver.findElement(webdriver.By.id('address')).sendKeys('555 benton street');
	driver.findElement(webdriver.By.id('password')).sendKeys('kjR4567jug');

	driver.findElement(webdriver.By.name('submitbtn')).click().then(function(){
			setTimeout( submit ,1000);
			});
}
function submit(){
	console.log('Test Passed: success');
	
}







