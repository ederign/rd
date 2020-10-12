package me.ederign;


import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

public record Pessoa(String nome, @Max(1) int quantidade, double preco) {


    public Pessoa(String nome){
        this(nome, 1, 1);
    }

    public void count(){
        System.out.println(this);
        System.out.println("fslkjfds");
    }
}
