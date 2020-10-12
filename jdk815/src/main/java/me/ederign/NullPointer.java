package me.ederign;

public class NullPointer {
    static class B{
        int getResult(){
            return -1;
        }
    }

    static class A{

        B getB(){
            return null;
        };
    }

    public static void main(String[] args) {
        var a = new A();

        a.getB().getResult();

    }
}
