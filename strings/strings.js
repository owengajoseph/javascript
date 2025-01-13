//1)function that checks spam
 function checkSpam(str)
{
    //3)check if string contains 'viagra' or 'xxx'
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
 