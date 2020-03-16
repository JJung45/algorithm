<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-16
 * Time: 오후 10:51
 */

class Solution {

    /**
     * @param Integer $numRows
     * @return Integer[][]
     */
    function generate($numRows) {

        $result = array();
        for($i=0; $i<$numRows; $i++) {
            for($k=0; $k<=$i; $k++) {
                if ($i ==0 && $k ==0) {
                    $result[$i][$k] = 1;
                } else {
                    $result[$i][$k] = $result[$i-1][$k-1] + $result[$i-1][$k];
                }
            }
        }

        return $result;

    }
}

/**
 *  Input: 5
    Output:
    [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1]
    ]
 */