(function(){
  const root = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');
  if(btn){
    btn.addEventListener('click', ()=>{
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try{localStorage.setItem('theme', next);}catch(e){}
    });
  }
})();
