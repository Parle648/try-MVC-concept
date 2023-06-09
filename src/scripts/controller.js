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
                    <h4>written by <h4 class="user">${element.userId}</h4></h4>
                </span>
                `
            } else if (n == undefined) {
                if (+element.id <= 10) {
                    result += `
                    <span class="user-block" id="${element.id}">
                        <h2 class="user-name">${element.title}</h2>
                        <p class="user-email">${element.body}</p>
                        <h4>written by <h4 class="user">${element.userId}</h4></h4>
                    </span>
                    `
                }
            }
        });
        return result
    }

    renderComments (comments) {
        let result = `
            <h2>Comments</h2>
        `;
        comments.forEach((comment) => {
            result += `
            <div class="post-block" id="${comment.id}">
                <h5 class="post-name">${comment.name}</h5>
                <h6 class="post-email">${comment.email}</h6>
                <p class="post-email">${comment.body}</p>
            </div>
            `
        })
        return result;
    }

    renderUserPosts (data, user) {
        const writerPosts = data.filter((item) => item.userId == user)
        let result = `
            <h2>Posts from ${user} </h2>
        `;
        writerPosts.forEach((post) => {
            result += `
                <span class="user-block" id="${post.id}">
                    <h2 class="user-name">${post.title}</h2>
                    <p class="user-email">${post.body}</p>
                </span>
            `
        })
        return result
    }
}