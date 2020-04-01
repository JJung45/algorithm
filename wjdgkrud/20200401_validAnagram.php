<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-04-01
 * Time: 오후 8:16
 */

class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Boolean
     */
    function isAnagram($s, $t) {

        $s_arr = str_split($s);
        $t_arr = str_split($t);

        if (count($s_arr) != count($t_arr)) {
            return false;
        }

        $s_result = array_count_values($s_arr);
        $t_result = array_count_values($t_arr);

        foreach($t_result as $key => $val) {

            if ($val == $s_result[$key]) {
                continue;
            }

            return false;

        }

        return true;
    }
}

/**
 * Input: s = "rat", t = "car"
Output: false
 */