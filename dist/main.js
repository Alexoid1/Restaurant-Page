(()=>{"use strict";document.body.style.margin="0",document.body.style.padding="0",document.body.style.boxSizing="border-box";let e=document.getElementById("content");e.style.maxWidth="1600px",e.style.width="100%",e.style.height="100vh",e.style.background="#007a43",function(){let e=document.getElementById("content"),t=document.createElement("nav");function l(e){e.target.style.background="#007a43",e.target.style.color="white"}function n(e){e.target.style.color="#007a43",e.target.style.background="white"}t.style.color="#007a43",t.style.background="white",t.style.position="fixed",t.style.width="1600px",t.style.height="60px";let d=document.createElement("ul");d.style.width="28%",d.style.listStyle="none",d.style.marginTop="0px",d.style.display="flex",d.style.flexDirection="row",d.style.justifyContent="space-between",d.style.alignItems="center";let o=document.createElement("li");o.addEventListener("mouseover",l),o.addEventListener("mouseout",n),o.textContent="Home",o.style.padding="15px 10px",o.style.fontSize="20px",o.style.fontWeight="bolder",o.style.borderRadius="20px";let i=document.createElement("li"),s=document.createElement("li");i.addEventListener("mouseover",l),i.addEventListener("mouseout",n),s.addEventListener("mouseover",l),s.addEventListener("mouseout",n),i.textContent="Menu",i.style.fontSize="20px",i.style.fontWeight="bolder",i.style.borderRadius="20px",i.style.padding="15px 10px",s.textContent="About",s.style.fontSize="20px",s.style.fontWeight="bolder",s.style.padding="15px 10px",s.style.borderRadius="20px",d.appendChild(o),d.appendChild(i),d.appendChild(s),t.appendChild(d),e.appendChild(t)}();let t=document.createElement("div");t.style.height="580px",t.style.backgroundImage="url(../image/pizza.jpeg)",t.style.backgroundSize="cover",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",e.appendChild(t);let l=document.createElement("p");l.style.fontFamily="Lobster",l.style.color="white",l.style.fontSize="85px",l.style.marginTop="0",l.style.textAlign="center",l.textContent="Pablo's Pizza the best pizza.",t.appendChild(l);let n=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div");n.style.width="100%",n.style.height="230px",n.style.display="grid",n.style.gridTemplateColumns="1fr 1fr 1fr 1fr",d.style.backgroundImage="url(../image/tt.jpg)",d.style.backgroundSize="cover",o.style.background="url(../image/chesse.jpg)",o.style.backgroundSize="cover",i.style.background="url(../image/org.jpg)",i.style.backgroundSize="cover",s.style.background="url(../image/chef.jpg)",s.style.backgroundSize="cover",n.appendChild(d),n.appendChild(o),n.appendChild(i),n.appendChild(s),e.appendChild(n)})();