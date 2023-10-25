using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace exercise2
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        public class Note
        {
            public string Title { get; set; }
            public string Content { get; set; }

            public override string ToString()
            {
                return Title;
            }
        }

        // notes 리스트는 현재 쓸모없음.
        private List<Note> notes = new List<Note>();

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            // 제목내용을 변수로 가져오기
            string title = writeTitle.Text;
            string content = writeContent.Text;

            if (title != "")
            {
                // 데이터 클래스의 인스턴스 생성
                Note note = new Note { Title = title, Content = content };

                notes.Add(note);

                // 제목을 리스트 및 콤보 박스에 추가
                comboBox.Items.Add(note);
                listBox.Items.Add(note);

                // 텍스트 박스 내용 지우기
                writeTitle.Clear();
                writeContent.Clear();
            }
        }

        private void listBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (listBox.SelectedItem != null)
            {
                Note selectedNote = (Note)listBox.SelectedItem;
                string showTitle = selectedNote.Title;
                string showContent = selectedNote.Content;
                showText.Text = $"제목 : {showTitle} \r\n내용 : {showContent}";
            }
        }

        private void comboBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (comboBox.SelectedItem != null)
            {
                Note selectedNote = (Note)comboBox.SelectedItem;
                string showTitle = selectedNote.Title;
                string showContent = selectedNote.Content;
                showText.Text = $"제목 : {showTitle} \r\n내용 : {showContent}";
            }
        }
    }
}
