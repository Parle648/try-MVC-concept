import { ViewData } from './view.js'
import { Controller } from './controller.js'
import { choosePost } from './functions.js'

window.onload = () => {
    const showData = new ViewData;
    const DataController = new Controller(showData);

    const loadPosts = new Promise((resolve, reject) => {
        resolve(DataController.getInitData('https://jsonplaceholder.typicode.com/posts'))
    })
    loadPosts.then((data => {
        const renderData = DataController.renderUsers(data, document.querySelectorAll('.user-block')[9])
        showData.init(document.querySelector('.div'), renderData)
        return showData.init(document.querySelector('.div'), renderData)
    }))
    loadPosts.then(data => {
        choosePost();
    })
    
    const listBtns = document.querySelectorAll('.page-num');
    
    listBtns.forEach((btn) => {
        btn.addEventListener('click', function(event) {
            const showData = new ViewData;
            const DataController = new Controller(showData);
            const num = event.currentTarget.innerHTML + '0' - 10;
            
            const loadNewPosts = new Promise((resolve, reject) => {
                resolve(DataController.getInitData('https://jsonplaceholder.typicode.com/posts'))
            })
            loadNewPosts.then((data => {
                const renderData = DataController.renderUsers(data, +num)
                showData.init(document.querySelector('.div'), renderData)
                choosePost();
            }))
        })
    })
}