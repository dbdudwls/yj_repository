using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication42
{
    public delegate void MyEventHandler(string message);

    class Publisher
    {
        public event MyEventHandler Active;
        // Active라는 이벤트를 정의
        // 이벤트가 나올 때마다 MyEventHandler에 정의된 메서드들이 실행


        public void DoActive(int number)
        {
            if (number % 10 == 0)
                Active("Active!" + number);
            // 액티브 이벤트가 진행
            // 이 예제에서는 MyHandler메서드가 실행
            // "Active!" + number << 이 부분이 메시지가 됨
            else
                Console.WriteLine(number);
        }
    }

    class Subscriber
    {
        static public void MyHandler(string message)
        {
            Console.WriteLine(message);
        }

        static void Main(string[] args)
        {
            Publisher publisher = new Publisher();
            publisher.Active += new MyEventHandler(MyHandler);
            // +=를 통해 MyHandler이걸 Active이벤트에 등록함
            // Active이벤트가 나오면 MyHandler가 실행됨

            for (int i = 1; i < 50; i++)
                publisher.DoActive(i);
            // DoActive메서드를 실행
        }
    }
}
