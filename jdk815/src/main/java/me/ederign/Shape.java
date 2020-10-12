package me.ederign;

import java.awt.*;

sealed interface Shape
        permits Circle, Rectangle {
}

record Circle(Point center, int radius) implements Shape { }

record Rectangle(Point lowerLeft, Point upperRight) implements Shape { }