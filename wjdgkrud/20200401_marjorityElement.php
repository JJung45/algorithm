<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-04-01
 * Time: 오전 12:58
 */

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function majorityElement($nums) {
        $count = count($nums);
        $more = $count/2;
        $arr = [];

        for($i=0; $i<$count; $i++) {

            if (!in_array($nums[$i],$arr)) {
                array_push($arr, $nums[$i]);
            }

            $idx = array_search($nums[$i],$arr);
            $arr[$idx]++;

            if(($arr[$idx]-$nums[$i]) > $more) {
                return $nums[$i];
            }
        }
    }
}