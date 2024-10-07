"use strict";

var exercises = {
  areasquare: {
    title: "Area Square",
    id: "area-square"
  },
  learningresult: {
    title: "Learning Result",
    id: "learning-result"
  },
  findyear: {
    title: "Find Year Negative",
    id: "find-year"
  },
  finddayofmonth: {
    title: "Find Day of Month",
    id: "find-day-of-month"
  },
  calculativenumber: {
    title: "Calculative on Number Chains",
    id: "calculative-on-number-chains"
  },
  printchapter: {
    title: "Print Nine Chapter",
    id: "print-chapter"
  },
  tostring: {
    title: "To String Number",
    id: "convert-string"
  },
  bill: {
    title: "Bill",
    id: "area-square"
  },
  finddayofweek: {
    title: "Find Day of Week",
    id: "area-square"
  }
};
var arrCan = ["Canh", "Tân", "Nhâm", "Quí", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
var arrChi = [{
  chi: "Tý",
  image: "./images/ti.jpg"
}, {
  chi: "Sửu",
  image: "./images/suu.jpg"
}, {
  chi: "Dần",
  image: "./images/dan.jpg"
}, {
  chi: "Mão",
  image: "./images/mao.jpg"
}, {
  chi: "Thìn",
  image: "./images/thin.jpg"
}, {
  chi: "Tỵ",
  image: "./images/ty.jpg"
}, {
  chi: "Ngọ",
  image: "./images/ngo.png"
}, {
  chi: "Mùi",
  image: "./images/mui.jpg"
}, {
  chi: "Thân",
  image: "./images/than.jpg"
}, {
  chi: "Dậu",
  image: "./images/dau.png"
}, {
  chi: "Tuất",
  image: "./images/tuat.jpg"
}, {
  chi: "Hợi",
  image: "./images/hoi.jpeg"
}];
var btnBar = document.getElementById("nav-bar");
var header = document.querySelector(".header");
var nav = document.querySelector(".nav");
var more = document.querySelector(".more");
var iconContainer = document.querySelector(".icon");
var linksContainer = document.querySelector(".links-container");
var links = document.querySelector(".links");
var banner = document.querySelector(".banner");
var heightHeader = header.getBoundingClientRect().height;

function loadTimeCurrent() {
  var time = new Date();
  var seconds = time.getSeconds();
  var minute = time.getMinutes();
  var hour = time.getHours();
  var day = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("minutes").innerHTML = minute;
  document.getElementById("hours").innerHTML = hour;
  document.querySelector(".day").innerHTML = "".concat(day);
  document.querySelector(".month").innerHTML = "".concat(month + 1);
  document.querySelector(".year").innerHTML = "".concat(year);
}

var myTime = setInterval(loadTimeCurrent, 1000);
window.addEventListener("scroll", function () {
  var offSetY = window.pageYOffset;

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
});
more.addEventListener("click", function () {
  if (iconContainer.classList.contains("show-icon")) {
    iconContainer.classList.remove("show-icon");
  } else {
    iconContainer.classList.add("show-icon");
  }
});
btnBar.addEventListener("click", function () {
  var heightLinksContainer = linksContainer.getBoundingClientRect().height;
  var heightLinks = links.getBoundingClientRect().height;

  if (heightLinksContainer < 10) {
    linksContainer.style.height = "".concat(heightLinks, "px");
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
});
var scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var id = e.currentTarget.getAttribute("href").slice(1);
    var element = document.getElementById(id);
    var position = element.offsetTop - heightHeader;
    window.scrollTo({
      left: 0,
      top: position
    });
    linksContainer.style.height = 0;
    banner.style.paddingTop = "25vh";
    btnBar.style.transform = "rotate(0deg)";
    var title = e.currentTarget.dataset.id;
    document.getElementById("exercise-name").innerHTML = exercises[title].title;

    for (var proper in exercises) {
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
    }
  });
});

function areaSquare() {
  var length = document.getElementById("chieudai").value;
  var width = document.getElementById("chieurong").value;
  var area = length * width;
  document.getElementById("dientich").value = area;
}

