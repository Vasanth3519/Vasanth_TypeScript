using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vaccination_Drive
{
    /// <summary>
    /// Class that contains the Beneficiary Details.
    /// </summary>
    
    class BenificiaryDetails
    {
  
        // Property Creation...
        public int RegisterNumber { get; set; }  // AutoIncremented Registration Number to provide unique ID for each user.
        private static int idAutoIncrement = 1001;

        public string Name { get; set; }
        public long MobileNumber { get; set; }
        public string City { get; set; }
        public int Age { get; set; }

        public ChooseGender Gender { get; set; } // Declared in enum for choosing gender of the user.

        public List<Vaccination> VaccinationObject = new List<Vaccination>(); // CReating List to store the data in a seperate manner.
        public BeneficiaryDetails(string name, long mobile, string address, int age, int gender)

        //Creating constructor...

        public BenificiaryDetails()
        {
            string userName, place, gender; long mobile; int age;

            Console.WriteLine("\n <-----> Beneficiary Registrartion Page <-----> \n");

            this.RegisterNumber = idAutoIncrement;
            idAutoIncrement++;

            Console.Write("Enter Beneficiary Name: ");
            userName = Console.ReadLine();
            this.name = userName;

            Console.Write("Enter Your Age: ");
            age = int.Parse(Console.ReadLine());
            this.Age = age;

            Console.Write("Enter Mobile Number: ");
            mobile = long.Parse(Console.ReadLine());
            this.MobileNumber = mobile;

            Console.Write("Enter Name Of The City: ");
            place = Console.ReadLine();
            this.City = place;

            Console.Write("Enter Your Gender: ");
            gender = Console.ReadLine();
            this.gender = gender;

            Console.WriteLine("\n==> Registration Completed...");

            DisplayUserDetails(); // Calling the function to display the preview.

        }

        // Method to display the preview of user details...
        public void DisplayUserDetails()
        {
            Console.Write(" \nPress 1 to view the Preview Detail...");
            string confrim = Console.ReadLine();

            // Loop to validate the input...

            if (confrim == "1")
            {
                Console.WriteLine($"\n\n Registration Number : {RegisterNumber}");
                Console.WriteLine($" Beneficiary Name : {name}");
                Console.WriteLine($" Age : {Age}");
                Console.WriteLine($" Gender : {gender}");
                Console.WriteLine($" Mobile Number : {MobileNumber}");
                Console.WriteLine($" City : {City}");

                DisplayList();
            }
        }

        //Method that display the list of vaccines available...
        public void DisplayList()
        {
            int i = 1;
            Console.WriteLine("\n <-----> Available Vaccines <-----> \n");
            foreach (string vaccine in vaccineAvailable)
            {
                Console.WriteLine($"{i}. {vaccine}");
                i++;
            }
            VaccineInjected(); // Calling the function to get the choice of vaccine.
        }

        int choice; //Reference below...
        public void VaccineInjected()
        {
            choice = vaccineobject.VaccineChoice();

            if(choice == 1)
            {
                Console.WriteLine($"\nThe 1st Dose of Covishield has been successfully Vaccinated.");
                Console.WriteLine($" Date and Time : {DateTime.Now}");
                NextDue();
            }

            if (choice == 2)
            {
                Console.WriteLine($"\nThe 1st Dose of Covaxine has been successfully Vaccinated.");
                Console.WriteLine($" Date and Time : {DateTime.Now}");
                NextDue();
            }

            if (choice == 3)
            {
                Console.WriteLine("\nThe 1st Dose of Suptnix has been successfully Vaccinated.");
                Console.WriteLine($" Date and Time : {DateTime.Now}");
                NextDue();
            }
        }

        public void NextDue()
        {
            if (choice == 1)
            {
                Console.Write("\t ---> The next dose to be injected between : ");
                var date1 = DateTime.Now;
                var finalDate1 = date1.AddDays(72);
                var finalDate2 = date1.AddDays(84);
                Console.WriteLine($"{finalDate1.Date}   to   {finalDate2.Date}");
            }

            if (choice == 2)
            {
                Console.Write("\t ---> The next dose to be injected between : ");
                var date1 = DateTime.Now;
                var finalDate1 = date1.AddDays(30);
                var finalDate2 = date1.AddDays(45);
                Console.WriteLine($"{finalDate1.Date}   to   {finalDate2.Date}");
            }

            if (choice == 3)
            {
                Console.Write("\t ---> The next dose to be injected between : ");
                var date1 = DateTime.Now;
                var finalDate1 = date1.AddDays(20);
                var finalDate2 = date1.AddDays(30);
                Console.WriteLine($"{finalDate1.Date}   to   {finalDate2.Date}");
            }

        }
    }


}
