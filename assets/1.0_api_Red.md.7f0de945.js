import{_ as s,c as a,o as n,a as e}from"./app.4774fba9.js";const D=JSON.parse('{"title":"Red","description":"","frontmatter":{},"headers":[{"level":2,"title":"Functions","slug":"functions","link":"#functions","children":[{"level":3,"title":"Server","slug":"server","link":"#server","children":[]},{"level":3,"title":"Client","slug":"client","link":"#client","children":[]},{"level":3,"title":"Spawn","slug":"spawn","link":"#spawn","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"Promise","slug":"promise","link":"#promise","children":[]},{"level":3,"title":"Signal","slug":"signal","link":"#signal","children":[]},{"level":3,"title":"Clock","slug":"clock","link":"#clock","children":[]}]}],"relativePath":"1.0/api/Red.md"}'),l={name:"1.0/api/Red.md"},o=e(`<h1 id="red" tabindex="-1">Red <a class="header-anchor" href="#red" aria-hidden="true">#</a></h1><p>The root of the library.</p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="server" tabindex="-1">Server <a class="header-anchor" href="#server" aria-hidden="true">#</a></h3><p>Retrieves a server namespace.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Name</span><span style="color:#A6ACCD;">: string, </span><span style="color:#676E95;font-style:italic;">-- The name of the server namespace.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">EventNames</span><span style="color:#A6ACCD;">: { string }? </span><span style="color:#676E95;font-style:italic;">-- The names of the events that should be pre-defined.</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> Server</span></span>
<span class="line"></span></code></pre></div><p>It should be noted that namespaces are global, you can call this function with the same name multiple times and you will have no issues. If you don&#39;t define your events when you create the namespace, any listeners on the client will yield until the server defines the event, which would be when it is first fired.</p><p><strong>Simply put, define events that you fire to the client.</strong></p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-hMbfe" id="tab-RrVvlzG" checked="checked"><label for="tab-RrVvlzG">Server</label></div><div class="blocks"><div class="language-lua active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Server</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Namespace</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, { </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Event</span><span style="color:#89DDFF;">&quot; </span><span style="color:#A6ACCD;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Fire</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Event</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If called on the client, this function will error.</p></div><h3 id="client" tabindex="-1">Client <a class="header-anchor" href="#client" aria-hidden="true">#</a></h3><p>Retrieves a client namespace.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Name</span><span style="color:#A6ACCD;">: string </span><span style="color:#676E95;font-style:italic;">-- The name of the client namespace.</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> Client</span></span>
<span class="line"></span></code></pre></div><p>Just like with the server, client namespaces are global. You can call this function as many times as you like. Unlike the server, however, you cannot define events on the client.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-GuRe1" id="tab-M1GgumY" checked="checked"><label for="tab-M1GgumY">Client</label></div><div class="blocks"><div class="language-lua active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Namespace</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">On</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Event</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If called on the server, this function will error.</p></div><h3 id="spawn" tabindex="-1">Spawn <a class="header-anchor" href="#spawn" aria-hidden="true">#</a></h3><p>Spawns a new thread with thread reuse.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">&lt;T...&gt;</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">fn</span><span style="color:#A6ACCD;">: (T</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> (), </span><span style="color:#676E95;font-style:italic;">-- The function to spawn.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">: T</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">-- The arguments to pass to the function.</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> ()</span></span>
<span class="line"></span></code></pre></div><p>This function uses thread reuse and <code>task.spawn</code> to spawn threads efficiently.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Red.</span><span style="color:#82AAFF;">Spawn</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="promise" tabindex="-1">Promise <a class="header-anchor" href="#promise" aria-hidden="true">#</a></h3><p>A reference to the Red <a href="./Promise.html">Promise</a> implementation. This implementation differs from the main library used, it provides autocomplete, it uses PascalCase and has better performance.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Red.</span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">new</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">Resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">Reject</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Resolve</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">):</span><span style="color:#82AAFF;">Then</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="signal" tabindex="-1">Signal <a class="header-anchor" href="#signal" aria-hidden="true">#</a></h3><p>A reference to the Red <a href="./Signal.html">Signal</a> implementation. This implementation is almost identical to other implementations, it just uses the Red Promise implementation, and is also typesafe.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Signal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#FFCB6B;">Signal</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">new</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Signal</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Connect</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">Signal</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Fire</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="clock" tabindex="-1">Clock <a class="header-anchor" href="#clock" aria-hidden="true">#</a></h3><p>A reference to the <a href="./Clock.html">Clock</a> object. This object is used to run a callback at consistent intervals.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Clock </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#FFCB6B;">Clock</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">new</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,31),p=[o];function t(c,r,i,y,C,d){return n(),a("div",null,p)}const h=s(l,[["render",t]]);export{D as __pageData,h as default};