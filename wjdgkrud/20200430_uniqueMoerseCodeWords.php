<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-30
 * Time: 오전 1:30
 */

class Solution {

    /**
     * @param String[] $words
     * @return Integer
     */
    function uniqueMorseRepresentations($words) { // ["gin", "zen", "gig", "msg"]
        $morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
        $replaces = [];

        foreach($words as $word){

            $chars = str_split($word);
            $string = '';

            foreach($chars as $char){
                $string .= $morse[ord($char)-ord('a')];
            }

            $replaces[] = $string;
        }
        return count(array_unique($replaces)); //2
    }
}