define (
	'component.games-list-component',
	['component.games-list-html-helper' ,'service.games-service'],
	function(gamesListHTMLHelper, gamesService) {
		const pageSize = 4;
		return new function() {
			this.loadPage = function(pageNum, popular=false) {
				return new Promise(function(resolve) {
					let take = pageNum * pageSize
					let skip = take - pageSize
					gamesService.getGamesShortInfo(skip, take, popular)
						.then(function(games) {
							resolve(gamesListHTMLHelper.create(games))
						})
				})
			}
		}
	}
);