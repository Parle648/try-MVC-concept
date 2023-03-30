import { ViewData } from './view.js'
import {Controller} from './controller.js'

const showData = new ViewData;
const contr = new Controller(showData);


export function choosePost () {
    // Open choose post 
    const posts = document.querySelectorAll('.user-block')
    posts.forEach((post) => {
        post.addEventListener('click', () => {
            posts.forEach((item) => {
                item.classList.add('display')
            })
            post.classList.remove('display')
            document.querySelector('.pages').classList.add('display')
            document.querySelector('.return-posts').classList.remove('display')
            document.querySelector('.comments').classList.remove('display')

            // Render comments
            new Promise((resolve) => {
                resolve(contr.getInitData('https://jsonplaceholder.typicode.com/comments'))
            }).then(data => {
                return data.filter((comment) => comment.postId == post.id)
            }).then(sortedData => {
                showData.init(document.querySelector('.comments'), contr.renderComments(sortedData))
            })
        })
    })


    // Close post function
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
        document.querySelector('.comments').classList.add('display')
    })
}