"use strict"
export const Controller = class ControllerClass {
    constructor(addedView) {
        this.view = addedView;
        this.getInitData = async function (url) {
            return  await fetch(url)
            .then(res => res.text())
            .then(res => JSON.parse(res))
        }
    }

    renderUsers (arr) {
        let result = ``
        arr.forEach(element => {
            result += `
            <span class="user-block">
                <h2 class="user-name">${element.name}</h2>
                <h2 class="user-email">${element.email}</h2>
                <h2 class="user-phone">${element.phone}</h2>
                <h2 class="user-username">${element.username}</h2>
                <h2 class="user-website">${element.website}</h2>
            </span>
            `
        });
        return result
    }
}