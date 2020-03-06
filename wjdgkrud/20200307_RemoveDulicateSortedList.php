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

    /**
     * @param ListNode $head
     * @return ListNode
     */
    function deleteDuplicates($head) {

        if ($head->val ==  $head->next) {
            $head->next = $head->next->next;
        }

        return $head;
    }
}