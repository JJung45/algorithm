<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-11
 * Time: 오전 12:31
 */

class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLastWord($s) {
        $s_arr = explode(" ", $s);

        $i = count($s_arr)-1;
        while($i >= 0) {

            if (!empty($s_arr[$i])) {
                return strlen($s_arr[$i]);
            }

            $i--;

        }

        return 0;
    }
}

/**
 * Ex)
 * Input: "Hello World"
 * Output: 5
 */