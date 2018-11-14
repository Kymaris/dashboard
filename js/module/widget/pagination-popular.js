define(
	'widget.pagination-popular',
	['widget.games-list-popular'],
	function(widgetGamesListPopular) {
		return new function() {
			this.init = function() {
				var pagination = document.querySelector('.games.popular .pagination')
				if (!pagination)
					return
				var next = pagination.querySelector('.games .pagination .next')
				var prev = pagination.querySelector('.games .pagination .prev')
				if (!next || !prev)
					return;
				next.addEventListener('click', function(e) {
					e.preventDefault();
					var countPage = parseInt (pagination.getAttribute('count-page'))
					var pageNumber = parseInt(pagination.getAttribute('page-num'))
					pageNumber++
					if (pageNumber <= countPage)
					{
						pagination.setAttribute('page-num', pageNumber)
						widgetGamesListPopular.init();
					}
					if (countPage === pageNumber)
						next.setAttribute('disabled', "")
					prev.removeAttribute('disabled')
				})
				prev.addEventListener('click', function(e) {
					e.preventDefault();
					var pageNumber = parseInt(pagination.getAttribute('page-num'))
					pageNumber--
					if (pageNumber >= 1)
					{
						pagination.setAttribute('page-num', pageNumber)
						widgetGamesListPopular.init();
					}
					if (pageNumber === 1)
						prev.setAttribute('disabled', "")
					next.removeAttribute('disabled')
				})
			}
		}
	}
)