const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:9999/public' : '.';
   
function renderHTML(componentHTML, preloadedState) {
	return `
		<!DOCTYPE html>
			<html>
			<head>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>Hello React</title>
					<link rel="stylesheet" href="${assetUrl}/assets/styles.css">
			</head>
			<body>
				<div id="react-view">${componentHTML}</div>
				<script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
				<script type="application/javascript" src="${assetUrl}/assets/bundle.js"></script>
			</body>
		</html>
	`; 
}

module.exports = renderHTML;