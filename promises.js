//========== User's Code Starts Here ==========
const blogs =[];

//Do not touch these functions below at all
function create1stBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG1'});
            resolve();
        }, 3000)
    }) 
}

//Do not touch these functions below at all
function create2ndBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG2'});
            resolve()
        }, 2000)
    }) 
}


function deleteBlog(){
     return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(blogs.length > 0){
                const poppedElement  = blogs.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR")
            }
        }, 1000)
    })
   //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
   //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
}

//Call the function in the right way so that we can get the desired output
create1stBlog()
.then(() => create2ndBlog())
.then(() => deleteBlog())
.then((poppedElement) => console.log(poppedElement.title))
.then(() => deleteBlog())
.then((poppedElement) => console.log(poppedElement.title))
 .then(() => deleteBlog())
    .then((poppedElement) => console.log(poppedElement.title))
    .catch((error) => console.log(error));
