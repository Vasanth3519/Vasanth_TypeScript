// Declaration of Auto Generated Values for ID...

let autoGenerateUserId = 1000;
let autoGenerateCourseId = 100;

// Creating User and Course Class...

class User
{
    UserId: string;
    Name: string;
    Age: number;
    MobileNo: number;

    constructor(paraName:string, paraAge:number, paraMobileNo:number)
    {
        autoGenerateUserId ++; //Generates a auto increamented user id.

        this.UserId = "RI" + autoGenerateUserId.toString();
        this.Name = paraName;
        this.Age = paraAge;
        this.MobileNo = paraMobileNo;

    }

}

class Course
{
    CourseId: string;
    CourseName: string;
    RequiredDays: number;
    UserId: string

    constructor(paraCourseName:string, paraDays:number, paraUserId)
    {
        autoGenerateCourseId ++; // Generates a auto incremented course id.

        this.CourseId = "CI" + autoGenerateCourseId.toString;
        this.CourseName = paraCourseName;
        this.RequiredDays = paraDays;
        this.UserId = paraUserId;
    }
}

// Declaration of Array List...

let UserArrayList: Array<User> = new Array <User> ();
let CourseArrayList: Array<Course> = new Array <Course> ();

// Declaration of Functions...

function HomePage()
{
    let menu = document.getElementById("homepage") as HTMLDivElement;
    let adduser = document.getElementById("registrationpage") as HTMLDivElement;
    menu.style.display = "none";
    adduser.style.display = "block";
   
}

function RegistrationPage()
{

    let enrollnewuser = document.getElementById("registrationpage") as HTMLDivElement;
    let menu = document.getElementById("homepage") as HTMLDivElement;

    // Get User data...

    let newUserName = (document.getElementById("newusername") as HTMLInputElement).value;
    let newUserAge = parseInt( (document.getElementById("newuserage") as HTMLInputElement).value );
    let newUserPhNo = parseInt( (document.getElementById("newuserphno") as HTMLInputElement).value );

    let object1 = new User(newUserName, newUserAge, newUserPhNo);
    UserArrayList.push(object1);
    alert("Your Registration ID: " + object1.UserId);
    
    // --------

    enrollnewuser.style.display = "none";
    menu.style.display = "block";
}

function LoginPage()
{
    let menu = document.getElementById("homepage") as HTMLDivElement;
    let existinguser = document.getElementById("loginpage") as HTMLDivElement;

    menu.style.display = "none";
    existinguser.style.display = "block";
}

function CoursePage()
{
    let existinguser = document.getElementById("loginpage") as HTMLDivElement;
    let courses = document.getElementById("coursepage") as HTMLDivElement;

    existinguser.style.display = "none";
    courses.style.display = "block";
}

function AvailableCourses()
{
    let courses = document.getElementById("coursepage") as HTMLDivElement;
    let availablecourses = document.getElementById("availablecoursepage") as HTMLDivElement;

    // Get Course Details...

    courses.style.display = "none";
    availablecourses.style.display = "block";
}

// function to navigate from available course page to home page...

function HomePageAvailableCourse()
{
    let availablecourses = document.getElementById("availablecoursepage") as HTMLDivElement;
    let menu = document.getElementById("homepage") as HTMLDivElement;

    availablecourses.style.display = "none";
    menu.style.display = "block";
}

function EnrolledCourses()
{
    let courses = document.getElementById("coursepage") as HTMLDivElement;
    let enrolledcourses = document.getElementById("enrolledcoursepage") as HTMLDivElement

    courses.style.display = "none";
    enrolledcourses.style.display = "block";

}

// function to navigate from enrolled course page to home page...

function HomePageEnrolledCourse()
{
    let enrolledcourses = document.getElementById("enrolledcoursepage") as HTMLDivElement;
    let menu = document.getElementById("homepage") as HTMLDivElement;

    enrolledcourses.style.display = "none";
    menu.style.display = "block";
}

function ValidateUser()
{
    let checker: boolean = false;
    let idValue = (document.getElementById("existinguserid") as HTMLInputElement).value;
    for(let i=0; i < UserArrayList.length; i++)
    {
        if( UserArrayList[i].UserId == idValue)
        {
            alert("Anybody Can Code...! Be Confident and Be Consistent...");
            checker = true;
            CoursePage();
            break;
        }

    }
    if(checker == false)
    {
        alert("Please Enter Valid User ID...!")
    }

}