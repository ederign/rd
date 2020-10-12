package me.ederign;

import java.util.ArrayList;
import java.util.List;

public class ShapeClient {

    public static void main(String[] args) {


        var sql = "SELECT COUNT(*) FROM table; -- Use this to determine rand_low and rand_high\n" +
                "\n" +
                "  SELECT *\n" +
                "    FROM table\n" +
                "   WHERE frozen_rand BETWEEN %(rand_low)s AND %(rand_high)s\n" +
                "ORDER BY RAND() LIMIT 1000";


        sql = """
                 SELECT COUNT(*) FROM table; -- Use this to determine rand_low and rand_high

                   SELECT *
                     FROM table
                    WHERE frozen_rand BETWEEN %(rand_low)s AND %(rand_high)s
                 ORDER BY RAND() LIMIT 1000
                """;

        System.out.println(sql);


//        var c = new Circle();
//        var r = new Rectangle();
//        var s = new Square();
//
//        System.out.println(getCenter2(c));
//        System.out.println(getCenter2(r));
//        System.out.println(getCenter2(s));

        List<Student> students = new ArrayList<>();

        var foo = 1;

        var bestStudent = new Student("Dora");

        for (var student : students) { /* … */ }

        for (var i = 0; i < 10; i++) { /* … */ }

    }

//    static int getCenter3(Shape shape) {
//        return switch (shape) {
//            case Circle c ->  c.center();
//            case Rectangle r -> ... r.length();
//            case Square s    -> ... s.side();
//        };
//    }

    static int getCenterJ15(Shape shape) {
        if (shape instanceof Rectangle r) {
            return r.upperRight().x;
        } else if (shape instanceof  Circle c) {
            return c.radius();
        }
        return -1;
    }

    static int getCenter(Shape shape) {
        if (shape instanceof Rectangle) {
            return ((Rectangle) shape).upperRight().x;
        } else if (shape instanceof Circle) {
            return ((Circle) shape).radius();
        }
        return -1;
    }


}
