import { ViewData } from './view.js'
import { Controller } from './controller.js'

const uiTrigger = document.getElementById('trigger');

uiTrigger.addEventListener('click', function() {
    const showData = new ViewData;
    const DataController = new Controller(showData);
    
    (async () => {
        const data = await DataController.getInitData('https://jsonplaceholder.typicode.com/users')
        const renderData = DataController.renderUsers(data)

        showData.init(document.querySelector('.div'), renderData)
    })()
})