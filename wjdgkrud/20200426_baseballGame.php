<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrd
 * Date: 2020-04-26
 * Time: 오후 5:52
 */

class Solution {

    /**
     * @param String[] $ops
     * @return Integer
     */
    function calPoints($ops) { // ["5","2","C","D","+"]

        $points = [];
        foreach($ops as $op){
            $max = count($points);
            switch($op){
                case '+':
                    $p = 0;
                    if(isset($points[$max-1])){
                        $p += $points[$max-1];
                    }
                    if(isset($points[$max-2])){
                        $p += $points[$max-2];
                    }
                    $points[] = $p;
                    break;
                case 'D':
                    $points[] = isset($points[$max-1])?$points[$max-1]*2:0;
                    break;
                case 'C':
                    array_pop($points);
                    break;
                default:
                    $points[] = (int)$op;
                    break;
            }
        }
        return array_sum($points); // 30
    }
}