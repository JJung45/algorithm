<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-04-20
 * Time: 오후 9:12
 */

/**
 * Definition for a Node.
 * class Node {
 *     public $val = null;
 *     public $children = null;
 *     function __construct($val = 0) {
 *         $this->val = $val;
 *         $this->children = array();
 *     }
 * }
 */

class Solution {
    /**
     * @param Node $root
     * @return integer
     */
    public $max = 0;
    public $level = 0;

    function maxDepth($root) { // [1,null,3,2,4,null,5,6]
        if($root){
            $this->level++;
            if($this->level>=$this->max){
                $this->max = $this->level;
            }
        }

        if($root->children){
            foreach($root->children as $child){
                $this->maxDepth($child);
            }
        }

        if($root){
            $this->level--;
        }

        return $this->max; //3
    }

}