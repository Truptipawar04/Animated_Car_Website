gsap.from("#nav #logo h3",{
    y:100,
    opacity:0,
    duration:1,
    delay:1
})


gsap.from(".nav-item a",{
    y:100,
    opacity:0,
    duration:1,
    delay:1
})





gsap.from(".main h2",{
    x:100,
    opacity:0,
    duration:1,
    delay:1,

})
gsap.from(".main h3",{
    x:100,
    opacity:0,
    duration:1,
    delay:2,
   
})

gsap.from("nav",{
    opacity:0,
    duration:1,
    delay:1,
})

var a=document.querySelector(".main h2")


a.addEventListener("mousemove",()=>{

   gsap.from(".main img",{
    x:100, 
    opacity:1,
    duration:3,
    delay:1,  
   })

})

var b=document.querySelector(".main img")


b.addEventListener("click",()=>{                            
    gsap.from(".main img",{                 
        scale:2.4, 
        rotate:180,
        x:200, 
        duration:1.5,
    })

    gsap.from(".main h2",{
        x:300,
    })
    gsap.from(".main h3",{
        x:200,
        delay:1
    })
  
})

gsap.from(".contains #product",{

    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:(".contains #product")
})

gsap.from(".info p",{

    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:(".info p")
})

gsap.from(" .contains .img1",{

    x:60,
    opacity:0,
    duration:1.6,
    delay:1,
    scrollTrigger:(" #product .img1")
})

gsap.from(" .contains .img2",{

    y:200,
    opacity:0,
    duration:1.6,
    delay:1,
    scrollTrigger:(" #product .img2")
})

gsap.from(" .contains .img3",{

    y:200,
    opacity:0,
    duration:1.6,
    delay:1,
    scrollTrigger:(" #product .img3")
})

gsap.from(" .contains .img4",{

    x:-60,
    opacity:0,
    duration:1.6,
    delay:1,
    scrollTrigger:(" #product .img4")
})

 var photo1=document.querySelector(".contains .img1")
      photo1.addEventListener("click",()=>{

        gsap.from(".contains .img1",{

            scale:2,
            rotate:10
        })
      })

      var photo2=document.querySelector(".contains .img2")
      photo2.addEventListener("click",()=>{

        gsap.from(".contains .img2",{

            scale:2,
            rotate:-50
        })
      })

      var photo3=document.querySelector(".contains .img3")
      photo3.addEventListener("click",()=>{

        gsap.from(".contains .img3",{

            scale:2,
            rotate:50
        })
      })

      var photo4=document.querySelector(".contains .img4")
      photo4.addEventListener("click",()=>{

        gsap.from(".contains .img4",{

            scale:2,
            rotate:10
        })
      })




