<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-09
 * Time: 오후 10:31
 */

class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer $m
     * @param Integer[] $nums2
     * @param Integer $n
     * @return NULL
     */
    function merge(&$nums1, $m, $nums2, $n) {

        $nums1_arr = array_slice($nums1,0,$m);
        $nums2_arr = array_slice($nums2,0,$n);

        $nums1 = array_merge($nums1_arr, $nums2_arr);
        sort($nums1);

    }
}

/**
 * Input:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3

    Output: [1,2,2,3,5,6]
 */