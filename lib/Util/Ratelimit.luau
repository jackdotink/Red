return function<T>(Limit: number, Interval: number)
	local CountMap = {} :: { [T]: number }
	local ThreadMap = {} :: { [T]: thread }

	local CountKeyless = 0
	local ThreadKeyless: thread?
	
	return function(Key: T?)
		if Key then
			local Count = CountMap[Key]

			if Count == nil then
				Count = 0

				ThreadMap[Key] = task.delay(Interval, function()
					CountMap[Key] = nil
					ThreadMap[Key] = nil
				end)
			end

			if Count >= Limit then
				return false
			end

			CountMap[Key] = Count + 1
		else
			if ThreadKeyless == nil then
				ThreadKeyless = task.delay(Interval, function()
					CountKeyless = 0
					ThreadKeyless = nil
				end)
			end

			if CountKeyless >= Limit then
				return false
			end

			CountKeyless = CountKeyless + 1
		end

		return true
	end
end
