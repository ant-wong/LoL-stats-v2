const express = require('express')
			router = express.Router()


/* LEAGUEJS API */
process.env.LEAGUE_API_PLATFORM_ID = 'na1'

const LeagueJs = require('leaguejs')
const api = new LeagueJs('RGAPI-1c098ee9-8f24-486a-9b6f-fecd8a94b62c')


router.get('/', async (req, res ) => {
	try { 
		let summoner = await api.Summoner.gettingByName('antwonagsadfggjv')
		res.send(await summoner)
	} catch(error) {
		res.send(error)
	}
})


module.exports = router