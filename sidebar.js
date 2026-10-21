/* Floor Bounce: desktop sidebar (add-on). Phones keep the floating bar. */
(function(){
  var nav=document.querySelector('nav.tabs');
  if(!nav)return;
  var css='@media (min-width:900px){'+
  'nav.tabs{display:flex;grid-template-columns:none;margin:0;left:0;right:auto;top:0;bottom:0;transform:none;width:250px;max-width:none;height:auto;border-radius:0 28px 28px 0;padding:16px 12px;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:6px;transition:transform .25s ease;z-index:20}'+
  'nav.tabs .sb-head{display:flex;align-items:center;justify-content:space-between;padding:4px 8px 16px;font-size:1.1rem;font-weight:700;color:var(--ink)}'+
  'nav.tabs .sb-x{flex:none;width:36px;height:36px;min-height:0;min-width:0;padding:0;border-radius:50%;font-size:1.5rem;line-height:1;display:grid;place-items:center;background:var(--field);color:var(--ink);border:1px solid var(--line);box-shadow:none;cursor:pointer}'+
  'nav.tabs button[data-t]{flex-direction:row;justify-content:flex-start;align-items:center;gap:14px;width:100%;min-height:48px;padding:0 16px;font-size:.98rem;border-radius:14px}'+
  'nav.tabs button[data-t] svg{width:22px;height:22px}'+
  'body{transition:padding-left .25s ease;padding-left:250px}'+
  'body.sb-closed{padding-left:0}'+
  'body.sb-closed nav.tabs{transform:translateX(-105%)}'+
  'main{padding-bottom:40px}'+
  'body.sb-closed .sb-open{display:grid}'+
  '}'+
  '@media (max-width:899px){nav.tabs .sb-head,.sb-open{display:none!important}}'+
  '.sb-open{display:none;position:fixed;top:14px;left:14px;z-index:21;width:46px;height:46px;border-radius:50%;place-items:center;color:var(--ink);cursor:pointer;background:var(--glass);border:1px solid var(--glass-brd);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px)}'+
  '.sb-open svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}';
  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

  var head=document.createElement('div');head.className='sb-head';
  head.innerHTML='<span>Floor Bounce</span><button type="button" class="sb-x" aria-label="Hide menu">&times;</button>';
  nav.insertBefore(head,nav.firstChild);
  var open=document.createElement('button');open.type='button';open.className='sb-open';open.setAttribute('aria-label','Show menu');
  open.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  document.body.appendChild(open);

  function set(closed){document.body.classList.toggle('sb-closed',closed);try{localStorage.setItem('fbm-sb',closed?'0':'1')}catch(e){}}
  var c=false;try{c=localStorage.getItem('fbm-sb')==='0'}catch(e){}
  document.body.classList.toggle('sb-closed',c);
  head.querySelector('.sb-x').addEventListener('click',function(){set(true)});
  open.addEventListener('click',function(){set(false)});
})();
