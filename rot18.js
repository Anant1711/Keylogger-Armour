function rot18(str) {
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/","1","2","3","4","5","6","7","8","9","0"];
    var alphabets18 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m', " ", "-", "_", ".", "&","?", "!", "@", "#", "/","5","6","7","8","9","0","1","2","3","4"];
         
        
        var resultStr = [];
        for(let i=0; i<str.length; i++){
            for(let j =0; j<alphabets.length; j++){
                if(str[i] === alphabets[j]){
                resultStr.push(alphabets18[j]);
                }
            }
        }
        return resultStr.join("");
      };
