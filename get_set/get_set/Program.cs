using System;

namespace get_set
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Person 클래스를 사용하는 예
            Person person1 = new Person();
            person1.Name = "John Doe"; // Name 프로퍼티에 값을 설정
            Console.WriteLine(person1.Name); // Name 프로퍼티의 값을 출력

            // Person2 클래스를 사용하는 예
            Person2 person2 = new Person2();
            person2.Name2 = "Jane Smith"; // Name2 프로퍼티에 값을 설정
            Console.WriteLine(person2.Name2); // Name2 프로퍼티의 값을 출력
        }
    }

    class Person
        // 요새는 이렇게 안씀
    {
        private string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }
    }

    class Person2
        // 요새는 이렇게 씀
    {
        public string Name2 { get; set; }
    }
}
