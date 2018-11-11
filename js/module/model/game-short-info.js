define(
	'model.game-short-info',
	[],
	function() {
		class GameShortInfo {
			constructor(title, shortDesc, imagePath, coins, energy) {
				this.title = title;
				this.shortDescription = shortDesc;
				this.image = imagePath;
				this.coinsCost = coins;
				this.energyCost = energy;
			}
		}
		return GameShortInfo;
	}
);