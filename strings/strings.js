//1)function that checks spam
 function checkSpam(str)
{
    //3)check if string contains 'vulgar language'
    //can also check with str.indexOf('vulgar language') !== -1
    //4)if contains vulgar language, return true
    //5)else return false
    if(str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx'))
    {
        return true;
    }
    else
    {
        return false;
    }


}


alert(checkSpam('buy ViAgRA now') ) ;
 