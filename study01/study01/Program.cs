using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using study01;

namespace study01
{
    class Book
    {
        private string title;

        public string Title
        {
            get { return title; }
            set { title = value; }
        }

        public int Num(int x)
        {
            return x*x;
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            Book book = new Book();

            book.Title = "Sample Title"; // Title 값을 지정
            int result = book.Num(3);

            Console.WriteLine("Book Title: " + book.Title + result);
        }
    }
}
