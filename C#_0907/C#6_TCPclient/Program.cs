using System;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;

class TCPClient
{
    static void Main()
    {
        Console.WriteLine("클라이언트입니다");
        try
        {
            // 서버 정보 설정
            string serverIP = "192.168.0.140"; // 서버 IP 주소
            int serverPort = 8080; // 서버 포트 번호

            TcpClient client = new TcpClient(serverIP, serverPort);
            Console.WriteLine("서버에 연결되었습니다.");

            // 클라이언트와 통신할 스트림 생성
            NetworkStream stream = client.GetStream();

            // 서버에 최초 메시지 보내기
            Console.WriteLine("서버에 보낼 최초 메시지를 입력해주세요");
            string message = Console.ReadLine();
            byte[] data = Encoding.UTF8.GetBytes(message);
            stream.Write(data, 0, data.Length);

            // 3초마다 메시지를 보내는 타이머 설정
            Timer timer = new Timer(SendMessageToServer, new Tuple<TcpClient, string>(client, message), 3000, 3000);

            // 연결 종료
            Console.WriteLine("연결 종료하려면 아무 키나 누르세요...");
            Console.ReadKey();
            client.Close();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"오류: {ex.Message}");
        }
    }

    private static void SendMessageToServer(object state)
    {
        try
        {
            var tuple = (Tuple<TcpClient, string>)state;
            TcpClient client = tuple.Item1;
            string message = tuple.Item2;
            NetworkStream stream = client.GetStream();

            // 3초마다 최초 메시지를 서버로 다시 보내기
            Console.WriteLine($"서버에 메시지를 다시 보냅니다: {message}");
            byte[] data = Encoding.UTF8.GetBytes(message);
            stream.Write(data, 0, data.Length);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"오류: {ex.Message}");
        }
    }
}
