function breAnagram(str1,str2){
    const sortstr1 = str1.split("").sort().join("");
     const sortstr2 = str2.split("").sort().join("");
     if(sortstr1 === sortstr2){
         console.log("Both are anagram");
     }else {
         console.log("Both are not anagram");
     }
}
breAnagram("listen","silent");
//or
function areAnagram(str1,str2){
    const sortstr1 = str1.split("").sort().join("");
     const sortstr2 = str2.split("").sort().join("");
    return sortstr1 === sortstr2;
}
const res = areAnagram("listen","silent");
console.log(res);