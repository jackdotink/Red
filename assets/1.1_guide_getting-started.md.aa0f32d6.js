import{_ as s,c as a,o as e,N as n}from"./chunks/framework.0799945b.js";const C=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"1.1/guide/getting-started.md"}'),l={name:"1.1/guide/getting-started.md"},o=n(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><p>This section will walk you through the process of installing Red and the most basic usage. This guide assumes you have a basic understanding of Lua.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><h3 id="roblox-studio" tabindex="-1">Roblox Studio <a class="header-anchor" href="#roblox-studio" aria-label="Permalink to &quot;Roblox Studio&quot;">​</a></h3><p>Red is available as a rbxm file on the <a href="https://github.com/uncontained0/Red/releases" target="_blank" rel="noreferrer">Github Releases</a> page. Download the latest version and open it in Roblox Studio. It is suggested that you place the library in ReplicatedStorage.</p><h3 id="rojo" tabindex="-1">Rojo <a class="header-anchor" href="#rojo" aria-label="Permalink to &quot;Rojo&quot;">​</a></h3><p>Red is available as a Rojo project through <a href="https://wally.run" target="_blank" rel="noreferrer">Wally</a>. Add Red to your <code>wally.toml</code> file and run <code>wally install</code>.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-KQBxZ" id="tab-utnS7Zq" checked="checked"><label for="tab-utnS7Zq">wally.toml</label></div><div class="blocks"><div class="language-toml active"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">dependencies</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">Red </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uncontained0/red@1.0.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div></div></div><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">Code Examples</p><p>For simplicity, in each example Red will already be required and assigned to a variable named <code>Red</code>. This is the suggested naming convention when using Red.</p></div><p>Red has no startup process, so you can require and start using it immediately. In Red, networking is split into Namespaces, which exist as abstractions over networking. Namespaces are created by calling <code>Red.Server</code> on the server, and <code>Red.Client</code> on the client.</p><p>Let&#39;s create a simple namespace that allows us to print a message on the server from the client.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-ZdETm" id="tab-n0oJ3a-" checked="checked"><label for="tab-n0oJ3a-">Server</label><input type="radio" name="group-ZdETm" id="tab-T154Ih8"><label for="tab-T154Ih8">Client</label></div><div class="blocks"><div class="language-lua active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Server</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PrintNamespace</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- Assigns the function to handle the &quot;Print&quot; event</span></span>
<span class="line"><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">On</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Print</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">Player</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">Message</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Message from {Player.Name}: {Message}</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PrintNamespace</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Fire</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Print</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></div></div><p>What about remote functions? Red allows those too. Let&#39;s create a simple namespace that allows us to get a random number from the server. Something to note about Red is that remote functions and events are the same, except in the way they are called.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group--59P0" id="tab-tef7z0M" checked="checked"><label for="tab-tef7z0M">Server</label><input type="radio" name="group--59P0" id="tab-cSNHmPt"><label for="tab-cSNHmPt">Client</label></div><div class="blocks"><div class="language-lua active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Server</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">RandomNumberNamespace</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">On</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">GetRandomNumber</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">Player</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">math.random</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">RandomNumberNamespace</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- Client:Call returns a Promise, you can read more in the Promises Page</span></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> RandomNumber </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">GetRandomNumber</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">):</span><span style="color:#82AAFF;">Await</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Remote functions can only be called from the client, and Remote Events can only be called from the server. A remote function that is called as an event will run in the same way, but will not return a value.</p></div><h2 id="what-next" tabindex="-1">What Next? <a class="header-anchor" href="#what-next" aria-label="Permalink to &quot;What Next?&quot;">​</a></h2><p>With your basic understanding of Red, you have options. If you&#39;re confident in your understanding, feel free to proceed directly to the API Reference. If you&#39;d like to read more about Red, feel free to read the rest of the guide.</p><p>If you&#39;re looking for help, feel free to join the <a href="https://discord.com/invite/mchCdAFPWU" target="_blank" rel="noreferrer">Roblox OSS Discord</a> server and ask in the <a href="https://discord.com/channels/385151591524597761/1064606584430411906" target="_blank" rel="noreferrer">Red forum post</a>. If you don&#39;t feel like joining the server, feel free to open an issue on the github repository.</p>`,19),t=[o];function p(r,c,i,d,y,u){return e(),a("div",null,t)}const h=s(l,[["render",p]]);export{C as __pageData,h as default};
