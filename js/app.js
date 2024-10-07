let exercises = {
    areasquare: {
        title: "Area Square",
        id: "area-square",

    },
    learningresult: {
        title: "Learning Result",
        id: "learning-result",
    },
    findyear: {
        title: "Find Year Negative",
        id: "find-year",
    },
    finddayofmonth: {
        title: "Find Day of Month",
        id: "find-day-of-month",
    },
    calculativenumber: {
        title: "Calculative on Number Chains",
        id: "calculative-on-number-chains",
    },
    printchapter: {
        title: "Print Nine Chapter",
        id: "print-chapter",
    },
    tostring: {
        title: "To String Number",
        id: "convert-string",
    },
    bill: {
        title: "Bill",
        id: "bill",
    },
    finddayofweek: {
        title: "Find Day of Week",
        id: "area-square",
    },
}


let arrCan = ["Canh", "Tân", "Nhâm", "Quí", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
let arrChi = [{
        chi: "Tý",
        image: "./images/ti.jpg"
    },
    {
        chi: "Sửu",
        image: "./images/suu.jpg"
    },
    {
        chi: "Dần",
        image: "./images/dan.jpg"
    },
    {
        chi: "Mão",
        image: "./images/mao.jpg"
    },
    {
        chi: "Thìn",
        image: "./images/thin.jpg"
    },
    {
        chi: "Tỵ",
        image: "./images/ty.jpg"
    },
    {
        chi: "Ngọ",
        image: "./images/ngo.png"
    },
    {
        chi: "Mùi",
        image: "./images/mui.jpg"
    },
    {
        chi: "Thân",
        image: "./images/than.jpg"
    },
    {
        chi: "Dậu",
        image: "./images/dau.png"
    },
    {
        chi: "Tuất",
        image: "./images/tuat.jpg"
    },
    {
        chi: "Hợi",
        image: "./images/hoi.jpeg"
    },
];













let btnBar = document.getElementById("nav-bar");
let header = document.querySelector(".header");
let nav = document.querySelector(".nav");
let more = document.querySelector(".more");
let iconContainer = document.querySelector(".icon");

let linksContainer = document.querySelector(".links-container");
let links = document.querySelector(".links");
let banner = document.querySelector(".banner");

let heightHeader = header.getBoundingClientRect().height;

function loadTimeCurrent() {
    let time = new Date();
    let seconds = time.getSeconds();
    let minute = time.getMinutes();
    let hour = time.getHours();
    let day = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();

    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("hours").innerHTML = hour;
    document.querySelector(".day").innerHTML = `${day}`;
    document.querySelector(".month").innerHTML = `${month+1}`;
    document.querySelector(".year").innerHTML = `${year}`;

}
let myTime = setInterval(loadTimeCurrent, 1000);

window.addEventListener("scroll", () => {
    let offSetY = window.pageYOffset;
    if (offSetY > heightHeader) {
        nav.classList.add("fixed-header");
        btnBar.classList.add("fixed-btn-bar");
        banner.style.paddingTop = "35vh";

    } else {
        if (linksContainer.getBoundingClientRect().height > 0) {
            return;
        } else {
            nav.classList.remove("fixed-header");
            btnBar.classList.remove("fixed-btn-bar");
            banner.style.paddingTop = "25vh";
        }

    }
})

more.addEventListener("click", () => {
    if (iconContainer.classList.contains("show-icon")) {
        iconContainer.classList.remove("show-icon");
    } else {
        iconContainer.classList.add("show-icon");
    }
})

btnBar.addEventListener("click", () => {


    let heightLinksContainer = linksContainer.getBoundingClientRect().height;
    let heightLinks = links.getBoundingClientRect().height;

    if (heightLinksContainer < 10) {
        linksContainer.style.height = `${heightLinks}px`;
        nav.classList.add("fixed-header");
        btnBar.classList.add("fixed-btn-bar");
        btnBar.style.transform = "rotate(90deg)";
        banner.style.paddingTop = "60vh";
        iconContainer.classList.remove("show-icon");
    } else {

        linksContainer.style.height = 0;
        btnBar.style.transform = "rotate(0deg)";
        banner.style.paddingTop = "25vh";
    }

})









let scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        let id = e.currentTarget.getAttribute("href").slice(1);
        let element = document.getElementById(id);

        let position = element.offsetTop - heightHeader;

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
        banner.style.paddingTop = "25vh";
        btnBar.style.transform = "rotate(0deg)";

        let title = e.currentTarget.dataset.id;
        document.getElementById("exercise-name").innerHTML = exercises[title].title;
        for (let proper in exercises) {
            document.getElementById(exercises[proper].id).style.display = "none";
        }
        document.getElementById(exercises[title].id).style.display = "block";
        switch (title) {
            case "areasquare":
                document.getElementById("cal-area").addEventListener("click", areaSquare);
                break;
            case "learningresult":
                document.getElementById("xemkq").addEventListener("click", learningResult);
                break;
            case "findyear":
                document.getElementById("convert").addEventListener("click", convertYear);
                break;
            case "finddayofmonth":
                document.getElementById("tinhngay").addEventListener("click", getDayOfMonth);
                break;
            case "calculativenumber":
                document.getElementById("cal-chains").addEventListener("click", calculativeNumberChains);
                break;
            case "printchapter":
                document.getElementById("btn-print").addEventListener("click", printChapter);
                break;
            case "tostring":
                document.getElementById("btn-convert").addEventListener("click", conVertToString);
                break;
            case "bill":

                document.getElementById("btn-bill").addEventListener("click", showBill);
                notificationBill.style.display = "none"
                billBox.style.display = "none";
                break;



        }


    })
})


