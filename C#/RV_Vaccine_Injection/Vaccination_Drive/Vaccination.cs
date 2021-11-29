using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vaccination_Drive
{
    class Vaccination
    {
        //BenificiaryDetails benificiaryobject = new BenificiaryDetails();
        public int regNo { get; set; }

        public int VaccineChoice()
        {
            Console.WriteLine("\nEnter your choice of vaccine...");
            int choice = int.Parse(Console.ReadLine());

            return choice;
        }


    }
}
