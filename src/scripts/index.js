import { ViewData } from './view.js'
import { Controller } from './controller.js'
import { choosePost, chooseWriter } from './functions.js'

window.onload = () => {
    const showData = new ViewData;
    const DataController = new Controller(showData);

    // Render posts 
    const loadedPosts = new Promise((resolve, reject) => {
        resolve(DataController.getInitData('https://jsonplaceholder.typicode.com/posts'))
    })
    loadedPosts.then((data => {
        const renderData = DataController.renderUsers(data, document.querySelectorAll('.user-block')[9])
        showData.init(document.querySelector('.div'), renderData)
        return showData.init(document.querySelector('.div'), renderData)
    }))
    loadedPosts.then(data => {
        choosePost();
        // Choose posts from 1 writer
        chooseWriter();
    })
    
    // Render new posts
    const listBtns = document.querySelectorAll('.page-num');
    
    listBtns.forEach((btn) => {
        btn.addEventListener('click', function(event) {
            const num = event.currentTarget.innerHTML + '0' - 10;
            
            const loadNewPosts = new Promise((resolve, reject) => {
                resolve(DataController.getInitData('https://jsonplaceholder.typicode.com/posts'))
            })
            loadNewPosts.then((data => {
                const renderData = DataController.renderUsers(data, +num)
                showData.init(document.querySelector('.div'), renderData)

                choosePost();
                chooseWriter();  // Choose posts from 1 writer
            }))
        })
    })
}