function learningResult() {
  var hk1 = parseInt(document.getElementById("diemhk1").value);
  var hk2 = parseInt(document.getElementById("diemhk2").value);
  var diemtb = (hk1 + hk2 * 2) / 3;
  diemtb = diemtb.toFixed(2);
  document.getElementById("diemtb").value = diemtb;
  var ketqua = document.getElementById("ketqua");

  if (diemtb >= 5) {
    ketqua.value = "Được Lên Lớp";
  } else {
    ketqua.value = "Ở Lại Lớp";
  }

  var hocluc = document.getElementById("hocluc");

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
  var amLich = "";
  var duongLich = parseInt(document.getElementById("duonglich").value);
  var can = arrCan[duongLich % 10];
  var chi = arrChi[duongLich % 12].chi;
  var img = arrChi[duongLich % 12].image;
  amLich = can + " " + chi;
  document.getElementById("amlich").value = amLich;
  document.getElementById("img-chi").setAttribute("src", img);
}

function getDayOfMonth() {
  var days = function days(month, year) {
    return new Date(year, month, 0).getDate();
  };

  var month = parseInt(document.getElementById("nhapthang").value);
  var year = parseInt(document.getElementById("nhapnam").value);
  var day = days(month, year);
  var result = "Th\xE1ng ".concat(month, " n\u0103m ").concat(year, " c\xF3 ").concat(day, " ng\xE0y .");
  document.getElementById("xuatngay").value = result;
}

function calculativeNumberChains() {
  var numberStart = parseInt(document.getElementById("numstart").value);
  var numberEnd = parseInt(document.getElementById("numend").value);
  var arr = [];

  for (var i = numberStart; i <= numberEnd; i++) {
    arr.push(i);
  }

  var sum = arr.reduce(function (sum, item) {
    return sum + item;
  });
  var multi = arr.reduce(function (multi, item) {
    return multi * item;
  });
  var sumEven = arr.filter(function (item) {
    return item % 2 == 0;
  }).reduce(function (sum, item) {
    return sum + item;
  });
  var sumOdd = arr.filter(function (item) {
    return item % 2 == 1;
  }).reduce(function (sum, item) {
    return sum + item;
  });
  document.getElementById("sumnumber").value = sum;
  document.getElementById("multinumber").value = multi;
  document.getElementById("sumevennum").value = sumEven;
  document.getElementById("sumoddnum").value = sumOdd;
}

function printChapter() {
  var numberStart = parseInt(document.getElementById("chapter-start").value);
  var numberEnd = parseInt(document.getElementById("chapter-end").value);
  var resultChapter = document.getElementById("result-chapter");
  var strResult = "";
  var count = 0;

  for (var i = numberStart; i <= numberEnd; i++) {
    count++;
    strResult += "\n        <ul class=\"chapter\">\n            <li>".concat(i, " x 1 = ").concat(i * 1, "</li>\n            <li>").concat(i, " x 2 = ").concat(i * 2, "</li>\n            <li>").concat(i, " x 3 = ").concat(i * 3, "</li>\n            <li>").concat(i, " x 4 = ").concat(i * 4, "</li>\n            <li>").concat(i, " x 5 = ").concat(i * 5, "</li>\n            <li>").concat(i, " x 6 = ").concat(i * 6, "</li>\n            <li>").concat(i, " x 7 = ").concat(i * 7, "</li>\n            <li>").concat(i, " x 8 = ").concat(i * 8, "</li>\n            <li>").concat(i, " x 9 = ").concat(i * 9, "</li>\n            <li>").concat(i, " x 10 = ").concat(i * 10, "</li>\n        </ul>");
  }

  resultChapter.innerHTML = strResult;
}

function conVertToString() {
  var inputNumber = document.getElementById("input-number-to-convert").value;
  var number = parseInt(inputNumber);
  var outputString = document.getElementById("output-string");
  var numberArr = inputNumber.split("");
  var arrUnit = ["", "", "Nghìn ", "Triệu ", "Tỉ "];
  var numStr = ["Không ", "Một ", "Hai ", "Ba ", "Bốn ", "Năm ", "Sáu ", "Bảy ", "Tám ", "Chín "];
  var strTemp = "";

  while (numberArr.length % 3 !== 0) {
    numberArr.unshift("0");
  }

  var arrNested = [];

  while (numberArr.length > 0) {
    var arrTemp = numberArr.splice(0, 3);
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
    var result = "";
    var numberTemp = parseInt(numberArr.reduce(function (value, item) {
      return value + item;
    }));

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