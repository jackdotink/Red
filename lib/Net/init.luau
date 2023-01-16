local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Players = game:GetService("Players")
local RunService = game:GetService("RunService")

local Remote
if RunService:IsServer() then
	Remote = Instance.new("RemoteEvent")
	Remote.Name = "RedEvent"
	Remote.Parent = ReplicatedStorage
else
	Remote = ReplicatedStorage:WaitForChild("RedEvent") :: RemoteEvent
end

local Serdes = require(script.Serdes)
local Event = require(script.Event)

local Server = {}
Server.__index = Server

function Server.Server(Name: string)
	local self = setmetatable({}, Server)

	self.Name = Name
	self.Folder = nil :: Folder?

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

function Server.Callback(self: Server, EventName: string, Callback: (Player, ...any) -> (...any))
	Event.SetCallback(self.Name .. "_" .. EventName, Callback)
end

function Server.Define(self: Server, Name: string)
	Serdes.Identifier(self.Name .. "_" .. Name)
	return self
end

function Server.Instance(self: Server)
	if not self.Folder then
		local Folder = Instance.new("Folder")
		Folder.Name = self.Name
		Folder.Parent = Remote

		self.Folder = Folder
	end

	return self.Folder :: Folder
end

export type Server = typeof(Server.Server(...))

local Client = {}
Client.__index = Client

function Client.Client(Name: string)
	local self = setmetatable({}, Client)

	self.Name = Name
	self.Folder = nil :: Folder?

	return self
end

Client.new = Client.Client

function Client.Fire(self: Client, EventName: string, ...)
	Event.FireServer(self.Name .. "_" .. EventName, ...)
end

function Client.Call(self: Client, EventName: string, ...)
	return Event.Call(self.Name .. "_" .. EventName, ...)
end

function Client.Callback(self: Client, EventName: string, Callback: (...any) -> (...any))
	Event.SetCallback(self.Name .. "_" .. EventName, Callback)
end

function Client.Instance(self: Client)
	if not self.Folder then
		self.Folder = Remote:WaitForChild(self.Name) :: Folder
	end

	return self.Folder :: Folder
end

export type Client = typeof(Client.Client(...))

local Net = {}

Net.ServerNamespaceList = {}
Net.ClientNamespaceList = {}

function Net.Server(Name: string? | { string }, Definitions: { string }?): Server
	assert(RunService:IsServer(), "Net.Server can only be used on the server")

	if type(Name) == "table" then
		Definitions = Name
		Name = ""
	end

	Name = Name or ""

	if not Net.ServerNamespaceList[Name] then
		Net.ServerNamespaceList[Name] = Server.Server(Name :: string)
	end

	if Definitions then
		for _, Term in Definitions do
			Serdes.Identifier((Name :: string) .. "_" .. Term)
		end
	end

	return Net.ServerNamespaceList[Name]
end

function Net.Client(Name: string?): Client
	assert(RunService:IsClient(), "Net.Client can only be used on the client")
	Name = Name or ""
	
	if Net.ClientNamespaceList[Name] then
		return Net.ClientNamespaceList[Name]
	else
		Net.ClientNamespaceList[Name] = Client.Client(Name :: string)
		return Net.ClientNamespaceList[Name]
	end
end

Net.Serdes = Serdes

Event.Listen()

return Net