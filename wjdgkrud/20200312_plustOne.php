<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-12
 * Time: 오후 10:37
 */

class Solution {

    /**
     * @param Integer[] $digits
     * @return Integer[]
     */
    function plusOne($digits) {

        $count = count($digits);

        for($i=$count-1; $i>=0; $i--) {

            if($digits[$i] < 9) {

                $digits[$i]++;
                return $digits;

            }

            $digits[$i] = 0;

        }

        if ($digits[0] == 0) {
            array_unshift($digits, 1);
        }

        return $digits;


    }
}

/**
 * Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
 */