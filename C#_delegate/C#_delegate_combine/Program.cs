using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication39
{
    delegate void PDelegate(int a, int b);

    class Program
    {
        static void Plus(int a, int b)
        {
            Console.WriteLine("{0} + {1} = {2}", a, b, a + b);
        }

        static void Minus(int a, int b)
        {
            Console.WriteLine("{0} - {1} = {2}", a, b, a - b);
        }

        static void Division(int a, int b)
        {
            Console.WriteLine("{0} / {1} = {2}", a, b, a / b);
        }

        static void Multiplication(int a, int b)
        {
            Console.WriteLine("{0} * {1} = {2}", a, b, a * b);
        }

        static void Main(string[] args)
        {
            PDelegate pd = (PDelegate)Delegate.Combine
                (new PDelegate(Plus),
                new PDelegate(Minus), 
                new PDelegate(Division), 
                new PDelegate(Multiplication));
            //Delegate.Combine은 여러개의 대리자를 묶어 순차적으로 실행시킨다

            pd(20, 10);
        }
    }
}