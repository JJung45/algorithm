<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-21
 * Time: 오후 10:40
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($value) { $this->val = $value; }
 * }
 */

class Solution {

    /**
     * @param TreeNode $t1
     * @param TreeNode $t2
     * @return TreeNode
     */
    function mergeTrees($t1, $t2) {
        /**
         * Tree 1                     Tree 2
            1                         2
            / \                       / \
            3   2                     1   3
            /                           \   \
            5                             4   7
         */

        if($t1 == null) {
            return $t2;
        } else if($t2 == null) {
            return $t1;
        }

        $t1->val += $t2->val;
        $t1->left = self::mergeTrees($t1->left, $t2->left);
        $t1->right = self::mergeTrees($t1->right, $t2->right);

        return $t1;
        /**
         *  3
            / \
            4   5
            / \   \
            5   4   7
         */
    }
}