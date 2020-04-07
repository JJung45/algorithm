<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-06
 * Time: 오후 10:54
 */

class Solution {

    /**
     * @param Integer $n
     * @return String[]
     */
    function fizzBuzz($n) {

        $arr = [];
        $input = "1";

        for($i =1; $i<$n+1; $i++) {

            if($i%3 == 0 && $i%5 == 0) {
                $input = "FizzBuzz";
            }elseif ($i%3 == 0) {
                $input ="Fizz";
            } elseif($i%5 == 0) {
                $input = "Buzz";
            } else {
                $input = strval($i);
            }

            $arr[$i+1] = $input;

        }

        return $arr;
    }
}/**
 * n = 15,

Return:
[
"1",
"2",
"Fizz",
"4",
"Buzz",
"Fizz",
"7",
"8",
"Fizz",
"Buzz",
"11",
"Fizz",
"13",
"14",
"FizzBuzz"
]
 */