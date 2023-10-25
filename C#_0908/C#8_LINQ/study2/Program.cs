using System;
using System.Collections.Generic;
using System.Linq;

namespace study1
{
    class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }

        public override string ToString()
        {
            return string.Format("{0}:{1} in {2}", Name, Age, Address);
        }
    }

    class MainLanguage
    {
        public string Name { get; set; }
        public string Language { get; set; }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            List<Person> people = new List<Person>
            {
                new Person { Name = "Tom1", Age = 61, Address = "Korean1" },
                new Person { Name = "Tom2", Age = 62, Address = "Korean2" },
                new Person { Name = "Tom3", Age = 63, Address = "Korean3" },
                new Person { Name = "Tom4", Age = 64, Address = "Korean4" },
                new Person { Name = "Tom5", Age = 65, Address = "Korean5" },
                new Person { Name = "Tom6", Age = 66, Address = "Korean6" }
            };

            List<MainLanguage> languages = new List<MainLanguage>
            {
                new MainLanguage { Name = "Tom1", Language="C#" },
                new MainLanguage { Name = "Tom2", Language="C++" },
                new MainLanguage { Name = "Tom3", Language="Java" },
                new MainLanguage { Name = "Tom4", Language="Python" },
                new MainLanguage { Name = "Tom5", Language="JavaScript" }
            };

            // join: 언어와 이름을 조인
            var joinedData = from person in people
                             join language in languages
                             // people과 languages를 조인
                             on person.Name equals language.Name
                             // 조인의 조건
                             select new { Name = person.Name, Age = person.Age, Language = language.Language };
                             // 조인된 새로운 결과를 새로운 익명객체 형식으로 변환하고 선택

            Console.WriteLine("Joined data (Name, Age, Language):");
            foreach (var item in joinedData)
            {
                Console.WriteLine($"{item.Name}, {item.Age}, {item.Language}");
            }
        }
    }
}
