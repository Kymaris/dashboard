define(
	"uiLoader",
	["widget.language-select", "widget.sitenav-details"],
	function(languageSelect, sitenavDetails) {
		return new function() {

			function documentReady() {
				languageSelect.init();
				sitenavDetails.init();
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