const reverseWords = (s) => {//"Let's take LeetCode contest"
    let s_array = s.split(' ');
    s_array.forEach((v, i, array)=>{
        array[i] = v.split('').reverse().join('');
    })
    return s_array.join(' ');//"s'teL ekat edoCteeL tsetnoc"
};