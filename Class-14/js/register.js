document.getElementById("btn").addEventListener("click",(e)=>{
    e.preventDefault();
    if(checkInputFields())
    {
      alert("Success fully Registered")
    }
    else{
      alert("Somthing Went wrong")
    }
    
  })

  let checkInputFields=()=>{
    fname();
    lname();
    email();
    pwd();
    cpwd();
    checkpasswords();
   
  }
  
  document.getElementById("fname").addEventListener("keyup",()=>{
    fname();
  })
  document.getElementById("lname").addEventListener("keyup",()=>{
    lname();
  })
  document.getElementById("email").addEventListener("keyup",()=>{
    email();
  })
  document.getElementById("pwd").addEventListener("keyup",()=>{
    pwd();
  })
  document.getElementById("cpwd").addEventListener("keyup",()=>{
    cpwd();
    checkpasswords();
  })
  document.getElementById("check").addEventListener("checked",()=>{
    condition();
  })
  let fname=()=>{

    let fname=document.getElementById("fname").value;
    console.log(fname)

    if(fname.length===0){
      document.querySelector("#fnamemsg").innerHTML="<b class='text-danger'>Enter Fname</b>"
      document.querySelector("#fname").style.background="red"
      document.querySelector("#fname").style.color="white"
    }
    else{
      document.querySelector("#fnamemsg").innerHTML=""
      document.querySelector("#fname").style.background="white"
      document.querySelector("#fname").style.color="black"
    }
  }


  let lname=()=>{

      let lname=document.getElementById("lname").value;
      if(lname.length===0){
        document.querySelector("#lnamemsg").innerHTML="<b class='text-danger'>Enter Lname</b>"
        document.querySelector("#lname").style.background="red"
        document.querySelector("#lname").style.color="white"
      }
      else{
        document.querySelector("#lnamemsg").innerHTML=""
        document.querySelector("#lname").style.background="white"
        document.querySelector("#lname").style.color="black"
      }
    }

    let email=()=>{

      let email=document.getElementById("email").value;
      if(email.length===0){
        document.querySelector("#emailmsg").innerHTML="<b class='text-danger'>Enter Email</b>"
        document.querySelector("#email").style.background="red"
        document.querySelector("#email").style.color="white"
      }
      else{
        document.querySelector("#emailmsg").innerHTML=""
        document.querySelector("#email").style.background="white"
        document.querySelector("#email").style.color="black"
      }
    }

    let pwd=()=>{

      let pwd=document.getElementById("pwd").value;
      if(pwd.length===0){
        document.querySelector("#pwdmsg").innerHTML="<b class='text-danger'>Enter Password</b>"
        document.querySelector("#pwd").style.background="red"
        document.querySelector("#pwd").style.color="white"
      }
      else{
        document.querySelector("#pwdmsg").innerHTML=""
        document.querySelector("#pwd").style.background="white"
        document.querySelector("#pwd").style.color="black"
      }
    }
    let cpwd=()=>{

      let cpwd=document.getElementById("cpwd").value;
      if(cpwd.length===0){
        document.querySelector("#cpwdmsg").innerHTML="<b class='text-danger'>Enter cpwd</b>"
        document.querySelector("#cpwd").style.background="red"
        document.querySelector("#cpwd").style.color="white"
      }
      else{
        document.querySelector("#cpwdmsg").innerHTML=""
        document.querySelector("#cpwd").style.background="white"
        document.querySelector("#cpwd").style.color="black"
      }
    }

    let checkpasswords=()=>{
      let pwd=document.getElementById("pwd").value;
      let cpwd=document.getElementById("cpwd").value;
      if(pwd!==cpwd){
        document.querySelector("#cpwdmsg").innerHTML="<b class='text-danger'>Check Your Paswords</b>"
      }
      else{
        document.querySelector("#cpwdmsg").innerHTML=""
      }
    }

    let condition=()=>{
      let check=document.getElementById("check").checked;
      console.log(check)

      if(check==false){
        document.querySelector("#cmsg").innerHTML="<b class='text-danger'>Check Your Conditions</b>"
      }
      else{
        document.querySelector("#cmsg").innerHTML=""
      }
    }


    let success=()=>{
      document.querySelector("#success").innerHTML="<b class='text-success'>Success</b>"
    }