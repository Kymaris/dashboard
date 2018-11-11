define(
	'service.games-service',
	['model.game-short-info'],
	function(GameShortInfo) {
		const defaultPageSize = 4;
		const dataSource = [
			new GameShortInfo('Huj Mobile', 'Deal 5000 damage to enemies with grenades.',  './image/questTmp.jpg', 100, -300),
			new GameShortInfo('PUGB Mobile', 'Deal 5000 damage to enemies with grenades.', './image/questTmp.jpg', 100, -300),
			new GameShortInfo('PUGB Mobile', 'Deal 5000 damage to enemies with grenades.', './image/questTmp.jpg', 100, -300),
			new GameShortInfo('PUGB Mobile', 'Deal 5000 damage to enemies with grenades.', './image/questTmp.jpg', 100, -300),
			new GameShortInfo('PUGB Mobile', 'Deal 5000 damage to enemies with grenades.', './image/questTmp.jpg', 100, -300),
			new GameShortInfo('PUGB Mobile', 'Deal 5000 damage to enemies with grenades.', './image/questTmp.jpg', 100, -300),
			new GameShortInfo('PUGB Mobile', 'Deal 5000 damage to enemies with grenades.', './image/questTmp.jpg', 100, -300),
			new GameShortInfo('PUGB Mobile', 'Deal 5000 damage to enemies with grenades.', './image/questTmp.jpg', 100, -300),
			new GameShortInfo('PUGB Mobile', 'Deal 5000 damage to enemies with grenades.', './image/questTmp.jpg', 100, -300)
		]

		return new function() {
			let getModcData = function(skip, take) {
				return dataSource.slice(skip, take);
			}

			this.getGamesShortInfo = function(skipArg, takeArg) {
				let skip = typeof skipArg === 'number' ? skipArg : 0;
				let take = typeof takeArg === 'number' ? takeArg : defaultPageSize;
				return new Promise(function(resolve, reject) {
					setTimeout(function() {
						let result = getModcData(skip, take);
						resolve(result);
					}, 433);
				});
			}
		}
	}
);