local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Players = game:GetService("Players")
local RunService = game:GetService("RunService")

local Remote
local ClientFolder
if RunService:IsServer() then
	Remote = Instance.new("RemoteEvent")
	Remote.Name = "RedEvent"
	Remote.Parent = ReplicatedStorage

	local function PlayerAdded(Player: Player)
		local ClientFolder = Instance.new("ScreenGui")

		ClientFolder.Enabled = false
		ClientFolder.ResetOnSpawn = false
		ClientFolder.Name = "Red"
		ClientFolder.Parent = Player:FindFirstChild("PlayerGui")
	end

	Players.PlayerAdded:Connect(PlayerAdded)

	for _, Player in Players:GetPlayers() do
		PlayerAdded(Player)
	end
else
	Remote = ReplicatedStorage:WaitForChild("RedEvent") :: RemoteEvent

	ClientFolder = (Players.LocalPlayer:FindFirstChild("PlayerGui") :: PlayerGui):WaitForChild("Red") :: ScreenGui
	ClientFolder.Parent = nil
end

local Serdes = require(script.Serdes)
local Event = require(script.Event)

local Server = {}
Server.__index = Server

function Server.Server(Name: string)
	local self = setmetatable({}, Server)

	self.Name = Name
	self.FolderInstance = nil :: Folder?

	return self
end

Server.new = Server.Server

function Server.Fire(self: Server, Player: Player, EventName: string, ...)
	Event.FireClient(Player, self.Name .. "_" .. EventName, ...)
end

function Server.FireAll(self: Server, EventName: string, ...)
	for _, Player in Players:GetPlayers() do
		self:Fire(Player, EventName, ...)
	end
end

function Server.FireAllExcept(self: Server, Player: Player, EventName: string, ...)
	for _, OtherPlayer in Players:GetPlayers() do
		if OtherPlayer ~= Player then
			self:Fire(OtherPlayer, EventName, ...)
		end
	end
end

function Server.FireList(self: Server, PlayerList: { Player }, EventName: string, ...)
	for _, Player in PlayerList do
		self:Fire(Player, EventName, ...)
	end
end

function Server.FireWithFilter(self: Server, Filter: (Player) -> boolean, EventName: string, ...)
	for _, Player in Players:GetPlayers() do
		if Filter(Player) then
			self:Fire(Player, EventName, ...)
		end
	end
end

function Server.On(self: Server, EventName: string, Callback: ((Player, ...any) -> ...any)?)
	Event.SetCallback(self.Name .. "_" .. EventName, Callback)
end

function Server.Folder(self: Server, Player: Player?)
	if Player then
		local ClientFolder = (Player:FindFirstChild("PlayerGui") :: any).Red :: ScreenGui

		if ClientFolder:FindFirstChild(self.Name) then
			return ClientFolder:FindFirstChild(self.Name) :: Folder
		else
			local Folder = Instance.new("Folder")
			Folder.Name = self.Name
			Folder.Parent = ClientFolder

			return Folder :: Folder
		end
	else
		if not self.FolderInstance then
			local Folder = Instance.new("Folder")
			Folder.Name = self.Name
			Folder.Parent = Remote

			self.FolderInstance = Folder
		end

		return self.FolderInstance :: Folder
	end
end

export type Server = typeof(Server.Server(...))

local Client = {}
Client.__index = Client

function Client.Client(Name: string)
	local self = setmetatable({}, Client)

	self.Name = Name
	self.FolderInstance = nil :: Folder?
	self.LocalFolderInstance = nil :: Folder?

	return self
end

Client.new = Client.Client

function Client.Fire(self: Client, EventName: string, ...)
	return Event.FireServer(self.Name .. "_" .. EventName, ...)
end

function Client.Call(self: Client, EventName: string, ...)
	return Event.Call(self.Name .. "_" .. EventName, ...)
end

function Client.On(self: Client, EventName: string, Callback: ((...any) -> ())?)
	return Event.SetCallback(self.Name .. "_" .. EventName, Callback)
end

function Client.Folder(self: Client)
	if not self.FolderInstance then
		self.FolderInstance = Remote:WaitForChild(self.Name) :: Folder
	end

	return self.FolderInstance :: Folder
end

function Client.LocalFolder(self: Client)
	if not self.LocalFolderInstance then
		self.LocalFolderInstance = ClientFolder:WaitForChild(self.Name) :: Folder
	end

	return self.LocalFolderInstance :: Folder
end

export type Client = typeof(Client.Client(...))

local Net = {}

Net.ServerNamespaceList = {}
Net.ClientNamespaceList = {}

function Net.Server(Name: string, Definitions: { string }?): Server
	assert(RunService:IsServer(), "Net.Server can only be used on the server")

	if not Net.ServerNamespaceList[Name] then
		Net.ServerNamespaceList[Name] = Server.Server(Name)
	end

	if Definitions then
		for _, Term in Definitions do
			Serdes.Identifier((Name :: string) .. "_" .. Term)
		end
	end

	return Net.ServerNamespaceList[Name]
end

function Net.Client(Name: string): Client
	assert(RunService:IsClient(), "Net.Client can only be used on the client")
	
	if Net.ClientNamespaceList[Name] == nil then
		Net.ClientNamespaceList[Name] = Client.Client(Name)
	end

	return Net.ClientNamespaceList[Name]
end

function Net.Identifier(Name: string)
	return Serdes.Identifier(Name)
end

Event.Listen()

return Net
