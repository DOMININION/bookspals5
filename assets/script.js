//Sticky header
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("sticky-top");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-top")
  } else {
    navbar.classList.remove("sticky-top");
  }
}


//tab

function openTab(evnt, heading){
  //Declare all variables
  var i, tabContent, tabLinks;

  //Get all elements with class="tab-content" and hid them
  tabContent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabContent.length; i++){
    tabContent[i].style.display = "none";
  }

  //Get all elements with class="tablinks" and remove the class "active"
  tabLinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tabLinks.length; i++){
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
  }

  //show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(heading).style.display = 'block';
  evnt.currentTarget.className += " active";
  
} 

document.getElementById("defaultOpen").click()


function addeffect(evt, id){
  var i, tabLinks;
  tabLinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tabLinks.length; i++){
    tabLinks[i].className = tabLinks[i].className.replace('.activeTab', " ");
  }
  document.getElementById(id).classList.add(".activeTab");
  evt.currentTarget.className += ".activeTab";
}


//carousel
const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));



//Accordion
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('question');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}


// co

success: function (res) { 
  if (res.trim() == "Success") {
      demo.showNotification('top','right', 'Assessment successfully submited', 'success')    
      $("#new-assessment-form").trigger('reset') 
      stopLoading(btn, "Submit")
  }else{
      demo.showNotification('top','right', res, 'warning')
      stopLoading(btn, "Submit")
  }
  
}
});
}
}
function updateAssessment(btn){
loading(btn) 
assessment_id = $(".assessment_id").val()
question = $(".question").val()
a = $(".a").val()
b = $(".b").val()
c = $(".c").val()
d = $(".d").val()
answer = $(".answer").val() 
error = []; 
if (question.trim() == "") {
error.push(" Question");    
}
if (a=="") {
error.push(" Option A");    
}
if (b=="") {
error.push(" Option B");    
}
if (c=="") {
error.push(" Option C");    
}
if (d=="") {
error.push(" Option D");    
} 
if (answer=="") {
error.push(" Answer");    
} 
if (error.length > 0) {
error = error.join(",");
demo.showNotification('top','right', 'Fields Required: '+error, 'warning')
stopLoading(btn, "Submit")
}else{
dataString = "assessment_id="+assessment_id+"&question="+question+"&a="+a+"&b="+b+"&c="+c+"&d="+d+"&answer="+answer;
$.ajax({
type: "POST",
url: "../ajax-pages/updateAssessment.php",
data: dataString,
cache: false,
success: function (res) { 
  if (res.trim() == "Success") {
      demo.showNotification('top','right', 'Assessment successfully updated', 'success')    
      $("#editAssessmentModal").modal("hide")
  }else{
      demo.showNotification('top','right', res, 'warning')
      stopLoading(btn, '<i class="mdi mdi-update"></i> Update')
  }
  
}
});
}
}
function getNumAssessmentsType(){
loading_sm("loading-num-assessment-type")
book_id = $(".book_id").val().split("|")
question_type = $("input[name='question_type']:checked").val();
dataString = "book_id="+book_id[0]+"&question_type="+question_type
$.ajax({
type: "POST",
url: "../ajax-pages/getNumAssessmentsType.php",
data: dataString,
cache: false,
success: function (res) { 
if (isNaN(res)) {
  stop_loading_sm("loading-num-assessment-type");
}else{
  $("#loading-num-assessment-type").html(res+" entry")
}

}
});
}
function promptSubmitAssessment(){
if (confirm("Are you sure you want to submit?")) {
$("#assessment_form").submit();
}
}
function promptDeleteAssessment(assessment_id){
if (confirm("Are you sure you want to delete this assessment?")) {
dataString = "assessment_id="+assessment_id
$.ajax({
type: "POST",
url: "../ajax-pages/deleteAssessment.php",
data: dataString,
cache: false,
success: function (res) { 
if (res.trim() == "Success") {
  $("."+assessment_id).fadeOut("slow")
}else{
  alert(res)function replyMessageModal(mail_id){ 
$('.r_msg_id').val(mail_id);
$('#InboxMessageModal').modal('hide');
$('#replyMessageModal').modal('show');
}
function loading(btn) {
Btn = document.getElementById(btn);
$('#'+btn).html("<img src='../images/loading.gif' width='14px'> processing");
Btn.disabled = true;
}
function loading_sm(btn) {
$('#'+btn).html("<img src='../images/loading.gif' width='14px'>");
}
function loading_index(btn) {
Btn = document.getElementById(btn);
$('#'+btn).html("processing<img src='images/loading.gif' width='24px'>");
Btn.disabled = true;
} 
function loading2(btn) {
Btn = document.getElementById(btn);
$('#'+btn).html("please wait <img src='../images/loading.gif'>");
Btn.disabled = true;
}
function stopLoading(btn, btnValue) {
Btn = document.getElementById(btn);

Btn.innerHTML = btnValue;
Btn.disabled = false;
}
function stop_loading_sm(id){ 
$('#'+id).html("");
}
function isEmail(email) {
var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if (regex.test(email)) {
return true;
}
else {
return false;
}
}
function isPhoneNumber(PhoneNumber) { 
var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
if (filter.test(PhoneNumber)) {
return true;
}
else {
return false;
}
}
function doLogin(btn){
loading_index(btn);
email = $('#email').val();
password = $('#password').val(); 
if (email == '') {
$('.loginAlert').css("visibility","visible").fadeIn('slow');
$('.loginAlert').html("Enter Email.").fadeIn('slow').delay('4000').fadeOut('slow'); 
stopLoading(btn, "Login");
}else if(isEmail(email)==false){
$('.loginAlert').css("visibility","visible").fadeIn('slow');
$('.loginAlert').html("Invalid Email Address.").fadeIn('slow').delay('4000').fadeOut('slow'); 
stopLoading(btn, "Login");
}else if(password == ''){
$('.loginAlert').css("visibility","visible").fadeIn('slow');
$('.loginAlert').html("Enter Password.").fadeIn('slow').delay('4000').fadeOut('slow'); 
stopLoading(btn, "Login");
}else{
dataString = 'email='+email+'&password='+password;
$.ajax({
  type: "POST",
  url: "ajax-pages/adminLogin.php",
  data: dataString,
  cache: false,
  success: function (res) {
      if (res == "Success") {
          location = "dashboard";
      }else{
          $('.loginAlert').css("visibility","visible").fadeIn('slow');
          $('.loginAlert').html(res).fadeIn('slow').delay('4000').fadeOut('slow'); 
          stopLoading(btn, "Login"); 
      }
      
  }

});
} 

}
function updatemaxRoom(){
$('.mdi-update').addClass("mdi-spin");
max_room = $('.max-room-val').val();
if (max_room<=0) {
$('.max-room-val').val(1);
}
max_room = $('.max-room-val').val();
dataString = 'max_room='+max_room;
$.ajax({
type: "POST",
url: "../ajax-pages/updatemaxRoom.php",
data: dataString,
cache: false,
success: function (res) {
if (res == "Success") {
  $('.mdi-update').removeClass("mdi-spin");
  $('.updateBtn').html("<i class='mdi mdi-check'></i>Update Success");
  setTimeout(function(){
      $('.updateBtn').html("<i class='mdi mdi-update'></i>Update");
  }, 3000);
  
}else{
  $('.mdi-update').removeClass("mdi-spin");
}

}

});
}
function doLoginAdmin(btn){
// loading(btn);
email = $('#email').val();
password = $('#password').val(); 
if (email == '') {
$('.loginAlert').css("visibility","visible").fadeIn('slow');
$('.loginAlert').html("Enter Email.").fadeIn('slow').delay('4000').fadeOut('slow'); 
stopLoading(btn, "Login");
}else if(isEmail(email)==false){
$('.loginAlert').css("visibility","visible").fadeIn('slow');
$('.loginAlert').html("Invalid Email Address.").fadeIn('slow').delay('4000').fadeOut('slow'); 
stopLoading(btn, "Login");
}else if(password == ''){
$('.loginAlert').css("visibility","visible").fadeIn('slow');
$('.loginAlert').html("Enter Password.").fadeIn('slow').delay('4000').fadeOut('slow'); 
stopLoading(btn, "Login");
}else{
dataString = 'email='+email+'&password='+password;
$.ajax({
type: "POST",
url: "../ajax-pages/adminLogin.php",
data: dataString,
cache: false,
success: function (res) {
  if (res == "Success") {
      location = "dashboard.php";
  }else{
      $('.loginAlert').css("visibility","visible").fadeIn('slow');
      $('.loginAlert').html(res).fadeIn('slow').delay('4000').fadeOut('slow'); 
      stopLoading(btn, "Login"); 
  }

}

});
} 
}
function promptDeleteProduct(itemCode)
{
if (confirm('Are you sure you want to permaneltly DELETE this Item?'))
{
dataString = 'itemCode='+itemCode; 
$.ajax({
type: "POST",
url: "../ajax-pages/deleteProduct.php",
data: dataString,
cache: false,
success: function (res) {
  if (res == "Success") {
       $('.'+itemCode).html("");
  }else{
      alert("Deletion Failed. Please try again later.");
  }
}

});
}
}
function loadLga(){      
state_id = $('.state').val(); 
dataString = 'state_id=' + state_id; 
$.ajax({
type: "POST",
url: "../ajax-pages/loadLga.php",
data: dataString,
cache: false,
success: function (res) {  
$('.lga').html(res); 
}

});

}
function updateproduct(itemCode){
product_title = $('.'+itemCode+' .product_title').val(); 
price = $('.'+itemCode+' .price').val(); 
colours = $('.'+itemCode+' .colours').val(); 
sizes = $('.'+itemCode+' .sizes').val(); 
prev_price = $('.'+itemCode+' .prev_price').val(); 
description = $('.'+itemCode+' .description').val(); 
keywords = $('.'+itemCode+' .keywords').val(); 

if (product_title == '') {
alert("Product Title cannot be Empty.");
}else if(price == ''){
alert("Price cannot be Empty.");
}else{
dataString = 'product_title=' + product_title+'&price='+price+'&prev_price='+prev_price+'&description='+description+'&keywords='+keywords+'&itemCode='+itemCode+'&colours='+colours+'&sizes='+sizes; 
$.ajax({
type: "POST",
url: "../ajax-pages/updateproduct.php",
data: dataString,
cache: false,
success: function (res) {  
  if (res == 'Success') {
      alert("Update Successful.");
  }else{
      alert(res+"Sorry, something went wrong. Try again later.")
  }    
}

});
}
} 
function save_df(type,data){
if (type == "geo_zone") {
loading("btn"+data);
geo_zone = data;     
fee = $('.'+geo_zone+' .fee').val(); 
dataString = 'geo_zone=' + geo_zone+'&fee='+fee; 
$.ajax({
type: "POST",
url: "../ajax-pages/save_df.php",
data: dataString,
cache: false,
success: function (res) {  
stopLoading("btn"+data , "Save");  
if (res == "Success") {
  alert("Deliery Fee Successfully updated.");
}else{
  alert("Error updating delivery fee. Please try again later.");
}
}

}); 

}else if (type == "state") {
loading("btnn"+data);
state_id = data;     
fee = $('.'+state_id+' .feee').val();  
dataString = 'state_id=' + state_id+'&fee='+fee; 
$.ajax({
type: "POST",
url: "../ajax-pages/save_df.php",
data: dataString,
cache: false,
success: function (res) {
stopLoading("btnn"+data , "Save");    
if (res == "Success") {
  alert("Deliery Fee Successfully updated.");
}else{
  alert("Error updating delivery fee. Please try again later.");
}
}

});
}

}
function isRoomNoExist(){
room_no = $('.room_no').val();
$('.room_no_indicator').html('<i class="mdi mdi-loading mdi-spin"></i>');
dataString = 'room_no=' + room_no; 
$.ajax({
type: "POST",
url: "../ajax-pages/isRoomNoExist.php",
data: dataString,
cache: false,
success: function (res) {     
if (res == "False") {
  $('.room_no_indicator').html('<i class="mdi mdi-check text-success"></i>');
}else{
  $('.room_no_indicator').html('<small class="text-warning">Room number already exist</small>');
}
}
});
}
function proceedToBook2(url_string){
location='room-booking?'+url_string;
}
function availabilityModal(){
room_no = $("#select_room_no").val();
arrival = $("#arrival").val();
departure = $("#departure").val();
age_range = $("#age-range").val();
if(arrival==""){
$('div[id^="check_error"]').css("visibility","hidden");
$(".arrival #check_error").css("left","0");
$(".arrival #check_error").css("visibility","visible");
}else if(departure==""){
$('div[id^="check_error"]').css("visibility","hidden");
$(".departure #check_error").css("left","0");
$(".departure #check_error").css("visibility","visible");
}else if(age_range==""){
$('div[id^="check_error"]').css("visibility","hidden");
$(".age-range #check_error").css("left","0");
$(".age-range #check_error").css("visibility","visible");
}else if(room_no==""){
$('div[id^="check_error"]').css("visibility","hidden");
$(".select_room_no #check_error").css("left","0");
$(".select_room_no #check_error").css("visibility","visible");
}else{
$('div[id^="check_error"]').css("visibility","hidden");
$(".modal-inner-content").html('<center><img src="images/icons/preloader.gif" style="width: 45px"><h4>Checking...</h4></center>');
$("#availabilityModal").modal("show");

url_string = 'room_no='+room_no+'&arrival='+arrival+'&departure='+departure+'&age='+age_range;

dataString = 'room_no='+room_no;
$.ajax({
type: "POST",
url: "admin/ajax-pages/isRoomAvailable.php",
data: dataString,
cache: false,
success: function (res) {     
  if (res == "True") {
      $(".modal-inner-content").html('<center><img src="images/icons/check-circle.gif" style="width: 45px;"> <h4>Room Available!</h4><br><button class="btn btn-primary" onclick=proceedToBook2("'+url_string+'")>BOOK ROOM NOW <i class="fa fa-arrow-circle-o-right"></i></button></center>');
  }else{
      $(".modal-inner-content").html('<center><h4>Room Not Available</h4><br><button class="btn btn-success" class="close" data-dismiss="modal">Please Try other rooms. <i class="fa fa-arrow-circle-o-right"></i></button></center>');
      setTimeout(function(){
          $("#availabilityModal").modal("hide");
      }, 5000);                
  }
}
});
}    
}
function updateSelectedRoom(){
room_no = $("#select-room").val(); 

if (room_no!="") {

dataString = 'room_no='+room_no;
$.ajax({
type: "POST",
url: "admin/ajax-pages/isRoomAvailable.php",
data: dataString,
cache: false,
success: function (res) {     
  if (res == "True") {
      $(".select-room-layer").css("visibility","visible");
      setTimeout(function(){
          $("#selected-room").load("common/selected-room-2.php?room_no="+room_no);
          $(".select-room-layer").css("visibility","hidden");
      }, 1000);
  }else{
      alert("Room is Unavailable.")               
  }
}
});
}
}

function addToCart(btn, booking_code, arrival_date,departure_date,age_range,num_persons,room_no,comment,fname,lname,email,phoneNo){


}
function proceedToBook(btn){
loading(btn);

booking_code = $(".booking_code").val();
arrival_date = $(".arrival_date").val();
departure_date = $(".departure_date").val();
age_range = $(".age_range").val();
num_persons = $(".num_persons").val();
room_no = $(".my_room_no").val();
comment = $(".comment").val();
fname = $(".fname").val();
lname = $(".lname").val();
email = $("#email").val();
phoneNo = $(".phoneNo").val();

error = [];
if (arrival_date == "") {
error.push("Arrival Date");
}
if(departure_date == ""){
error.push("Departure Date");
} 
if(age_range == ""){
error.push("Age Type");
}
if(num_persons == ""){
error.push("Number of persons");    
}
if(room_no == ""){
error.push("Room Name");
}
if(fname == ""){
error.push("First Name");
}
if(lname == ""){
error.push("Last Name");
}
if(phoneNo == ""){
error.push("Phone Number");
}
if(email == ""){
error.push("Email");
}
if (error.length > 0) {
error = error.join(",");
alert("Fields Required: "+error) 
stopLoading(btn, "Proceed to Checkout");
}else{
dataString = "booking_code="+encodeURIComponent(booking_code)+"&arrival_date="+encodeURIComponent(arrival_date)+"&departure_date="+encodeURIComponent(departure_date)+"&age_range="+encodeURIComponent(age_range)+"&num_persons="+encodeURIComponent(num_persons)+"&room_no="+encodeURIComponent(room_no)+"&comment="+encodeURIComponent(comment)+"&fname="+encodeURIComponent(fname)+"&lname="+encodeURIComponent(lname)+"&email="+encodeURIComponent(email)+"&phoneNo="+encodeURIComponent(phoneNo); 
$.ajax({
  type: "POST",
  url: "admin/ajax-pages/book.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      stopLoading(btn, "Proceed to Checkout");
      location = "booking-information"; 
    }else{
      alert(res)
      stopLoading(btn, "Proceed to Checkout");
    }
  }
});
}


}
function loadRegistrationForm(redirect){
$(".login-form").load("admin/ajax-pages/loadRegistrationForm.php?redirect="+redirect);
}
function loadLoginForm(redirect){
$(".login-form").load("admin/ajax-pages/loadLoginForm.php?redirect="+redirect);
}
function loadForgotPassword(redirect){
$(".login-form").load("admin/ajax-pages/loadForgotPasswordForm.php?redirect="+redirect);
}
function login(btn){
loading_index(btn);
email = $(".email").val();
password = $(".password").val();
error = [];
if (email=="") {
error.push("Email");    
}
if (password=="") {
error.push("Password");    
}
if (error.length > 0) {
error = error.join(",");
demo.showNotification('top','right', 'Fields Required: '+error, 'warning')
//$(".login_error").html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert'>&times;</button>Fields Required: "+error+"</div>")
stopLoading(btn, 'LOGIN <i class="fa fa-arrow-circle-right"></i>');
}else{
dataString = "email="+email+"&password="+password;
$.ajax({
  type: "POST",
  url: "admin/ajax-pages/login.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      stopLoading(btn, 'LOGIN <i class="fa fa-arrow-circle-right"></i>');
      location = 'dashboard';
    }else{
      stopLoading(btn, 'LOGIN <i class="fa fa-arrow-circle-right"></i>');
      demo.showNotification('top','right', 'Login details incorrect', 'warning')
      //$(".login_error").html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert'>&times;</button>Login details incorrect</div>").fadeIn("2000").delay("5000").fadeOut("slow")
      
    }
  }
});      
}
}
function welcome(){ 
//Check user visit status
// dataString = "user=true"
//     $.ajax({
//             type: "POST",
//             url: "admin/ajax-pages/checkUserVisitStatus.php",
//             data: dataString,
//             cache: false,
//             success: function (res) {  
//               if (res == "Not Visited") { 
//                     //Not Visited
//                     var audio = new Audio('audio/welcome.mp3');
//                     audio.play();
//               }else if(res == "Expired"){
//                     //Expired
//                     var audio = new Audio('audio/welcome.mp3');
//                     audio.play();
//               }
//             }
//     }); 
var audio = new Audio('audio/welcome.mp3');
audio.play();
}
function register(btn){
loading_index(btn);
institution = $(".institution").val()
class_name = $(".class_name").val()    
club_type = $("input[name='club_type']:checked").val();
gender = $("input[name='gender']:checked").val();    
first_name = $(".first_name").val() ;
last_name = $(".last_name").val();
phone_no = $(".phoneNo").val();
email = $(".email").val();
dob = $(".dob").val();
password = $(".password").val();
re_password = $(".repeat_password").val();

error = []; 
// if ($(".institution").val() == "") {
//     error.push("Institution Name");
// } 
if (club_type == undefined) {
error.push("*Club Type");
}
if (first_name == "") {
error.push("*First Name");
}
if (last_name == "") {
error.push("*Last Name");
}
if(phone_no == ""){
error.push("*Phone Number");
} 
if(email == ""){
error.push("*Email");
}
if(dob == ""){
error.push("*Date of birth");
}
if(class_name == ""){
error.push("*Class Name");
}
if(gender == undefined){
error.push("*Gender");
}
if(password == ""){
error.push("*Password");    
}
if(re_password == ""){
error.push("*Repeat Password");
}
if(password != re_password){
error.push("*Password Mismatch");
}
if(!isEmail(email)){
error.push("*Invalid Email");
}
if (error.length > 0) {
error = error.join(", ");
demo.showNotification('top','right', 'Fields Required: '+error, 'warning')
//$(".reg_error").html("<div class='alert alert-warning'><span class='close' data-dismiss='alert'>&times;</span><b>Fields Required:</b><br> "+error+"</div>").fadeIn("2000").delay("5000").fadeOut("slow") 
stopLoading(btn, 'Register <i class="fa fa-arrow-circle-right"></i>');
}else{
dataString = "club_type="+club_type+"&dob="+dob+"&institution="+institution+"&class_name="+class_name+"&first_name="+first_name+"&last_name="+last_name+"&email="+email+"&phone_no="+phone_no+"&gender="+gender+"&password="+password;
$.ajax({
  type: "POST",
  url: "admin/ajax-pages/register.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      location = "login?message=welcome";
    }else{
      stopLoading(btn, 'Register <i class="fa fa-arrow-circle-right"></i>');
      demo.showNotification('top','right', res, 'warning')
      //$(".reg_error").html("<div class='alert alert-warning'><span class='close' data-dismiss='alert'>&times;</span>"+res+"</div>").fadeIn("2000").delay("5000").fadeOut("slow")
      
    }
  }
});
}

}
function sendContactMessage(btn){
loading_index(btn);
name = $(".name").val();
email = $(".email").val();
subject = $(".subject").val();
message = $(".message").val();
error = [];
if (name == "") {
error.push("*Name &nbsp;");
}
if(email == ""){
error.push("*Email &nbsp;");
}
if(subject == ""){
error.push("*Subject &nbsp;");
} 
if(message == ""){
error.push("*Message &nbsp;");
}
if (error.length > 0) {
error = error.join(""); 
demo.showNotification('top','right', 'Fields Required:</b><br>'+error, 'warning') 
stopLoading(btn, 'Send <i class="fa fa-paper-plane"></i>');
}else{
dataString = "name="+name+"&email="+email+"&message="+message+"&subject="+subject
$.ajax({
  type: "POST",
  url: "admin/ajax-pages/sendContactMessage.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      demo.showNotification('top','right', 'Message Successfully Delivered. We will get back to you as soon as possible.', 'success')
      $('.contact-form').trigger('reset')
    }else{
      demo.showNotification('top','right', res, 'warning') 
      
    }
    stopLoading(btn, 'Send <i class="fa fa-paper-plane"></i>');
  }
});
}
}
function confirmRoomDelete(room_no, image){
conf = confirm("Are you sure you want to delete this room?")
if (conf==true) {
//Proceed to delete
dataString = "room_no="+room_no+"&image="+image;
$.ajax({
  type: "POST",
  url: "../ajax-pages/deleteRoom.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      $(".room-"+room_no).fadeOut("slow");
    }else{
      alert("Error deleting room. Please try again later.")
    }
  }
});
}
}
function quickSearchBookingCode(){
booking_code = $(".bookingCodeQuickSearch").val();
dataString = "booking_code="+booking_code;
$.ajax({
  type: "POST",
  url: "../ajax-pages/quickSearchBookingCode.php",
  data: dataString,
  cache: false,
  success: function (res) {  
    $(".booking-table-body tbody").html(res);
  }
});
}
function showMediaLibraryModal(destination){
$('.modalMediaDestination').val(destination);
$('#mediaLibraryModal').modal('show'); 
$.ajax({
type: "POST",
url: "../ajax-pages/loadMediaLibrary.php",
cache: false,
success: function (res) {
  $('#mediaLibraryModal .modal-inner-content').html(res);
}
}); 
}
//BULK APPLY
$('#mediaLibraryModal .addSelectedMedia').click(function() {
destination = $('.modalMediaDestination').val();

var checked = $('#mediaLibraryModal .checkfile:checked');
var file = checked.map(function() {
return this.value; 
}).get(); 
if (file.length == 0) {
alert("Select a Media File");
}else{
insert_file = window.location.protocol+"//"+window.location.host+"/assets/uploads/"+file

if (destination == "featuredImage") {
// Process Featured Image
if (file.length>1) {
  alert("Featured Image must not exceed 1");
}else{
  // file = file.join("<br>"); 
  src = "../../assets/uploads/"+file;
  $('.featured-image-card img').attr("src", src);
  $('.featuredImage').val(file);
  $('#mediaLibraryModal').modal('hide');  
}
}else if(destination == "mediaVideoFile"){
// Process Featured Image
if (file.length>1) {
  alert("Video file must not exceed 1");
}else{
  // file = file.join("<br>"); 
  src = "../../assets/uploads/"+file;
  split_file_part = file.join(" ").split(".");
  extension = split_file_part[split_file_part.length-1]; 
  if (extension == "mp4" || extension == "avi" || extension == "mov" || extension == "3gp" || extension == "mpeg") {
      $('.mediaVideoCard video').attr("src", src);
      $('.mediaVideoFile').val(file);
      $('.VideoDisplayCont').css("display", "inline");
      $('#mediaLibraryModal').modal('hide');  
  }else{
      alert("Only Video files supported.");
  }
}
}else{
//Insert into WYSIWYG EDITOR
// Process Media File
if (file.length>1) {
  alert("Insert one media file at a time.");
}else{
  $('#mediaLibraryModal').modal('hide');
  // split_file_part = file.join(" ").split(".");
  // extension = split_file_part[split_file_part.length-1];
  // if (extension == "jpeg" || extension == "jpg" || extension == "png" || extension == "gif") {
  //     quill.format('image', "../../assets/uploads/"+file);
  // }else{
  //     quill.format('video', "../../assets/uploads/"+file);
  // }
  quill.format('image', insert_file);
}    
}
}
}); 
function updatePermalink(){
title = $(".title").val();
slug = $(".slug").html()
dataString = "title="+title+"&slug="+slug;
$.ajax({
type: "POST",
url: "../ajax-pages/updatePermalink.php",
data: dataString,
cache: false,
success: function (res) {  
$(".slug").html(res);
}
});
}
function splitKeywords(){
inpt = $(".keyword").val()
input_part = inpt.split("")
ar_len = input_part.length - 1
last_char = input_part[ar_len] 
if (last_char == ",") {
input_part = inpt.split(",")
keyword = input_part[0] 

$(".kyws").append('<span class="keyword-single kw_'+keyword+'">'+keyword+'  <span class="keyword-close" title="Delete" onclick=removeKeyword("'+keyword+'")>&times;</span></span>')
$(".keyword").val("")
keywords = $(".keywords").val()
keywords = keywords+keyword+","
$(".keywords").val(keywords)
}
}
function removeKeyword(keyword){
keywords = $(".keywords").val()
new_keywords = keywords.replace(keyword+",", "");
$(".keywords").val(new_keywords)
$('.kw_'+keyword).fadeOut("slow")

}
function addCategory(category_id){
new_category = $(".new_category").val()
if (new_category == "") {
alert("New Category cannot be empty")
}else{
dataString = "category="+new_category;
$.ajax({
type: "POST",
url: "../ajax-pages/addCategory.php",
data: dataString,
cache: false,
success: function (res) { 
  if (res != "Failure") {                  
      category_id = res;  
      $(".cat_submit").before('<div class="cat_'+category_id+'"><input type="radio" name="category" value="'+new_category+'"> '+new_category+' &nbsp;&nbsp;&nbsp;<i class="fa fa-trash pull-right" onclick=promptDeleteCategory("'+category_id+'")></i><br></div>')
      $(".new_category").val("")
  }   
}
});
}
}
function publish(btn){
loading(btn);
title = $(".title").val();
body = quill.root.innerHTML  
keywords = $(".keywords").val();
featuredImage = $(".featuredImage").val();
category = $('input[name="category"]:checked').val();

error = [];
if (title == "") {
error.push("Title<br>");
}
if(body == "<p><br></p>"){
error.push("Body<br>");
} 
if(category == ""){
error.push("Category<br>");
}
if(featuredImage == ""){
error.push("Featured Image<br>");
}

if (error.length > 0) {
error = error.join("");
$(".card-alert").html("<div class='alert alert-warning bg-warning'><span  class='close' data-dismiss='alert'>&times;</span><b>Fields Required:</b><br>"+error+"</div>").fadeIn("2000").delay("5000").fadeOut("slow"); 
stopLoading(btn, "Publish");
}else{
dataString = "title="+title+"&body="+encodeURIComponent(body)+"&keywords="+keywords+"&category="+category+"&featuredImage="+featuredImage;
$.ajax({
  type: "POST",
  url: "../ajax-pages/publish.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      $(".card-alert").html("<div class='alert alert-success '><span class='close' data-dismiss='alert'>&times;</span>Post Successfully published.</div>").fadeIn("2000").delay("5000").fadeOut("slow");
    }else{
      $(".card-alert").html("<div class='alert alert-warning bg-warning'><span class='close' data-dismiss='alert'>&times;</span>"+res+"</div>").fadeIn("2000").delay("5000").fadeOut("slow")
    }
    stopLoading(btn, "Publish");
  }
});
}
}
function publishAnnualFeature(btn){

loading(btn);
title = $(".title").val();
body = quill.root.innerHTML  
featuredImage = $(".featuredImage").val(); 

error = [];
if (title == "") {
error.push("Title<br>");
}
if(body == "<p><br></p>"){
error.push("Body<br>");
}  
if(featuredImage == ""){
error.push("Featured Image<br>");
}

if (error.length > 0) {
error = error.join("");
$(".card-alert").html("<div class='alert alert-warning bg-warning'><span  class='close' data-dismiss='alert'>&times;</span><b>Fields Required:</b><br>"+error+"</div>").fadeIn("2000").delay("5000").fadeOut("slow"); 
stopLoading(btn, "Publish");
}else{
dataString = "title="+title+"&body="+encodeURIComponent(body)+"&featuredImage="+featuredImage;
$.ajax({
  type: "POST",
  url: "../ajax-pages/publishAnnualFeature.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      $(".card-alert").html("<div class='alert alert-success '><span class='close' data-dismiss='alert'>&times;</span>Annual Features Successfully published.</div>").fadeIn("2000").delay("5000").fadeOut("slow");
    }else{
      $(".card-alert").html("<div class='alert alert-warning bg-warning'><span class='close' data-dismiss='alert'>&times;</span>"+res+"</div>").fadeIn("2000").delay("5000").fadeOut("slow")
    }
    stopLoading(btn, "Publish");
  }
});
}
}
function editPost(btn, post_id, old_slug){
loading(btn);
title = $(".title").val();
body = quill.root.innerHTML 
keywords = $(".keywords").val();
featuredImage = $(".featuredImage").val();
category = $('input[name="category"]:checked').val();

error = [];
if (title == "") {
error.push("Title<br>");
}
if(body == "<p><br></p>"){
error.push("Body<br>");
} 
if(category == ""){
error.push("Category<br>");
}
if(featuredImage == ""){
error.push("Featured Image<br>");
}

if (error.length > 0) {
error = error.join("");
$(".card-alert").html("<div class='alert alert-warning bg-warning'><span  class='close' data-dismiss='alert'>&times;</span><b>Fields Required:</b><br>"+error+"</div>").fadeIn("2000").delay("5000").fadeOut("slow"); 
stopLoading(btn, "Update");
}else{
dataString = "title="+title+"&body="+encodeURIComponent(body)+"&keywords="+keywords+"&category="+category+"&featuredImage="+featuredImage+"&post_id="+post_id+"&old_slug="+old_slug;
$.ajax({
  type: "POST",
  url: "../ajax-pages/updatePost.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      $(".card-alert").html("<div class='alert alert-success '><span class='close' data-dismiss='alert'>&times;</span>Post Successfully updated.</div>").fadeIn("2000").delay("5000").fadeOut("slow");
    }else{
      $(".card-alert").html("<div class='alert alert-warning bg-warning'><span class='close' data-dismiss='alert'>&times;</span>"+res+"</div>").fadeIn("2000").delay("5000").fadeOut("slow")
    }
    stopLoading(btn, "Update");
  }
});
}
} 
function subscribeNewsletter(btn){
loading(btn);
email = $(".input-newsletter").val()
if (isEmail(email)) {
dataString = "email="+email
$.ajax({
  type: "POST",
  url: "admin/ajax-pages/subscribeNewsletter.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      $("#validator-newsletter").html("<div class='alert alert-success '><span class='close' data-dismiss='alert'>&times;</span>Thank you for subscribing to our Newsletter.</div>").fadeIn("2000").delay("5000").fadeOut("slow");
      $(".input-newsletter").val("")
    }else{
      $(".newsletter-form").addClass("animated shake");
      setTimeout(function() {
          $(".newsletter-form").removeClass("animated shake");
      }, 1000)
      $("#validator-newsletter").html("<div class='alert alert-warning bg-warning'><span class='close' data-dismiss='alert'>&times;</span>"+res+"</div>").fadeIn("2000").delay("5000").fadeOut("slow")
    }
    stopLoading(btn, "Subscribe <i class='fas fa-paper-plane'></i>");
  }
});
}else{
$(".newsletter-form").addClass("animated shake");
setTimeout(function() {
$(".newsletter-form").removeClass("animated shake");
}, 1000)

$("#validator-newsletter").html("<div class='alert alert-warning bg-warning'><span class='close' data-dismiss='alert'>&times;</span>Invalid Email.</div>").fadeIn("2000").delay("5000").fadeOut("slow")
setTimeout(function() {
$("#validator-newsletter").addClass('hide');
}, 4000)
stopLoading(btn, "Subscribe <i class='fas fa-paper-plane'></i>");
}
}
function formSuccessSub(){
$(".newsletter-form")[0].reset();
submitMSGSub(true, "Thank you for subscribing!");
setTimeout(function() {
$("#validator-newsletter").addClass('hide');
}, 4000)
} 
function submitMSGSub(valid, msg){
if(valid){
var msgClasses = "validation-success";
} else {
var msgClasses = "validation-danger";
}
$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
}
function readMoreCases(rm_no){
$("#"+rm_no).css("display","inline")
$("."+rm_no).html("")
}
function readLessCases(sl_no){
$("#rm_"+sl_no).css("display","none")
$(".rm_"+sl_no).html("Read More")
}
function promptDeletePost(slug){
if (confirm("Are you sure you want to delete this post?") == true) {
dataString = "slug="+slug
$.ajax({
  type: "POST",
  url: "../ajax-pages/deletePost.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      $("."+slug).fadeOut("slow");
    } 
  }
});   
}
}
function promptDeleteBook(book_id){
if (confirm("Are you sure you want to delete this book?") == true) {
dataString = "book_id="+book_id
$.ajax({
  type: "POST",
  url: "../ajax-pages/deleteBook.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      $("."+book_id).fadeOut("slow");
    } 
  }
});   
}
} 
function promptDeleteMediaVideos(id){
if (confirm("Are you sure you want to delete this Media Video?") == true) {
dataString = "id="+id
$.ajax({
  type: "POST",
  url: "../ajax-pages/deleteMediaVideo.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      $("."+id).fadeOut("slow");
    } 
  }
});   
}
}
function uploadMediaVideo(btn){
loading(btn)
mediaVideoFile = $(".mediaVideoFile").val()
title = $(".title").val()
if (title == "") {
$(".resultDisplay").html("<div class='alert alert-warning bg-warning'><span class='close' data-dismiss='alert'>&times;</span>Video Title Required.</div>").fadeIn("2000").delay("5000").fadeOut("slow")
stopLoading(btn, "Upload to Media <i class='mdi mdi-cloud-upload'></i>");
}else{
dataString = "mediaVideoFile="+mediaVideoFile+"&title="+title
$.ajax({
  type: "POST",
  url: "../ajax-pages/uploadMediaVideo.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      $(".resultDisplay").html("<div class='alert bg-primary'><span class='close' data-dismiss='alert'>&times;</span>Media Video Successfully Uploaded.</div>").fadeIn("2000");
      $('.mediaVideoCard video').attr("src", "");
      $('.mediaVideoFile').val("");
      $('.VideoDisplayCont').css("display", "none");
    }else{
      $(".resultDisplay").html("<div class='alert alert-warning bg-warning'><span class='close' data-dismiss='alert'>&times;</span>"+res+"</div>").fadeIn("2000").delay("5000").fadeOut("slow")
    } 
    stopLoading(btn, "Upload to Media <i class='mdi mdi-cloud-upload'></i>");
  }
});
}      
}
function updateMediaVideo(btn){
loading(btn)
mediaVideoFile = $(".mediaVideoFile").val()
vid_id = $(".vid_id").val()
title = $(".title").val()
if (title == "") {
$(".resultDisplay").html("<div class='alert alert-warning bg-warning'><span class='close' data-dismiss='alert'>&times;</span>Video Title Required.</div>").fadeIn("2000").delay("5000").fadeOut("slow")
stopLoading(btn, "Update to Media <i class='mdi mdi-cloud-upload'></i>");
}else{
dataString = "mediaVideoFile="+mediaVideoFile+"&title="+title+"&vid_id="+vid_id
$.ajax({
  type: "POST",
  url: "../ajax-pages/updateMediaVideo.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      $(".resultDisplay").html("<div class='alert bg-primary'><span class='close' data-dismiss='alert'>&times;</span>Media Video Successfully Updated.</div>").fadeIn("2000");
      $('.mediaVideoCard video').attr("src", "");
      $('.mediaVideoFile').val("");
      $('.VideoDisplayCont').css("display", "none");
    }else{
      $(".resultDisplay").html("<div class='alert bg-warning'><span class='close' data-dismiss='alert'>&times;</span>"+title+".</div>").fadeIn("2000");
    stopLoading(btn, "Update to Media <i class='mdi mdi-cloud-upload'></i>");
  }
}
});
}      
}
function promptDeleteCategory(category_id){
if (confirm("Are you sure you want to delete this Category?") == true) {
dataString = "category_id="+category_id
$.ajax({
  type: "POST",
  url: "../ajax-pages/deleteCategory.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      $(".cat_"+category_id).fadeOut("slow");
    } 
  }
});   
}
}
function toggleInstitution(type){
if (type == 'indiv') { 
$(".institution_name_field").css("display","none");
$(".club-type-cont").removeClass("not-visible").css("display","block");
$(".dob-field").removeClass("not-visible").css("display","block");
$(".gender-field").removeClass("not-visible").css("display","block");
}else{ 
$(".institution_name_field").removeClass("not-visible").css("display","block");
$(".club-type-cont").css("display","none");
$(".cont").css("display","none");
$(".dob-field").css("display","none");
$(".gender-field").css("display","none");
}            
}
function suggestInstitution(){
institution = $(".institution").val()
if (institution == "") {
$(".institution_name_suggestion").html("");
}else{
dataString = "institution="+institution
$.ajax({
  type: "POST",
  url: "admin/ajax-pages/suggestInstitution.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res != "") { 
      $(".institution_name_suggestion").html(res);
    } 
  }
});
}


}
function populateSuggestedInst(institution){
institution = decodeURIComponent((institution + '').replace(/\+/g, '%20'))
$(".institution").val(institution)
$(".institution_name_suggestion").html("");
}
function enterBooks(btn){
loading(btn)
// club_type = $("input[name='club_type']:checked").val();
quarters = $("input[name='quarters']:checked").val();
book_title = $('.book_title').val();
author = $(".author").val();
age_range = $(".age_range").val();
file_url = $(".file_url").val()
description = quill.root.innerHTML

error = [];
if (quarters == undefined) {
error.push("*Quarters &nbsp;&nbsp;");
}
// if (club_type == undefined) {
//     error.push("*Club Type &nbsp;&nbsp;");
// }
if(book_title == ""){
error.push("*Book Title &nbsp;&nbsp;");
}
if(author == ""){
error.push("*Author &nbsp;&nbsp;");
} 
if(age_range == ""){
error.push("*Age Range &nbsp;&nbsp;");
} 

if (error.length > 0) {
error = error.join("");
demo.showNotification('top','right', '<b>Fields Required:</b><br>'+error, 'warning') 
//$(".err_msg").html("<div class='alert alert-warning bg-warning'><span  class='close' data-dismiss='alert'>&times;</span><b>Fields Required:</b><br>"+error+"</div>").fadeIn("2000").delay("5000").fadeOut("slow"); 
stopLoading(btn, 'Enter <i class="fa fa-arrow-circle-right" ></i>');
}else{

dataString = "quarters="+quarters+"&book_title="+book_title+"&author="+author+"&age_range="+age_range;
$.ajax({
  type: "POST",
  url: "../ajax-pages/isBookExist.php",
  data: dataString,
  cache: false,
  success: function (res) {     
    if (res == "Success") { 
      $('#book-description').val(description)
      $('#book-form').submit();
      //Upload
      // var fd = new FormData(); 
      // var files = $('#file')[0].files[0]; 
      // fd.append('file', files); 
      // fd.append('quarters', quarters); 
      // fd.append('book_title', book_title); 
      // fd.append('author', author); 
      // fd.append('age_range', age_range);
      // fd.append('file_url', file_url)
      // fd.append('description', description);  

      // $.ajax({ 
      //     url: '../ajax-pages/uploadBook.php', 
      //     type: 'post', 
      //     data: fd, 
      //     contentType: false, 
      //     processData: false, 
      //     success: function(response){ 
      //         if(response == "Success"){ 
      //             $("#book-form").trigger("reset")
      //             quill.root.innerHTML = "Enter Some contents"
      //             alert('file uploaded'); 
      //         }else{ 
      //             demo.showNotification('top','right', response, 'warning') 
      //         } 
      //         stopLoading(btn, 'Enter <i class="fa fa-arrow-circle-right" ></i>');
      //     }, 
      // }); 
    }else{
      demo.showNotification('top','right', res, 'warning')  
    }
    stopLoading(btn, 'Enter <i class="fa fa-arrow-circle-right" ></i>');
  }
}); 
}
}
function updateBooks(btn,book_id){
loading(btn)
quarters = $("input[name='quarters']:checked").val();
book_title = $('.book_title').val();
author = $(".author").val();
age_range = $(".age_range").val(); 
description = quill.root.innerHTML

error = [];
if (quarters == undefined) {
error.push("*Quarters &nbsp;&nbsp;");
}
// if (club_type == undefined) {
//     error.push("*Club Type &nbsp;&nbsp;");
// }
if(book_title == ""){
error.push("*Book Title &nbsp;&nbsp;");
}
if(author == ""){
error.push("*Author &nbsp;&nbsp;");
} 
if(age_range == ""){
error.push("*Age Range &nbsp;&nbsp;");
} 

if (error.length > 0) {
error = error.join("");
$(".err_msg").html("<div class='alert alert-warning bg-warning'><span  class='close' data-dismiss='alert'>&times;</span><b>Fields Required:</b><br>"+error+"</div>").fadeIn("2000").delay("5000").fadeOut("slow"); 
stopLoading(btn, 'Update <i class="fa fa-refresh" ></i>');
}else{
$('#book-description').val(description)
$('#book-form').submit();
// dataString = "book_id="+book_id+"&club_type="+club_type+"&book_title="+book_title+"&author="+author;
// $.ajax({
//         type: "POST",
//         url: "../ajax-pages/updateBooks.php",
//         data: dataString,
//         cache: false,
//         success: function (res) {     
//           if (res == "Success") { 
//             $(".err_msg").html("<div class='alert alert-success '><span class='close' data-dismiss='alert'>&times;</span>Book Updated.</div>").fadeIn("2000").delay("5000").fadeOut("slow"); 
//           }else{
//             $(".err_msg").html("<div class='alert alert-warning bg-warning'><span class='close' data-dismiss='alert'>&times;</span>"+res+"</div>").fadeIn("2000").delay("5000").fadeOut("slow")
//           }
//           stopLoading(btn, 'Update <i class="fa fa-refresh" ></i>');
//         }
// });
}
}
function showCouponModal(btn,book_id){
if (confirm("Are you sure you want to generate a coupon for this book?")) {
loading(btn)  
dataString = "book_id="+book_id
$.ajax({
type: "POST",
url: "../admin/ajax-pages/applyCoupon.php",
data: dataString,
cache: false,
success: function (res) {     
  if(res.trim() == "Generated"){
      demo.showNotification('top','right', "Coupon previously generated. <a href='./my-coupons'>CLICK HERE</a> to view generated coupons.", 'warning')  
  }else if(res.trim() != "") { 
      result = res.split("|")
      coupon_code = result[0]
      perc_discount = result[1].split("%")
      perc_discount = perc_discount[0]
      $(".coupon-code").html(coupon_code);
      $(".perc_discount_cont").html('<span class="perc_discount">'+perc_discount+'%</span>')
      $("#couponModal").modal("show");
  }
  stopLoading(btn, 'Get Coupon <span class="fa fa-eye"></span>');
}
}); 
stopLoading(btn, 'Get Coupon <span class="fa fa-eye"></span>');
}

} 
function downloadEbook(ebook, book_id){ 
dataString = "book_id="+book_id
$.ajax({
type: "POST",
url: "../admin/ajax-pages/downloadEbook.php",
data: dataString,
cache: false,
success: function (res) {  
  if (res.trim() == "Success") { 
      // $('#download_button').attr('download', '').attr('target', '_blank');   
      $('#download_button').find('span').trigger('click');
  }
}
}); 
}
function verifyCoupon(btn){
loading_index(btn) 
coupon_code = $('.coupon-code').val();
dataString = "coupon_code="+coupon_code
$.ajax({
type: "POST",
url: "admin/ajax-pages/verifyCoupon.php",
data: dataString,
cache: false,
success: function (res) {  
if (res != "Failure") {
  $(".coupon-code-look-up-result").html(res); 
}else{
  demo.showNotification('top','right', 'Invalid Coupon Code!', 'warning')
}
stopLoading(btn, 'Verify');
}
});

}
function markAsSold(btn, coupon_code){
loading_index(btn) 
bookstore_pin = $('.bookstore_pin').val();
dataString = "coupon_code="+coupon_code+"&bookstore_pin="+bookstore_pin
$.ajax({
type: "POST",
url: "admin/ajax-pages/markAsSold.php",
data: dataString,
cache: false,
success: function (res) {  

if (res.trim() == "Success") {
  $('.coupon-code').val("")
  $(".coupon-code-look-up-result").html("<br><div class='alert alert-success'>Transaction Completed. Thank You!</div>")
  // setInterval(function (){
  //     location = location
  // }, 5000) 
}else{
  demo.showNotification('top','right', 'Invalid Pin!', 'warning')
}
stopLoading(btn, 'Mark as Sold');
}
});
}
function markAsSold2(btn){
loading(btn) 
bookstore_pin = $('.bookstore_pin').val();
coupon_code = $('.coupon-code').html();

dataString = "coupon_code="+coupon_code+"&bookstore_pin="+bookstore_pin
$.ajax({
type: "POST",
url: "../admin/ajax-pages/markAsSold.php",
data: dataString,
cache: false,
success: function (res) {  
if (res == "Success") {
  demo.showNotification('top','right', 'Transacttion Completed. Thank You!', 'success')
  $("#couponModal").modal("hide");
}else{
  demo.showNotification('top','right', 'Invalid Pin', 'warning')   
}
stopLoading(btn, 'Mark as Sold');
}
});
}
function showNavBar(){
$('#navbar-collapse').css('display','block')
$('#navbar-collapse').css('width','100%')
$('#navbar-collapse .fa-times').css('display','block')
}
function hideNavBar(){
$('#navbar-collapse').css('display','none')
$('#navbar-collapse').css('width','0%')
$('#navbar-collapse .fa-times').css('display','none')
}
function uploadBoard(){
$.ajax({
// Your server script to process the upload
url: 'upload.php',
type: 'POST',

// Form data
data: new FormData($('form')[0]),

// Tell jQuery not to process data or worry about content-type
// You *must* include these options!
cache: false,
contentType: false,
processData: false,

// Custom XMLHttpRequest
xhr: function () {
var myXhr = $.ajaxSettings.xhr();
if (myXhr.upload) {
// For handling the progress of the upload
myXhr.upload.addEventListener('progress', function (e) {
if (e.lengthComputable) {
$('progress').attr({
value: e.loaded,
max: e.total,
});
}
}, false);
}
return myXhr;
}
});
}
function promptDeleteTeamMember(slug,type){
if (type == "Management") {
type = "Management Team"
}else if (type == "Board") {
type = "Board of Advisors"
}else if(type == "Governing"){
type = "Governing Council"
}
if (confirm("Are you sure you want to delete this "+type+" member profile?")) {
dataString = "slug="+slug+"&type="+type
$.ajax({
type: "POST",
url: "../ajax-pages/deleteTeamMember.php",
data: dataString,
cache: false,
success: function (res) {  
  if (res == "Success") {
      $(".member_"+slug).fadeOut("slow")
  }else{
      alert(res+'Error deleting profile. Please try again later.')
  }
}
});
}
}

