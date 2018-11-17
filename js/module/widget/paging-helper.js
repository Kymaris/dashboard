define(
	'widget.paging-helper',
	[],
	function() {
		return new function() {
			this.init = function(paging, loadPageFn, pageNumber, lastPageNumber) {
				var lock = false,
					currentPageNumber = pageNumber,
					lastPageNumber = lastPageNumber,
					nextButton = paging.querySelector('.next'), 
					prevButton = paging.querySelector('.prev')
				if (nextButton) 
					nextButton.addEventListener('click', function() {
						if (lock)
							return;
						lock = true;
						currentPageNumber++
						if (currentPageNumber <= lastPageNumber)
							loadPageFn(currentPageNumber).then(function() {
								if (currentPageNumber === lastPageNumber)
									nextButton.setAttribute('disabled', '')
								prevButton.removeAttribute('disabled')
								lock = false;
							})
					})
				if (prevButton) 
					prevButton.addEventListener('click', function() {
						if (lock)
							return;
						lock = true;
						currentPageNumber--
						if (currentPageNumber > 0)
							loadPageFn(currentPageNumber).then(function() {
								if (currentPageNumber === 1)
									prevButton.setAttribute('disabled', '')
								nextButton.removeAttribute('disabled')
								lock = false;
							});
					}) 
			}
		}
	}
)