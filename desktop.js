/* shared macOS chrome for every page: menubar + dock.
   page sets <body data-app="Menubar title" data-running="term gui skills"> */
(() => {
const body = document.body;
const running = (body.dataset.running || '').split(' ');
const on = (k) => running.includes(k) ? ' on' : '';

body.insertAdjacentHTML('afterbegin', `<header class="menubar" aria-hidden="true">
    <span class="logo">a</span><b id="appName">${body.dataset.app || 'Finder'}</b>
    <span class="menus"><span>File</span><span>Edit</span><span>View</span><span>Window</span><span>Help</span></span>
    <span class="tray"><span>guest</span><span class="bat"></span><span id="barClock"></span></span>
</header>`);

// skill graph, telegram, mail glyphs: Phosphor Icons (MIT)
body.insertAdjacentHTML('beforeend', `<nav class="dock" id="dock" aria-label="Dock">
    <a class="app i-term${on('term')}" id="dockTerm" href="/" aria-label="Terminal"><span class="p" aria-hidden="true">&gt;_</span></a>
    <a class="app${on('gui')}" id="dockGui" href="/#gui" aria-label="Profile"><img src="/avatar.png" alt="" width="44" height="44"></a>
    <a class="app i-skills${on('skills')}" href="/skills/" aria-label="Skill Graph"><svg class="icon" viewBox="0 0 256 256" aria-hidden="true"><path fill="currentColor" d="M200,152a35.77,35.77,0,0,0-16.46,4l-21.39-16.64A35.49,35.49,0,0,0,164,128.65l10.35-3.44A36,36,0,1,0,164,100c0,1.11.06,2.21.16,3.3l-7.78,2.59A36,36,0,0,0,128,92c-1,0-1.88,0-2.81.12l-4.45-10A36,36,0,1,0,96,92c1,0,1.88,0,2.81-.12l4.45,10a35.91,35.91,0,0,0-8.59,39.7L73.39,160.49a36,36,0,1,0,15.94,17.93l21.28-18.91a35.91,35.91,0,0,0,36.8-1.21L167,173.56A36,36,0,1,0,200,152Zm0-64a12,12,0,1,1-12,12A12,12,0,0,1,200,88ZM84,56A12,12,0,1,1,96,68,12,12,0,0,1,84,56ZM56,204a12,12,0,1,1,12-12A12,12,0,0,1,56,204Zm60-76a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm84,72a12,12,0,1,1,12-12A12,12,0,0,1,200,200Z"/></svg></a>
    <span class="sep" aria-hidden="true"></span>
    <a class="app i-gh" href="https://github.com/knight-byte" target="_blank" rel="noopener" aria-label="GitHub"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.522 2 12 2z"/></svg></a>
    <a class="app i-li" href="https://in.linkedin.com/in/abunachar" target="_blank" rel="noopener" aria-label="LinkedIn"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a-2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
    <a class="app i-tg" href="https://t.me/abunachar" target="_blank" rel="noopener" aria-label="Telegram"><svg class="icon" viewBox="0 0 256 256" aria-hidden="true"><path fill="currentColor" d="M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z"/></svg></a>
    <a class="app i-mail" href="mailto:hello@abunachar.com" aria-label="Mail"><svg class="icon" viewBox="0 0 256 256" aria-hidden="true"><path fill="currentColor" d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"/></svg><span class="badge" aria-hidden="true">1</span></a>
</nav>`);

// phones get iPhone chrome instead (see desktop.css): status bar + home indicator
body.insertAdjacentHTML('beforeend', `<div class="sbar" aria-hidden="true"><span id="sbarClock"></span>
    <span class="r"><span class="sig"><i></i><i></i><i></i><i></i></span><span class="bat"></span></span></div>
<button type="button" class="homebar" id="homebar" aria-label="Home screen"></button>`);

/* home indicator: pages can handle 'ios-home' themselves (preventDefault), otherwise go to the home page */
const homebar = document.getElementById('homebar');
const goHome = () => { if(dispatchEvent(new Event('ios-home', { cancelable:true }))) location.href = '/'; };
let hy = null;
homebar.addEventListener('pointerdown', (e) => { hy = e.clientY; });
homebar.addEventListener('pointerup', (e) => { if(hy !== null && hy - e.clientY > 20) goHome(); hy = null; });
homebar.addEventListener('click', goHome);

/* menubar clock */
const clock = document.getElementById('barClock');
function tick(){
    const d = new Date();
    clock.textContent = d.toLocaleDateString(undefined, { weekday:'short', day:'numeric', month:'short' }) + ' ' +
        d.toLocaleTimeString([], { hour:'numeric', minute:'2-digit' });
    document.getElementById('sbarClock').textContent = d.toLocaleTimeString([], { hour:'numeric', minute:'2-digit' }).replace(/\s?[AP]M$/i, '');
}
tick();
setInterval(tick, 1000);

/* dock: magnify near pointer, bounce on click */
const dock = document.getElementById('dock');
const apps = [...dock.querySelectorAll('.app')];
dock.addEventListener('pointermove', (e) => {
    if(e.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion:reduce), (max-width:620px)').matches) return;
    apps.forEach(a => {
        const r = a.getBoundingClientRect();
        const k = Math.max(0, 1 - Math.abs(e.clientX - (r.left + r.width / 2)) / 150);
        a.style.setProperty('--sz', 44 + 26 * k * k * (3 - 2 * k) + 'px');
    });
});
dock.addEventListener('pointerleave', () => apps.forEach(a => a.style.removeProperty('--sz')));
apps.forEach(a => {
    a.addEventListener('click', () => { a.classList.remove('bounce'); void a.offsetWidth; a.classList.add('bounce'); });
    a.addEventListener('animationend', () => a.classList.remove('bounce'));
});
})();
