define(
	"uiLoader",
	["widget.language-select", "widget.sitenav-details", "widget.theme-switcher"],
	function(languageSelect, sitenavDetails, themeSelector) {
		return new function() {

			function documentReady() {
				languageSelect.init();
				sitenavDetails.init();
				themeSelector.init();
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