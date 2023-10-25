using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Calculator calculator = new Calculator(); // ClassLibrary1의 Calculator 클래스 인스턴스 생성

            int result1 = calculator.Add(5, 3);
            Console.WriteLine("5 + 3 = " + result1);

            int result2 = calculator.Subtract(10, 4);
            Console.WriteLine("10 - 4 = " + result2);
        }
    }
}
