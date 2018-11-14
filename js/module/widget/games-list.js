define(
	'widget.games-list',
	['component.games-list-component'],
	function(gamesListComponent) {
		return new function() {
			this.init = function() {
				var gamesList = document.querySelector('.games .items')
				var pageNumber = parseInt(document.querySelector('.games .pagination').getAttribute('page-num'))
				if (!gamesList || !pageNumber) 
					return;
				gamesListComponent.loadPage(pageNumber).then(function(html) {
					gamesList.innerHTML = html
				});	
			}
		}
	}
)