import{_ as s,c as n,o as a,a as e}from"./app.4774fba9.js";const C=JSON.parse('{"title":"Systems","description":"","frontmatter":{},"headers":[{"level":2,"title":"What is a System?","slug":"what-is-a-system","link":"#what-is-a-system","children":[]},{"level":2,"title":"Money System","slug":"money-system","link":"#money-system","children":[]}],"relativePath":"1.0/guide/systems.md"}'),l={name:"1.0/guide/systems.md"},o=e(`<h1 id="systems" tabindex="-1">Systems <a class="header-anchor" href="#systems" aria-hidden="true">#</a></h1><p>Systems are not an actual part of Red, just the recommended way to use it. Systems are a way to organize your project into different modules called systems.</p><h2 id="what-is-a-system" tabindex="-1">What is a System? <a class="header-anchor" href="#what-is-a-system" aria-hidden="true">#</a></h2><p>A system is a table with functions and values in it. You can optionally add lifecycle methods to systems, as they are completely implemented by the developer.</p><p>Systems provide many advantages over full frameworks like Knit. Systems are much more lightweight, are always ready for use when they are required, and they are required, allowing for intellisense and ordered loading. Systems can be for the server or client, or both.</p><p>In this guide, we will be creating an example <code>MoneySystem</code>. The exact code is not what is important, but the way it&#39;s structured.</p><h2 id="money-system" tabindex="-1">Money System <a class="header-anchor" href="#money-system" aria-hidden="true">#</a></h2><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- Server</span></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Players </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">game</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">GetService</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Players</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Red </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(Path.</span><span style="color:#FFCB6B;">To</span><span style="color:#A6ACCD;">.</span><span style="color:#FFCB6B;">Red</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- The recommended way to create networking for a system is to</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- create a namespace with it&#39;s name and call the variable \`Net\`.</span></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> Net </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Red.</span><span style="color:#82AAFF;">Server</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MoneySystem</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> MoneySystem </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- Systems do not use Setters and Getters unless the data is in</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- an unconventional place or requires some processing.</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MoneySystem</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">SetMoney</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">Player</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Player</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">Amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Folder</span><span style="color:#A6ACCD;">(Player):</span><span style="color:#82AAFF;">SetAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Money</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, Amount)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MoneySystem</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">GetMoney</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">Player</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Player</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">: number</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Folder</span><span style="color:#A6ACCD;">(Player):</span><span style="color:#82AAFF;">GetAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Money</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MoneySystem</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">IncrementMoney</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">Player</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Player</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">Amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	MoneySystem.</span><span style="color:#82AAFF;">SetMoney</span><span style="color:#A6ACCD;">(Player, MoneySystem.</span><span style="color:#82AAFF;">GetMoney</span><span style="color:#A6ACCD;">(Player) </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> Amount)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- Note that we connect this in the top level of the module. Systems</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- require that a system be &quot;ready for use&quot; by the time it&#39;s required.</span></span>
<span class="line"><span style="color:#A6ACCD;">Players.</span><span style="color:#FFCB6B;">PlayerAdded</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Connect</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">Player</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">Net</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">Folder</span><span style="color:#A6ACCD;">(Player):</span><span style="color:#82AAFF;">SetAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Money</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> MoneySystem</span></span>
<span class="line"></span></code></pre></div>`,8),t=[o];function p(r,c,y,i,A,D){return a(),n("div",null,t)}const d=s(l,[["render",p]]);export{C as __pageData,d as default};
