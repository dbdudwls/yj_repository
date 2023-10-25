using System;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;

class Program
{
    static void Main(string[] args)
    {
        string serverIpAddress = "192.168.0.140";
        int serverPort = 5500;
        string requestUri = "/test2.html";
        string postData = "HELLO"; // 전송할 데이터

        try
        {
            TcpClient client = new TcpClient(serverIpAddress, serverPort);
            NetworkStream stream = client.GetStream();

            // HTTP POST 요청 메시지 생성
            string httpRequest = $"POST {requestUri} HTTP/1.1\r\nHost: {serverIpAddress}:{serverPort}\r\n";
            httpRequest += $"Content-Type: application/x-www-form-urlencoded\r\n";
            httpRequest += $"Content-Length: {postData.Length}\r\n\r\n";
            httpRequest += postData;

            byte[] requestData = Encoding.UTF8.GetBytes(httpRequest);

            // 요청 메시지를 서버로 전송
            stream.Write(requestData, 0, requestData.Length);

            // 서버로부터 응답 받기
            StreamReader reader = new StreamReader(stream);
            string response = reader.ReadToEnd();

            // 응답 출력
            Console.WriteLine(response);

            // 리소스 해제
            reader.Close();
            stream.Close();
            client.Close();
        }
        catch (Exception ex)
        {
            Console.WriteLine("에러 발생: " + ex.Message);
        }
    }
}
