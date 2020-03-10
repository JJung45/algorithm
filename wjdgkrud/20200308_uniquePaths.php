<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-08
 * Time: 오후 3:02
 */

class Solution {

    /**
     * @param Integer $m
     * @param Integer $n
     * @return Integer
     */
    function uniquePaths($m, $n) { // Input: m = 3, n = 2

        $map = array();
        for($i=0; $i<$m; $i++) {
            $map[$i] = array();
            for($k=0; $k<$n; $k++) {
                $map[$i][$k] = 0;
            }
        }

        for($i = 0; $i<count($map); $i++) {
            for($k=0; $k<count($map[$i]); $k++) {
                if ($i==0 || $k ==0) {
                    $map[$i][$k] = 1;
                } else {
                    $map[$i][$k] = $map[$i][$k-1] + $map[$i-1][$k];
                }
            }
        }

        return $map[$m-1][$n-1]; // Output: 3
    }
}