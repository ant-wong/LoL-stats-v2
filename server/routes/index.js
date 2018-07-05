const express = require('express')
			router = express.Router()


/* LEAGUEJS API */
process.env.LEAGUE_API_PLATFORM_ID = 'na1'

const LeagueJs = require('leaguejs')
const api = new LeagueJs('RGAPI-1c098ee9-8f24-486a-9b6f-fecd8a94b62c')

/* SINGLE SUMMONER */
router.get('/', async (req, res ) => {
	try { 
		let summoner = await api.Summoner.gettingByName('BFY Meowington')
		res.send(await summoner)
	} catch(error) {
		res.send(error)
	}
})

/* MATCHES */
router.get('/matches', async (req, res) => {
	try {
		let matches = await api.Match.gettingListByAccount(215942119)
		let recentMatches = await matches.matches.splice(0, 10)

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

		res.send(await recentMatches)
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