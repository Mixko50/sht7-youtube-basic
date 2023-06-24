// this code will be executed after page load
var intervalLoop
var timeout
const loopElements = (query) => {
	const elements = document.querySelectorAll(query)
	elements.forEach((element) => {
		appendImage(
			element,
			'https://media.tenor.com/eJYeR7tKDs8AAAAC/ufabet-%E0%B8%9E%E0%B8%99%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C.gif'
		)
	})
}

const startInterval = () => {
	intervalLoop = setInterval(() => {
		loopElements('ytd-rich-item-renderer.style-scope')
		loopElements('ytd-compact-video-renderer')
		loopElements('ytd-comment-renderer')
	}, 3000)
}

const applyAdsStyle = (node) => {
	node.style.position = 'absolute'
	node.style.width = '100%'
	node.style.height = '100%'
	node.style.top = '0'
	node.style.left = '0'
	node.style.zIndex = '1000'
	node.style.backgroundRepeat = 'no-repeat'
	node.style.backgroundSize = 'cover'
}

const appendImage = (node, src) => {
	node.style.position = 'relative'

	if (!node.querySelector('.youtube-basic')) {
		const div = document.createElement('a')

		div.href = 'http://facebook.com'
		div.target = '_blank'
		div.className = 'youtube-basic'
		div.style.backgroundImage = 'url(' + src + ')'
		applyAdsStyle(div)

		div.addEventListener('click', () => {
			div.remove()
			clearInterval(intervalLoop)
			clearTimeout(timeout)
			timeout = setTimeout(() => {
				intervalLoop = startInterval()
			}, 3000)
		})

		node.appendChild(div)
	}
}

;(function () {
	startInterval()
})()
