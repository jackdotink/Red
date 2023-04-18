import{_ as t,c as o,z as s,a,E as n,O as l,o as c,G as p}from"./chunks/framework.97fbe135.js";const E=JSON.parse('{"title":"Clock","description":"","frontmatter":{},"headers":[],"relativePath":"1.2/Clock.md"}'),i={name:"1.2/Clock.md"},r={id:"clock",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#clock","aria-label":'Permalink to "Clock <Badge type="info" text="Since 1.0.0" />"'},"​",-1),C=s("p",null,"The Clock object is used to execute a callback at regular intervals. It includes the ability to pause and resume the clock. It also has the capability to skip callbacks if the clock can't run fast enough.",-1),h=s("h2",{id:"functions",tabindex:"-1"},[a("Functions "),s("a",{class:"header-anchor",href:"#functions","aria-label":'Permalink to "Functions"'},"​")],-1),y={id:"new",tabindex:"-1"},_=s("a",{class:"header-anchor",href:"#new","aria-label":'Permalink to "new <Badge type="info" text="Since 1.0.0" />"'},"​",-1),A=l(`<p>Creates a new clock.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Interval</span><span style="color:#A6ACCD;">: number, </span><span style="color:#676E95;font-style:italic;">-- The interval between callbacks in seconds.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Callback</span><span style="color:#A6ACCD;">: () </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> (), </span><span style="color:#676E95;font-style:italic;">-- The callback.</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> Clock</span></span></code></pre></div><p>This creates a new clock with the given interval and callback. The clock will start immediately.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Clock </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Clock.</span><span style="color:#82AAFF;">new</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, world!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2>`,5),u={id:"pause",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#pause","aria-label":'Permalink to "Pause <Badge type="info" text="Since 1.0.0" />"'},"​",-1),k=l('<p>Pauses the clock.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> ()</span></span></code></pre></div><p>This pauses the clock. The clock will not fire the callback until it is resumed.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Clock</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Pause</span><span style="color:#A6ACCD;">()</span></span></code></pre></div>',4),g={id:"resume",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#resume","aria-label":'Permalink to "Resume <Badge type="info" text="Since 1.0.0" />"'},"​",-1),F=l('<p>Resumes the clock.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> ()</span></span></code></pre></div><p>This resumes the clock. The clock will fire the callback at the next interval.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Clock</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Resume</span><span style="color:#A6ACCD;">()</span></span></code></pre></div>',4),b={id:"advance",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#advance","aria-label":'Permalink to "Advance <Badge type="info" text="Since 1.0.0" />"'},"​",-1),f=l(`<p>Advances the clock.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Delta</span><span style="color:#A6ACCD;">: number, </span><span style="color:#676E95;font-style:italic;">-- The amount to advance the clock by in seconds.</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> ()</span></span></code></pre></div><p>This advances the clock by the given amount. <strong>This is not necessary to do, as the clock connects to <code>RunService.Heartbeat</code> on it&#39;s own.</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Clock</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Advance</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,4);function v(S,x,B,P,w,V){const e=p("Badge");return c(),o("div",null,[s("h1",r,[a("Clock "),n(e,{type:"info",text:"Since 1.0.0"}),a(),d]),C,h,s("h3",y,[a("new "),n(e,{type:"info",text:"Since 1.0.0"}),a(),_]),A,s("h3",u,[a("Pause "),n(e,{type:"info",text:"Since 1.0.0"}),a(),D]),k,s("h3",g,[a("Resume "),n(e,{type:"info",text:"Since 1.0.0"}),a(),m]),F,s("h3",b,[a("Advance "),n(e,{type:"info",text:"Since 1.0.0"}),a(),T]),f])}const N=t(i,[["render",v]]);export{E as __pageData,N as default};
