function onEdit(e) {

// Fill variables below with the columns letters you want to fill with the date and username of the last modification --------------------------------------------------------------------------

  var last_modif_date = 'K'
  var last_modif_username = 'L'

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  var s = SpreadsheetApp.getActiveSheet();
  var r = s.getActiveCell();
  if( r.getColumn() != 11 ) { //checks the column
     var row = r.getRow();
     var headerRows = 1;  // # header rows to ignore
  if (r.getRow() <= headerRows) return;
    var time = new Date();
    time = Utilities.formatDate(time, "UTC+1", "yyyy-MM-dd");
    SpreadsheetApp.getActiveSheet().getRange(last_modif_date + row.toString()).setValue(time);
    var email = Session.getEffectiveUser().getEmail()
    Logger.log(email);
    SpreadsheetApp.getActiveSheet().getRange(last_modif_username + row.toString()).setValue(getUserEmail())
  }
}

//Function to remove protections and print current active user
function getUserEmail() {
  var userEmail = PropertiesService.getUserProperties().getProperty("userEmail");
  if(!userEmail) {
    var protection = SpreadsheetApp.getActive().getRange("A1").protect();
    // tric: the owner and user can not be removed
    protection.removeEditors(protection.getEditors());
    var editors = protection.getEditors();
    if(editors.length === 2) {
      var owner = SpreadsheetApp.getActive().getOwner();
      editors.splice(editors.indexOf(owner),1); // remove owner, take the user
    }
    userEmail = editors[0];
    protection.remove();
    // saving for better performance next run
    PropertiesService.getUserProperties().setProperty("userEmail",userEmail);
  }
  return userEmail;
}