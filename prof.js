function sendmail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };

    const serviceId="service_rtz6539";
    const tempId="template_3i1ri93";
    
    emailjs
        .send(serviceId,tempId,params)
        .then((res)=>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("Your message sent successfully");
    
        })
        .catch((err)=>console.log(err));

}

