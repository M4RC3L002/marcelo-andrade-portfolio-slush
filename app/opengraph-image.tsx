import { ImageResponse } from 'next/og';
export const alt='Marcelo Andrade — Sites e sistemas';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'#dceeff',color:'#0c1721',width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:'70px',fontFamily:'sans-serif'}}><div style={{display:'flex',fontSize:42,fontWeight:800}}>ma.</div><div style={{fontSize:90,lineHeight:1,fontWeight:800,marginTop:55,display:'flex'}}>DA SUA IDEIA</div><div style={{fontSize:90,lineHeight:1,fontWeight:800,marginTop:12,display:'flex'}}>PARA O MUNDO.</div><div style={{fontSize:28,marginTop:55,display:'flex'}}>Marcelo Andrade · Sites e sistemas web</div></div>,size);}
