using System;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace C_6_HTTP
{
    internal class Program
    {
        static async Task Main(string[] args)
         // 비동기작업을 할때 쓰는 진입점

        {
            // HTTP 서버를 리스닝할 포트 설정
            int port = 8080;

            TcpListener listener = new TcpListener(IPAddress.Any, port);
            listener.Start();
            Console.WriteLine($"HTTP 서버가 {port} 포트에서 실행 중...");

            while (true)
            {
                TcpClient client = await listener.AcceptTcpClientAsync();
                HandleClientRequest(client);
            }
        }

        static async Task HandleClientRequest(TcpClient client)
        {
            using (NetworkStream networkStream = client.GetStream())
            using (StreamReader reader = new StreamReader(networkStream))
            using (StreamWriter writer = new StreamWriter(networkStream))
            {
                // HTTP 요청 메시지를 읽기
                string requestMessage = await reader.ReadLineAsync();


                if (string.IsNullOrEmpty(requestMessage))
                    return;

                Console.WriteLine($"요청 받음: {requestMessage}");

                // HTTP 응답 메시지 작성
                string responseMessage = "HTTP/1.1 200 OK\r\n" +
                                         "Content-Type: text/html\r\n" +
                                         "\r\n" +
                                         "<html><body><h1>Hello, C# HTTP Server!</h1></body></html>";

                // 클라이언트에게 응답 보내기
                await writer.WriteAsync(responseMessage);
                await writer.FlushAsync();
            }

            client.Close();
        }
    }
}
