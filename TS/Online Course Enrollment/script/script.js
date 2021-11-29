// Declaration of Auto Generated Values for ID...
var autoGenerateUserId = 1000;
var autoGenerateCourseId = 100;
// Creating User and Course Class...
var User = /** @class */ (function () {
    function User(paraName, paraAge, paraMobileNo) {
        autoGenerateUserId++; //Generates a auto increamented user id.
        this.UserId = "RI" + autoGenerateUserId.toString();
        this.Name = paraName;
        this.Age = paraAge;
        this.MobileNo = paraMobileNo;
    }
    return User;
}());
var Course = /** @class */ (function () {
    function Course(paraCourseName, paraDays, paraUserId) {
        autoGenerateCourseId++; // Generates a auto incremented course id.
        this.CourseId = "CI" + autoGenerateCourseId.toString;
        this.CourseName = paraCourseName;
        this.RequiredDays = paraDays;
        this.UserId = paraUserId;
    }
    return Course;
}());
// Declaration of Array List...
var UserArrayList = new Array();
var CourseArrayList = new Array();
// Declaration of Functions...
function HomePage() {
    var menu = document.getElementById("homepage");
    var adduser = document.getElementById("registrationpage");
    menu.style.display = "none";
    adduser.style.display = "block";
}
function RegistrationPage() {
    var enrollnewuser = document.getElementById("registrationpage");
    var menu = document.getElementById("homepage");
    // Get User data...
    var newUserName = document.getElementById("newusername").value;
    var newUserAge = parseInt(document.getElementById("newuserage").value);
    var newUserPhNo = parseInt(document.getElementById("newuserphno").value);
    var object1 = new User(newUserName, newUserAge, newUserPhNo);
    UserArrayList.push(object1);
    alert("Your Registration ID: " + object1.UserId);
    // --------
    enrollnewuser.style.display = "none";
    menu.style.display = "block";
}
function LoginPage() {
    var menu = document.getElementById("homepage");
    var existinguser = document.getElementById("loginpage");
    menu.style.display = "none";
    existinguser.style.display = "block";
}
function CoursePage() {
    var existinguser = document.getElementById("loginpage");
    var courses = document.getElementById("coursepage");
    existinguser.style.display = "none";
    courses.style.display = "block";
}
function AvailableCourses() {
    var courses = document.getElementById("coursepage");
    var availablecourses = document.getElementById("availablecoursepage");
    // Get Course Details...
    courses.style.display = "none";
    availablecourses.style.display = "block";
}
// function to navigate from available course page to home page...
function HomePageAvailableCourse() {
    var availablecourses = document.getElementById("availablecoursepage");
    var menu = document.getElementById("homepage");
    availablecourses.style.display = "none";
    menu.style.display = "block";
}
function EnrolledCourses() {
    var courses = document.getElementById("coursepage");
    var enrolledcourses = document.getElementById("enrolledcoursepage");
    courses.style.display = "none";
    enrolledcourses.style.display = "block";
}
// function to navigate from enrolled course page to home page...
function HomePageEnrolledCourse() {
    var enrolledcourses = document.getElementById("enrolledcoursepage");
    var menu = document.getElementById("homepage");
    enrolledcourses.style.display = "none";
    menu.style.display = "block";
}
function ValidateUser() {
    var checker = false;
    var idValue = document.getElementById("existinguserid").value;
    for (var i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].UserId == idValue) {
            alert("Anybody Can Code...! Be Confident and Be Consistent...");
            checker = true;
            CoursePage();
            break;
        }
    }
    if (checker == false) {
        alert("Please Enter Valid User ID...!");
    }
}
