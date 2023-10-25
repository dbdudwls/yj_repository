using System;
using System.Threading;

namespace C_6_network02
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Thread serverThread = new Thread(serverFunc);
            serverThread.IsBackground = true;
            serverThread.Start();

            Thread.Sleep(500);

            Thread clientThread = new Thread(clientFunc);
            serverThread.IsBackground = true;
            serverThread.Start();

            Console.WriteLine("종료하려면 아무키나 누르세요...");
            Console.ReadLine();
        }

        private static void serverFunc(object obj) 
        {
        
        }

        private static void clientFunc(object obj) 
        {
        
        }    
    }
}
