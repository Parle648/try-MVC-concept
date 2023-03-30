export function choosePost () {
    const posts = document.querySelectorAll('.user-block')
    posts.forEach((post) => {
        post.addEventListener('click', () => {
            posts.forEach((item) => {
                item.classList.add('display')
            })
            post.classList.remove('display')
            document.querySelector('.pages').classList.add('display')
            document.querySelector('.return-posts').classList.remove('display')
        })
    })
    returnPosts(posts);
}

function returnPosts () {
    const returnPosts = document.querySelector('.return-posts')
    const posts = document.querySelectorAll('.user-block')
    returnPosts.addEventListener('click', () => {
        posts.forEach((post) => {
            posts.forEach((item) => {
                item.classList.remove('display')
            })
        })
        document.querySelector('.pages').classList.remove('display')
        document.querySelector('.return-posts').classList.add('display')
    })
}