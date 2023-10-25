using System;
using System.Threading;

namespace C_6_0906b
{
    internal class study02
    {
        static void Main(string[] args)
        {
            // 주 스레드
            Thread t = new Thread(threadFunc);
            t.IsBackground = true; // 전경 스레드를 배경 스레드로 바꿔줌 (주 스레드가 종료되면 프로그램 종료)
            t.Start(10); // t 스레드가 시작되고 더 할게 없으므로 스레드 종료. 괄호안에 값을 넣어 전달도 가능
            // 클래스를 만들어 그 객체도 전달가능
            t.Join(); // t 스레드가 종료될 때까지 기다림
            Console.WriteLine("주스레드 종료!");
        }

        static void threadFunc(object init) 
        {
            // t 스레드
            int num = (int)init;

            Console.WriteLine("3초후 프로그램 종료");
            Thread.Sleep(3000); // 3초동안 실행중지
                                 // 현재 주 스레드는 종료됐어도 t스레드는 존속
            Console.WriteLine($"{num}스레드 종료!");
        }
    }
}
