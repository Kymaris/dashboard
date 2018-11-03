define(
	'widget.language-select',
	[],
	function() {
		var config = {
			selector: '.languages',
			flagsSelector: '.flags'
		}
		return new function() {
			var languageSelect = function(element) {
				var flags = element.querySelector(config.flagsSelector),
					select = element.getElementsByTagName('select')[0];
				if (!flags || !select)
					return;
				var options = select.getElementsByTagName('option');
				if (!options.length)
					return;
				var values = Array.from(options).map(option => option.value);
				select.addEventListener('change', event => {
					values.forEach(val => flags.classList.remove(val));
					flags.classList.add(select.value);
				});
			}

			this.init = function() {
				document.querySelectorAll(config.selector).forEach(language => languageSelect(language));
			}
		}
	}
);