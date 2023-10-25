using System;
using System.Net;
using System.Net.Sockets;
using System.Text;

class TCPServer
{
    static void Main()
    {
        Console.WriteLine("서버입니다");
        TcpListener listener = null;
        try
        {
            // 서버 소켓 생성 및 바인딩
            IPAddress ipAddress = IPAddress.Parse("192.168.0.140"); // 서버 IP 주소
            int port = 8080; // 포트 번호
            listener = new TcpListener(ipAddress, port);
            listener.Start();

            Console.WriteLine("서버가 시작되었습니다. 클라이언트 연결 대기 중...");

            while (true)
            {
                // 클라이언트 연결 대기
                TcpClient client = listener.AcceptTcpClient();
                Console.WriteLine("클라이언트가 연결되었습니다.");

                // 클라이언트와 통신할 스트림 생성
                NetworkStream stream = client.GetStream();

                byte[] buffer = new byte[1024];
                int bytesRead;

                // 클라이언트로부터 메시지 읽기
                while ((bytesRead = stream.Read(buffer, 0, buffer.Length)) > 0)
                {
                    string data = Encoding.UTF8.GetString(buffer, 0, bytesRead);
                    Console.WriteLine($"클라이언트로부터 받은 메시지: {data}");

                    // 클라이언트에게 응답 보내기
                    byte[] response = Encoding.UTF8.GetBytes("서버에서 응답: " + data);
                    stream.Write(response, 0, response.Length);
                }

                // 클라이언트와 연결 종료
                client.Close();
                Console.WriteLine("클라이언트와 연결이 종료되었습니다.");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"오류: {ex.Message}");
        }
        finally
        {
            listener.Stop();
        }
    }
}
