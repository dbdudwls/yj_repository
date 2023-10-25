using System;
using System.Text.RegularExpressions;
using System.Threading;

namespace C_6_0906
{
    internal class study01
    {
        static void Main(string[] args)
        {
            Thread thread = Thread.CurrentThread;
            Console.WriteLine(thread.ThreadState);

            Console.WriteLine(DateTime.Now);
            Thread.Sleep(1000); // 1초동안 스레드 중지
            Console.WriteLine(DateTime.Now);
        }
    }
}
