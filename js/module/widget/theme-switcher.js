define(
	'widget.theme-switcher',
	[],
	function() {
		var config = {
			selector: '#select-theme',
			targetElementSelector: '#common-wrapper',
			switchedOffCssClass: 'light-theme'
		}
		return new function() {
			var themeSelector = function(element, target) {
				element.addEventListener('change', function() {
					if (element.checked)
						target.classList.remove(config.switchedOffCssClass);
					else
						target.classList.add(config.switchedOffCssClass);
				});
			}

			this.init = function() {
				var checkbox = document.querySelector(config.selector),
					target = document.querySelector(config.targetElementSelector);
				if (checkbox && target)
					themeSelector(checkbox, target);
			}
		}
	}
)