$("#full-name").text(session['firstName'] + ' ' + session['lastName'])
$(".user-Name").text(session['firstName'] + ' ' + session['lastName'])
$(".user-name-profile").text(session['firstName'] + ' ' + session['lastName'])
$("#about-gendar").text(session['gender'])
$("#birth-day").text(session['dob'])
$("#marry").text(session['martailStatus'])
$("#loca").text(session['location'])
$("#occup").text(session['occupation'])
$(".user-occupation").text(session['occupation'])
//$("#skll").text(session['firstName'])
$("#jobs").text(session['job'])

var WorkSignupForm = '<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header text-center"><h4 class="modal-title w-100 font-weight-bold">Sign Up</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body mx-3"><form method="post" id="upadteWorkForm"><div class="form-check-inline"><label class="form-check-label"><input type="checkbox" class="form-check-input skills" name="skills" id="skillC"  value="c#"> C#</label><label class="form-check-label"><input type="checkbox" class="form-check-input" name="skills" id="skillAngular"  value="angular"> Angular</label><label class="form-check-label"><input type="checkbox" class="form-check-input" name="skills" id="jsSkill" value="javascript"> Javascript</label></div><div class="form-group"><input type="text" class="form-control job" id="job" placeholder="Enter job" name="job"></div><div class="form-group"><select class="form-control modal-occu" id="occupation" name="occupation"><option value="">Select Occupation</option><option value="developer">Developer</option><option value="QA">QA</option><option value="designer">Designer</option><option value="musician">Musician</option></select></div><div class="create-account text-center"><button class="btn btn-default"> <a href="#" onclick="return false;" id="workSignupUpdate">Update Basic Info</a></button></div></form></div></div></div>';
$('#WorkSignupForm').append(WorkSignupForm);

var basicSignupForm = '<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header text-center"><h4 class="modal-title w-100 font-weight-bold">Sign Up</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body mx-3"><form method="post" id="upadteForm"><div class="form-inline"><div class="form-group"><input type="text" class="form-control f-name" id="firstName" placeholder="First name" name="firstName"></div><div class="form-group"><input type="text" class="form-control l-name" id="lastName" placeholder="Last name" name="lastName"></div></div><div class="form-inline"><div class="form-group"><label class="form-check-label"><input class="form-check-input" type="radio" name="gender" id="female" value="Female">Female</label></div><div class="form-group"><label class="form-check-label"><input class="form-check-input" type="radio" name="gender" id="male" value="Male">Male</label></div><div class="form-group"><label class="form-check-label"><input class="form-check-input" type="radio" name="gender" id="other" value="Other">Other</label></div></div><div class="form-group"><input type="date" class="form-control dob" id="dob" placeholder="Enter DOB" name="dob"></div><div class="form-group"><input type="text" class="form-control martail-status" id="martail-status" placeholder="Enter martail-status" name="martailStatus"></div><div class="form-group"><input type="text" class="form-control location" id="location" placeholder="Enter location" name="location"></div><div class="create-account text-center"><button class="btn btn-default"> <a href="#" onclick="return false;" id="loginAccountUpdate">Update Work Info</a></button></div></form></div></div></div>';
$("#basicSignupForm").append(basicSignupForm);

$("#firstName").val(session['firstName'])
$("#lastName").val(session['lastName'])
if (session['gender'] && session['gender'] == 'Female') {
  $('#female').prop('checked', true);
} else if (session['gender'] && session['gender'] == 'Male') {
  $('#male').prop('checked', true);
} else if (session['gender'] && session['gender'] == 'Other') {
  $('#other').prop('checked', true);
}
$("#dob").val(session['dob'])
$("#martail-status").val(session['martailStatus'])
$("#location").val(session['location'])
$("#job").val(session['job'])
$("#occupation").val(session['occupation']).prop('checked', true);
if (session['skills']) {
  check1 = session['skills'].split(',')[0];
  check2 = session['skills'].split(',')[1];
  check3 = session['skills'].split(',')[2];
}
$('[name="skills"]').val(check1).prop('checked', true);
$('[name="skills"]').val(check2).prop('checked', true);
$('[name="skills"]').val(check3).prop('checked', true);