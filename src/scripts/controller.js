export const Controller = class ControllerClass {
    constructor(addedView) {
        this.view = addedView;
        this.getInitData = async function (url) {
            return  await fetch(url)
            .then(res => res.text())
            .then(res => JSON.parse(res))
        }
    }

    renderUsers (arr, n) {
        let result = ``
        arr.forEach(element => {
            if (+element.id >= n && +element.id <= n + 9) {
                result += `
                <span class="user-block" id="${element.id}">
                    <h2 class="user-name">${element.title}</h2>
                    <p class="user-email">${element.body}</p>
                    <h4>written by ${element.userId}</h4>
                </span>
                `
            } else if (n == undefined) {
                if (+element.id <= 10) {
                    result += `
                    <span class="user-block" id="${element.id}">
                        <h2 class="user-name">${element.title}</h2>
                        <p class="user-email">${element.body}</p>
                        <h4>written by ${element.userId}</h4>
                    </span>
                    `
                }
            }
        });
        return result
    }
}