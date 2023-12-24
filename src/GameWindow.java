import javax.swing.*;

public class GameWindow extends JFrame {

    public GameWindow(){ // конструктор
        setTitle("Змейка");
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        setSize(320, 345); // размер окна
        setLocation(400, 400); // где окно появиттся
        add(new GameField()); // добавили игровое поле
        setVisible(true);
    }

    public static void main(String[] args) {
        GameWindow gw = new GameWindow();
    }
}