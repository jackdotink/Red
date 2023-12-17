import{_ as s,c as e,o as n,O as a}from"./chunks/framework.97fbe135.js";const A=JSON.parse('{"title":"Listening to Events","description":"","frontmatter":{},"headers":[],"relativePath":"guide/namespaces/listening-events.md"}'),l={name:"guide/namespaces/listening-events.md"},t=a(`<h1 id="listening-to-events" tabindex="-1">Listening to Events <a class="header-anchor" href="#listening-to-events" aria-label="Permalink to &quot;Listening to Events&quot;">​</a></h1><p>In the previous section, you learned what namespaces and events are, and how to create namespaces. In this section you&#39;ll learn how to listen to events and how to return data from an event.</p><h2 id="listening-to-signal-like-events" tabindex="-1">Listening to Signal-Like Events <a class="header-anchor" href="#listening-to-signal-like-events" aria-label="Permalink to &quot;Listening to Signal-Like Events&quot;">​</a></h2><p>As a refresher, signal-like events are events that are fired and listened to. They do not return values back to the caller. You can listen to these by using the <code>On</code> method.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-XPgBN" id="tab-PDCClHf" checked="checked"><label for="tab-PDCClHf">Server</label><input type="radio" name="group-XPgBN" id="tab-rMoDHjI"><label for="tab-rMoDHjI">Client</label></div><div class="blocks"><div class="language-lua active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Server</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NamespaceName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">On</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EventName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">Player</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ...)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Client</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NamespaceName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">On</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EventName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">...)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>The only difference between the server and client is that the server receives a <a href="https://create.roblox.com/docs/reference/engine/classes/Player" target="_blank" rel="noreferrer"><code>Player</code></a> object as the first argument to the callback. This is typed so you shouldn&#39;t have too much trouble remembering this.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>An event can only have a single listener. Multiple calls to <code>On</code> will overwrite the listener, not add more.</p></div></div></div><h2 id="listening-to-function-like-events" tabindex="-1">Listening to Function-Like Events <a class="header-anchor" href="#listening-to-function-like-events" aria-label="Permalink to &quot;Listening to Function-Like Events&quot;">​</a></h2><p>Function-like events are events that are called, and the listener returns values back to the caller. They are also listened to by using the <code>On</code> method. The difference in what makes a function-like event is how it&#39;s called (Covered <a href="./sending-invoking-events.html">here</a>).</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Wtg7h" id="tab-m-1Szko" checked="checked"><label for="tab-m-1Szko">Server</label></div><div class="blocks"><div class="language-lua active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Server</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NamespaceName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">On</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EventName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">Player</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ...)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">)</span></span></code></pre></div></div></div><p>The server cannot invoke the client&#39;s function-like events, so there is no client-side example. If the server listener errors, the error will propagate to the caller, and reject the promise returned from the call.</p>`,9),o=[t];function p(c,r,i,y,D,d){return n(),e("div",null,o)}const F=s(l,[["render",p]]);export{A as __pageData,F as default};