<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-07
 * Time: 오전 1:03
 */

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
class Solution {

    function deleteDuplicates($head) {

        $current = $head;
        while($current != null && $current->next != null) {
            if($current->next->val == $current->val) {
                $current->next = $current->next->next;
            } else {
                $current = $current->next;
            }
        }

        return $head;
    }
}