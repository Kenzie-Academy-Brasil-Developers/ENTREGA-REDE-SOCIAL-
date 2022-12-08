function createUser(arr) {
    let user = document.createElement("div")
    let img = document.createElement("img")
    let title = document.createElement("div")
    let name = document.createElement("h4")
    let info = document.createElement("p")

    user.className = "user"

    img.className = "user__img"
    img.src = arr.img
    img.alt = arr.user

    title.className = "title"

    name.innerText = arr.user
    name.className = "user__h4"

    info.innerText = arr.stack
    info.className = "user__p"

    title.append(name, info)
    user.append(img, title)

    return user
}

function createSugested(arr, user1, user2, user3) {
    const aside__div = document.querySelector(".aside__div")

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == Number(user1) || arr[i].id == Number(user2) || arr[i].id == Number(user3)) {
            let sugestedUsers = createUser(arr[i])

            let sugested = document.createElement("div")
            sugested.className = "sugested"

            let button = document.createElement("button")
            button.className = "seguir"
            button.innerHTML = "Seguir"

            button.addEventListener("click", () => {
                button.classList.toggle("seguindo")
                if (button.classList == "seguir seguindo") {
                    button.innerHTML = "Seguindo"
                } else {
                    button.innerHTML = "Seguir"
                }
            })

            sugested.append(sugestedUsers, button)
            aside__div.appendChild(sugested)
        }
    }
}
createSugested(users, 3, 7, 6)

function findUser(userId) {
    for (let i = 0; i < users.length; i++) {
        if (userId == users[i].id) {
            return users[i]
        }
    }
}

function createPost(arr) {

    const post = document.querySelector(".posts")

    for (let i = 0; i < arr.length; i++) {
        const userPost = findUser(arr[i].user)
        let user = createUser(userPost)

        let card = document.createElement("div")
        let title = document.createElement("h2")
        let text = document.createElement("p")
        let div = document.createElement("div")
        const openPost = document.createElement("button")
        let div2 = document.createElement("div")
        let like = document.createElement("button")
        let p = document.createElement("p")

        card.className = "post"

        title.className = "post__h2"
        title.innerText = arr[i].title

        text.className = "post__p"
        text.innerText = arr[i].text

        div.className = "post__div"

        openPost.className = "open__modal"
        openPost.innerHTML = "Abrir post"
        openPost.dataset.id = arr[i].id_post

        div2.className = "like__div"

        like.className = "like"
        like.innerHTML = "Curtir"


        p.className = "like__number"
        p.innerHTML = "42"

        div2.append(like, p)
        div.append(openPost, div2)
        card.append(user, title, text, div)
        post.appendChild(card)
    }
}
createPost(posts)

function renderModal() {
    const modal = document.querySelector(".container__modal")
    let buttons = document.querySelectorAll(".open__modal")
    const body = document.querySelector("body")

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i]

        button.addEventListener("click", (e) => {
            const modalContent = createModal(button.dataset.id)
            console.log(button.dataset.id)
            modal.append(modalContent)

            modal.showModal()
        })
    }

}
renderModal()

function createModal(id) {
    let modal = document.createElement("div")
    let divClose = document.createElement("div")
    let user = document.createElement("div")
    let img = document.createElement("img")
    let title = document.createElement("div")
    let name = document.createElement("h4")
    let info = document.createElement("p")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")
    let close = document.createElement("button")
    let element
    let dataUser

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id_post == Number(id)) {
            element = posts[i]
            for (let j = 0; j < users.length; j++) {
                if (posts[i].user == users[j].id) {
                    dataUser = users[j]
                }
            }
        }
    }
    console.log(dataUser)

    modal.className = "modal"

    user.className = "user"

    img.className = "user__img"
    img.src = dataUser.img
    img.alt = dataUser.user

    title.className = "title"

    name.innerText = dataUser.user
    name.className = "user__h4"

    info.innerText = dataUser.stack
    info.className = "user__p"

    h2.innerText = element.title

    p.innerText = element.text

    close.innerText = "X"
    close.className = "close__modal"
    close.addEventListener("click", () => {
        modal.remove()
        document.querySelector('.container__modal').close()
    })

    divClose.className = "div__close"

    title.append(name, info)
    user.append(img, title)
    divClose.append(user, close)
    modal.append(divClose, h2, p)

    return modal
}
