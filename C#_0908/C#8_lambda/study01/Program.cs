using System;

class Program
{
    static void Main()
    {
        // 이벤트를 가진 클래스를 생성합니다.
        Button button = new Button();

        // 람다식으로 이벤트 처리기를 추가합니다.
        button.Click += (sender, e) =>
        {
            Console.WriteLine("버튼이 클릭되었습니다.");
        };

        // 버튼 클릭 시 이벤트 발생
        button.OnClick();
    }
}

class Button
{
    // EventHandler 델리게이트를 사용한 클릭 이벤트 정의
    public event EventHandler Click;

    // 버튼 클릭 시 이벤트를 발생시키는 메서드
    public void OnClick()
    {
        Console.WriteLine("버튼을 클릭했습니다.");
        // 이벤트가 null이 아니면 호출
        Click?.Invoke(this, EventArgs.Empty);
    }
}
