
<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-16
 * Time: 오후 11:55
 */

class Solution {

    /**
     * @param String $word
     * @return Boolean
     */
    function detectCapitalUse($word) { // USA

        $result = false;

        $words = str_split($word);

        if (ctype_upper($words[0])) {
            foreach($words as $key => $letter) {

                $result = true;

                if ($key != 0 && ctype_upper($letter)) {
                    $result = false;
                    break;
                }
            }
        }

        if (ctype_upper($word) || ctype_lower($word)) {
            $result = true;
        }

        return $result; // true
    }
}