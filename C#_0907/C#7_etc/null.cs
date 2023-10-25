using System;

namespace AnonymousMethodExample
{
    class Program
    {
        delegate void MathOperation(int x, int y);

        static void Main(string[] args)
        {
            // 익명 메서드를 사용한 델리게이트 초기화
            MathOperation add = delegate (int a, int b)
            {
                Console.WriteLine($"{a} + {b} = {a + b}");
            };

            MathOperation subtract = delegate (int a, int b)
            {
                Console.WriteLine($"{a} - {b} = {a - b}");
            };

            // 델리게이트를 사용하여 메서드 호출
            add(5, 3);
            subtract(5, 3);
        }
    }
}
