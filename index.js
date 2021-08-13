const sechand=document.querySelector('.second-hand');
const minhand=document.querySelector('.min-hand');
const hrhand=document.querySelector('.hour-hand');
function setDate() {
    const now=new Date()
    const seconds=now.getSeconds();
    const sec_deg=((seconds/60)*360)+90;
    sechand.style.transform=`rotate(${sec_deg}deg)`;
    console.log(seconds);

    const min=now.getMinutes();
    const min_deg=((min/60)*360)+90;
    minhand.style.transform=`rotate(${min_deg}deg)`;
    
    const hr=now.getHours();
    const hr_deg=((hr/60)*360)+90;
    hrhand.style.transform=`rotate(${hr_deg}deg)`;
    
}
setInterval(setDate,1000);