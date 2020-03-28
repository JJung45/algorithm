<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-28
 * Time: 오후 9:45
 */

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {

        $count = count($nums)-1;
        while($count != 0) {

            $findNumber = $target - $nums[$count];

            unset($nums[$count]);
            if (in_array($findNumber, $nums)) {
                $count2 = array_search($findNumber, $nums);
                return [$count2,$count];
            }

            $count--;
        }

    }
}

/**
 * Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
 *
 */