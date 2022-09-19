let textbox=document.getElementById("textbox");
        textbox.addEventListener('input',function(){
            var text = this.value;
            let charcnt = text.length;  //string is array of char so by using the .length, we calculated the number of chars
            document.getElementById("char").innerHTML = charcnt;

            text=text.trim(); //Removed the extra spaces initial and final...

            let words = text.split(" ");

            //now to remove the extra middle spaces...
            let cleanArray = words.filter(function(elm){     //have to pass a function in filter and in the function the parameter is elm (element) i.e. words array me se ek-ek element karke iss anonymous function me pass krdiy jayega
                //have to return the new element which gets stored in the cleanArray,so, we'll pass those elements whose value is not equal to "" (can see in console that when we give extra spaces, "" these get stored in the array thus increasing the owrd count)
                return elm!="";
            });

            document.getElementById("word").innerHTML = cleanArray.length;
        });