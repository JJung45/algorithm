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

        $compare_list= [];
        $list = [];
        if (count($list1) >= count($list2)) {
            $compare_list = $list1;
            $list = $list2;
        } else {
            $compare_list = $list2;
            $list = $list1;
        }

        $result = count($compare_list);
        $result_val = [];
        foreach($compare_list as $key => $item) {
            if (in_array($item, $list)) {
                $temp = $key + array_search($item,$list);
                if ($result > $temp) {
                    $result = $temp;
                    $result_val[] = $item;
                }
            }
        }

        return $result_val;

    }
}