const display = document.querySelectorAll(".display span")[1];
const display_sub = document.querySelectorAll(".display span")[0];

const isResult = (num) => {
    return num[0] === "=" ? 1 : 0;
}
const isNegative = (num) => {
    return num[0] === "-" ? 1 : 0;
}

document.addEventListener("DOMContentLoaded", () => {
    // number 버튼 (1, 2, 3, 4, 5, 6, 7, 8, 9, 0) 클릭 이벤트
    document.querySelectorAll(".number button").forEach(numberButton => {
        numberButton.addEventListener("click", () => {
            if (!isResult(display.textContent)) {
                display.textContent += numberButton.textContent;
            }
        })
    })

    // operator 버튼 (+, -, ×, ÷) 클릭 이벤트
    document.querySelectorAll(".operator button").forEach(operatorButton => {
        operatorButton.addEventListener("click", () => {
            if (display.textContent) {
                if (isResult(display.textContent)) {
                    display_sub.textContent = display.textContent.substring(1) + " " + operatorButton.textContent + " ";
                }
                else {
                    display_sub.textContent += display.textContent + " " + operatorButton.textContent + " ";
                }
                display.textContent = "";
            }
        })
    })

    // calculate 버튼 (=) 클릭 이벤트
    document.querySelector(".calculate button").addEventListener("click", () => {
        if (display.textContent && !isResult(display.textContent)) {
            display_sub.textContent += display.textContent;
            display.textContent = "= result";
        }
    })

    // back 버튼 (<-) 클릭 이벤트
    document.querySelector(".back button").addEventListener("click", () => {
        if (display.textContent) {
            display.textContent = display.textContent.substring(0, display.textContent.length - 1);
        }
    })

    // cancel 버튼 (C) 클릭 이벤트
    document.querySelector(".cancel button").addEventListener("click", () => {
        display.textContent = "";
        display_sub.textContent = "";
    })
    
    // toggle-sign (+/-) 클릭 이벤트
    document.querySelector(".toggle-sign button").addEventListener("click", () => {
        if (display.textContent) {
            if (isResult(display.textContent)) {
                display_sub.textContent = "";
                display.textContent = isNegative(display.textContent.substring(2)) ? display.textContent.substring(3) : "-" + display.textContent.substring(2);
            }
            else {
                display.textContent = isNegative(display.textContent) ? display.textContent.substring(1) : "-" + display.textContent;
            }
        }
    })
})