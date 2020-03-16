<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-15
 * Time: 오후 5:51
 */

class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function minPathSum($grid) {

        if(count($grid) == 0) return 0;

        $rows = count($grid);
        $cols = count($grid[0]);
        for($i = 0; $i < $rows; $i++){
            for($j = 0; $j < $cols; $j++){
                if($i == 0 && $j == 0) $grid[$i][$j] = $grid[$i][$j];
                else if($i == 0 && $j != 0){
                    $grid[$i][$j] += $grid[$i][$j - 1];
                }else if($i != 0 && $j == 0){
                    $grid[$i][$j] += $grid[$i - 1][$j];
                }else{
                    $grid[$i][$j] += min($grid[$i - 1][$j], $grid[$i][$j - 1]);
                }
            }
        }

        return $grid[$rows - 1][$cols - 1];

    }

}

/**
    Input:
        [
        [1,3,1],
        [1,5,1],
        [4,2,1]
        ]
    Output: 7
 */