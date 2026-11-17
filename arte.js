/* Ilustrações da Bianca (gata laranja, chapéu de bruxa azul-marinho estrelado) em SVG */
(function(){
const FUR="#E8924A", STRIPE="#C4682A", CREAM="#FFF3E0", INK="#1E120B";
const DEFS=`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
 <linearGradient id="furG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F8BA72"/><stop offset=".55" stop-color="#EE9A50"/><stop offset="1" stop-color="#D9783A"/></linearGradient>
 <radialGradient id="furH" cx=".45" cy=".35" r=".7"><stop offset="0" stop-color="#FFC985"/><stop offset=".6" stop-color="#F0A057"/><stop offset="1" stop-color="#D47634"/></radialGradient>
 <linearGradient id="hatG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3A4775"/><stop offset=".6" stop-color="#252F57"/><stop offset="1" stop-color="#171D3A"/></linearGradient>
 <radialGradient id="ballG" cx=".36" cy=".3" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset=".1" stop-color="#C9FBF3"/><stop offset=".45" stop-color="#8E73EE"/><stop offset=".8" stop-color="#3D1C8F"/><stop offset="1" stop-color="#1E0D55"/></radialGradient>
 <radialGradient id="ballGlow"><stop offset="0" stop-color="#6FE3D6" stop-opacity=".55"/><stop offset=".5" stop-color="#9B7BFF" stop-opacity=".25"/><stop offset="1" stop-color="#9B7BFF" stop-opacity="0"/></radialGradient>
 <radialGradient id="moonG" cx=".35" cy=".35" r=".8"><stop offset="0" stop-color="#FFF6D6"/><stop offset=".6" stop-color="#F6D27A"/><stop offset="1" stop-color="#D9A93E"/></radialGradient>
 <linearGradient id="cardG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#34207A"/><stop offset="1" stop-color="#140B38"/></linearGradient>
 <linearGradient id="goldG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE9A8"/><stop offset=".5" stop-color="#F0C55A"/><stop offset="1" stop-color="#B9861F"/></linearGradient>
 <linearGradient id="creamCard" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FDF5E6"/><stop offset="1" stop-color="#EAD3A2"/></linearGradient>
 <filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>
 <filter id="glow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs></svg>`;

const star=(x,y,r,c="#F3D98B")=>`<path d="M${x} ${y-r}L${x+r*.28} ${y-r*.28}L${x+r} ${y}L${x+r*.28} ${y+r*.28}L${x} ${y+r}L${x-r*.28} ${y+r*.28}L${x-r} ${y}L${x-r*.28} ${y-r*.28}Z" fill="${c}"/>`;
const sky=(n,w,h,seed=1)=>{let s='',k=seed;const rnd=()=>{k=(k*9301+49297)%233280;return k/233280};
 for(let i=0;i<n;i++){const x=rnd()*w,y=rnd()*h,r=rnd()*1.6+.4;s+=rnd()<.15?star(x,y,r*3,'#FFE7A6'):`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="#fff" opacity="${(.35+rnd()*.6).toFixed(2)}"/>`}return s};

function hat(){return `<g class="hat">
 <ellipse cx="0" cy="-28" rx="70" ry="11" fill="#5a2a0c" opacity=".22"/>
 <path d="M-62 -46 C-50 -104 -22 -148 46 -190 C33 -150 44 -98 66 -48 Z" fill="url(#hatG)"/>
 <path d="M-62 -46 C-50 -104 -22 -148 46 -190 C8 -150 -14 -100 -24 -46Z" fill="#fff" opacity=".06"/>
 <path d="M-40 -100 q20 8 44 -6 M-22 -140 q14 6 34 -6" stroke="#0f1330" stroke-width="2" fill="none" opacity=".35"/>
 <ellipse cx="0" cy="-41" rx="108" ry="25" fill="#141A36"/>
 <ellipse cx="0" cy="-46" rx="102" ry="19" fill="url(#hatG)"/>
 ${star(-22,-88,6)}${star(12,-122,4.5)}${star(28,-70,4)}${star(-38,-62,3.2)}${star(38,-160,3.4)}${star(66,-46,3.2)}${star(-74,-46,3.2)}${star(-6,-56,2.6)}
</g>`}

function eyes(t){
 const open=(x)=>`<circle cx="${x}" cy="4" r="13.5" fill="${INK}"/><circle cx="${x}" cy="4" r="13.5" fill="none" stroke="#7a4a20" stroke-width="1.2" opacity=".6"/><circle cx="${x+4.5}" cy="-1.5" r="4.6" fill="#fff"/><circle cx="${x-3}" cy="9" r="2" fill="#fff" opacity=".7"/>`;
 const shut=(x)=>`<path d="M${x-12} 5 q12 10 24 0" stroke="#4a2a16" stroke-width="3.6" fill="none" stroke-linecap="round"/>`;
 if(t==='closed')return shut(-29)+shut(29);
 if(t==='wink')return open(-29)+`<path d="M17 6 q12 -9 24 0" stroke="#4a2a16" stroke-width="3.8" fill="none" stroke-linecap="round"/>`;
 if(t==='side')return `<circle cx="-22" cy="4" r="13" fill="${INK}"/><circle cx="34" cy="4" r="13" fill="${INK}"/><circle cx="-16" cy="-1" r="4.4" fill="#fff"/><circle cx="40" cy="-1" r="4.4" fill="#fff"/>`;
 return open(-29)+open(29);}

function head(o={}){return `<g>
 <ellipse cx="-58" cy="26" rx="34" ry="30" fill="url(#furG)"/><ellipse cx="58" cy="26" rx="34" ry="30" fill="url(#furG)"/>
 <path d="M-84 30 l-10 6 l12 2 M84 30 l10 6 l-12 2" fill="url(#furG)"/>
 <ellipse cx="0" cy="0" rx="80" ry="68" fill="url(#furH)"/>
 <g stroke="${STRIPE}" stroke-width="5" stroke-linecap="round" fill="none" opacity=".5"><path d="M-14 -40 q5 12 0 22"/><path d="M0 -44 q5 14 0 26"/><path d="M14 -40 q-5 12 0 22"/><path d="M-80 6 q14 0 24 8"/><path d="M-82 20 q14 0 22 6"/><path d="M80 6 q-14 0 -24 8"/><path d="M82 20 q-14 0 -22 6"/></g>
 ${o.blush?'<ellipse cx="-50" cy="26" rx="12" ry="7" fill="#FF8FA3" opacity=".35"/><ellipse cx="50" cy="26" rx="12" ry="7" fill="#FF8FA3" opacity=".35"/>':''}
 ${eyes(o.eyes)}
 <ellipse cx="-13" cy="31" rx="16" ry="12" fill="${CREAM}"/><ellipse cx="13" cy="31" rx="16" ry="12" fill="${CREAM}"/><ellipse cx="0" cy="45" rx="13" ry="8" fill="${CREAM}"/>
 <path d="M-7.5 21 h15 l-7.5 8.5 z" fill="#EE8A8A" stroke="#d26f6f" stroke-width="1" stroke-linejoin="round"/>
 <path d="M0 29.5 v5 M0 34.5 q-6 5 -11 1 M0 34.5 q6 5 11 1" stroke="#9a5530" stroke-width="2" fill="none" stroke-linecap="round"/>
 <g stroke="#fff" stroke-width="1.3" opacity=".75" stroke-linecap="round"><path d="M-24 32 L-80 22"/><path d="M-24 37 L-78 40"/><path d="M24 32 L80 22"/><path d="M24 37 L78 40"/></g>
 ${o.hat===false?'':hat()}
</g>`}
const paw=(x,y,s=1,r=0)=>`<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})"><ellipse cx="0" cy="0" rx="25" ry="17" fill="url(#furG)"/><path d="M-9 6 v7 M0 8 v7 M9 6 v7" stroke="${STRIPE}" stroke-width="2.4" stroke-linecap="round"/></g>`;
const svg=(vb,inner,cls='')=>`<svg class="art ${cls}" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img">${inner}</svg>`;

const ART={
 /* Bianca segurando a bola de cristal */
 crystal:()=>svg("0 0 400 440",`
  <circle cx="200" cy="330" r="150" fill="url(#ballGlow)" class="aura"/>
  <path d="M268 410 C345 418 360 335 322 300" stroke="url(#furG)" stroke-width="26" fill="none" stroke-linecap="round"/>
  <path d="M122 425 C105 330 135 236 200 232 C265 236 295 330 278 425 Z" fill="url(#furG)"/>
  <path d="M165 244 C170 296 230 296 235 244 C218 234 182 234 165 244Z" fill="${CREAM}"/>
  <g transform="translate(200 172) scale(.9)">${head({blush:1})}</g>
  <g class="ballcore">
   <circle cx="200" cy="334" r="66" fill="url(#ballG)"/>
   <g opacity=".75"><polyline points="168,330 185,318 205,326 222,312 236,322" fill="none" stroke="#fff" stroke-width="1" opacity=".7"/>
    <circle cx="168" cy="330" r="2.2" fill="#fff"/><circle cx="185" cy="318" r="1.8" fill="#fff"/><circle cx="205" cy="326" r="2.4" fill="#fff"/><circle cx="222" cy="312" r="1.8" fill="#fff"/><circle cx="236" cy="322" r="2" fill="#fff"/></g>
   <path d="M150 350 C175 372 228 374 252 344" stroke="#C9FBF3" stroke-width="2" fill="none" opacity=".35"/>
   <ellipse cx="176" cy="306" rx="17" ry="10" fill="#fff" opacity=".55" transform="rotate(-30 176 306)"/>
  </g>
  ${paw(150,292,1,-20)}${paw(250,292,1,20)}
  <path d="M146 394 Q200 408 254 394 L240 428 L160 428 Z" fill="url(#goldG)"/>
  <ellipse cx="200" cy="395" rx="54" ry="9" fill="#F6D27A"/>
  ${star(80,90,7,'#FFE7A6')}${star(330,70,5,'#FFE7A6')}${star(340,200,4,'#C4A8FF')}${star(60,230,4,'#C4A8FF')}`,'a-crystal'),

 /* Dormindo numa lua crescente */
 moon:()=>svg("0 0 420 380",`
  <defs><mask id="crM"><rect width="420" height="380" fill="#fff"/><circle cx="252" cy="140" r="126" fill="#000"/></mask></defs>
  <g mask="url(#crM)"><circle cx="200" cy="190" r="152" fill="#F6D27A" opacity=".22" filter="url(#soft)"/></g>
  <g mask="url(#crM)"><circle cx="200" cy="190" r="140" fill="url(#moonG)"/><circle cx="110" cy="230" r="14" fill="#C99227" opacity=".25"/><circle cx="150" cy="300" r="9" fill="#C99227" opacity=".25"/><circle cx="90" cy="170" r="7" fill="#C99227" opacity=".2"/></g>
  <path d="M300 258 C352 280 330 318 262 310" stroke="url(#furG)" stroke-width="20" fill="none" stroke-linecap="round"/>
  <ellipse cx="222" cy="252" rx="92" ry="38" fill="url(#furG)"/>
  <g stroke="${STRIPE}" stroke-width="6" stroke-linecap="round" fill="none" opacity=".45"><path d="M200 218 q10 14 4 30"/><path d="M228 216 q10 14 4 30"/><path d="M256 220 q8 14 2 28"/></g>
  <ellipse cx="270" cy="276" rx="30" ry="14" fill="url(#furG)"/>
  ${paw(160,282,.9,0)}
  <g transform="translate(132 236) rotate(-14) scale(.6)">${head({eyes:'closed',blush:1})}</g>
  <text x="190" y="120" font-family="Cinzel,serif" font-size="30" fill="#C4A8FF" opacity=".9">z</text>
  <text x="214" y="92" font-family="Cinzel,serif" font-size="22" fill="#C4A8FF" opacity=".7">z</text>
  <text x="232" y="70" font-family="Cinzel,serif" font-size="16" fill="#C4A8FF" opacity=".5">z</text>
  ${star(350,60,7,'#FFE7A6')}${star(380,150,4)}${star(40,60,5)}${star(320,330,4,'#C4A8FF')}${sky(16,420,380,7)}`,'a-moon'),

 /* De costas, olhando as estrelas */
 stargazer:()=>svg("0 0 400 460",`
  ${sky(40,400,260,3)}
  <g stroke="#FFE7A6" stroke-width="1" opacity=".55" fill="none"><polyline points="70,70 120,48 170,80 150,122 96,118 70,70"/><polyline points="170,80 230,60 290,86 330,58"/></g>
  <g fill="#fff" filter="url(#glow)"><circle cx="70" cy="70" r="3"/><circle cx="120" cy="48" r="3.6"/><circle cx="170" cy="80" r="3"/><circle cx="150" cy="122" r="2.6"/><circle cx="96" cy="118" r="2.4"/><circle cx="230" cy="60" r="2.6"/><circle cx="290" cy="86" r="3.2"/><circle cx="330" cy="58" r="2.4"/></g>
  <path d="M0 440 Q200 392 400 440 V460 H0Z" fill="#1A1245"/>
  <path d="M0 448 Q200 410 400 448" stroke="#C4A8FF" stroke-opacity=".3" fill="none"/>
  <path d="M252 418 C330 430 344 372 306 352" stroke="url(#furG)" stroke-width="22" fill="none" stroke-linecap="round"/>
  <path d="M200 226 C148 232 126 318 134 384 C140 436 260 436 266 384 C274 318 252 232 200 226Z" fill="url(#furG)"/>
  <g stroke="${STRIPE}" stroke-width="7" stroke-linecap="round" fill="none" opacity=".45"><path d="M160 282 q40 -12 80 0"/><path d="M148 324 q52 -14 104 0"/><path d="M144 366 q56 -14 112 0"/><path d="M200 236 v34"/></g>
  <ellipse cx="148" cy="232" rx="22" ry="20" fill="url(#furG)"/><ellipse cx="252" cy="232" rx="22" ry="20" fill="url(#furG)"/>
  <circle cx="200" cy="212" r="60" fill="url(#furH)"/>
  <g stroke="${STRIPE}" stroke-width="5" stroke-linecap="round" fill="none" opacity=".45"><path d="M182 236 q18 8 36 0"/><path d="M178 252 q22 8 44 0"/></g>
  <g transform="translate(200 196) scale(.78)">${hat()}</g>
  <path d="M140 300 C130 340 132 380 140 400" stroke="#FFE7A6" stroke-opacity=".35" stroke-width="2" fill="none"/>`,'a-star'),

 /* Espiando atrás de uma carta de tarot */
 peek:()=>svg("0 0 400 430",`
  <circle cx="200" cy="260" r="160" fill="#6B3FD4" opacity=".25" filter="url(#soft)"/>
  <g transform="translate(200 196) scale(.8)">${head({eyes:'side'})}</g>
  <rect x="104" y="226" width="192" height="196" rx="16" fill="url(#cardG)" stroke="url(#goldG)" stroke-width="3"/>
  <rect x="116" y="238" width="168" height="172" rx="10" fill="none" stroke="#F3C95E" stroke-opacity=".45"/>
  <text x="200" y="266" text-anchor="middle" font-family="Cinzel,serif" font-size="16" fill="#F3C95E" letter-spacing="4">XIX</text>
  <circle cx="200" cy="328" r="28" fill="url(#goldG)"/>
  <g stroke="#F3C95E" stroke-width="3" stroke-linecap="round">${Array.from({length:12},(_,i)=>{const a=i*Math.PI/6;return `<line x1="${200+38*Math.cos(a)}" y1="${328+38*Math.sin(a)}" x2="${200+50*Math.cos(a)}" y2="${328+50*Math.sin(a)}"/>`}).join('')}</g>
  <text x="200" y="398" text-anchor="middle" font-family="Cinzel,serif" font-size="13" fill="#FFE7A6" letter-spacing="3">O SOL</text>
  ${paw(146,228,1,-8)}${paw(254,228,1,8)}
  ${star(70,120,6,'#FFE7A6')}${star(338,96,5,'#FFE7A6')}${star(350,300,4,'#C4A8FF')}`,'a-peek'),

 /* A pata puxando uma carta */
 paw:()=>svg("0 0 420 320",`
  ${[[-24,150,250],[-8,175,255],[8,200,262]].map(([r,x,y])=>`<g transform="rotate(${r} ${x} ${y+60})"><rect x="${x-52}" y="${y-80}" width="104" height="160" rx="10" fill="url(#cardG)" stroke="url(#goldG)" stroke-width="2.4"/><circle cx="${x}" cy="${y}" r="16" fill="none" stroke="#F3C95E" stroke-opacity=".6"/>${star(x,y,8)}</g>`).join('')}
  <g transform="rotate(10 250 150)"><rect x="196" y="58" width="108" height="166" rx="10" fill="url(#creamCard)" stroke="url(#goldG)" stroke-width="2.6"/>
   <text x="250" y="84" text-anchor="middle" font-family="Cinzel,serif" font-size="12" fill="#8A5A00" letter-spacing="3">XVII</text>
   ${star(250,140,26,'#E8B83E')}${star(222,112,7,'#E8B83E')}${star(280,170,6,'#E8B83E')}
   <text x="250" y="206" text-anchor="middle" font-family="Cinzel,serif" font-size="11" font-weight="700" fill="#24104F" letter-spacing="2">A ESTRELA</text></g>
  <path d="M430 84 C366 74 318 80 284 92 C262 100 264 132 286 136 C322 142 372 136 430 150 Z" fill="url(#furG)"/>
  <g stroke="${STRIPE}" stroke-width="6" stroke-linecap="round" opacity=".45" fill="none"><path d="M330 86 q6 22 0 46"/><path d="M362 84 q6 24 0 50"/><path d="M394 86 q6 24 0 52"/></g>
  <path d="M276 104 h-8 M274 116 h-9 M276 128 h-8" stroke="${STRIPE}" stroke-width="3" stroke-linecap="round"/>
  ${star(60,40,6,'#FFE7A6')}${star(380,250,5,'#C4A8FF')}${star(30,180,4)}`,'a-paw'),

 /* Rosto piscando (adesivo) */
 wink:()=>svg("-120 -205 240 290",`<circle cx="0" cy="-20" r="118" fill="#6B3FD4" opacity=".35" filter="url(#soft)"/>${head({eyes:'wink',blush:1})}${star(92,-120,10,'#FFE7A6')}${star(-96,-150,6,'#FFE7A6')}`,'a-wink'),
};
window.BiancaArt={DEFS,ART,star};
})();
