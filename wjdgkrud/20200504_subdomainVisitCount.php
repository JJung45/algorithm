<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-05-04
 * Time: 오전 11:53
 */

class Solution {

    /**
     * @param String[] $cpdomains
     * @return String[]
     */
    function subdomainVisits($cpdomains) { // ["9001 discuss.leetcode.com"]

        $visits = [];

        foreach ($cpdomains as $domain) {

            $domains = explode(" ",$domain);
            $subdomains = explode(".",$domains[1]);
            $counts = count($subdomains);

            for($i=0; $i<$counts; $i++) {

                $string = implode('.',array_slice($subdomains, $i));

                if (!$visits[$string]) {
                    $visits[$string] = 0;
                }

                $visits[$string] += $domains[0];
            }

        }

        $result = [];
        foreach($visits as $domain => $count) {
            $result[] = $count." ".$domain;
        }

        return $result; // ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]

    }
}