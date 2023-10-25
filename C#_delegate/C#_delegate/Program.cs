using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication39
{
    delegate int PDelegate(int a, int b);
    // delegate 반환형 델리게이트명(매개변수..);

    class Program
    {
        static int Plus(int a, int b)
        {
            return a + b;
        }

        static void Main(string[] args)
        {
            PDelegate pd1 = Plus;
            PDelegate pd2 = delegate (int a, int b)
            {
                return a / b;
            };
            //익명 메소드(anonymous method)를 사용한 대리자(delegate)입니다.
            //익명 메소드는 메소드 이름을 정의하지 않고 메소드 본문을 직접 대리자에게 전달하는 방법이다.
            //추후 람다식으로 더 간편하게 사용가능

            Console.WriteLine(pd1(5, 10));
            Console.WriteLine(pd2(10, 5));
        }
    }
}