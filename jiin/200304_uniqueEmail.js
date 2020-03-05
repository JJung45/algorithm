const numUniqueEmails = (emails) => { //["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
    let realEmails = [];
    emails.forEach((email, i)=>{
        let emailArray = email.split('@');
        let realId = emailArray[0].replace(/\./g, '');
        realId = realId.split('+')[0];
        realEmails.push(realId+'@'+emailArray[1]);
    });
    let result = realEmails.filter( (item, idx, array) => {
	    return array.indexOf( item ) === idx ;
    });
    return result.length; //2
};