using System.Collections.Generic;
using System;
using System.Linq;

namespace C_8_var
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var name = "John";
            var age = 30;
            Console.WriteLine(name +" "+ age);

            var numbers = new List<int> { 1, 2, 3, 4, 5 };
            Console.WriteLine(numbers);

            var evenNumbers = from num in numbers
                              where num % 2 == 0
                              select num;
            Console.WriteLine(evenNumbers);

            var result = CalculateTotal(10, 20);
            Console.WriteLine(result);

            var person = new { FirstName = "Alice", LastName = "Smith" };
            Console.WriteLine($"Name: {person.FirstName} {person.LastName}");

            foreach (var number in numbers)
            {
                Console.WriteLine(number);
            }
        }

        static int CalculateTotal(int a, int b)
        {
            return a + b;
        }
    }
}
