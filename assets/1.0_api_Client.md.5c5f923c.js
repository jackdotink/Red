import{_ as s,c as a,o as n,a as l}from"./app.4774fba9.js";const d=JSON.parse('{"title":"Client","description":"","frontmatter":{},"headers":[{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"Fire","slug":"fire","link":"#fire","children":[]},{"level":3,"title":"Call","slug":"call","link":"#call","children":[]},{"level":3,"title":"On","slug":"on","link":"#on","children":[]},{"level":3,"title":"Folder","slug":"folder","link":"#folder","children":[]},{"level":3,"title":"LocalFolder","slug":"localfolder","link":"#localfolder","children":[]}]}],"relativePath":"1.0/api/Client.md"}'),e={name:"1.0/api/Client.md"},o=l(`<h1 id="client" tabindex="-1">Client <a class="header-anchor" href="#client" aria-hidden="true">#</a></h1><p>The client namespace object. This object is returned by <a href="./Red.html#Client"><code>Red.Client</code></a> and is used for networking on the client.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="fire" tabindex="-1">Fire <a class="header-anchor" href="#fire" aria-hidden="true">#</a></h3><p>Fires an event to the server.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Event</span><span style="color:#A6ACCD;">: string, </span><span style="color:#676E95;font-style:italic;">-- The name of the event to fire.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">: any </span><span style="color:#676E95;font-style:italic;">-- The arguments to pass to the event.</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This method has the same data limits as <a href="https://developer.roblox.com/en-us/api-reference/class/RemoteEvent" target="_blank" rel="noreferrer"><code>RemoteEvent</code></a>. Any data that cannot be serialized will arrive malformed on the server.</p></div><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NamespaceName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Fire</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EventName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, world!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="call" tabindex="-1">Call <a class="header-anchor" href="#call" aria-hidden="true">#</a></h3><p>Calls a function on the server.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Event</span><span style="color:#A6ACCD;">: string, </span><span style="color:#676E95;font-style:italic;">-- The name of the event to fire.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">: any </span><span style="color:#676E95;font-style:italic;">-- The arguments to pass to the event.</span></span>
<span class="line"><span style="color:#A6ACCD;">): Promise</span></span>
<span class="line"></span></code></pre></div><p>This calls the connected function.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This method has the same data limits as <a href="https://developer.roblox.com/en-us/api-reference/class/RemoteEvent" target="_blank" rel="noreferrer"><code>RemoteEvent</code></a>. Any data that cannot be serialized will arrive malformed on the server.</p></div><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NamespaceName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EventName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, world!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="on" tabindex="-1">On <a class="header-anchor" href="#on" aria-hidden="true">#</a></h3><p>Connects a function to an event.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Event</span><span style="color:#A6ACCD;">: string, </span><span style="color:#676E95;font-style:italic;">-- The name of the event to connect to.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Callback</span><span style="color:#A6ACCD;">: (</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">any) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> () </span><span style="color:#676E95;font-style:italic;">-- The function to connect.</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NamespaceName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">On</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EventName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">...)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="folder" tabindex="-1">Folder <a class="header-anchor" href="#folder" aria-hidden="true">#</a></h3><p>Retrieves the shared folder that replicates from the server to the clients.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">(): Folder</span></span>
<span class="line"></span></code></pre></div><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NamespaceName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Folder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Folder</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Folder</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">GetAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre></div><h3 id="localfolder" tabindex="-1">LocalFolder <a class="header-anchor" href="#localfolder" aria-hidden="true">#</a></h3><p>Retrieves the folder that replicates from the server to this client.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">(): Folder</span></span>
<span class="line"></span></code></pre></div><p>Any data in this folder is privately replicated only to this client.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NamespaceName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Folder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">LocalFolder</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Folder</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">GetAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre></div>`,27),p=[o];function t(c,r,i,C,y,A){return n(),a("div",null,p)}const F=s(e,[["render",t]]);export{d as __pageData,F as default};