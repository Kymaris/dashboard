define(
	'widget.games-list',
	['component.games-list-component'],
	function(gamesListComponent) {
		return new function() {
			this.init = function() {
				var gamesList = document.querySelector('section.items')
				if (!gamesList) 
					return;
				gamesListComponent.loadPage().then(function(html) {
					gamesList.innerHTML = html
				});
			}
		}
	}
)