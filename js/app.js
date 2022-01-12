function getCurrentMonthBirthdays() {

}

function createPostContent() {

}

function insertPostPreviews(posts) {
    let wrapDiv = document.querySelector('#post-preview-wrapper');

    posts.forEach((post) => {
        let postElement = document.createElement('div');
        let image = document.createElement('img');
        image.classList.add('img-fluid');
        image.src = post.imageUrl;

        let message = document.createElement('div');
        message.innerHTML = post.message;

        postElement.appendChild(image);
        postElement.appendChild(message);
        wrapDiv.appendChild(postElement);
    })

    return;
}

postPreviews = [
    {
        message: "Happy birthday Ian",
        imageUrl: "https://s3.amazonaws.com/SmartsheetB1/cf95bb540c484822bf9c716f37eeace8?response-content-disposition=inline%3Bfilename%3D%22Employee_Image.jpg%22%3Bfilename*%3DUTF-8%27%27Employee_Image.jpg&Signature=%2Ffo181dFxPy0ks4Jpvc3HhUm0CE%3D&Expires=1642022743&AWSAccessKeyId=11950YFEZZJFSSKKB3G2"
    }
]