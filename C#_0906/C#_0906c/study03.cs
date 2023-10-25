using System;
using System.Threading;

namespace C__0906c
{
    internal class study03
    {
        static void Main(string[] args)
        {

            Console.WriteLine("입력한 숫자까지의 소수 개수 출력(종료: 'x' + Enter)");

            while (true)
            {
                Console.WriteLine("숫자를 입력하세요");
                string usernum = Console.ReadLine();

                if (usernum.Equals("x", StringComparison.OrdinalIgnoreCase))
                //옵션은 문자열 비교를 대소문자를 무시하고 수행합니다. 즉, "X", "x", "X", "x" 등 모든 대소문자 형태의 "x"에 대해 참(true)으로 평가
                {
                    Console.WriteLine("프로그램 종료");
                    break;
                }

                Thread t = new Thread(CountPrimeNumbers);
                t.IsBackground = true;
                t.Start(usernum);
            }
        }

        static void CountPrimeNumbers(object initial)
        {
            string val = (string)initial;
            int prime = int.Parse(val);
            int total = 0;
            for (int i = 2; i < prime; i++)
            {
                if (IsPrime(i) == true)
                {
                    total++;
                }
            }
            Console.WriteLine("숫자{0}까지의 소수 개수? {1}",val, total);
        }

        static bool IsPrime(int candi)
        {
            if ((candi & 1) == 0)
            {
                return candi == 2;
            }

            for (int i = 3; (i * i) <= candi; i += 2)
            {
                if ((candi % i) == 0) return false;
            }
            return candi != 1;
        }
    }
}
