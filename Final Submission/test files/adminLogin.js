var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();


driver.get('http://localhost:3001/').then(function(){
	driver.findElement(webdriver.By.name('email-address')).sendKeys('admin@admin.com');
	driver.findElement(webdriver.By.name('password')).sendKeys('123');
	

	driver.findElement(webdriver.By.name('signin')).click().then(function(){
			setTimeout( addVan ,1000);
			});

});

function addVan(){
	driver.findElement(webdriver.By.name('addvan')).click().then(function(){
			setTimeout(enter,1000);
			});

}

function enter(){
	driver.findElement(webdriver.By.name('vanname')).sendKeys('rolls-royce');
	driver.findElement(webdriver.By.name('name')).sendKeys('2');
	driver.findElement(webdriver.By.name('add')).click().then(function(){
			setTimeout( addstop ,1000);
			});

}

function addstop(){
	driver.findElement(webdriver.By.name('addstop')).click().then(function(){
			setTimeout( addstopdetails ,1000);
			});

}

function addstopdetails(){
	driver.findElement(webdriver.By.name('stpnm')).sendKeys('newark');
	driver.findElement(webdriver.By.name('addbtn')).click().then(function(){
			setTimeout( addstopdetails ,1000);
			});

}


function submit(){
	console.log('Test Passed: success');
}







