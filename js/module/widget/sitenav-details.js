define(
	'widget.sitenav-details',
	[],
	function() {
		var config = {
			selector: '.details-list',
			headerSelector: 'a',
			listSelector: 'ul',
			collapsedCssClass: 'collapsed'
		}
		return new function() {
			var detailsList = function(element) {
				var header = element.querySelector(config.headerSelector),
					listSelector = element.querySelector(config.listSelector);
				if (!header || !listSelector)
					return;
				header.addEventListener('click', function(e) {
					e.preventDefault();
					if (element.classList.contains(config.collapsedCssClass))
						element.classList.remove(config.collapsedCssClass)
					else
						element.classList.add(config.collapsedCssClass);
				});
			}

			this.init = function() {
				document.querySelectorAll(config.selector).forEach(detailsList);
			}
		}
	}
);