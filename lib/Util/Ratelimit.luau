local Clock = require(script.Parent.Clock)

return function<T>(Limit: number, Interval: number)
	local Map = {} :: { [T]: number }
	local Keyless = 0

	local RatelimitClock
	RatelimitClock = Clock.new(Interval, function()
		Keyless = 0
		table.clear(Map)

		RatelimitClock:Pause()
	end)

	RatelimitClock:Pause()

	return function(Key: T?)
		if Key then
			local Count = Map[Key] or 0

			if Count > Limit then
				return false
			else
				Map[Key] = Count + 1
				RatelimitClock:Resume()

				return true
			end
		else
			if Keyless > Limit then
				return false
			else
				Keyless = Keyless + 1
				RatelimitClock:Resume()

				return true
			end
		end
	end
end
