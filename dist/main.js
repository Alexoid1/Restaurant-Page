(()=>{"use strict";document.body.style.margin="0",document.body.style.padding="0",document.body.style.boxSizing="border-box";let e=document.getElementById("content");e.style.width="1600px",e.style.height="100vh",e.style.background="grey",function(){let e=document.getElementById("content"),t=document.createElement("nav");function n(e){e.target.style.background="#007a43",e.target.style.color="white"}function l(e){e.target.style.color="#007a43",e.target.style.background="white"}t.style.color="#007a43",t.style.background="white",t.style.position="fixed",t.style.width="100%",t.style.height="60px";let o=document.createElement("ul");o.style.width="40%",o.style.listStyle="none",o.style.marginTop="0px",o.style.display="flex",o.style.flexDirection="row",o.style.justifyContent="space-between",o.style.alignItems="center";let d=document.createElement("li");d.addEventListener("mouseover",n),d.addEventListener("mouseout",l),d.textContent="Home",d.style.padding="15px 10px",d.style.fontSize="20px",d.style.fontWeight="bolder",d.style.borderRadius="20px";let s=document.createElement("li"),i=document.createElement("li");s.addEventListener("mouseover",n),s.addEventListener("mouseout",l),i.addEventListener("mouseover",n),i.addEventListener("mouseout",l),s.textContent="Menu",s.style.fontSize="20px",s.style.fontWeight="bolder",s.style.borderRadius="20px",s.style.padding="15px 10px",i.textContent="About",i.style.fontSize="20px",i.style.fontWeight="bolder",i.style.padding="15px 10px",i.style.borderRadius="20px",o.appendChild(d),o.appendChild(s),o.appendChild(i),t.appendChild(o),e.appendChild(t)}()})();