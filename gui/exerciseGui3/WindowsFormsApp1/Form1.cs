using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {

        private int currentImageIndex = 2;

        public Form1()
        {
            InitializeComponent();
            pictureBox1.Image = imageList1.Images[currentImageIndex];

        }

        private void button1_Click(object sender, EventArgs e)
        {
            // 다음 이미지로 이동하고 순환되도록 처리합니다.
            //currentImageIndex = (currentImageIndex + 1) % imageList1.Images.Count;
            //pictureBox1.Image = imageList1.Images[currentImageIndex];


            Form2 form2 = new Form2(); // Form2 인스턴스 생성
            form2.Location = this.Location;
            this.Hide(); // 현재 Form1을 숨깁니다.
            form2.ShowDialog(); // Form2를 모달로 엽니다.
            this.Close(); // Form2가 닫힌 후에 Form1을 종료합니다.
        }

    }
}
