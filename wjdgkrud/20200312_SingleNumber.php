<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-12
 * Time: 오전 12:55
 */

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function singleNumber($nums) {
        sort($nums);

        foreach($nums as $key=>$num) {
            if ($nums[$key] === $nums[$key-1] || $nums[$key] === $nums[$key+1]) {

                continue;
            }
            return $num;
        }
    }
}

/**
 * Input: [2,2,1]
 * Output: 1
 */