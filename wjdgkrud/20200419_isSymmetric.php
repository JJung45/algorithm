<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-19
 * Time: 오후 10:42
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
     * @return Boolean
     */
    function isSymmetric($root) {

        if ($root == null) {
            return true;
        }

        return self::isRoot($root->left, $root->right);
    }

    function isRoot($rootL, $rootR) {

        if ($rootL == null || $rootR == null) {
            return $rootL == $rootR;
        }

        return $rootL->val == $rootR->val && self::isRoot($rootL->left, $rootR->right) && self::isRoot($rootL->right, $rootR->left);
    }

}