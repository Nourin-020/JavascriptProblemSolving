// 10 name in an Array. print the first friend name who has 5 charecter in her name.

var friendName=['sabbir','Nourin','Sarah','Abir'];

function perfectfriend(friendName)
{
    for(var i=0;i<friendName.length;i++)
    {
        if(friendName[i].length==5)
        {
            var myperfectfriend=friendName[i];
            return myperfectfriend;
        }
        
    }
}
var final = perfectfriend(friendName);
console.log(final);