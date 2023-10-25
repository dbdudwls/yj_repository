using System;
using System.Threading;

namespace C_6_0906e
{
    internal class study05
    {
        static AutoResetEvent autoEvent = new AutoResetEvent(false);
        static ManualResetEvent manualEvent = new ManualResetEvent(false);

        static void Main()
        {
            // AutoResetEvent 사용 예제
            ThreadPool.QueueUserWorkItem(state =>
            {
                Console.WriteLine("스레드 1 시작");
                Thread.Sleep(1000);
                Console.WriteLine("스레드 1 완료");
                autoEvent.Set(); // 이벤트 발생
            });

            ThreadPool.QueueUserWorkItem(state =>
            {
                Console.WriteLine("스레드 2 대기 중");
                autoEvent.WaitOne(); // 이벤트 대기
                Console.WriteLine("스레드 2 진행");
            });

            // ManualResetEvent 사용 예제
            ThreadPool.QueueUserWorkItem(state =>
            {
                Console.WriteLine("스레드 3 시작");
                Thread.Sleep(1000);
                Console.WriteLine("스레드 3 완료");
                manualEvent.Set(); // 이벤트 발생
            });

            ThreadPool.QueueUserWorkItem(state =>
            {
                Console.WriteLine("스레드 4 대기 중");
                manualEvent.WaitOne(); // 이벤트 대기
                Console.WriteLine("스레드 4 진행");
            });

            Console.ReadLine();
        }
    }
}
