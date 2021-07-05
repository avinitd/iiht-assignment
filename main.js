class Addition {
  public int java(int sum) {
    return sum;
  }
}

class Subtraction{
  public int java(int diff) {
    return diff;
  }
}

class Main {
  public static void main(String args[]) {
    
    Addition Add = new Addition();
    Add.java(x+y);

    Subtraction Difference = new Subtraction();
    Difference.java(x-y);
  }
}