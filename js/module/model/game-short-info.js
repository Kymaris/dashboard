define(
	'model.game-short-info',
	[],
	function() {
		class GameShortInfo {
			constructor(title, shortDesc, imagePath, coins, energy, popular=false) {
				this.title = title;
				this.shortDescription = shortDesc;
				this.image = imagePath;
				this.coinsCost = coins;
				this.energyCost = energy;
				this.popular = popular;
			}
		}
		return GameShortInfo;
	}
);