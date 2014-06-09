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
		width: 100,
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
	
	var goal = Ti.App.Properties.getInt('goal');
	if( goal == null ) {
		goal = 0;
	}
	
	var goalLabel = Ti.UI.createLabel({
		color: '#000000',
		text: 'Goal: ' + goal,
		left: 10
	});
	
	
	
	totalView.add(goalLabel);
	
	var settingsButton = Ti.UI.createButton({
		left: 10,
		title: 'Settings'
	});
	
	settingsButton.addEventListener('click',function(e) {
		var SettingsWindow = require('ui/common/Settings');
		var settingsWindow = new SettingsWindow();
		
		// add a close listner to update whatever goal may have been set
		// in the settings window
		settingsWindow.addEventListener('close',function(e){
			goalLabel.text = updateGoalField();
		});
		settingsWindow.open();
	});
	
	totalView.add(settingsButton);
	
	// TODO refactor callback into into a function
	Ti.App.addEventListener('update_goal', function(e){
		goalLabel.text = updateGoalField();
	});

	var locationButton = Ti.UI.createButton({
		left: 10,
		title: 'Location'
	});
	
	locationButton.addEventListener('click', function(e){
		Ti.Geolocation.getCurrentPosition( function(e) {
			if( !e.success ) {
				alert(e.code);
			}
			
			alert(e.coords.longitude + "," + e.coords.latitude);
		});
	});
	
	self.add(locationButton);
	return self;
}

/*
 * updateGoalField
 * helper function to get the goal
 */
function updateGoalField() {
	var goal = Ti.App.Properties.getInt('goal');
	if( goal == null ) {
		goal = 0;
	}
	return 'Goal: ' + goal;	
}


module.exports = FirstView;
