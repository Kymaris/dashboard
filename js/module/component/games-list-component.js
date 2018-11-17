define (
	'component.games-list-component',
	['component.games-list-html-helper' ,'service.games-service'],
	function(gamesListHTMLHelper, gamesService) {
		return new function() {
			this.loadPage = function(pageNumber, popular=false) {
				return new Promise(function(resolve) {
					gamesService.getGamesShortInfo(pageNumber, popular)
						.then(function(searchResult) {
							var html = gamesListHTMLHelper.create(searchResult.items)
							var htmlSearchResult = {html, pageNumber: searchResult.pageCount}
							resolve(htmlSearchResult)
						})
				})
			}
		}
	}
);