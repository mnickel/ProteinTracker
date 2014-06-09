//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		layout: 'vertical',
		top: 15
	});
	
	var amountView = Ti.UI.createView({
		layout: 'horizontal',
		height: 80
	});
	
	var totalView = Ti.UI.createView({
		layout: 'horizontal',
		height: 80
	});	

	var amountLabel = Ti.UI.createLabel({
		color: '#000000',
		text: "Amount",
		left: 10
	});
	
	var amountField = Ti.UI.createTextField({
		left: 10, 
		keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		width: 150,
		color: '#000000'
	});
	
	self.add(amountView);
	self.add(totalView);
	amountView.add(amountLabel);
	amountView.add(amountField);
	
	var addButton = Ti.UI.createButton({
		left: 10,
		title: 'Add'
	});
	
	addButton.addEventListener('click', function(e) {
		//alert("Amount: " + amountField.value);
		total += parseInt(amountField.value);
		totalLabel.text = 'Total: ' + total;
	});
	
	amountView.add(addButton);
	
	var total = 0;
	var totalLabel = Ti.UI.createLabel({
		color: '#000000',
		text: 'Total: ' + total,
		left: 10
	});
	
	totalView.add(totalLabel);
	
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
//	var label = Ti.UI.createLabel({
//		color:'#000000',
//		text:String.format(L('welcome'),'Titanium'),
//		height:'auto',
//		width:'auto'
//	});
//	self.add(label);

	//Add behavior for UI
//	label.addEventListener('click', function(e) {
//		alert(e.source.text);
//	});

	return self;
}

module.exports = FirstView;
