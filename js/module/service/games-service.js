define(
	'service.games-service',
	['model.game-short-info'],
	function(GameShortInfo) {
		const defaultPageSize = 4;
		const dataSource = [
			new GameShortInfo('PUGB Mobile', 'Deal 5000 damage to enemies with grenades.',  './image/games/PUGBMobile.jpg', 100, -300),
			new GameShortInfo('Mayhem Combat', 'Win 10 games per character Mike.', './image/games/MayhemCombat.jpg', 75, -200),
			new GameShortInfo('Burrito Bison: Launcha libre', 'Earn 10,000 coins.', './image/games/BurritoBison.jpg', 150, -400),
			new GameShortInfo('Battlelands Royale', 'Eliminate 10 opponents.', './image/games/BattlelandsRoyale.jpg', 100, -300),

			new GameShortInfo('Star Knight', 'Earn 10,000 coins.',  './image/games/StarKnight.jpg', 50, -100, true),
			new GameShortInfo('Talking Tom', 'Run 20,000 meters.', './image/games/TalkingTom.jpg', 100, -300, true),
			new GameShortInfo('Guns of Boom', 'Eliminate 10 opponents from sniper rifle.', './image/games/GunsOfBoom.jpg', 150, -300, true),
			new GameShortInfo('Shadow Fight 2', 'Defeat you opponent without special moves.', './image/games/ShadowFight2.jpg', 100, -200, true),

			new GameShortInfo('This', 'Defeat you opponent without special moves.', './image/games/ShadowFight2.jpg', 100, -200, true),
			new GameShortInfo('Is', 'Eliminate 10 opponents from sniper rifle.', './image/games/GunsOfBoom.jpg', 150, -300, true),
			new GameShortInfo('Pagination', 'Run 20,000 meters.', './image/games/TalkingTom.jpg', 100, -300, true),
			new GameShortInfo('Page', 'Earn 10,000 coins.',  './image/games/StarKnight.jpg', 50, -100, true),
		]

		return new function() {
			let getModcData = function(skip, take, popular) {
				return dataSource.filter(q => q.popular >= popular).slice(skip, take);
			}

			var gamesList = document.querySelector('.games .pagination')
			if (!gamesList.getAttribute('count-page'))
			{
				var countPage = Math.ceil(dataSource.length / defaultPageSize)
				document.querySelector('.games .pagination').setAttribute('count-page', countPage)
			}
			var gamesListPopular = document.querySelector('.games.popular .pagination')
			if (!gamesListPopular.getAttribute('count-page'))
			{
				var countPage = Math.ceil(dataSource.filter(q => q.popular).length / defaultPageSize)
				gamesListPopular.setAttribute('count-page', countPage)
			}

			this.getGamesShortInfo = function(skipArg, takeArg, popularArg) {
				let skip = typeof skipArg === 'number' ? skipArg : 0;
				let take = typeof takeArg === 'number' ? takeArg : defaultPageSize;
				return new Promise(function(resolve, reject) {
					setTimeout(function() {
						let result = getModcData(skip, take, popularArg);
						resolve(result);
					}, 233);
				});
			}
		}
	}
);