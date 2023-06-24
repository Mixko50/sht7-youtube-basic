// this code will be executed after page load
let intervalLoop
let timeout

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

const attachFakeButton = (node) => {
	const temp = document.createElement('div')
	temp.innerHTML = svg
	temp.style.position = 'absolute'
	temp.style.top = '0'
	temp.style.right = '0'
	temp.style.padding = '1rem'
	node.appendChild(temp)
}
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

const applyBannerStyle = (node, w, h, float, translate) => {
	node.target = '_blank'
	node.className = 'top-youtube-basic'
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

const applyDeleteListener = (node) => {
	node.addEventListener('click', () => {
		node.remove()
		clearInterval(intervalLoop)
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			clearInterval(intervalLoop)
			startInterval()
		}, 3000)
	})
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

		attachFakeButton(div)
		applyDeleteListener(div)

		node.appendChild(div)
	}
}

const addBanners = () => {
	if (!document.querySelector('.top-youtube-basic')) {
		const top = document.createElement('a')
		top.href = 'http://facebook.com'
		applyBannerStyle(top, '728px', '90px', { t: '0', l: '50%' }, 'translateX(-50%)')
		applyBackground(top)
		attachFakeButton(top)
		applyDeleteListener(top)
		document.body.appendChild(top)
	}
	if (!document.querySelector('.bottom-youtube-basic')) {
		const bottom = document.createElement('a')
		bottom.href = 'http://facebook.com'
		applyBannerStyle(bottom, '728px', '90px', { l: '50%', b: '0' }, 'translateX(-50%)')
		applyBackground(bottom)
		attachFakeButton(bottom)
		applyDeleteListener(bottom)
		document.body.appendChild(bottom)
	}
	if (!document.querySelector('.left-youtube-basic')) {
		const left = document.createElement('a')
		left.href = 'http://facebook.com'
		applyBannerStyle(left, '120px', '600px', { l: '0', t: '50%' }, 'translateY(-50%)')
		applyBackground(left)
		attachFakeButton(left)
		applyDeleteListener(left)
		document.body.appendChild(left)
	}
	if (!document.querySelector('.right-youtube-basic')) {
		const right = document.createElement('a')
		right.href = 'http://facebook.com'
		applyBannerStyle(right, '120px', '600px', { t: '50%', r: '0' }, 'translateY(-50%)')
		applyBackground(right)
		attachFakeButton(right)
		applyDeleteListener(right)
		document.body.appendChild(right)
	}
}
;(function () {
	startInterval()
})()
