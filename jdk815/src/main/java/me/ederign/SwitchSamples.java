//package me.ederign;
//
//import me.ederign.Days.*;
//
//import java.util.List;
//import java.util.Map;
//
//public class SwitchSamples {
//
//    public static void main(String[] args) {
//
//        var day = Days.TUESDAY;
//        {
//            int numLetters = -1;
//
//            switch (day) {
//                case MONDAY:
//                case FRIDAY:
//                case SUNDAY:
//                    numLetters = 6;
//                    break;
//                case TUESDAY:
//                    numLetters = 7;
//                    break;
//                case THURSDAY:
//                case SATURDAY:
//                    numLetters = 8;
//                    break;
//                case WEDNESDAY:
//                    numLetters = 9;
//                    break;
//            }
//            System.out.println(numLetters);
//
//            day = Days.WEDNESDAY;
//            int numberOfDays = switch (day) {
//                case FRIDAY, SUNDAY -> 6;
//                case TUESDAY -> 7;
//                case THURSDAY, SATURDAY -> 8;
//                default -> {
//                    if (day == Days.WEDNESDAY) {
//                        yield 9;
//                    }
//                    else{
//                        yield -1;
//                    }
//                }
//            };
//            System.out.println(numberOfDays);
//        }
//
//        {
//            int numLetters = switch (day) {
//                case MONDAY, FRIDAY, SUNDAY -> numLetters = 6;
//                case TUESDAY -> numLetters = 7;
//                case THURSDAY, SATURDAY -> numLetters = 8;
//                case WEDNESDAY -> numLetters = 9;
//            };
//
//            System.out.println("fsdlkfjsd " + numLetters);
//        }
//
//        StudentsRepository studentsRepository = null;
//
//        Map<Long, Student> idToStudentMap = studentsRepository.getStudentId();
//        List<Student> enrolledStudents = studentsRepository.getEnrolledStudents();
//        Address addressOfBestStudent = studentsRepository.getAddress(bestStudent);
//
////        var idToStudentMap = studentsRepository.getStudentId();
////        var enrolledStudents = studentsRepository.getEnrolledStudents();
////        var addressOfTopStudent =  studentsRepository.getAddress(bestStudent);
//
//
//    }
//}
//
//enum Days {
//    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY;
//}