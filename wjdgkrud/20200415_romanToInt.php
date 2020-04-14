<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-15
 * Time: 오전 1:04
 */

class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s) { // $s : "III"
        $symbol = [
            'I' => 1,
            'V' => 5,
            'X' => 10,
            'L' => 50,
            'C' => 100,
            'D' => 500,
            'M' => 1000,
        ];
        $result= 0;

        if (empty($s)) {
            return $result;
        }

        $s_arr = str_split($s);

        for($i=0; $i<count($s_arr); $i++) {
            $current = $s_arr[$i];
            $next = $s_arr[$i+1];

            if ($current == 'I' && ($next == 'V' || $next == 'X')) {
                $result += ($symbol[$next]-1);
                $i++;
            } elseif($current == 'X' && ($next == 'L' || $next == 'C')) {
                $result += ($symbol[$next] -10);
                $i++;
            } elseif($current == 'C' && ($next == 'D' || $next == 'M')) {
                $result += ($symbol[$next] -100);
                $i++;
            } else {
                $result += $symbol[$current];
            }
        }


        return $result; // $result : 3

    }
}