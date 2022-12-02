function crateCard(user) {


    const divPerfil = document.createElement("div")
    const imgPerfil = document.createElement("img")
    const divName = document.createElement("div")
    const h4Name = document.createElement("h4")
    const pName = document.createElement("p")
    const btnPerfil = document.createElement("button")

    divPerfil.classList.add("perfil")

    imgPerfil.src = user.img
    imgPerfil.alt = user.user
    imgPerfil.classList.add("perfil__img")

    divName.classList.add("perfil__name")

    h4Name.classList.add("perfil__name--h4")
    h4Name.innerText = user.user

    pName.classList.add("perfil__name--p")
    pName.innerText = user.stack


    divName.append(h4Name, pName)
    divPerfil.append(imgPerfil, divName)

    return divPerfil
}

function crateSugested(arr, user1, user2, user3) {

    const cardContainer = document.querySelector(".sugested__card")

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == Number(user1) || (arr[i].id == Number(user2)) || (arr[i].id == Number(user3))) {
            const divPerfil = document.createElement("div")
            const imgPerfil = document.createElement("img")
            const divName = document.createElement("div")
            const h4Name = document.createElement("h4")
            const pName = document.createElement("p")
            const btnPerfil = document.createElement("button")

            divPerfil.classList.add("perfil")

            imgPerfil.src = arr[i].img
            imgPerfil.alt = arr[i].user
            imgPerfil.classList.add("perfil__img")

            divName.classList.add("perfil__name")

            h4Name.classList.add("perfil__name--h4")
            h4Name.innerText = arr[i].user

            pName.classList.add("perfil__name--p")
            pName.innerText = arr[i].stack

            btnPerfil.classList.add("perfil__sugested--btn")
            btnPerfil.innerText = "Seguir"
            btnPerfil.dataset.id = arr[i].id

            divName.append(h4Name, pName)
            divPerfil.append(imgPerfil, divName, btnPerfil)
            cardContainer.appendChild(divPerfil)
        }
    }
}
crateSugested(users, 3, 7, 6)

function findUser(userId) {
    for (let i = 0; i < users.length; i++) {
        if (userId == users[i].id) {
            return users[i]
        }
    }
}


function createPost(arr) {

    const sectionPost = document.querySelector(".section__post")

    for (let i = 0; i < arr.length; i++) {
        const user = findUser(arr[i].user)
        const cardUser = crateCard(user)

        const divPosts = document.createElement("div")
        const divContent = document.createElement("div")
        const h2Content = document.createElement("h2")
        const pContent = document.createElement("p")

        divPosts.classList.add("post__card")
        divContent.classList.add("post__contents")

        h2Content.classList.add("post__contents--h2")
        h2Content.innerText = arr[i].title

        pContent.classList.add("post__contents--p")
        pContent.innerText = arr[i].text

        divContent.append(h2Content, pContent)
        divPosts.append(cardUser, divContent)
        sectionPost.appendChild(divPosts)
    }
}
createPost(posts)