function completeProfile(){ 

$.ajax({
type: "POST",
url: "../admin/ajax-pages/isStateAndDpSet.php", 
cache: false,
success: function (res) { 
  if (res.trim() == "state|") {
      $("#completeProfile-modal").modal("show")
      $(".profile_pics_field").html("")
  }else if(res.trim() == "state|profilePics") {
      $("#completeProfile-modal").modal("show")
  }else if(res.trim() == "profilePics"){
      $("#completeProfile-modal").modal("show")
      $(".state_of_res_field").html("")
  }
}
});

}

function updateUserState(){
state_of_res = $(".state_of_res").val()
dataString = "state_of_res="+state_of_res
$.ajax({
type: "POST",
url: "../admin/ajax-pages/updateUserState.php", 
data: dataString,
cache: false,
success: function (res) { 
  if (res == "Success") {
      location.reload()
  }
}
});
}
function onPositionUpdate(position)
{
var lat = position.coords.latitude;
var lng = position.coords.longitude;
alert("Current position: " + lat + " " + lng);
}
function getUserLocation(){
if(navigator.geolocation)
  navigator.geolocation.getCurrentPosition(onPositionUpdate);
else{
  alert("navigator.geolocation is not available");            
} 
}

function locate(){
dataString = "key=AIzaSyDtKAe1-cYxrVjeOd9Ht5jP-EXAtnOJlhY";
$.ajax({
type: "POST",
url: "https://www.googleapis.com/geolocation/v1/geolocate",
data: dataString,
cache: false,
success: function (res) { 
  $(".locate_result").html(res)
}
});
}
function loadAssessmentBookTitle(){
book_id = $(".book_id").val().split("|")
dataString = "book_id="+book_id[0]
$.ajax({
type: "POST",
url: "../ajax-pages/getNumAssessments.php",
data: dataString,
cache: false,
success: function (res) { 
  $(".display-book-title").html(book_id[1]+" <b>("+res+" entry)</b>")
  getNumAssessmentsType()
}
});
}
function submitAssessment(btn){
loading(btn) 
book_id = $(".book_id").val().split("|")[0] 
question = $(".question").val()
a = $(".a").val()
b = $(".b").val()
c = $(".c").val()
d = $(".d").val()
answer = $(".answer").val()
question_type = $("input[name='question_type']:checked").val();
error = [];
if (book_id=="") {
error.push(" Book Title");    
}
if (question_type == undefined) {
error.push(" Question Type");
}
if (question.trim() == "") {
error.push(" Question");    
}
if (a=="") {
error.push(" Option A");    
}
if (b=="") {
error.push(" Option B");    
}
if (c=="") {
error.push(" Option C");    
}
if (d=="") {
error.push(" Option D");    
} 
if (answer=="") {
error.push(" Answer");    
} 
if (error.length > 0) {
error = error.join(",");
demo.showNotification('top','right', 'Fields Required: '+error, 'warning')
stopLoading(btn, "Submit")
}else{
dataString = "question_type="+question_type+"&book_id="+book_id+"&question="+question+"&a="+a+"&b="+b+"&c="+c+"&d="+d+"&answer="+answer;
$.ajax({
type: "POST",
url: "../ajax-pages/submitAssessment.php",
data: dataString,
cache: false,
}           
}
});
}
}
function mailMembers(btn){
loading(btn)
subject = $(".subject").val()
mail_content = quill.root.innerHTML
dataString = "mail_content="+mail_content+"&subject="+subject
$.ajax({
type: "POST",
url: "../ajax-pages/mailMembers.php",
data: dataString,
cache: false,
success: function (res) { 
if (res.trim() == "Success") {
  quill.root.innerHTML = "Enter Some contents"
  $(".subject").val("")
  demo.showNotification('top','right', "Mail Successfully delivered.", 'success')
}else{
  demo.showNotification('top','right', 'Error delivering mail. Please try again later.', 'warning')
}     
stopLoading(btn, 'Send <i class="fa fa-send"></i>')      
}
});
}
function redeemVoucher(){  
$.ajax({
type: "POST",
url: "../admin/ajax-pages/redeemVoucher.php",
cache: false,
success: function (res) { 
   if (res.trim() == "Success") {
      demo.showNotification('top','right', "Voucher successfully generated.", 'success')
      location = location
   }else{
      demo.showNotification('top','right', res, 'info')
          
   }          
}
}); 
}
function markAsRedeemed1(voucher_code){
pin = prompt("Enter Redemption Points pin.");
if (pin) {
dataString = "voucher_code="+voucher_code+"&pin="+pin
$.ajax({
  type: "POST",
  url: "../admin/ajax-pages/markAsRedeemed.php",
  data: dataString,
  cache: false,
  success: function (res) { 
       if (res.trim() == "Success") {
          demo.showNotification('top','right', "Voucher marked as redeemed.", 'success')
       }else{
          demo.showNotification('top','right', res, 'info')
              
       }          
  }
});
}
}
function markAsRedeemed(voucher_code){
pin = prompt("Enter Redemption Points pin.");
if (pin) {
dataString = "voucher_code="+voucher_code+"&pin="+pin
$.ajax({
  type: "POST",
  url: "admin/ajax-pages/markAsRedeemed.php",
  data: dataString,
  cache: false,
  success: function (res) { 
       if (res.trim() == "Success") {
          demo.showNotification('top','right', "Voucher marked as redeemed.", 'success')
       }else{
          demo.showNotification('top','right', res, 'info')
              
       }          
  }
});
}
}
function adminMarkAsRedeemed(voucher_code){
pin = confirm("Are you sure you want to mark "+voucher_code+" as redeemed?");
if (pin) {
dataString = "voucher_code="+voucher_code
$.ajax({
  type: "POST",
  url: "../ajax-pages/adminMarkAsRedeemed.php",
  data: dataString,
  cache: false,
  success: function (res) { 
       if (res.trim() == "Success") {
          demo.showNotification('top','right', "Voucher marked as redeemed.", 'success')
       }else{
          demo.showNotification('top','right', res, 'info')
              
       }          
  }
});
}
}
function showNewRedemptionPointModal(){
$("#redemptionPointModal").modal("show")
}
function createNewRedemptionPoint(btn){
loading(btn)
business_name = $(".business_name").val()
email = $(".email").val()
phoneNo = $(".phoneNo").val()
state_of_location = $(".state_of_location").val()
address = $(".address").val()
pin1 = $(".pin1").val()
pin2 = $(".pin2").val()  
description = $(".description").val()  

error = [];
if (business_name=="") {
error.push(" Business Name");    
}
if (email.trim() == "") {
error.push(" Email");    
}
if (state_of_location == "") {
error.push(" State");
}
if (pin1.trim() == "") {
error.push(" Pin");    
}
if (pin2.trim() == "") {
error.push(" Retype Pin");    
}   
if (pin1 != pin2) {
error.push(" Pin mismatch");
}
if(error.length > 0){
error = error.join(",");
demo.showNotification('top','right', 'Fields Required: '+error, 'warning')
stopLoading(btn, "Create <i class='fa fa-arrow-circle-right'></i>")
}else{
dataString = "business_name="+business_name+"&description="+description+"&state_of_location="+state_of_location+"&email="+email+"&phoneNo="+phoneNo+"&address="+address+"&pin="+pin1
$.ajax({
  type: "POST",
  url: "../ajax-pages/createNewRedemptionPoint.php",
  data: dataString,
  cache: false,
  success: function (res) { 
     if (res.trim() == "Success") {
      demo.showNotification('top','right', "Redemption Point successfully created.", 'success')
      $("#redemptionPointModal").modal("hide")
      location = location;
  }else{
      demo.showNotification('top','right', res, 'info')
  }          
}
});
stopLoading(btn, "Create <i class='fa fa-arrow-circle-right'></i>")   
}
}
function changeRedemptionPointPin(id){
new_pin = prompt("Enter New pin")
if (new_pin.trim() == "") {
demo.showNotification('top','right', "Enter Pin", 'info')                            
}else{
if (new_pin) {
dataString = "id="+id+"&new_pin="+new_pin
$.ajax({
      type: "POST",
      url: "../ajax-pages/changeRedemptionPointPin.php",
      data: dataString,
      cache: false,
      success: function (res) { 
           if (res.trim() == "Success") {
              demo.showNotification('top','right', "Pin Successfully changed", 'success')
           }else{
              demo.showNotification('top','right', res, 'info')                            
           }          
      }
});
}
}

}
function showEditAssessmentModal(assessment_id){
dataString = "assessment_id="+assessment_id
$.ajax({
type: "POST",
url: "../ajax-pages/showEditAssessment.php",
data: dataString,
cache: false,
success: function (res) { 
$("#editAssessmentModal .modalContainer").html(res)
$("#editAssessmentModal").modal("show")
}
});
}
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myStickyFunction()};

// Get the header
var header = document.getElementById("myStickyHeader");

// Get the offset position of the navbar
if (header != null) {
var sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myStickyFunction() {
if (window.pageYOffset > sticky) {
header.classList.add("sticky-header");
} else {
header.classList.remove("sticky-header");
}
}
}else{
function myStickyFunction() {}
}


function saveSettings(field){
field_data = $("."+field).val()
dataString = "field_name="+field+"&field_data="+field_data
$.ajax({
type: "POST",
url: "../ajax-pages/saveSettings.php",
data: dataString,
cache: false,
success: function (res) { 
if (res.trim() == "Success") {
  demo.showNotification('top','right', "Changes saved", 'success')
}
}
});
}