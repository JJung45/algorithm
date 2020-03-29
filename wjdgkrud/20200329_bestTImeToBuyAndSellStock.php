<?php
/**
 * Created by PhpStorm,
 * User: 63328
 * Date: 2020-03-29
 * Time: 오후 9:18
 */

class Solution {


    /**
     * @param Integer[] $prices
     * @return Integer
     */
    function maxProfit($prices) {

        $buy = $prices[0];
        $max_profit = 0;

        for($i=0; $i<count($prices); $i++) {

            if ($prices[$i] < $buy) {
                $buy = $prices[$i];
            } else {
                $diff = $prices[$i] - $buy;

                if ($max_profit < $diff) {
                    $max_profit = $diff;
                }
            }
        }

        return $max_profit;

    }

}

/**
 * Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Not 7-1 = 6, as selling price needs to be larger than buying price.
 */