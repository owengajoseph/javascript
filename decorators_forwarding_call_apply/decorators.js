function add (a)
{
    return function(b)
    {
        console.log(a+b);
    }
}


add(5)(5);