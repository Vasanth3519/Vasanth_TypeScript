using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vaccination_Drive
{
    class VaccineDrive
    {
        static List<BeneficiaryDetails> Beneficiaries = new List<BeneficiaryDetails>(); // Beneficiaries List
        static void Main(string[] args)
        {
 
            int choice;

            // Displaying the main menu and Get choice what the user want to do...

            do
            {
                MainMenu();
                choice = int.Parse(Console.ReadLine());
                switch (choice)
                {
                    case 1:
                        AddBeneficiaryDetails(choice);
                        break;
                    case 2:
                        VaccinationProcess();
                        break;
                    case 3:
                        Console.WriteLine("<-----Thankyou for participating in Vaccination Drive----->");
                        break;
                    default:
                        Console.WriteLine("--> Enter the valid option from the main menu displayed...");
                        break;
                }
            } while (choice != 3);

            // Method to display the main menu...

            private static void MainMenu()
            {
                Console.WriteLine("<-----> Main Menu <----->\n");
                Console.WriteLine(" 1. Benificiary Registration.\n 2. Vaccination.\n 3. Exit.");
            }

            // Method to add new beneficiary to the list...

            private static void AddBeneficiaryDetails(int dose)
            {

                Console.WriteLine("<-----> Beneficiary Registration Page <----->");

                Console.WriteLine(" Enter Name: ");
                string name = Console.ReadLine();

                Console.WriteLine(" Enter Age: ");
                int age = int.Parse(Console.ReadLine());

                Console.WriteLine(" Choose Gender: 1.Male || 2.Female || 3.Transgender");
                int gender = int.Parse(Console.ReadLine());

                Console.WriteLine("Enter Mobile Number: ");
                long mobile = long.Parse(Console.ReadLine());

                Console.WriteLine("Enter City: ");
                string address = Console.ReadLine();

                BeneficiaryDetails beneficiaryobject = new (name, mobile, address, age, gender);

                Console.WriteLine("===> Registration Successfull and your");
                Console.WriteLine($"\t\t Registration ID is {beneficiaryobject.RegistrationID}");

                Beneficiaries.Add(beneficiaryobject);
            }



            //Vaccination module
            private static void VaccinationProcess()
            {

                bool flag = true; //to continuously execute the below loop
                do
                {
                    ShowListOfBeneficiaries();

                    Console.WriteLine("<-----> Vaccination Page <----->");

                    Console.WriteLine("Provide your Registration ID: ");
                    int registeredId = int.Parse(Console.ReadLine());

                    BeneficiaryDetails currentBenificiary = null;

                    foreach (BeneficiaryDetails beneficiary in Beneficiaries) 
                    {
                        if (registeredId == beneficiary.RegistrationID)
                        {
                            currentBenificiary = beneficiary;
                        }
                    }
                    //executes when desired beneficiary found
                    if (currentBenificiary != null)
                    {
                        int beneficiaryOption = 1;
                        do
                        {
                            Console.WriteLine("-------------------------------------------");
                            Console.WriteLine(">>Home>>Vaccination");
                            Console.WriteLine("-------------------------------------------");
                            Console.WriteLine($"Hi {currentBenificiary.Name} \nSpecify your options:\n1.Take Vaccination\n2.Vaccination History\n3.Next Dose Due Date\n4.Go to Main Menu");
                            beneficiaryOption = int.Parse(Console.ReadLine());
                            switch (beneficiaryOption)
                            {
                                case 1:
                                    TakeVaccination(currentBenificiary);
                                    break;
                                case 2:
                                    VaccinationHistory(currentBenificiary);
                                    break;
                                case 3:
                                    Console.WriteLine(currentBenificiary.DueDate());
                                    break;
                                case 4:
                                    flag = false;//to stop the loop
                                    break;
                                default:
                                    Console.WriteLine("invalid input");
                                    break;



                            }
                        } while (beneficiaryOption != 4);
                    }
                    //executes when desired beneficiary is not found
                    else
                    {
                        Console.WriteLine("Incorrect registration number");
                    }
                } while (flag);


            }

            Console.ReadKey();
        }
    }
}
