
let courses=[
    {
        name:"Web Design",
        img:"1.png",
        content:"Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.",
        price:15000,
        duration:"45Hrs"
    },
    {
        name:"Angular",
        img:"2.png",
        content:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.",
        price:20000,
        duration:"60Hrs"   
    },
    {
        name:"React",
        img:"3.png",
        content:"It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks.",
        price:18000,
        duration:"60Hrs"   
    },
    {
        name:"PHP",
        img:"4.webp",
        content:"PHP(short for Hypertext PreProcessor) is the most widely used open source and general purpose server side scripting language used mainly in web development to create dynamic websites and applications. It was developed in 1994 by Rasmus",
        price:15000,
        duration:"60Hrs"   
    },
    {
        name:"Java",
        img:"5.jpeg",
        content:"Java is a platform-independent, object-oriented programming language (OOP). It is not to be confused with JavaScript, a scripting language used to create dynamic web pages. Due to its reliability and ease of use, Java is one of the most popular programming languages in the world.",
        price:25000,
        duration:"70Hrs"   
    },
    {
        name:"Python",
        img:"6.png",
        content:"Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems.",
        price:22000,
        duration:"60Hrs"   
    }
    

]

/*
let p=""
for(let i=0;i<courses.length;i++){
    p+='<div class="col-md-4 col-sm-12 col-12 mb-3"><div class="card h-100"><img src="images/'+courses[i].img+'" alt=""><div class="card-body"><h3 class="card-title  text-danger">'+courses[i].name+'</h3><p class="card-text">'+courses[i].content+'</p><div class="text-center"><button class="btn btn-danger">Fee: '+courses[i].price+'/-</button><button class="btn btn-success ms-3">Duration: '+courses[i].duration+'</button></div></div></div></div>'
}

document.getElementById("tech").innerHTML=p;

*/

/*
let p=""
for(let i=0;i<courses.length;i++){
    p+=`
    <div class="col-md-4 col-sm-12 col-12 mb-3">
        <div class="card h-100">
            <img src="images/${courses[i].img}" alt="">
            <div class="card-body">
                <h3 class="card-title text-warning">${courses[i].name}</h3>
                <p class="card-text">${courses[i].content}</p>
                <div class="text-center">
                    <button class="btn btn-danger">Fee: ${courses[i].price}/-</button>
                    <button class="btn btn-success ms-3">Duration: ${courses[i].duration}</button>
                </div>
            </div>
        </div>
    </div>
    `
}

document.getElementById("tech").innerHTML=p;
*/

/*
let p=""
for(let course of courses){
    p+=`
    <div class="col-md-4 col-sm-12 col-12 mb-3">
        <div class="card h-100">
            <img src="images/${course.img}" alt="">
            <div class="card-body">
                <h3 class="card-title text-success">${course.name}</h3>
                <p class="card-text">${course.content}</p>
                <div class="text-center">
                    <button class="btn btn-danger">Fee: ${course.price}/-</button>
                    <button class="btn btn-success ms-3">Duration: ${course.duration}</button>
                </div>
            </div>
        </div>
    </div>
    `
}

document.getElementById("tech").innerHTML=p;
*/
/*
let p=""
for(let course in courses){
    p+=`
    <div class="col-md-4 col-sm-12 col-12 mb-3">
        <div class="card h-100">
            <img src="images/${courses[course].img}" alt="">
            <div class="card-body">
                <h3 class="card-title text-success">${courses[course].name}</h3>
                <p class="card-text">${courses[course].content}</p>
                <div class="text-center">
                    <button class="btn btn-danger">Fee: ${courses[course].price}/-</button>
                    <button class="btn btn-success ms-3">Duration: ${courses[course].duration}</button>
                </div>
            </div>
        </div>
    </div>
    `
}

document.getElementById("tech").innerHTML=p;

*/

/*
let p=""
courses.forEach((course)=>{
p+=`
<div class="col-md-4 col-sm-12 col-12 mb-3">
        <div class="card h-100">
            <img src="images/${course.img}" alt="">
            <div class="card-body">
                <h3 class="card-title text-primary">${course.name}</h3>
                <p class="card-text">${course.content}</p>
                <div class="text-center">
                    <button class="btn btn-danger">Fee: ${course.price}/-</button>
                    <button class="btn btn-success ms-3">Duration: ${course.duration}</button>
                </div>
            </div>
        </div>
    </div>
`
})

document.getElementById("tech").innerHTML=p;

*/

let p=""
courses.map((course)=>{
p+=`
<div class="col-md-4 col-sm-12 col-12 mb-3">
        <div class="card h-100">
            <img src="images/${course.img}" alt="">
            <div class="card-body">
                <h3 class="card-title text-secondary">${course.name}</h3>
                <p class="card-text">${course.content}</p>
                <div class="text-center">
                    <button class="btn btn-danger">Fee: ${course.price}/-</button>
                    <button class="btn btn-success ms-3">Duration: ${course.duration}</button>
                </div>
            </div>
        </div>
    </div>
`
})

document.getElementById("tech").innerHTML=p;