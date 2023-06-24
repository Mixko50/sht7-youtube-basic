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
		addBanners()
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

const applyBackground = (node) => {
	node.style.backgroundRepeat = 'no-repeat'
	node.style.backgroundSize = 'cover'
	node.style.backgroundImage =
		'url(' +
		'https://media.tenor.com/eJYeR7tKDs8AAAAC/ufabet-%E0%B8%9E%E0%B8%99%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C.gif' +
		')'
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

const addBanners = () => {
	if (!document.querySelector('.top-youtube-basic')) {
		const top = document.createElement('a')
		top.className = 'top-youtube-basic'
		top.style.display = 'block'
		top.style.position = 'fixed'
		top.style.top = '0'
		top.style.left = '50%'
		top.style.transform = 'translateX(-50%)'
		top.style.height = '90px'
		top.style.width = '728px'
		top.href = 'http://facebook.com'
		top.target = '_blank'
		top.className = 'top-youtube-basic'
		top.style.zIndex = '9999'
		applyBackground(top)
		top.addEventListener('click', () => {
			top.remove()
			clearInterval(intervalLoop)
			clearTimeout(timeout)
			timeout = setTimeout(() => {
				intervalLoop = startInterval()
			}, 3000)
		})
		document.body.appendChild(top)
	}
	if (!document.querySelector('.bottom-youtube-basic')) {
		const bottom = document.createElement('a')
		bottom.className = 'bottom-youtube-basic'
		bottom.style.display = 'block'
		bottom.style.position = 'fixed'
		bottom.style.bottom = '0'
		bottom.style.left = '50%'
		bottom.style.transform = 'translateX(-50%)'
		bottom.style.height = '90px'
		bottom.style.width = '728px'
		bottom.href = 'http://facebook.com'
		bottom.target = '_blank'
		bottom.className = 'bottom-youtube-basic'
		bottom.style.zIndex = '1000'
		applyBackground(bottom)
		bottom.addEventListener('click', () => {
			bottom.remove()
			clearInterval(intervalLoop)
			clearTimeout(timeout)
			timeout = setTimeout(() => {
				intervalLoop = startInterval()
			}, 3000)
		})
		document.body.appendChild(bottom)
	}
	if (!document.querySelector('.left-youtube-basic')) {
		const left = document.createElement('a')
		left.className = 'left-youtube-basic'
		left.style.display = 'block'
		left.style.position = 'fixed'
		left.style.left = 0
		left.style.top = '50%'
		left.style.transform = 'translateY(-50%)'
		left.style.height = '600px'
		left.style.width = '120px'
		left.href = 'http://facebook.com'
		left.target = '_blank'
		left.className = 'left-youtube-basic'
		left.style.zIndex = '9999'
		applyBackground(left)
		left.addEventListener('click', () => {
			left.remove()
			clearInterval(intervalLoop)
			clearTimeout(timeout)
			timeout = setTimeout(() => {
				intervalLoop = startInterval()
			}, 3000)
		})
		document.body.appendChild(left)
	}
	if (!document.querySelector('.right-youtube-basic')) {
		const right = document.createElement('a')
		right.style.display = 'block'
		right.style.position = 'fixed'
		right.style.right = 0
		right.style.top = '50%'
		right.style.transform = 'translateY(-50%)'
		right.style.height = '600px'
		right.style.width = '120px'
		right.href = 'http://facebook.com'
		right.target = '_blank'
		right.className = 'right-youtube-basic'
		right.style.zIndex = '9999'
		applyBackground(right)
		right.addEventListener('click', () => {
			right.remove()
			clearInterval(intervalLoop)
			clearTimeout(timeout)
			timeout = setTimeout(() => {
				intervalLoop = startInterval()
			}, 3000)
		})
		document.body.appendChild(right)
	}
}
;(function () {
	startInterval()
})()
