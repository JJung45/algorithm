<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-17
 * Time: 오후 10:03
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
     * @param TreeNode $root
     * @return Integer
     */
    function maxDepth($root) {

        if (is_null($root)) return 0;

        $depth = 0;
        $depth = max(max(self::maxDepth($root->left), $depth),max(self::maxDepth($root->right), $depth));

        return $depth+1;
    }
}

/***
 * Given binary tree [3,9,20,null,null,15,7],

    3
    / \
    9  20
    /  \
    15   7
    return its depth = 3.
 */