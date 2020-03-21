<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-22
 * Time: 오전 12:54
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
     * @return Int
     */
    function reverseList($head) {

        $cur = $head;

        $next = $head;
        $pre = null;

        while (!is_null($cur)) {
            $next = $cur->next;
            $cur->next = $pre;
            $pre = $cur;
            $cur = $next;
        }

        return $pre;

    }
}

/**
 * Input: 1->2->3->4->5->NULL
   Output: 5->4->3->2->1->NULL
 */