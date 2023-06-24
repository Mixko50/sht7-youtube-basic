// this code will be executed after page load
let intervalLoop
let timeout
let adsPool = {}

const svg = `
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   version="1.1"
   id="svg2"
   height="25"
   width="25"
   sodipodi:docname="close_icon_grey.svg"
   inkscape:export-filename="D:\Загрузки\close_icon_black2.svg.png"
   inkscape:export-xdpi="72.959999"
   inkscape:export-ydpi="72.959999"
   inkscape:version="0.92.3 (2405546, 2018-03-11)">
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1366"
     inkscape:window-height="706"
     id="namedview3731"
     showgrid="false"
     inkscape:zoom="15.245222"
     inkscape:cx="5.6822049"
     inkscape:cy="12.495936"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="imagebot_2" />
  <defs
     id="defs13" />
  <metadata
     id="imagebot_6">image/svg+xml<rdf:RDF>
  <cc:Work
     rdf:about="">
    <dc:format>image/svg+xml</dc:format>
    <dc:type
       rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
    <dc:title></dc:title>
  </cc:Work>
</rdf:RDF>
</metadata>
  <g
     transform="translate(3.9661017,3.5677966)"
     id="imagebot_2"
     label="Layer 1">
    <path
       inkscape:connector-curvature="0"
       stroke-miterlimit="4"
       d="M -2.5783352e-4,-0.00146808 17.435473,18.212367"
       id="imagebot_5"
       style="opacity:1;fill:#5f6368;stroke:#5f6368;stroke-width:3.23161912;stroke-linecap:round;stroke-miterlimit:4;fill-opacity:1;stroke-opacity:1" />
    <path
       inkscape:connector-curvature="0"
       stroke-miterlimit="4"
       d="M -2.5783352e-4,18.212367 17.435473,-0.00146808"
       id="imagebot_4"
       style="opacity:1;fill:#5f6368;stroke:#5f6368;stroke-width:3.23161912;stroke-linecap:round;stroke-miterlimit:4;fill-opacity:1;stroke-opacity:1" />
    <title
       id="title9">Layer 1</title>
  </g>
</svg>
`

const fetchData = async () => {
	const futureRes = await fetch('http://127.0.0.1:8080/api/ads')
	return await futureRes.json()
}

const attachFakeButton = (node) => {
	const temp = document.createElement('div')
	temp.innerHTML = svg
	temp.style.position = 'absolute'
	temp.style.top = '0'
	temp.style.right = '0'
	temp.style.padding = '1rem'
	node.appendChild(temp)
}

const randImage = (type) => {
	switch (type) {
		case 'large_rectangle_ads':
			return adsPool.large_rectangle_ads[Math.floor(Math.random() * adsPool.large_rectangle_ads.length)]
		case 'leaderboard_ads':
			return adsPool.leaderboard_ads[Math.floor(Math.random() * adsPool.leaderboard_ads.length)]
		case 'skyscraper_ads':
			return adsPool.skyscraper_ads[Math.floor(Math.random() * adsPool.skyscraper_ads.length)]
		default:
			return 'https://media.tenor.com/eJYeR7tKDs8AAAAC/ufabet-%E0%B8%9E%E0%B8%99%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C.gif'
	}
}

const loopElements = (query, type) => {
	const elements = document.querySelectorAll(query)
	elements.forEach((element) => {
		appendImage(element, randImage(type))
	})
}

const blockSkipButton = () => {
	if (document.querySelectorAll('.ytp-ad-preview-container.countdown-next-to-thumbnail').length > 0) {
		document.querySelector('span.ytp-ad-skip-button-container').remove()
	}
}

const startInterval = () => {
	intervalLoop = setInterval(() => {
		loopElements('ytd-rich-item-renderer.style-scope', 'large_rectangle_ads')
		loopElements('ytd-compact-video-renderer', 'leaderboard_ads')
		loopElements('ytd-comment-renderer', 'leaderboard_ads')
		addBanners()
		blockSkipButton()
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

const applyBannerStyle = (node, w, h, float, translate) => {
	node.target = '_blank'
	node.style.display = 'block'
	node.style.position = 'fixed'
	node.style.zIndex = '9999'
	node.style.width = w
	node.style.height = h
	if (float.t) node.style.top = float.t
	if (float.l) node.style.left = float.l
	if (float.r) node.style.right = float.r
	if (float.b) node.style.bottom = float.b
	node.style.transform = translate
}

const applyDeleteListener = (node, id) => {
	node.addEventListener('click', () => {
		node.remove()
		fetch('http://127.0.0.1:8080/api/track/' + id)
		clearInterval(intervalLoop)
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			clearInterval(intervalLoop)
			startInterval()
		}, 3000)
	})
}

const applyBackground = (node, src) => {
	node.style.backgroundRepeat = 'no-repeat'
	node.style.backgroundSize = 'cover'
	node.style.backgroundImage = 'url(' + src + ')'
}

const appendImage = (node, item) => {
	node.style.position = 'relative'
	if (!node.querySelector('.youtube-basic')) {
		const div = document.createElement('a')
		div.target = '_blank'
		div.className = 'youtube-basic'
		div.href = item.target_link
		div.style.backgroundImage = 'url(' + item.image_url + ')'
		applyAdsStyle(div)
		attachFakeButton(div)
		applyDeleteListener(div, item.id)
		node.appendChild(div)
	}
}

const addBanners = () => {
	if (!document.querySelector('.top-youtube-basic')) {
		const randItem = randImage('leaderboard_ads')
		const top = document.createElement('a')
		top.className = 'top-youtube-basic'
		top.href = randItem.target_link
		applyBannerStyle(top, '728px', '90px', { t: '0', l: '50%' }, 'translateX(-50%)')
		applyBackground(top, randItem.image_url)
		attachFakeButton(top)
		applyDeleteListener(top, randItem.id)
		document.body.appendChild(top)
	}
	if (!document.querySelector('.bottom-youtube-basic')) {
		const randItem = randImage('leaderboard_ads')
		const bottom = document.createElement('a')
		bottom.className = 'bottom-youtube-basic'
		bottom.href = randItem.target_link
		applyBannerStyle(bottom, '728px', '90px', { l: '50%', b: '0' }, 'translateX(-50%)')
		applyBackground(bottom, randItem.image_url)
		attachFakeButton(bottom)
		applyDeleteListener(bottom, randItem.id)
		document.body.appendChild(bottom)
	}
	if (!document.querySelector('.left-youtube-basic')) {
		const randItem = randImage('skyscraper_ads')
		const left = document.createElement('a')
		left.className = 'left-youtube-basic'
		left.href = randItem.target_link
		applyBannerStyle(left, '120px', '600px', { l: '0', t: '50%' }, 'translateY(-50%)')
		applyBackground(left, randItem.image_url)
		attachFakeButton(left)
		applyDeleteListener(left, randItem.id)
		document.body.appendChild(left)
	}
	if (!document.querySelector('.right-youtube-basic')) {
		const randItem = randImage('skyscraper_ads')
		const right = document.createElement('a')
		right.className = 'right-youtube-basic'
		right.href = randItem.target_link
		applyBannerStyle(right, '120px', '600px', { t: '50%', r: '0' }, 'translateY(-50%)')
		applyBackground(right, randItem.image_url)
		attachFakeButton(right)
		applyDeleteListener(right, randItem.id)
		document.body.appendChild(right)
	}
}
;(function () {
	fetchData().then((data) => {
		adsPool = data.data
		startInterval()
	})
})()
