--!nocheck
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Red = require(ReplicatedStorage.Red)

local Net = Red.Client("Testing")

for i = 0, 200 do
	ReplicatedStorage:WaitForChild(tostring(i)).OnClientEvent:Connect(function() end)
end

local redTestGui = Instance.new("ScreenGui")

local frame = Instance.new("Frame")
frame.AnchorPoint = Vector2.new(0, 1)
frame.BackgroundColor3 = Color3.new(1, 1, 1)
frame.BackgroundTransparency = 1
frame.Position = UDim2.fromScale(0, 1)
frame.Size = UDim2.new(1, 0, 0, 200)

local uIListLayout = Instance.new("UIListLayout")
uIListLayout.FillDirection = Enum.FillDirection.Horizontal
uIListLayout.HorizontalAlignment = Enum.HorizontalAlignment.Center
uIListLayout.SortOrder = Enum.SortOrder.LayoutOrder
uIListLayout.VerticalAlignment = Enum.VerticalAlignment.Bottom
uIListLayout.Parent = frame

local callType = Instance.new("Frame")
callType.BackgroundColor3 = Color3.new(1, 1, 1)
callType.BackgroundTransparency = 1
callType.Size = UDim2.new(0, 200, 1, 0)

local uIListLayout1 = Instance.new("UIListLayout")
uIListLayout1.HorizontalAlignment = Enum.HorizontalAlignment.Center
uIListLayout1.SortOrder = Enum.SortOrder.LayoutOrder
uIListLayout1.VerticalAlignment = Enum.VerticalAlignment.Bottom
uIListLayout1.Parent = callType

local multiple = Instance.new("TextButton")
multiple.FontFace = Font.fromEnum(Enum.Font.SourceSans)
multiple.Text = "CallTypeMultiple"
multiple.TextColor3 = Color3.new(0, 0, 0)
multiple.TextSize = 14
multiple.BackgroundColor3 = Color3.new(1, 1, 1)
multiple.Size = UDim2.fromOffset(200, 50)
multiple.Parent = callType

local single = Instance.new("TextButton")
single.FontFace = Font.fromEnum(Enum.Font.SourceSans)
single.Text = "CallTypeSingle"
single.TextColor3 = Color3.new(0, 0, 0)
single.TextSize = 14
single.BackgroundColor3 = Color3.new(1, 1, 1)
single.Size = UDim2.fromOffset(200, 50)
single.Parent = callType

local none = Instance.new("TextButton")
none.FontFace = Font.fromEnum(Enum.Font.SourceSans)
none.Text = "CallTypeNone"
none.TextColor3 = Color3.new(0, 0, 0)
none.TextSize = 14
none.BackgroundColor3 = Color3.new(1, 1, 1)
none.Size = UDim2.fromOffset(200, 50)
none.Parent = callType

callType.Parent = frame

local argumentType = Instance.new("Frame")
argumentType.BackgroundColor3 = Color3.new(1, 1, 1)
argumentType.BackgroundTransparency = 1
argumentType.Size = UDim2.new(0, 200, 1, 0)

local uIListLayout2 = Instance.new("UIListLayout")
uIListLayout2.HorizontalAlignment = Enum.HorizontalAlignment.Center
uIListLayout2.SortOrder = Enum.SortOrder.LayoutOrder
uIListLayout2.VerticalAlignment = Enum.VerticalAlignment.Bottom
uIListLayout2.Parent = argumentType

local none1 = Instance.new("TextButton")
none1.FontFace = Font.fromEnum(Enum.Font.SourceSans)
none1.Text = "ArgumentTypeNone"
none1.TextColor3 = Color3.new(0, 0, 0)
none1.TextSize = 14
none1.BackgroundColor3 = Color3.new(1, 1, 1)
none1.Size = UDim2.fromOffset(200, 50)
none1.Parent = argumentType

