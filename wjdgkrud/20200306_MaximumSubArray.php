<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-06
 * Time: 오전 12:41
 */
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxSubArray($nums) {

        $sum = 0;
        $result = $nums[0];
        foreach ($nums as $key => $num) {
            $sum = $sum+$num;

            $result = max($sum, $result);

            if ($sum <0) {
                $sum = 0;
            }
        }

        return $result;

    }
}