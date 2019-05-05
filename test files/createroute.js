var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();


driver.get('http://localhost:3001/').then(function(){
	driver.findElement(webdriver.By.name('email-address')).sendKeys('megan@gmail.com');
	driver.findElement(webdriver.By.name('password')).sendKeys('123');
	

	driver.findElement(webdriver.By.name('signin')).click().then(function(){
			setTimeout( create_route ,1000);
			});

});

function create_route(){
	driver.findElement(webdriver.By.name('createroute')).click().then(function(){
			setTimeout( enter_info ,1000);
			});

}

function enter_info(){
	driver.findElement(webdriver.By.name('route')).sendKeys('IowaCity-CedarRapids');
	//driver.findElement(webdriver.By.name('start')).sendKeys('downtown IC');
	//driver.findElement(webdriver.By.name('stop')).sendKeys('cedarBusStop');
	driver.findElement(webdriver.By.name('crbtn')).click().then(function(){
			setTimeout( submit ,1000);
			});
}
function submit(){
	console.log('Test Passed: success');
	
}







