using System;
using System.Text;

namespace lib2
{
    public class MathUtilities
    {


        // 두 수를 더하는 메서드
        public static int Add(int a, int b)
        {
            return a + b;
        }

        // 두 수를 곱하는 메서드
        public static int Multiply(int a, int b)
        {
            return a * b;
        }
    }


    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }

        // 기본 생성자
        public Person()
        {
        }

        // 이름과 나이를 받는 생성자
        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }

        // Person 객체를 문자열로 표현하는 메서드
        public override string ToString()
        {
            return $"Name: {Name}, Age: {Age}";
        }
    }
}