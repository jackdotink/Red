local Clock = require(script.Parent.Clock)

return function<K, V...>(Interval: number, Callback: (K) -> V...): (K) -> V...
	local Cached = {}

	local CacheClock
	CacheClock = Clock.new(Interval, function()
		table.clear(Cached)

		CacheClock:Pause()
	end)

	CacheClock:Pause()

	return (
		function(Key: K)
			local Value = Cached[Key]

			if Value then
				return unpack(Value)
			else
				Value = { Callback(Key) }
				Cached[Key] = Value
				CacheClock:Resume()

				return unpack(Value)
			end
		end :: any
	) :: (K) -> V...
end