function areaSquare() {
    let length = document.getElementById("chieudai").value;
    let width = document.getElementById("chieurong").value;
    let area = length * width;
    document.getElementById("dientich").value = area;

}

function learningResult() {
    let hk1 = parseInt(document.getElementById("diemhk1").value);
    let hk2 = parseInt(document.getElementById("diemhk2").value);
    let diemtb = (hk1 + hk2 * 2) / 3;
    diemtb = diemtb.toFixed(2);
    document.getElementById("diemtb").value = diemtb;
    let ketqua = document.getElementById("ketqua");
    if (diemtb >= 5) {
        ketqua.value = "Được Lên Lớp";
    } else {
        ketqua.value = "Ở Lại Lớp";
    }
    let hocluc = document.getElementById("hocluc");
    if (diemtb >= 8) {
        hocluc.value = "Giỏi";
    } else if (diemtb < 8 && diemtb >= 6.5) {
        hocluc.value = "Khá";
    } else if (diemtb >= 5 && diemtb < 6.5) {
        hocluc.value = "Trung Bình";
    } else {
        hocluc.value = "Yếu";
    }
}

function convertYear() {
    let amLich = "";
    let duongLich = parseInt(document.getElementById("duonglich").value);
    let can = arrCan[duongLich % 10];
    let chi = arrChi[duongLich % 12].chi;
    let img = arrChi[duongLich % 12].image;
    amLich = can + " " + chi;
    document.getElementById("amlich").value = amLich;
    document.getElementById("img-chi").setAttribute("src", img);
}


function getDayOfMonth() {
    let days = (month, year) => new Date(year, month, 0).getDate();
    let month = parseInt(document.getElementById("nhapthang").value);
    let year = parseInt(document.getElementById("nhapnam").value);
    let day = days(month, year);
    let result = `Tháng ${month} năm ${year} có ${day} ngày .`;
    document.getElementById("xuatngay").value = result;
}

function calculativeNumberChains() {
    let numberStart = parseInt(document.getElementById("numstart").value);
    let numberEnd = parseInt(document.getElementById("numend").value);
    let arr = [];
    for (let i = numberStart; i <= numberEnd; i++) {
        arr.push(i);
    }

    let sum = arr.reduce((sum, item) => sum + item);
    let multi = arr.reduce((multi, item) => multi * item);
    let sumEven = arr.filter((item) => item % 2 == 0).reduce((sum, item) => sum + item);
    let sumOdd = arr.filter((item) => item % 2 == 1).reduce((sum, item) => sum + item);

    document.getElementById("sumnumber").value = sum;
    document.getElementById("multinumber").value = multi;
    document.getElementById("sumevennum").value = sumEven;
    document.getElementById("sumoddnum").value = sumOdd;
}



function printChapter() {
    let numberStart = parseInt(document.getElementById("chapter-start").value);
    let numberEnd = parseInt(document.getElementById("chapter-end").value);
    let resultChapter = document.getElementById("result-chapter");

    let strResult = "";
    let count = 0;

    for (let i = numberStart; i <= numberEnd; i++) {
        count++;
        strResult += `
        <ul class="chapter">
            <li>${i} x 1 = ${i*1}</li>
            <li>${i} x 2 = ${i*2}</li>
            <li>${i} x 3 = ${i*3}</li>
            <li>${i} x 4 = ${i*4}</li>
            <li>${i} x 5 = ${i*5}</li>
            <li>${i} x 6 = ${i*6}</li>
            <li>${i} x 7 = ${i*7}</li>
            <li>${i} x 8 = ${i*8}</li>
            <li>${i} x 9 = ${i*9}</li>
            <li>${i} x 10 = ${i*10}</li>
        </ul>`

    }

    resultChapter.innerHTML = strResult;

}


