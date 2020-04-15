<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-15
 * Time: 오후 4:49
 */

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function arrayPairSum($nums) { // [1,4,3,2]
        sort($nums);

        $sum = 0;
        for($i = 0 ; $i < count($nums)-1; $i= $i+2){
            $sum = $sum+ min($nums[$i],$nums[$i+1]);
        }
        return $sum; // 4
    }
}