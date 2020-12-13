getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            console.log(object)
            username.textContent = object.name
        }
    }
    request.send()
}



getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseXML);
            const dom = request.responseXML
            dom.getElementsByTagName('warning')[0].textContent
        }

    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html');
    request.onload = () => {

        // 创建div标签
        const div = document.createElement('div')
        // 填写div内容
        div.innerHTML = request.response
        // 插到body里面
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log('111')
    }
    request.send()
}
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css');
    request.onload = () => {

        // 创建style标签
        const style = document.createElement('style')
        // 填写style内容
        style.innerHTML = request.response
        // 插到head里面
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('111')
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        console.log('111')
        // 创建style标签
        const script = document.createElement('script')
        // 填写style内容
        script.innerHTML = request.response
        // 插到head里面
        document.body.appendChild(script)
    }
    request.onerror = () => {

    }
    request.send()
}