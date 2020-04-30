<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-30
 * Time: 오후 11:57
 */

class Solution {

    /**
     * @param Integer[] $widths
     * @param String $S
     * @return Integer[]
     */
    function numberOfLines($widths, $S) {
        // $widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
        // $S ="abcdefghijklmnopqrstuvwxyz"

        $letters = range('a', 'z');
        $string = [];
        $pos= 0;
        $line = 1;

        for($i=0; $i<count($widths); $i++) {
            $string[$letters[$i]] = $widths[$i];
        }

        $s = str_split($S);
        for ($k=0; $k<count($s); $k++) {
            $pos += $string[$s[$k]];
            if ($pos > 100) {
                $line++;
                $pos = 0;
                $k--;
            }
        }

        return [$line,$pos]; // [3,60]
    }
}