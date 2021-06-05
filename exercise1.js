// Exercise 1:

// Need to open webiste that you want, open console in web browser and use the prompt to take input and write code in console.

// Write a programme in Javascript like webcrawler, you have to take input 
// from user, which he is interested to find the links based on that particular
// string.

// you have to fetch the all the links which contains the user given string it as a 
// text in all links.

// Website: www.navgurukul.org
// meraki

userinput= prompt("enter any string"); // meraki
alllinks= document.links
Array.from(alllinks).forEach((link) =>{
    if (link.text == "meraki"){
        console.log(link);
    }
})



