using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace exerciseGui
{
    public partial class Form1 : Form
    {
        private List<ItemData> itemList = new List<ItemData>();

        public Form1()
        {
            InitializeComponent();
        }

        public class ItemData
        {
            public string Title { get; set; }
            public string Content { get; set; }

            public override string ToString()
            {
                return Title;
            }
        }

        private void AddItemToListAndComboBox(string title, string content)
        {
            ItemData itemData = new ItemData
            {
                Title = title,
                Content = content
            };

            itemList.Add(itemData);

            listBox1.Items.Add(itemData);
            comboBox1.Items.Add(itemData);
        }

        private void ClearTextBoxes()
        {
            textBox1.Clear();
            textBox2.Clear();
        }

        private void DisplayItemInfo(ItemData selectedItem)
        {
            textBox3.Clear();
            textBox3.Text = $"Title: {selectedItem.Title}\r\nContent: {selectedItem.Content}";
        }

        private void btnA_Click(object sender, EventArgs e)
        {
            string inputTitle = textBox1.Text;
            string inputContent = textBox2.Text;

            if (!string.IsNullOrEmpty(inputTitle))
            {
                AddItemToListAndComboBox(inputTitle, inputContent);
                ClearTextBoxes();
            }
            else
            {
                MessageBox.Show("텍스트를 입력하세요.", "알림", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
        }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listBox1.SelectedIndex != -1)
            {
                ItemData selectedItem = (ItemData)listBox1.SelectedItem;
                DisplayItemInfo(selectedItem);
            }
        }

        private void comboBox1_SelectedIndexChanged_1(object sender, EventArgs e)
        {
            if (comboBox1.SelectedIndex != -1)
            {
                ItemData selectedItem = (ItemData)comboBox1.SelectedItem;
                DisplayItemInfo(selectedItem);
            }
        }
    }
}
