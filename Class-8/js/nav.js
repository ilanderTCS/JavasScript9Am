let menu=[
    {
        name:"Home",
        url:"index.html",
        submenu:[]
    },
    {
        name:"About",
        url:"about.html",
        submenu:[]
    },
    {
        name:"Services",
        url:"services.html",
        submenu:[
            {
                name:"Web Design",
                url:"web.html"
            },
            {
                name:"Web Development",
                url:"webdev.html"
            },
            {
                name:"Seo",
                url:"seo.html"
            }
        ]
    },
    {
        name:"Blog",
        url:"blog.html",
        submenu:[
            {
                name:"Web Design",
                url:"web.html"
            },
            {
                name:"Web Development",
                url:"webdev.html"
            }
            
        ]
    },
    {
        name:"Contact",
        url:"contact.html",
        submenu:[]
    }

]

let p="";
for(let x of menu){

    if(x.submenu.length===0)
    {
        p+= `
        <li class="nav-item">
            <a class="nav-link" href="${x.url}">${x.name}</a>
        </li>
        `
    }
    else{

        p+=`<li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">${x.name}</a>
                <ul class="dropdown-menu">`
                for(let y of x.submenu){
                    p+=`<li><a class="dropdown-item" href="${y.url}">${y.name}</a></li>` 
                }
            
            p+=`</ul>
            </li>` 
        
    }
    
     
    
}

document.getElementById("navs").innerHTML=p;