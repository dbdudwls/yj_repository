using System;
using System.Net;

namespace C_6_network01
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] hostnames = {"www.google.com", "www.daum.net", "www.x.com" };

            foreach (string hostname in hostnames)
            {
                IPHostEntry entry = Dns.GetHostEntry(hostname);
                // IPHostEntry는 호스트의 정보를 담고있는 클래스, Dns.GetHostEntry는 호스트의 정보를 얻는 메서드
                Console.WriteLine($"IP Addresses for {hostname}:");
                
                foreach (IPAddress ipAddress in entry.AddressList)
                // IPAddress는 IP주소를 나타내는 클래스
                {
                    Console.WriteLine(ipAddress);
                }
                Console.WriteLine();
            }

            ////////////////

            string myCom = Dns.GetHostName();
            Console.WriteLine("컴퓨터이름 : "+myCom);

            IPHostEntry myEntry = Dns.GetHostEntry(myCom);
            foreach (IPAddress ipAddress in myEntry.AddressList)
            {
                Console.WriteLine(ipAddress.AddressFamily + ":" + ipAddress);
            }



        }
    }
}
