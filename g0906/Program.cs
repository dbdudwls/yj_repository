using System;
using System.Text;
using lib2;

namespace g0906
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // 사용자로부터 두 정수 입력받기
            Console.WriteLine("첫번째 정수를 입력해주십시오");
            int num1 = int.Parse(Console.ReadLine());
            Console.WriteLine("두번째 정수를 입력해주십시오");
            int num2 = int.Parse(Console.ReadLine());

            int sum = MathUtilities.Add(num1,num2);
            Console.WriteLine($"두 정수의 합은 {sum}입니다");

            // 사용자로부터 이름과 나이 입력 받기
            Console.Write("이름을 입력하세요: ");
            string name = Console.ReadLine();

            Console.Write("나이를 입력하세요: ");
            if (int.TryParse(Console.ReadLine(), out int age))
            {
                // Person 객체 생성
                Person person = new Person(name, age);

                // Person 정보 출력
                Console.WriteLine("입력한 정보:");
                Console.WriteLine(person);
            }
            else
            {
                Console.WriteLine("올바른 나이를 입력하지 않았습니다.");
            }

        }
    }
}
