<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-22
 * Time: 오후 7:27
 */

class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function containsDuplicate($nums) {

        foreach($nums as $key => $num) {
            $cur = $num;
            unset($nums[$key]);
            if (in_array($cur,$nums)) {
                return true;
            }
        }

        return false;

    }
}

/**
 * Input: [1,2,3,1]
 *  Output: true
 */