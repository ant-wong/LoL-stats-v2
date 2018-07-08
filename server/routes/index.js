const express = require('express')
			router = express.Router()


/* LEAGUEJS API */
process.env.LEAGUE_API_PLATFORM_ID = 'na1'

const LeagueJs = require('leaguejs')
const api = new LeagueJs('RGAPI-5d604ac7-c727-4580-9ca8-8357af42cfde')

/* SINGLE SUMMONER */
router.get('/', async (req, res) => {
	const { user } = req.query 
	try { 
		let summoner = await api.Summoner.gettingByName(user)
		res.send(await summoner)
	} catch(error) {
		res.send(error)
	}
})

/* MATCHES */
router.get('/matches', (req, res) => {
	const { id } = req.query
	/* CONSTRUCTOR TO ORGANIZE DATA */
	function Match(win, length, champion, runes, items, kda, totalCreep, creepPerMin) {
		this.win = win
		this.length = length
		this.champion = champion
		this.runes =  runes
		this.itmes =  items
		this.kda =  kda
		this.totalCreep = totalCreep
		this.creepPerMin = creepPerMin
	}
	
	let matchList = []

	getMatches = async () => {
		let matches = await api.Match.gettingListByAccount(id)
		let recentMatches = await matches.matches.splice(0, 10)
		return recentMatches
	}

	try {
		console.log(getMatches())
		// Object.values(getMatches()).map((game) => {
		// 	let newGame = new Match()
		// 	// let champion = api.StaticData.gettingChampionById(game.champion)
		// 	// console.log(champion)
		// 	console.log(game)
		// })

		/* 
			LETS GET MATCH DETAILS HERE 

			LOOP THROUGH EACH MATCH AND CALL FOR STATIC DATA:
				CHAMPION
				RUNES
				ITEMS
		*/

		/* 
			CREATE NEW DATA SET TO SEND OVER TO CLIENT 
		
			DATA:
				OUTCOME
				CHAMPION
				CHAMP LVL
				RUNES
				ITEMS
				KDA
				GAME LENGTH
				CREEP SCORE TOTAL
				CREEP PER MIN
		*/

		res.send(matchList)
	} catch(error) {
		res.send(error)
	}
})

/* CHAMPION */
router.get('/champion', async (req, res) => {
	try {
		let champ = await api.StaticData.gettingChampionById(104)
		res.send(await champ)
	} catch(error) {
		console.log(error)
		res.send(error)
	}
})

/* STATIC DATA */
router.get('/static', async (req, res) => {
	/* MATCH DETAILS */
	// try {
	// 	let details = await api.Match.gettingById(2817956972)
	// 	res.send(details)
	// } catch(error) {
	// 	res.send(error)
	// }

	/* ITEMS */
	// try {
	// 	let items = await api.StaticData.gettingItems()
	// 	res.send(await items.data)
	// } catch(error) {
	// 	res.send(error)
	// }

	/* RUNES */
	// try {
	// 	let data = await api.StaticData.gettingRunes()
	// 	res.send(await data.data)
	// } catch(error) {
	// 	res.send(error)
	// }
})


module.exports = router