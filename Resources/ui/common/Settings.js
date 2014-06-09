function SettingsWindow() {
	var self = Ti.UI.createWindow({
		backgroundColor: '#FFFFFF',
		modal: false,
		// set true for Android, false for iOS
		layout: 'horizontal'
	});
	
	var label = Ti.UI.createLabel({
		top: 20,
		left: 10,
		color: '#000000',
		text: 'Goal: '
	});
	
	self.add(label);
	
	var goalField = Ti.UI.createTextField({
		left: 10,
		keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		width: 100,
		color: '#000000'
	});
	
	// Initialize a property variable and store it into the Global Properties object for the app
	var goal = Ti.App.Properties.getInt('goal');
	if( goal == null ) {
		goal = 0;
	}
	
	goalField.value = goal;
	
	goalField.addEventListener('change',function(e) {
		if(!goalField.value) {
			return;
		}
		Ti.App.Properties.setInt('goal',goalField.value);	
	});
	
	self.add(goalField);
	
	var doneButton = Ti.UI.createButton({
		top: 10,
		left: 10,
		title: 'Done'
	});
	
	doneButton.addEventListener('click',function(e){
		self.close();
	});
	
	self.add(doneButton);
	
	
	return self;
}
module.exports = SettingsWindow;
