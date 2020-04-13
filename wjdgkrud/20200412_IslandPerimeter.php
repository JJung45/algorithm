<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-12
 * Time: 오후 10:27
 */

class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function islandPerimeter($grid) {
        /**
         * [[0,1,0,0],
            [1,1,1,0],
            [0,1,0,0],
            [1,1,0,0]]
         **
         */

        if (count($grid) == 0 || count($grid[0]) == 0) return 0;

        $length = 0;

        for ($i=0; $i<count($grid); $i++) {
            for ($j=0; $j<count($grid[$i]); $j++) {
                if ($grid[$i][$j] == 1) {
                    $length = $length + 4;

                    if ($i >0 && $grid[$i-1][$j] == 1) {
                        $length = $length - 2;
                    }

                    if ($j >0 && $grid[$i][$j-1] == 1) {
                        $length = $length - 2;
                    }
                }
            }
        }

        return $length; // 16
    }
}