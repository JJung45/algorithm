<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-28
 * Time: 오전 12:11
 */

class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function repeatedSubstringPattern($s) { // "abab"

        $len = strlen($s);

        if ($len <= 1) return false;

        $half_len = intval(floor($len/2));
        for($i = $half_len; $i > 0; $i--){
            if ($len % $i == 0){
                if (str_repeat(substr($s,0,$i),$len/$i) == $s){
                    return true;
                }
            }
        }
        return false;

    } //true
}