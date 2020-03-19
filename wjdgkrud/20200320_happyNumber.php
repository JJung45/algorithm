<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-20
 * Time: 오전 12:16
 */

class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function isHappy($n) {

        while(true) {

            $arr = !empty($arr) ? str_split($sum) : str_split($n);

            $sum = 0;
            foreach ($arr as $arr_val) {
                $sum += ($arr_val*$arr_val);
            }

            if ($sum == 4) {
                return false;
            }

            if ($sum == 1) {
                return true;
            }

        }

    }
}

/**
 * Input: 19
    Output: true
    Explanation:
    12 + 92 = 82
    82 + 22 = 68
    62 + 82 = 100
    12 + 02 + 02 = 1
 */