local oneWithSAO = Instance.new("TextButton")
oneWithSAO.FontFace = Font.fromEnum(Enum.Font.SourceSans)
oneWithSAO.Text = "ArgumentTypeOneWithSAO"
oneWithSAO.TextColor3 = Color3.new(0, 0, 0)
oneWithSAO.TextSize = 14
oneWithSAO.BackgroundColor3 = Color3.new(1, 1, 1)
oneWithSAO.Size = UDim2.fromOffset(200, 50)
oneWithSAO.Parent = argumentType

local oneWithoutSAO = Instance.new("TextButton")
oneWithoutSAO.FontFace = Font.fromEnum(Enum.Font.SourceSans)
oneWithoutSAO.Text = "ArgumentTypeOneWithoutSAO"
oneWithoutSAO.TextColor3 = Color3.new(0, 0, 0)
oneWithoutSAO.TextSize = 14
oneWithoutSAO.BackgroundColor3 = Color3.new(1, 1, 1)
oneWithoutSAO.Size = UDim2.fromOffset(200, 50)
oneWithoutSAO.Parent = argumentType

local random = Instance.new("TextButton")
random.FontFace = Font.fromEnum(Enum.Font.SourceSans)
random.Text = "ArgumentTypeRandom"
random.TextColor3 = Color3.new(0, 0, 0)
random.TextSize = 14
random.BackgroundColor3 = Color3.new(1, 1, 1)
random.Size = UDim2.fromOffset(200, 50)
random.Parent = argumentType

argumentType.Parent = frame

local eventType = Instance.new("Frame")
eventType.BackgroundColor3 = Color3.new(1, 1, 1)
eventType.BackgroundTransparency = 1
eventType.Size = UDim2.new(0, 200, 1, 0)

local uIListLayout3 = Instance.new("UIListLayout")
uIListLayout3.HorizontalAlignment = Enum.HorizontalAlignment.Center
uIListLayout3.SortOrder = Enum.SortOrder.LayoutOrder
uIListLayout3.VerticalAlignment = Enum.VerticalAlignment.Bottom
uIListLayout3.Parent = eventType

local red = Instance.new("TextButton")
red.FontFace = Font.fromEnum(Enum.Font.SourceSans)
red.Text = "EventTypeRed"
red.TextColor3 = Color3.new(0, 0, 0)
red.TextSize = 14
red.BackgroundColor3 = Color3.new(1, 1, 1)
red.Size = UDim2.fromOffset(200, 50)
red.Parent = eventType

local roblox = Instance.new("TextButton")
roblox.FontFace = Font.fromEnum(Enum.Font.SourceSans)
roblox.Text = "EventTypeRoblox"
roblox.TextColor3 = Color3.new(0, 0, 0)
roblox.TextSize = 14
roblox.BackgroundColor3 = Color3.new(1, 1, 1)
roblox.Size = UDim2.fromOffset(200, 50)
roblox.Parent = eventType

eventType.Parent = frame

frame.Parent = redTestGui

multiple.Activated:Connect(function()
	Net:Fire("CallType", "Multiple")
end)

single.Activated:Connect(function()
	Net:Fire("CallType", "Single")
end)

none.Activated:Connect(function()
	Net:Fire("CallType", "None")
end)

none1.Activated:Connect(function()
	Net:Fire("ArgumentType", "None")
end)

oneWithSAO.Activated:Connect(function()
	Net:Fire("ArgumentType", "OneWithSAO")
end)

oneWithoutSAO.Activated:Connect(function()
	Net:Fire("ArgumentType", "OneWithoutSAO")
end)

random.Activated:Connect(function()
	Net:Fire("ArgumentType", "Random")
end)

red.Activated:Connect(function()
	Net:Fire("EventType", "Red")
end)

roblox.Activated:Connect(function()
	print('robl')
	Net:Fire("EventType", "Roblox"):Then(function()
		print('s')
	end)
end)

redTestGui.Parent = game:GetService("Players").LocalPlayer:WaitForChild("PlayerGui")
