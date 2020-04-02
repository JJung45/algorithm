<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-02
 * Time: 오후 7:17
 */

class Solution {

    /**
     * @param Integer $num
     * @return Integer
     */
    function addDigits($num) { // Input = 38
        $nums = str_split($num);

        if (count($nums) == 1) {
            return $nums[0];
        }

        forEach($nums as $val) {
            $result += $val;
        }

        return self::addDigits($result);// Output = 2
    }
}