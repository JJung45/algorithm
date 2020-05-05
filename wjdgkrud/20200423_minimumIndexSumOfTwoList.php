<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-23
 * Time: 오후 9:03
 */

class Solution {

    /**
     * @param String[] $list1
     * @param String[] $list2
     * @return String[]
     */
    function findRestaurant($list1, $list2) {
        /**
         * ["Shogun","Tapioca Express","Burger King","KFC"]
         * ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
         */

        $list1 = array_flip($list1);
        $list2 = array_flip($list2);
        $min = 99999999999;
        $intersect = [];
        foreach($list1 as $name => $v){
            if(!isset($list2[$name])){
                continue;
            }
            if($v+$list2[$name] < $min){
                $min = $v + $list2[$name];
                $intersect = [$name];
            }
            else if($v+$list2[$name] == $min){
                $intersect[] = $name;
            }
        }
        return $intersect; // ["Shogun"]
    }
}