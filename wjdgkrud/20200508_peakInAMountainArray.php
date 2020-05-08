<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-05-08
 * Time: 오후 11:44
 */

class Solution {

    /**
     * @param Integer[] $A
     * @return Integer
     */
    function peakIndexInMountainArray($A) { // [0,1,0]

        $max = max($A);
        $result = array_keys($A, $max);
        return max($result); // 1
    }
}