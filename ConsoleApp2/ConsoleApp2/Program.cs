using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("C#에서 출력문은  Console.WriteLine()를 쓴다 ");

            int[,] twoDimArray = new int[3, 2]; // 3x2 행렬
            twoDimArray[1, 1] = 110;
            Console.WriteLine(twoDimArray[1,1]);
            // 다차원 배열선언은 C#과 java가 약간 다르낟

            List<string> names = new List<string> { "Alice", "Bob", "Charlie" };

            foreach (string name in names)
            {
                Console.WriteLine(name);
            }
            // foreach문은 자바에는 없고 C#에만 있다
            // 자바에는 비슷한 for-each문이 있다.
            // for (int num : numbers)

            int number = 10;

            if (number > 5)
            {
                Console.WriteLine("Number is greater than 5");
            }
            else
            {
                Console.WriteLine("Number is not greater than 5");
            }
            // C#의 if문은 자바와 거의 유사하다 하지만 문자열을 비교할때 .equals대신 ==를 사용할 수 있다.
        }
    }
}
