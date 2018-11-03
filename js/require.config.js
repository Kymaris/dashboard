(function () {
	var modulePath = 'module';

	function paths(arr, prefix) {
		var res = {},
			len = arr.length;
		for (var i = 0; i < len; i++) {
			var row = arr[i],
				typeofRow = typeof row,
				hasPrefix = typeof prefix === 'string';
			switch (typeofRow) {
				case 'string':
					var path = '';
					if (hasPrefix) {
						path = modulePath + '/' + prefix + '/' + row;
						row = prefix + '.' + row;
					} else {
						path = modulePath + '/' + row;
					}
					res[row] = path;
					break;
				case 'object':
					var k;
					for (k in row) break;
					var sub = row[k],
						subPrefix = k;
					if (!Array.isArray(sub))
						break;
					if (hasPrefix)
						subPrefix = prefix + '.' + subPrefix;
					var subContent = paths(sub, subPrefix);
					for (k in subContent) {
						res[k] = subContent[k];
					}
					break;
			}
		}
		return res;
	};

	require.config({
		paths: paths([
			'uiLoader',
			{ 'widget': ['language-select', 'sitenav-details'] }
		]),
		shim: {
			'resource_about_amd_en': { exports: 'res.aboutAmd' }
		}
	});
})();