function conVertToString() {
    let inputNumber = document.getElementById("input-number-to-convert").value;
    let number = parseInt(inputNumber);
    let outputString = document.getElementById("output-string");
    let numberArr = inputNumber.split("");
    let arrUnit = ["", "", "Nghìn ", "Triệu ", "Tỉ "];
    let numStr = ["Không ", "Một ", "Hai ", "Ba ", "Bốn ", "Năm ", "Sáu ", "Bảy ", "Tám ", "Chín "];

    let strTemp = "";

    while (numberArr.length % 3 !== 0) {
        numberArr.unshift("0");
    }
    let arrNested = [];
    while (numberArr.length > 0) {
        let arrTemp = numberArr.splice(0, 3);
        arrNested.push(arrTemp);
    }

    if (number > 999999999999) {
        outputString.value = "Input must be less than 999 billion ! Enter Again !!!!";
        document.getElementById("input-number-to-convert").value = "";
        document.getElementById("input-number-to-convert").focus();
    } else {
        while (arrNested.length > 0) {
            strTemp += convertStringThreeNumber(arrNested[0]);
            if (convertStringThreeNumber(arrNested[0]) != "") {
                strTemp += arrUnit[arrNested.length];
            }
            arrNested.shift();
        }
        outputString.value = strTemp;
    }



    function convertStringThreeNumber(numberArr) {
        let result = "";
        let numberTemp = parseInt(numberArr.reduce((value, item) => value + item));
        if (numberTemp < 20 && numberTemp >= 10) {
            result += "Mười ";
            if (numberTemp % 10 > 0) {
                result += numStr[numberTemp % 10];
            }
        } else if (numberTemp % 100 < 20 && numberTemp % 100 >= 10) {
            if (numberArr.length == 3) {
                if (numberArr[0] % 10 != 0) {
                    result += numStr[numberArr[0] % 10] + "Trăm ";
                }
                numberArr.shift();

            }
            if (numberArr.length == 2) {
                result += "Muời ";
                numberArr.shift();
                if (numberArr[0] % 10 != 0) {
                    result += numStr[numberArr[0] % 10];
                }
            }

        } else {
            if (numberArr.length == 3) {
                if (numberArr[0] % 10 != 0) {
                    result += numStr[numberArr[0] % 10] + "Trăm ";
                }
                numberArr.shift();
            }
            if (numberArr.length == 2) {
                if (numberArr[0] % 10 != 0) {
                    result += numStr[numberArr[0] % 10] + "Muơi ";
                }
                numberArr.shift();
            }
            if (numberArr.length == 1 && numberArr[0] % 10 == 1) {
                result += "Mốt ";
            } else if (numberArr.length == 1 && numberArr[0] % 10 != 0) {
                result += numStr[numberArr[0] % 10];
            }
        }
        return result;
    }


}

// let menuOriginal = {
//     bonaudau: {
//         title: "Bò Nấu Đậu Hà Lan",
//         price: 100000
//     },
//     chagiotom: {
//         title: "Chả Giò Tôm",
//         price: 150000
//     },
//     chehatsen: {
//         title: "Chè Hạt Sen",
//         price: 100000
//     },
//     comduongchau: {
//         title: "Cơm Dương Châu",
//         price: 200000
//     },
//     goingosen: {
//         title: "Gỏi Ngó Sen",
//         price: 500000
//     },
//     lacadieuhong: {
//         title: "Lẩu Cá Diêu Hồng",
//         price: 300000
//     },
//     lauthailan: {
//         title: "Lẩu Thái Lan",
//         price: 170000
//     },
//     gahapchao: {
//         title: "Gà Hấp Chao",
//         price: 1000000
//     },
//     heosuaquay: {
//         title: "Heo Sữa Quay",
//         price: 600000
//     },
//     trasuatranchau: {
//         title: "Trà Sữa Trân Châu",
//         price: 400000
//     },

// }
let menuOriginal = [{
        id: 1,
        title: "Bò Nấu Đậu Hà Lan",
        price: 100000
    },
    {
        id: 2,
        title: "Chả Giò Tôm",
        price: 150000
    },
    {
        id: 3,
        title: "Chè Hạt Sen",
        price: 100000
    },
    {
        id: 4,
        title: "Cơm Dương Châu",
        price: 200000
    },
    {
        id: 5,
        title: "Gỏi Ngó Sen",
        price: 500000
    },
    {
        id: 6,
        title: "Lẩu Cá Diêu Hồng",
        price: 300000
    },
    {
        id: 7,
        title: "Lẩu Thái Lan",
        price: 170000
    },
    {
        id: 8,
        title: "Gà Hấp Chao",
        price: 1000000
    },
    {
        id: 9,
        title: "Heo Sữa Quay",
        price: 600000
    },
    {
        id: 10,
        title: "Trà Sữa Trân Châu",
        price: 400000
    },

]


