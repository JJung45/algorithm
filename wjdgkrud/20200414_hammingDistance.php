<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-14
 * Time: 오전 1:06
 */

class Solution {

    /**
     * @param Integer $x
     * @param Integer $y
     * @return Integer
     */
    function hammingDistance($x, $y) { // x = 1, y = 4

        $result = 0;

        while($x > 0 || $y > 0) {
            $result += ($x%2)^($y%2);

            $x >>= 1;
            $y >>= 1;
        }

        return $result; // 2
    }
}