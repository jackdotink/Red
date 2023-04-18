import{_ as t,c as o,z as n,a as s,E as a,O as l,o as p,G as c}from"./chunks/framework.97fbe135.js";const V=JSON.parse('{"title":"Client","description":"","frontmatter":{},"headers":[],"relativePath":"1.0/Client.md"}'),i={name:"1.0/Client.md"},r={id:"client",tabindex:"-1"},y=n("a",{class:"header-anchor",href:"#client","aria-label":'Permalink to "Client <Badge type="tip" text="Client Only" /> <Badge type="info" text="Since 1.0.0" />"'},"​",-1),d=n("p",null,[s("The client namespace object. This object is returned by "),n("a",{href:"./Red.html#Client"},[n("code",null,"Red.Client")]),s(" and is used for networking on the client.")],-1),C=n("h2",{id:"methods",tabindex:"-1"},[s("Methods "),n("a",{class:"header-anchor",href:"#methods","aria-label":'Permalink to "Methods"'},"​")],-1),A={id:"fire",tabindex:"-1"},D=n("a",{class:"header-anchor",href:"#fire","aria-label":'Permalink to "Fire <Badge type="warning" text="Yields" /> <Badge type="tip" text="Client Only" /> <Badge type="info" text="Since 1.0.0" />"'},"​",-1),h=l(`<p>Fires an event to the server.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Event</span><span style="color:#A6ACCD;">: string, </span><span style="color:#676E95;font-style:italic;">-- The name of the event to fire.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">: any </span><span style="color:#676E95;font-style:italic;">-- The arguments to pass to the event.</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This method has the same data limits as <a href="https://developer.roblox.com/en-us/api-reference/class/RemoteEvent" target="_blank" rel="noreferrer"><code>RemoteEvent</code></a>. Any data that cannot be serialized will arrive malformed on the server.</p></div><div class="warning custom-block"><p class="custom-block-title">Yielding Behavior</p><p>This method will only yield if the event identifier is not loaded on the client. This will not yield for a long period of time unless the event is not registered on the server.</p></div><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NamespaceName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Fire</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EventName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, world!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,5),F={id:"call",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#call","aria-label":'Permalink to "Call <Badge type="warning" text="Yields" /> <Badge type="tip" text="Client Only" /> <Badge type="info" text="Since 1.0.0" />"'},"​",-1),_=l(`<p>Calls a function on the server.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Event</span><span style="color:#A6ACCD;">: string, </span><span style="color:#676E95;font-style:italic;">-- The name of the event to fire.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">: any </span><span style="color:#676E95;font-style:italic;">-- The arguments to pass to the event.</span></span>
<span class="line"><span style="color:#A6ACCD;">): Promise</span></span></code></pre></div><p>This calls the connected function.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This method has the same data limits as <a href="https://developer.roblox.com/en-us/api-reference/class/RemoteEvent" target="_blank" rel="noreferrer"><code>RemoteEvent</code></a>. Any data that cannot be serialized will arrive malformed on the server.</p></div><div class="warning custom-block"><p class="custom-block-title">Yielding Behavior</p><p>This method will only yield if the event identifier is not loaded on the client. This will not yield for a long period of time unless the event is not registered on the server.</p></div><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NamespaceName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EventName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, world!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,6),m={id:"on",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#on","aria-label":'Permalink to "On <Badge type="warning" text="Yields" /> <Badge type="tip" text="Client Only" /> <Badge type="info" text="Since 1.0.0" />"'},"​",-1),f=l(`<p>Connects a function to an event.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Event</span><span style="color:#A6ACCD;">: string, </span><span style="color:#676E95;font-style:italic;">-- The name of the event to connect to.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Callback</span><span style="color:#A6ACCD;">: (</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">any) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> () </span><span style="color:#676E95;font-style:italic;">-- The function to connect.</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NamespaceName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">On</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EventName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">...)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,3),v={id:"folder",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#folder","aria-label":'Permalink to "Folder <Badge type="warning" text="Yields" /> <Badge type="tip" text="Client Only" /> <Badge type="info" text="Since 1.0.0" />"'},"​",-1),T=l(`<p>Retrieves the shared folder that replicates from the server to the clients.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(): Folder</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Yielding Behavior</p><p>This method will only yield if the namespace folder is not yet loaded on the client. This function will infinitely yield if the namespace folder is not created on the server.</p></div><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NamespaceName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Folder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Folder</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Folder</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">GetAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span></code></pre></div>`,4),B={id:"localfolder",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#localfolder","aria-label":'Permalink to "LocalFolder <Badge type="warning" text="Yields" /> <Badge type="tip" text="Client Only" /> <Badge type="info" text="Since 1.0.0" />"'},"​",-1),N=l(`<p>Retrieves the folder that replicates from the server to this client.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(): Folder</span></span></code></pre></div><p>Any data in this folder is privately replicated only to this client.</p><div class="warning custom-block"><p class="custom-block-title">Yielding Behavior</p><p>This method will only yield if the namespace folder is not yet loaded on the client. This function will infinitely yield if the namespace folder is not created on the server.</p></div><details class="details custom-block"><summary>How is this possible?</summary><p>Folders that replicate to single players are done by using their PlayerGui. Anything there is replicated to that player only. Red cleans up the folder so you will find no trace of it in the PlayerGui.</p></details><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NamespaceName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Folder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">LocalFolder</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Folder</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">GetAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span></code></pre></div>`,6);function k(E,w,S,q,R,P){const e=c("Badge");return p(),o("div",null,[n("h1",r,[s("Client "),a(e,{type:"tip",text:"Client Only"}),s(),a(e,{type:"info",text:"Since 1.0.0"}),s(),y]),d,C,n("h3",A,[s("Fire "),a(e,{type:"warning",text:"Yields"}),s(),a(e,{type:"tip",text:"Client Only"}),s(),a(e,{type:"info",text:"Since 1.0.0"}),s(),D]),h,n("h3",F,[s("Call "),a(e,{type:"warning",text:"Yields"}),s(),a(e,{type:"tip",text:"Client Only"}),s(),a(e,{type:"info",text:"Since 1.0.0"}),s(),u]),_,n("h3",m,[s("On "),a(e,{type:"warning",text:"Yields"}),s(),a(e,{type:"tip",text:"Client Only"}),s(),a(e,{type:"info",text:"Since 1.0.0"}),s(),g]),f,n("h3",v,[s("Folder "),a(e,{type:"warning",text:"Yields"}),s(),a(e,{type:"tip",text:"Client Only"}),s(),a(e,{type:"info",text:"Since 1.0.0"}),s(),b]),T,n("h3",B,[s("LocalFolder "),a(e,{type:"warning",text:"Yields"}),s(),a(e,{type:"tip",text:"Client Only"}),s(),a(e,{type:"info",text:"Since 1.0.0"}),s(),x]),N])}const Y=t(i,[["render",k]]);export{V as __pageData,Y as default};
