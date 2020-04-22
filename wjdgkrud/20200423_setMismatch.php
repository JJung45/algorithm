<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-23
 * Time: 오전 12:31
 */

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findErrorNums($nums) { //  [1,2,2,4]

        $count = array_fill(0, count($nums)+1, 0);
        foreach($nums as $num) {
            $count[$num] += 1;
        }

        for($i=1; $i<count($nums)+1; $i++) {

            if ($count[$i] == 0) {
                $nope = $i;
            }

            if ($count[$i] == 2) {
                $more = $i;
            }
        }

        $result = [$more,$nope];

        return $result; // [2,3]
    }
}