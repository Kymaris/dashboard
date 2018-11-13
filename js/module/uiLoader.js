define(
	"uiLoader",
	[
		"widget.language-select",
		"widget.sitenav-details",
		"widget.theme-switcher",
		"widget.games-list",
		"widget.games-list-popular",
		"widget.pagination",
		"widget.pagination-popular"
	],
	function(languageSelect, sitenavDetails, themeSelector, gamesList, gameListPopular, pagination, paginationPopular) {
		return new function() {

			function documentReady() {
				languageSelect.init();
				sitenavDetails.init();
				themeSelector.init();
				gamesList.init();
				gameListPopular.init();
				pagination.init();
				paginationPopular.init();
			}

			this.init = function() {
				if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
					documentReady();
				} else {
					document.addEventListener("DOMContentLoaded", documentReady);
				}
			};
		};
	}
)