import {readFileSync,writeFileSync} from 'node:fs';
import {openSync} from 'fontkit';
const display=openSync('fonts/BarlowCondensed-Bold.ttf');
const body=openSync('fonts/SchibstedGrotesk.ttf').getVariation({wght:450});
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;');
function text(x,y,s,size=16,color='#eeeae0',heading=false){
 const f=heading?display:body,scale=size/f.unitsPerEm,run=f.layout(s);let out='';
 run.glyphs.forEach((g,i)=>{const p=run.positions[i];out+=`<path transform="translate(${x+p.xOffset*scale} ${y-p.yOffset*scale}) scale(${scale} ${-scale})" d="${g.path.toSVG()}"/>`;x+=p.xAdvance*scale;});
 return `<g fill="${color}"><title>${esc(s)}</title>${out}</g>`;
}
const logo=readFileSync('profile/47-logo.png').toString('base64');
const mark=(x,y,w,h)=>`<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="205 182 390 438"><defs><mask id="mark" maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="800"><image href="data:image/png;base64,${logo}" width="800" height="800"/></mask></defs><rect width="800" height="800" fill="#eeeae0" mask="url(#mark)"/></svg>`;
function save(name,height,title,content){writeFileSync(`profile/assets/${name}.svg`,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 ${height}" role="img" aria-labelledby="title"><title id="title">${esc(title)}</title><rect width="960" height="${height}" fill="#0c0c0b"/>${content}</svg>`);}
save('house',400,'47 Industries. A house of companies. Software, AI, and the systems behind them.',`
<style>@keyframes travel{to{stroke-dashoffset:-320}}.travel{animation:travel 18s linear infinite}@media(prefers-reduced-motion:reduce){.travel{animation:none}}</style>
<path d="M655 0H960V330H585Z" fill="#171715"/><path d="M682 24L589 310" stroke="#363630" stroke-width="2"/><path class="travel" d="M682 24L589 310" stroke="#ff793f" stroke-width="3" stroke-dasharray="48 272"/>
${text(38,49,'47 INDUSTRIES',17)}${text(34,145,'A HOUSE OF',88,'#eeeae0',true)}${text(34,237,'COMPANIES.',88,'#eeeae0',true)}${text(38,291,'Software. AI. The systems behind them.',18,'#bfbab0')}${mark(730,72,154,174)}
<rect y="342" width="960" height="58" fill="#ff793f"/>${text(38,378,'BUILD. OPERATE. KEEP GOING.',18,'#0c0c0b')}${text(718,378,'47INDUSTRIES.COM',16,'#0c0c0b')}`);
save('legacy',200,'Never stop building. In memory of Bryce Raiford.',`<rect width="9" height="200" fill="#ff793f"/>${text(38,86,'NEVER STOP BUILDING.',57,'#eeeae0',true)}${text(40,134,'It started with a 3D printer and a promise.',19,'#bfbab0')}${text(40,169,'In memory of Bryce Raiford.',16,'#bfbab0')}${mark(800,50,86,98)}`);
