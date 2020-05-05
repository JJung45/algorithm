<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-28
 * Time: 오후 8:50
 */

class Solution {

    /**
     * @param Integer[][] $A
     * @return Integer[][]
     */
    function flipAndInvertImage($A) { // [[1,1,0],[1,0,1],[0,0,0]]
        $flipped = [];
        foreach($A as $row){
            $flipped[] = array_reverse(str_split(str_replace(['0','1','2'],['2','0','1'],implode('',$row))));
        }
        return $flipped; // [[1,0,0],[0,1,0],[1,1,1]]
    }
}