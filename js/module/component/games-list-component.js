define (
	'component.games-list-component',
	['component.games-list-html-helper' ,'service.games-service'],
	function(gamesListHTMLHelper, gamesService) {
		const pageSize = 4;
		return new function() {
			this.loadPage = function() {
				return new Promise(function(resolve) {
					gamesService.getGamesShortInfo(0, pageSize)
						.then(function(games) {
							resolve(gamesListHTMLHelper.create(games))
						})
				})
			}
		}
	}
);