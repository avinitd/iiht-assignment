class Addition {
  public int java(int a, int b) {

    return (2a+2b);
  }
}

class Subtraction{
  public int java(int a, int b) {

    return (2a-2b);
  }
}

class Main {
  public static void main(String args[]) {
    
    Addition Add = new Addition();
    int sum = Add.java(2, 4);

    Subtraction Difference = new Subtraction();
    int diff = Difference.java(7, 3);

    System.out.println("Sum: " + sum + "\nDifference: " + diff);
  }
}