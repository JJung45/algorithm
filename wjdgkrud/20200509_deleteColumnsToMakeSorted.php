<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-05-09
 * Time: 오후 2:32
 */

class Solution {

    /**
     * @param String[] $A
     * @return Integer
     */
    function minDeletionSize($A) { // ["a","b"]
        $ans = 0;
        for ($i = 0; $i < count($A[0]); $i ++) {
            for ($j = 0; $j < count($A)-1; $j ++) {
                if ($A[$j][$i] < $A[$j][$i+1]) {
                    $ans ++;
                    break;
                }
            }
        }
        return $ans; //0
    }
}