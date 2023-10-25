using System;
using System.Text;

class Program
{
    static void Main()
    {
        // 입력 및 출력 인코딩을 UTF-8로 변경
        Console.InputEncoding = Encoding.UTF8;
        Console.OutputEncoding = Encoding.UTF8;

        Console.Write("문자열을 입력하세요: ");
        string input = Console.ReadLine();

        Console.WriteLine("입력한 문자열: " + input);
    }
}