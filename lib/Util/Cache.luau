return function<K, V...>(Interval: number, Callback: (K) -> V...): (K) -> V...
	local CacheMap = {}
	local ThreadMap = {}

	return (
		function(Key: K)
			local Value = CacheMap[Key]

			if Value then
				return unpack(Value)
			else
				Value = { Callback(Key) }

				CacheMap[Key] = Value
				ThreadMap[Key] = task.delay(Interval, function()
					CacheMap[Key] = nil
					ThreadMap[Key] = nil
				end)

				return unpack(Value)
			end
		end :: any
	) :: (K) -> V...
end
