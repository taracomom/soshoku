function generateDecoratedText(style) {
    const userText = document.getElementById("userText").value;
    let resultText = '';

    const longestLineLength = Math.max(...userText.split('\n').map(line => line.length));


        const adjustBorderStyle = (baseTop, middle, baseBottom, length) => {
            let adjustedMiddle = middle.repeat(length); 
            let adjustedTop = baseTop.charAt(0) + adjustedMiddle + baseTop.charAt(baseTop.length - 1);
            let adjustedBottom = baseBottom.charAt(0) + adjustedMiddle + baseBottom.charAt(baseBottom.length - 1);
            return adjustedTop + '\n' + userText + '\n' + adjustedBottom;
        };

    switch (style) {
        case 'style1':
            resultText = `◤${userText}◢`;
            break;
        case 'style3':
            if (longestLineLength <= 5) {
                resultText = `◤◢◤◢◤◢◤◢\n${userText}\n◤◢◤◢◤◢◤◢`;
            } else {
                let middle = '◤◢'.repeat(Math.ceil(longestLineLength / 2));
                resultText = `${middle}\n${userText}\n${middle}`;
            }
            break;
        case 'style2':
            resultText = `◤◢◤${userText}◢◤◢`;
            break;
        case 'style4':
            let topBorder4 = '◤' + '￣'.repeat(longestLineLength *0.9 ) + '◥';
            let bottomBorder4 = '◣' + '＿'.repeat(longestLineLength *0.9) + '◢';
            resultText = `${topBorder4}\n ${userText} \n${bottomBorder4}`;
            break;
        case 'style5':
            let topBorder5 = '┏' + '━'.repeat(longestLineLength) + '┓';
            let bottomBorder5 = '┗' + '━'.repeat(longestLineLength) + '┛';
            resultText = `${topBorder5}\n${userText}\n${bottomBorder5}`;
            break;
        case 'style6':
            resultText = adjustBorderStyle('◇', '━', '◇', longestLineLength);
            break;
        case 'style7':
            resultText = adjustBorderStyle('╋', '━', '╋', longestLineLength);
            break;
        case 'style8':
            resultText = adjustBorderStyle('■', '━', '■', longestLineLength);
            break;
        case 'style9':
            if (longestLineLength <= 5) {
                resultText = `▼△▼△▼\n${userText}\n▼△▼△▼`;
            } else {
                let middle = '▼△'.repeat(Math.ceil(longestLineLength / 2));
                resultText = `${middle}\n${userText}\n${middle}`;
            }
            break;
        default:
            resultText = userText;
    }

    document.getElementById("resultText").value = resultText;
}

function copyToClipboard() {
    const textarea = document.getElementById('resultText');
    const confirmation = document.getElementById('copyConfirmation');
    
    textarea.select();
    document.execCommand('copy');
    
    confirmation.textContent = 'テキストがコピーされました！';

    // 3秒後にメッセージを消す
    setTimeout(() => {
        confirmation.textContent = '';
    }, 3000);
}
$(document).ready(function(){
    $('#samplesContainer').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,  // 一度に表示するスライドの数を変更
        slidesToScroll: 1,
        arrows: true,  // 矢印
        prevArrow: "<button type='button' class='slick-prev'>Prev</button>",
        nextArrow: "<button type='button' class='slick-next'>Next</button>"
    });
    
});
