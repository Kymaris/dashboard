define(
	'widget.games-list',
	['component.games-list-component', 'widget.paging-helper'],
	function(gamesListComponent, pagingHelper) {
		return new function() {
			this.init = function() {
				var gamesList = document.querySelector('.games .items')
				var pagination = document.querySelector('.games .pagination')
				
				var pageNumberOnClick = function(pageNumber) {
					return new Promise(function(resolve) {
						gamesListComponent.loadPage(pageNumber).then(function(searchResult) {
							gamesList.innerHTML = searchResult.html;
							resolve(searchResult.pageNumber)
						})
					})
				}

				gamesListComponent.loadPage(1).then(function(searchResult) {
					gamesList.innerHTML = searchResult.html
					pagingHelper.init(pagination, pageNumberOnClick, 1, searchResult.pageNumber)
				})
			}
		}
	}
)