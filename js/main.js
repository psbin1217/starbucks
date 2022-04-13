const items = document.querySelectorAll("section");
const aside = document.querySelector("aside");
const close = aside.querySelector(".btn_close");

for (let el of items) {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let imgSrc = e.currentTarget.querySelector("img").getAttribute("src");

        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("img").setAttribute("src", imgSrc);

        aside.classList.add("on");
    })

    close.addEventListener("click", () => {
        aside.classList.remove("on");
    });
}

//메뉴변경

let vi = true;
const best = document.getElementById("best");
const midium = document.getElementById("midium");
const dark = document.getElementById("dark");
const reserve = document.getElementById("reserved");

const li1 = document.querySelector(".gnb li:first-child");
const li2 = document.querySelector(".gnb li:nth-child(2)");
const li3 = document.querySelector(".gnb li:nth-child(3)");
const li4 = document.querySelector(".gnb li:nth-child(4)");

li1.onclick = function () {
    best.style.display = "flex"
    midium.style.display = "none"
    dark.style.display = "none"
    reserve.style.display = "none"
    li1.style.color = "#fff"
    li2.style.color = "#bbb"
    li3.style.color = "#bbb"
    li4.style.color = "#bbb"
}

li2.onclick = function () {
    best.style.display = "none"
    midium.style.display = "flex"
    dark.style.display = "none"
    reserve.style.display = "none"
    li1.style.color = "#bbb"
    li2.style.color = "#fff"
    li3.style.color = "#bbb"
    li4.style.color = "#bbb"
}
li3.onclick = function () {
    best.style.display = "none"
    midium.style.display = "none"
    dark.style.display = "flex"
    reserve.style.display = "none"
    li1.style.color = "#bbb"
    li2.style.color = "#bbb"
    li3.style.color = "#fff"
    li4.style.color = "#bbb"
}

li4.onclick = function () {
    best.style.display = "none"
    midium.style.display = "none"
    dark.style.display = "none"
    reserve.style.display = "flex"
    li1.style.color = "#bbb"
    li2.style.color = "#bbb"
    li3.style.color = "#bbb"
    li4.style.color = "#fff"
}
