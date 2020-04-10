<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-10
 * Time: 오후 7:46
 */

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findDisappearedNumbers($nums) { // Input: [4,3,2,7,8,2,3,1]

        if (empty($nums)) return [];

        $arr = range(1,count($nums));

        return array_diff($arr, $nums);// Output: [5,6]

    }
}