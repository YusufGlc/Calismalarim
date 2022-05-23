
function rightArrowClick() {

    let blogs = document.querySelectorAll(".öneÇıkanBloglar .blogs .box")
    let secilicekBlog;

    for (let index = 0; index < blogs.length; index++) {
        const element = blogs[index];
        
        if (element.classList.contains("selected") == false && secilicekBlog == null) {
            
            secilicekBlog = element;

        }

        if (element.classList.contains("selected")) {
            element.classList.remove("selected");
        }

    }

    secilicekBlog.classList.add("selected");

}

function leftArrowClick() {
    
    let blogs = document.querySelectorAll(".öneÇıkanBloglar .blogs .box")
    let secilicekBlog;

    for (let index = blogs.length-1; index >= 0; index--) {
        const element = blogs[index];
        
        if (element.classList.contains("selected") == false && secilicekBlog == null) {
            
            secilicekBlog = element;

        }

        if (element.classList.contains("selected")) {
            element.classList.remove("selected");
        }

    }

    secilicekBlog.classList.add("selected");

}