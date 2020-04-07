<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-07
 * Time: 오후 10:24
 */

class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function firstUniqChar($s) { // s = "leetcode"

        if (empty($s)) {
            return -1;
        }

        $s_arr = str_split($s);

        foreach($s_arr as $key => $val) {

            $target = $val;
            unset($s_arr[$key]);

            if (in_array($target, $s_arr)) {
                $s_arr[$key] = $target;
                continue;
            }

            return $key;
        }

        return -1; // return 0.


    }
}