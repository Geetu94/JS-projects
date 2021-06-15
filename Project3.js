// Exercise 1:

// Need to open webiste that you want, open console in web browser and use the prompt to take input and write code in console.

// Write a programme in Javascript like a web crawler, you have to take input from the user, who is interested in finding the links based on that particular substring. you have to fetch all the links which contain the user given substring as a text in all links.

// Take the Substring by using prompt
// Get the document first
// Collect all links from document
// From all links find all the links whose text is equal to Substring that user entered in prompt


userinput= prompt("enter any string"); // MERAKI
alllinks= document.links
Array.from(alllinks).forEach((eachLink) =>{
    if (eachLink.text == userinput){
        console.log(eachLink);
    }
})



