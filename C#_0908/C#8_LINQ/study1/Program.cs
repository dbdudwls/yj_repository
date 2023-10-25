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
                new MainLanguage { Name = "Ansi1", Language="C#" },
                new MainLanguage { Name = "Ansi2", Language="C##" },
                new MainLanguage { Name = "Ansi3", Language="C####" },
                new MainLanguage { Name = "Ansi4", Language="C#####" },
                new MainLanguage { Name = "Ansi5", Language="C######" }
            };

            // 1. where: 나이가 63 이상인 사람들 선택
            var over63 = from person in people
                         where person.Age >= 63
                         select person;

            Console.WriteLine("People over 63 years old:");
            foreach (var person in over63)
            {
                Console.WriteLine(person);
            }

            // 2. orderby: 나이를 오름차순으로 정렬
            var orderedByName = from person in people
                                orderby person.Age
                                select person;

            Console.WriteLine("\nPeople ordered by age:");
            foreach (var person in orderedByName)
            {
                Console.WriteLine(person);
            }

            // 3. groupby: 주소를 기준으로 그룹화
            var groupedByAddress = from person in people
                                   group person by person.Address;

            Console.WriteLine("\nPeople grouped by address:");
            foreach (var group in groupedByAddress)
            {
                Console.WriteLine($"Address: {group.Key}");
                foreach (var person in group)
                {
                    Console.WriteLine(person);
                }
            }
        }
    }
}
