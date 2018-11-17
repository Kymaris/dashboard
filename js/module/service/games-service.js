define(
	'service.games-service',
	['model.game-short-info'],
	function(GameShortInfo) {
		const pageSize = 4;
		const dataSource = [
			new GameShortInfo('PUGB Mobile', 'Deal 5000 damage to enemies with grenades.',  './image/games/PUGBMobile.jpg', 100, -300),
			new GameShortInfo('Mayhem Combat', 'Win 10 games per character Mike.', './image/games/MayhemCombat.jpg', 75, -200),
			new GameShortInfo('Burrito Bison: Launcha libre', 'Earn 10,000 coins.', './image/games/BurritoBison.jpg', 150, -400),
			new GameShortInfo('Battlelands Royale', 'Eliminate 10 opponents.', './image/games/BattlelandsRoyale.jpg', 100, -300),

			new GameShortInfo('pStar Knight', 'Earn 10,000 coins.',  './image/games/StarKnight.jpg', 50, -100, true),
			new GameShortInfo('pTalking Tom', 'Run 20,000 meters.', './image/games/TalkingTom.jpg', 100, -300, true),
			new GameShortInfo('pGuns of Boom', 'Eliminate 10 opponents from sniper rifle.', './image/games/GunsOfBoom.jpg', 150, -300, true),
			new GameShortInfo('pShadow Fight 2', 'Defeat you opponent without special moves.', './image/games/ShadowFight2.jpg', 100, -200, true),

			new GameShortInfo('pThis', 'Defeat you opponent without special moves.', './image/games/ShadowFight2.jpg', 100, -200, true),
			new GameShortInfo('pIs', 'Eliminate 10 opponents from sniper rifle.', './image/games/GunsOfBoom.jpg', 150, -300, true),
			new GameShortInfo('pPagination', 'Run 20,000 meters.', './image/games/TalkingTom.jpg', 100, -300, true),
			new GameShortInfo('pPage', 'Earn 10,000 coins.',  './image/games/StarKnight.jpg', 50, -100, true),
		]

		return new function() {
			let getModcData = function(skip, take, onlyPopular) {
				return dataSource.filter(q => !onlyPopular || q.popular).slice(skip, take);
			}
			let getLastPageNumber = function(onlyPopular) {
				var length = dataSource.filter(q => !onlyPopular || q.popular).length
				return Math.ceil(length / pageSize)
			}

			this.getGamesShortInfo = function(pageNumberArg, popular) {
				var pageNumber = typeof pageNumberArg === 'number' ? pageNumberArg : 1
				let take = pageNumber * pageSize
				let skip = take - pageSize 
				return new Promise(function(resolve) {
					setTimeout(function() {
						let items = getModcData(skip, take, popular)
						let pageCount = getLastPageNumber(popular)
						resolve({items, pageCount});
					}, 233);
				});
			}
		}
	}
);