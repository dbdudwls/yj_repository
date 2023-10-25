﻿using System;
using System.Threading;

namespace C_6_0906d
{
    internal class study04
    {
        static void Main(string[] args)
        {
            // Non-Signal 상태의이벤트 객체 생성
            // 생성자의 첫 번째 인자가 false이면 Non-Signal 상태로 시작
            // true이면 Signal 상태로 시작
            EventWaitHandle ewh = new EventWaitHandle(false, EventResetMode.ManualReset);

            Thread t = new Thread(threadFunc);
            t.IsBackground = true;
            t.Start(ewh);

            // Non-Signal 상태에서 WaitOne을 호출했으니 Signal 상태로 바뀔 때까지 대기
            ewh.WaitOne();
            Console.WriteLine("주 스레드 종료");
        }

        static void threadFunc(object state)
        {
            EventWaitHandle ewh = state as EventWaitHandle;

            Console.WriteLine("3초후 프로그램 종료");
            Thread.Sleep(3000);
            Console.WriteLine("스레드 종료!");

            // Non-Signal 상태의 이벤트를 Signal 상태로 전환
            ewh.Set();
        }
    }
}
