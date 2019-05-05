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
	driver.findElement(webdriver.By.name('ride')).click().then(function(){
			setTimeout( search ,1000);
			});

}

function search(){
	driver.findElement(webdriver.By.name('search')).sendKeys('red');
	driver.findElement(webdriver.By.name('RedRoute10:50')).click().then(function(){
			setTimeout( submit ,1000);
			});
}
function submit(){
	console.log('Test Passed: success');
	driver.findElement(webdriver.By.name('submit')).click();
}







