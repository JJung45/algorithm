<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-09
 * Time: 오후 10:23
 */

class Solution {

    /**
     * @param String $ransomNote
     * @param String $magazine
     * @return Boolean
     */
    function canConstruct($ransomNote, $magazine) { // canConstruct("a", "b") -> false

        if ($ransomNote == "") return true;

        $ransom_arr = str_split($ransomNote);
        $magazine_arr = str_split($magazine);

        $r = array_count_values($ransom_arr);
        $m = array_count_values($magazine_arr);

        foreach ($r as $r_key => $r_val) {
            if ($r_val <= $m[$r_key]) {
                continue;
            }

            return false;
        }

        return true;

    }
}