<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-18
 * Time: 오전 1:57
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
* @param Integer $sum
* @return Boolean
*/
    function hasPathSum($root, $sum) {
        $temp=0;
        return self::hasPathSumTemp($root,$sum,$temp);
    }

    function hasPathSumTemp($root, $sum, $temp)
    {
        if($root == null) {
            return false;
        }

        $temp = $temp + $root->val;
        if($root->left==null && $root->right==null)
        {
            if ($temp == $sum) {
                return true;
            }

            return false;
        }

        $left = self::hasPathSumTemp($root->left, $sum, $temp);
        $right = self::hasPathSumTemp($root->right, $sum, $temp);

        if($left || $right) {
            return true;
        }

        return false;
    }
}

/**
 * Given the below binary tree and sum = 22,

    5
    / \
    4   8
    /   / \
    11  13  4
    /  \      \
    7    2      1
 */