define(
	"uiLoader",
	[
		"widget.language-select",
		"widget.sitenav-details",
		"widget.theme-switcher",
		"widget.games-list",
		"widget.games-list-popular",
	],
	function(languageSelect, sitenavDetails, themeSelector, gamesList, gameListPopular) {
		return new function() {

			function documentReady() {
				languageSelect.init();
				sitenavDetails.init();
				themeSelector.init();
				gamesList.init();
				gameListPopular.init();
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