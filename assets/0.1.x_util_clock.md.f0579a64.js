import{_ as e,c as a,o as c,a as t}from"./app.1de793c8.js";const m=JSON.parse('{"title":"Clock","description":"","frontmatter":{},"headers":[{"level":2,"title":"Clock Object","slug":"clock-object","link":"#clock-object","children":[{"level":3,"title":"new","slug":"new","link":"#new","children":[]},{"level":3,"title":"Pause","slug":"pause","link":"#pause","children":[]},{"level":3,"title":"Resume","slug":"resume","link":"#resume","children":[]}]}],"relativePath":"0.1.x/util/clock.md"}'),l={name:"0.1.x/util/clock.md"},s=t('<h1 id="clock" tabindex="-1">Clock <a class="header-anchor" href="#clock" aria-hidden="true">#</a></h1><p>In a world where FPS unlockers are fairly commonplace among PC players, it&#39;s important to have an easy way to ensure some code doesn&#39;t run more than 60 times per second. This is what the <code>Clock</code> class is for.</p><p>Internally, the <code>Clock</code> class is used to send fired events to the server at a rate of 60 times per second. Were this not the case, the server would be flooded with events whenever a player with an FPS unlocker is playing, and face extreme lag.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>Clock</code> connects itself to the <code>Heartbeat</code> event, and uses the delta passed to it. If the clock falls behind, it will aggresively catch up. This means that it will call the callback every frame until it is caught up. This can cause cascading effects if the callback is slow.</p><p>In the worst case senario, where the <code>Clock</code> has fallen more than 10 intervals behind, it will begin skipping intervals. It will throw warnings when this happens.</p></div><h2 id="clock-object" tabindex="-1">Clock Object <a class="header-anchor" href="#clock-object" aria-hidden="true">#</a></h2><h3 id="new" tabindex="-1">new <a class="header-anchor" href="#new" aria-hidden="true">#</a></h3><p><code>(Interval: number, Callback: () -&gt; ()) -&gt; Clock</code></p><p>Creates a new <code>Clock</code> object. The callback will be called every <code>Interval</code> seconds.</p><h3 id="pause" tabindex="-1">Pause <a class="header-anchor" href="#pause" aria-hidden="true">#</a></h3><p><code>() -&gt; ()</code></p><p>Pauses the clock. When paused, a Clock can be garbage collected.</p><h3 id="resume" tabindex="-1">Resume <a class="header-anchor" href="#resume" aria-hidden="true">#</a></h3><p><code>() -&gt; ()</code></p><p>Resumes the clock.</p>',14),o=[s];function n(r,i,d,h,p,u){return c(),a("div",null,o)}const b=e(l,[["render",n]]);export{m as __pageData,b as default};