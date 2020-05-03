<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-05-03
 * Time: 오후 2:46
 */

class Solution {

    /**
     * @param String $S
     * @param String $T
     * @return Boolean
     */
    function backspaceCompare($S, $T) {

        return $this->makeArray($S) == $this->makeArray($T);

    }

    function makeArray($str) {
        $S_string = [];

        foreach(str_split($str) as $s) {

            if ($s == "#") {
                array_pop($S_string);
            } else {
                array_push($S_string,$s);
            }
        }

        return implode("",$S_string);
    }
}