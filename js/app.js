function getCurrentMonthBirthdays() {

}

function createPostContent() {

}

async function getPage (pageId, accessToken) {
    let response = await fetch(`https://graph.facebook.com/v12.0/${pageId}/feed?published=false&message=An unpublished post&access_token=${accessToken}`).then((response) => response.json());

    return response;
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