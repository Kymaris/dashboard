define(
	'widget.games-list-popular',
	['component.games-list-component'],
	function(gamesListComponent) {
		return new function() {
			this.init = function() {				
				var popularGameList = document.querySelector('.games.popular section.items')
				var pageNumberPopular = parseInt(document.querySelector('.games.popular .pagination').getAttribute('page-num'))
				if (!popularGameList || !pageNumberPopular) 
					return;
				gamesListComponent.loadPage(pageNumberPopular, popular=true).then(function(html) {
					popularGameList.innerHTML = html
				});
			}
		}
	}
)