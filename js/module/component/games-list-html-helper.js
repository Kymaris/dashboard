define (
	'component.games-list-html-helper',
	[],
	function() {

		const html = `
<article class="item">
	<header>
		<img src="%%imagePath%%" />
		<button class="action">Action</button>
	</header>
	<div class="description">
		<h1>%%title%%</h1>
		<span>%%description%%</span>
	</div>
	<footer>
		<div class="add-coins">
			<img src="image/logo.svg" alt=""><span>%%coins%%</span>
		</div>
		<div class="energy">
			<img src="image/energy.svg" alt=""><span>%%energy%%</span>
		</div>
		<button class="accept">Accept</button>
	</footer>
</article>`;


		return new function() {
			var replacePlaceholder = function(html, placeholder, value) {
				var replacement = '%%' + placeholder + '%%'
				return html.replace(replacement, value)
			}
			this.create = function(data) {
				var result = ''
				data.forEach(game => {
					var gamesHtml = html
					gamesHtml = replacePlaceholder(gamesHtml, 'imagePath', game.image)
					gamesHtml = replacePlaceholder(gamesHtml, 'title', game.title)
					gamesHtml = replacePlaceholder(gamesHtml, 'description', game.shortDescription)
					gamesHtml = replacePlaceholder(gamesHtml, 'coins', game.coinsCost)
					gamesHtml = replacePlaceholder(gamesHtml, 'energy', game.energyCost)
					result += gamesHtml
				});
				
				return result;
			}
		}
	}
)