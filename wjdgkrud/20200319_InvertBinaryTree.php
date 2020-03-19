<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-19
 * Time: 오전 12:01
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
     * @return TreeNode
     */
    function invertTree($root) {

        if (is_null($root)) return $root;

        self::invertTree($root->left);
        self::invertTree($root->right);

        $temp = $root->left;
        $root->left = $root->right;
        $root->right = $temp;

        return $root;

    }
}

/**
    Input:

    4
    /   \
    2     7
    / \   / \
    1   3 6   9
    Output:

    4
    /   \
    7     2
    / \   / \
    9   6 3   1
 */