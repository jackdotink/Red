import{_ as o,c as t,z as s,a,E as n,O as l,o as p,G as c}from"./chunks/framework.97fbe135.js";const H=JSON.parse('{"title":"Red","description":"","frontmatter":{},"headers":[],"relativePath":"1.0/Red.md"}'),r={name:"1.0/Red.md"},i=s("h1",{id:"red",tabindex:"-1"},[a("Red "),s("a",{class:"header-anchor",href:"#red","aria-label":'Permalink to "Red"'},"​")],-1),y=s("p",null,"The root of the library.",-1),C=s("h2",{id:"functions",tabindex:"-1"},[a("Functions "),s("a",{class:"header-anchor",href:"#functions","aria-label":'Permalink to "Functions"'},"​")],-1),A={id:"server",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#server","aria-label":'Permalink to "Server <Badge type="tip" text="Server Only" /> <Badge type="info" text="Since 1.0.0" />"'},"​",-1),D=l(`<p>Retrieves a server namespace.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Name</span><span style="color:#A6ACCD;">: string, </span><span style="color:#676E95;font-style:italic;">-- The name of the server namespace.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">EventNames</span><span style="color:#A6ACCD;">: { string }? </span><span style="color:#676E95;font-style:italic;">-- The names of the events that should be pre-defined.</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> Server</span></span></code></pre></div><p>It should be noted that namespaces are global, you can call this function with the same name multiple times and you will have no issues. If you don&#39;t define your events when you create the namespace, any listeners on the client will yield until the server defines the event, which would be when it is first fired.</p><p><strong>Simply put, define events that you fire to the client.</strong></p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-z4WSi" id="tab-0eBj4Bh" checked="checked"><label for="tab-0eBj4Bh">Server</label></div><div class="blocks"><div class="language-lua active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Server</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Namespace</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, { </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Event</span><span style="color:#89DDFF;">&quot; </span><span style="color:#A6ACCD;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Fire</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Event</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If called on the client, this function will error.</p></div>`,6),h={id:"client",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#client","aria-label":'Permalink to "Client <Badge type="tip" text="Client Only" /> <Badge type="info" text="Since 1.0.0" />"'},"​",-1),_=l(`<p>Retrieves a client namespace.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Name</span><span style="color:#A6ACCD;">: string </span><span style="color:#676E95;font-style:italic;">-- The name of the client namespace.</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> Client</span></span></code></pre></div><p>Just like with the server, client namespaces are global. You can call this function as many times as you like. Unlike the server, however, you cannot define events on the client.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-CNiNu" id="tab-HRnQ8a-" checked="checked"><label for="tab-HRnQ8a-">Client</label></div><div class="blocks"><div class="language-lua active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Namespace</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">On</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Event</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">)</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If called on the server, this function will error.</p></div>`,5),u={id:"spawn",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#spawn","aria-label":'Permalink to "Spawn <Badge type="info" text="Since 1.0.0" />"'},"​",-1),f=l(`<p>Spawns a new thread with thread reuse.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">&lt;T...&gt;</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">fn</span><span style="color:#A6ACCD;">: (T</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> (), </span><span style="color:#676E95;font-style:italic;">-- The function to spawn.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">: T</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">-- The arguments to pass to the function.</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> ()</span></span></code></pre></div><p>This function uses thread reuse and <code>task.spawn</code> to spawn threads efficiently.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Red.</span><span style="color:#82AAFF;">Spawn</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2>`,5),g={id:"promise",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#promise","aria-label":'Permalink to "Promise <Badge type="info" text="Since 1.0.0" />"'},"​",-1),b=l(`<p>A reference to the Red <a href="./Promise.html">Promise</a> implementation. This implementation differs from the main library used, it provides autocomplete, it uses PascalCase and has better performance.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Red.</span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">new</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">Resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">Reject</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Resolve</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">):</span><span style="color:#82AAFF;">Then</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,2),S={id:"signal",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#signal","aria-label":'Permalink to "Signal <Badge type="info" text="Since 1.0.0" />"'},"​",-1),k=l(`<p>A reference to the Red <a href="./Signal.html">Signal</a> implementation. This implementation is almost identical to other implementations, it just uses the Red Promise implementation, and is also typesafe.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Signal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#FFCB6B;">Signal</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">new</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Signal</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Connect</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">Signal</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Fire</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,2),B={id:"clock",tabindex:"-1"},P=s("a",{class:"header-anchor",href:"#clock","aria-label":'Permalink to "Clock <Badge type="info" text="Since 1.0.0" />"'},"​",-1),R=l(`<p>A reference to the <a href="./Clock.html">Clock</a> object. This object is used to run a callback at consistent intervals.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Clock </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#FFCB6B;">Clock</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">new</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,2);function x(E,w,N,q,I,V){const e=c("Badge");return p(),t("div",null,[i,y,C,s("h3",A,[a("Server "),n(e,{type:"tip",text:"Server Only"}),a(),n(e,{type:"info",text:"Since 1.0.0"}),a(),d]),D,s("h3",h,[a("Client "),n(e,{type:"tip",text:"Client Only"}),a(),n(e,{type:"info",text:"Since 1.0.0"}),a(),F]),_,s("h3",u,[a("Spawn "),n(e,{type:"info",text:"Since 1.0.0"}),a(),m]),f,s("h3",g,[a("Promise "),n(e,{type:"info",text:"Since 1.0.0"}),a(),v]),b,s("h3",S,[a("Signal "),n(e,{type:"info",text:"Since 1.0.0"}),a(),T]),k,s("h3",B,[a("Clock "),n(e,{type:"info",text:"Since 1.0.0"}),a(),P]),R])}const O=o(r,[["render",x]]);export{H as __pageData,O as default};