let menuSelected = [


]

function displayMenu(menu,list) {

    menu.map(item => {
        let element = document.createElement("option");
        element.setAttribute("data-id", item.id);
        element.classList.add("item-selected");
        element.textContent = item.title;
        list.appendChild(element);
    })
    
}



let menuOriginalList = document.getElementById("menu-original");
let menuSelectedList = document.getElementById("menu-selected");
let btnSelect = document.querySelectorAll(".btn-selected");


let itemSelected = document.querySelectorAll(".item-selected");


btnSelect.forEach((btn) => {

    btn.addEventListener("click", (e) => {

        let id = e.currentTarget.dataset.id;
        checkBtn(id);
        

    })

});
function setUpDefault(menuElement) {
    while(menuElement.length !== 0) {
        menuElement.removeChild(menuElement.childNodes[0]);
    }
}
function loadMenu() {
    setUpDefault(menuOriginalList);
    displayMenu(menuOriginal,menuOriginalList);
    setUpDefault(menuSelectedList);
    displayMenu(menuSelected,menuSelectedList);
}

function checkBtn(id){
    if (id ==="selectone"){
        let arr = [...menuOriginalList.children]
        let tempSelected= arr.map(item => {
            
            if (item.selected === true){
                return item;
            }
        })
        tempSelected = tempSelected.filter(item=> item);
        if (menuSelected.length >0){
            let filterTemp = menuOriginal.filter(item => {
                let flag=false;
                tempSelected.forEach(i => {
                    if (i.dataset.id == item.id) {
                       flag= true;
                    }
                })
                return flag;
            })
            filterTemp.map(item=>{
                menuSelected.push(item);
            })
        }else{
            menuSelected = menuOriginal.filter(item => {
                let flag=false;
                tempSelected.forEach(i => {
                    if (i.dataset.id == item.id) {
                       flag= true;
                    }
                })
                return flag;
            })
        }
        
        menuOriginal= menuOriginal.filter(item =>{
            let flag=true;
            menuSelected.forEach(i => {
                if (i.id == item.id) {
                   flag= false;
                }
            })
            return flag;
        })
        loadMenu();
    }else if(id ==="selectall"){
        menuOriginal.map(item=>{
            menuSelected.push(item);

        })
        menuOriginal=[];
        loadMenu();
    }else if(id ==="deleteone"){
        let arr = [...menuSelectedList.children]
        let tempSelected= arr.map(item => {
            
            if (item.selected === true){
                return item;
            }
        })
        tempSelected = tempSelected.filter(item=> item);
        if (menuOriginal.length >0){
            let filterTemp = menuSelected.filter(item => {
                let flag=false;
                tempSelected.forEach(i => {
                    if (i.dataset.id == item.id) {
                       flag= true;
                    }
                })
                return flag;
            })
            filterTemp.map(item=>{
                menuOriginal.push(item);
            })
        }else{
            menuOriginal = menuSelected.filter(item => {
                let flag=false;
                tempSelected.forEach(i => {
                    if (i.dataset.id == item.id) {
                       flag= true;
                    }
                })
                return flag;
            })
        }
        
        menuSelected= menuSelected.filter(item =>{
            let flag=true;
            menuOriginal.forEach(i => {
                if (i.id == item.id) {
                   flag= false;
                }
            })
            return flag;
        })
        
        loadMenu();
    }else{
        menuSelected.map(item=>{
            menuOriginal.push(item);

        })
        menuSelected=[];
        loadMenu();
    }
}



let calculativeMoney = document.querySelector(".calculative-money");
let printMoney = document.querySelector(".print-money");
let listBill = document.querySelector(".list-bill");
let btnOK = document.querySelector(".ok-notifica");
let notificationBill = document.querySelector(".notification-bill");

calculativeMoney.addEventListener("click", () => {
    let sum = 0;
    let bill = "";
    for (let item in menuSelected) {
        bill += `${menuSelected[item].title} : ${menuSelected[item].price} <br>`
        sum += menuSelected[item].price;
    }
    listBill.innerHTML = bill;

    printMoney.innerHTML = sum;
    notificationBill.style.display = "block";
})
let billBox = document.getElementById("bill-box");
let btnBill = document.getElementById("btn-bill");

function showBill() {


    btnBill.addEventListener("click", () => {
        loadMenu();
        billBox.style.display = "flex";
    })
}