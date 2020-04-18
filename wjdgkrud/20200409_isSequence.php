<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-09
 * Time: 오전 12:02
 */

class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Boolean
     */
    function isSubsequence($s, $t) { // $s = "abc", $t = "ahbgdc"

        if($s == "") return true;

        $s = str_split($s);
        $t = str_split($t);

        $i = 0;
        $j = 0;
        while($j < count($t)){

            if($s[$i] == $t[$j]){
                $i++;

                if($i == count($s)) return true;
            }
            $j++;
        }

        return false;
    }

    //true
}