using System;

namespace C_7_generics
{
    internal class Program
    {
        private static void WriteLog<T>(T item)
        // 제네릭 메서드 : 제네릭은 메서드에도 직접사용가능
        {
            string output = string.Format("{0}:{1}", DateTime.Now, item);
            Console.WriteLine(output);
        }

        static void Main(string[] args)
        {
            // 다양한 데이터 형식을 사용하여 제네릭 메서드 호출
            Program.WriteLog(true);
            Program.WriteLog(0x15);
            Program.WriteLog(3.141592f);
            Program.WriteLog("test");

            Console.WriteLine();

            // 제네릭 클래스를 사용하여 다양한 데이터 형식 출력
            GenericLogger<int> intLogger = new GenericLogger<int>();
            intLogger.Log(42);

            GenericLogger<string> stringLogger = new GenericLogger<string>();
            stringLogger.Log("Hello, world!");

            GenericLogger<double> doubleLogger = new GenericLogger<double>();
            doubleLogger.Log(3.14);

            GenericLogger<bool> boolLogger = new GenericLogger<bool>();
            boolLogger.Log(true);
        }
    }

    internal class GenericLogger<T>
        //제네릭 클래스
    {
        public void Log(T item)
        {
            string output = string.Format("{0}:{1}", DateTime.Now, item);
            Console.WriteLine(output);
        }
    }
}
