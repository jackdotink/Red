local Net = require(script.Net)

return {
	Server = Net.Server,
	Client = Net.Client,

	Promise = require(script.Util.Promise),
	Signal = require(script.Util.Signal),
	Clock = require(script.Util.Clock),
	Spawn = require(script.Util.Spawn),
}