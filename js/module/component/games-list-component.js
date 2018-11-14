define (
	'component.games-list-component',
	['component.games-list-html-helper' ,'service.games-service'],
	function(gamesListHTMLHelper, gamesService) {
		return new function() {
			this.loadPage = function(pageNumber, popular=false) {
				return new Promise(function(resolve) {
					gamesService.getGamesShortInfo(pageNumber, popular)
						.then(function(games) {
							resolve(gamesListHTMLHelper.create(games))
						})
				})
			}
		}
	}
);