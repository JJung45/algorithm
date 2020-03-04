<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-03-04
 * Time: 오후 11:06
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
     * @param TreeNode $p
     * @param TreeNode $q
     * @return boolean
     */
    function isSameTree($p, $q) {

        if (is_null($p) && is_null($q)) return true;

        if (is_null($p) || is_null($q)) return false;

        return ($p->val == $q->val) && self::isSameTree($p->left, $q->left) && self::isSameTree($p->right, $q->right);
    }
}