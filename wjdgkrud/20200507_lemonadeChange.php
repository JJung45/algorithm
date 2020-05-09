<?php
/**
 * Created by PhpStorm,
 * User: wjdgkrud
 * Date: 2020-05-07
 * Time: 오후 11:36
 */

class Solution {

    /**
     * @param Integer[] $bills
     * @return Boolean
     */
    function lemonadeChange($bills) { // [5,5,5,10,20]
        $inHand = [0,0,0];
        foreach($bills as $bill){
            switch($bill){
                case 5:
                    $inHand[0] += 1;
                    break;
                case 10:
                    $inHand[1] += 1;
                    if($inHand[0]>=1){
                        $inHand[0] -= 1;
                    }
                    else{
                        return false;
                    }
                    break;
                case 20:
                    $inHand[2] +=1;
                    if($inHand[0]>=1 && $inHand[1]>=1){
                        $inHand[0] -= 1;
                        $inHand[1] -= 1;
                    }
                    else if($inHand[0]>=3){
                        $inHand[0] -= 3;
                    }
                    else{
                        return false;
                    }

                    break;
            }
        }
        return true; // true
    }
}