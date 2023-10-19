# better-headless-haxball

To install:

let script = document.createElement("script")
script.defer = true
script.type = "text/javascript"
script.src = "https://rawcdn.githack.com/HakYiyenHekYer/better-headless-haxball/ba35d7bf08280c0d535ffe0b577bdc05bc5fbd64/headless-min.js"
document.querySelector("iframe").contentDocument.getElementsByTagName("script")[2].remove()
document.querySelector("iframe").contentDocument.body.appendChild(script)