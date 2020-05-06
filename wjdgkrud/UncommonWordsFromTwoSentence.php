<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-05-07
 * Time: 오전 12:12
 */

class Solution {

    /**
     * @param String $A
     * @param String $B
     * @return String[]
     */
    function uncommonFromSentences($A, $B) { // "this apple is sweet","this apple is sour"
        $d = array_merge(array_diff(explode(' ', $A), explode(' ', $B)),array_diff(explode(' ', $B), explode(' ', $A)));
        return array_keys(array_filter(array_count_values($d),function($val){
            return $val==1; // "sweet","sour"
        }));
    }
}