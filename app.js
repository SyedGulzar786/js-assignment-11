// // function submit(){
// //     var cities = document.getElementsByName("city");
// //      // yeh ciities aik array hai
// //     for(var city of cities){
// //          //for of loop only array pr chlta hai
// //         if(city.checked){
// //             console.log(city.value);    
// //         }
// //     }
// // }

// // function submition(){
// //     var cities = document.getElementsByName("sheher");
// //     // yeh ciities aik array hai
// //    for(var city of cities){
// //         //for of loop only array pr chlta hai
// //        if(city.checked){
// //            console.log(city.value);    
// //        }
// //    }
// // }

// // function upload(){
// //     var file = document.getElementById("file");
// //     var image = document.getElementById("image");
// //     image.src = URL.createObjectURL(file.files[0]); // temporary opject ka url bnaddeta hai 
// //                                      //array ki form me value store hokr aati hai
// //     image.style.display = "block";
// // }

// // function submitted(get){
// //     console.log(get)
// //     if(get == "over"){
// // event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWcVqK8e_jAPt7mgQ9hMPANlQeFZUAeoJpQ&s"
// //     }
// // else {
// //     event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZlTkB19LynsbzV3g5ZioziaKTCi9VwAYIE8xrg_0hSxI3i0wiNEPgaLGIPVHh2rJWHo&usqp=CAU"
// // }
// // }


// // final version of swaping image

// // function submitted(event){
// //     if(event.type == "mouseover"){
// // event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWcVqK8e_jAPt7mgQ9hMPANlQeFZUAeoJpQ&s"
// // }
// // else {
// //     event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZlTkB19LynsbzV3g5ZioziaKTCi9VwAYIE8xrg_0hSxI3i0wiNEPgaLGIPVHh2rJWHo&usqp=CAU"
// // }
// // }


// // paragraph expnading

// // var paragraph =   `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi earum velit quia accusamus placeat. Dolorum enim, mollitia molestias accusamus sed reprehenderit ex in perferendis ut laborum molestiae, harum id consectetur.
// // Et distinctio consequuntur vero dolore illo voluptatibus consectetur quo magni iusto? Quae, ex quis. Ducimus, aut beatae dolorem ipsam voluptates consectetur ipsum sint, dignissimos, quae facilis perferendis deleniti. Nostrum, a.
// // Beatae reprehenderit, tempore possimus nulla magnam, iusto ipsum aspernatur odit architecto doloremque nisi magni eius iure ex voluptate maxime deleniti tenetur? Eaque quae, eligendi est id totam corrupti accusamus nam.`;

// // var text = document.getElementById("pg");
// // text.innerHTML = paragraph.slice(0,50) + "...";

// // function expand(event){
// //     if(event.type == "mouseover"){
// // text.style.color = "aqua";        
// // text.style.backgroundColor = "black";        
// // text.innerHTML = paragraph;
// // }
// // else {
// // text.style.color = "black";        
// // text.style.backgroundColor = "aqua";        
// // text.innerHTML = paragraph.slice(0,50) + "...";
// // };
// // }

// // zipcode

// // function fillcity(){
// //     var zip = document.getElementById("zip")
// //     var city = document.getElementById("city")
// //     switch(Number(zip.value)){
// // case 2 :
// //     city.value = "Kolkata"
// //     break;
// //     case 1 :
// //         city.value = "Mumbai"
// //         break;
// //         case 0 :
// //             city.value = "Delhi"
// //             break;
// //             case 3 :
// //                 city.value = "Chennai"
// //                 break;
// //                 case 4 :
// //                     city.value = "Bangalore"
// //                     break;
// //                     case 5 :
// //                         city.value = "Hyderabad"
// //                         break;
// //                         case 6 :
// //                             city.value = "Ahmedabad"
// //                             break;
// //                             case 7 :
// //                                 city.value = "Pune"
// //                                 break;
// //                                 case 8 :
// //                                     city.value = "Surat"
// //                                     break;
// //                                     case 9 :
// //                                         city.value = "Jaipur"
// //                                         break;
// //                                         case 10 :
// //                                             city.value = "Lucknow"
// //                                             break;
// //                                             case 11 :
// //                                                 city.value = "Kanpur"
// //                                                 break;
// //                                                 case 12 :
// //                                                     city.value = "Nagpur"
// //                                                     break;
// //                                                     case 13 :
// //                                                         city.value = "Indore"
// //                                                         break;
// //                                                         case 14 :
// //                                                             city.value = "Thane"
// //                                                             break;
// //                     default :
// //                     alert("city is not registered")
// //                     break;
// //     }
// // }

// // chatbot ai

// // logic for creating an ai chat bot to make more accurate and frequent chat........!!

// //     if(['hi','hello','hey','is there any one'].indexOf(elem.value.toLowerCase()) !== -1)
// // var inputBox = document.getElementById("input-box")
// // var store = "";
// // var show = "";
// // var swiper = "";
// // function addEnter(event){
// //  if(event.keyCode == 13){    
// //     store = inputBox.value;
// // console.log(store)
// //     var checkin = ["hn","better",'goo','amazing','gre','th','maze','me','al','hum'];
// // for(var i = 0; i < checkin.length; i++){
// //     swiper = checkin[i]
// //     show = store.indexOf(swiper)
// //     if(show !== -1){    
// // break;
// //     }
// // }
// // if(show !== -1){    
// //     console.log(show);
// // }
// // inputBox.value = "";
// // }
// // }
// var start = 0;
// var store = "";
// var show = "";
// var swiper = "";
// var list = document.getElementById("list")
// var typing = document.getElementById("typing")
// var match = "first";
// function sendMessage(){
//     var greet = 0;
//     var count = 0;
// if(event.keyCode === 13){
//     var elem = event.target;
//     store = elem.value.toLowerCase();
//     list.innerHTML += "<li class='right left' > <span class='right-side same'>  " + elem.value + "   </span> </li>"  
//     typing.style.display = "block";
//     var arr = "abcdefghijklmnopqrstuvwxyz"
//     var arr1 = ['hel','al','sal'];
//     var arr2 = ['fine',"hn",'alright','well',"better",'hum','goo','amazing','gre','bs','th','maze','me','great','doing','goo','fab','fant','awesome','magnificent'];
//     var arr3 = ['bt','pchh','hn','yes'];
//     for(var i = 0; i < store.length; i++){
//         for(var j = 0; j < arr.length; j++){
//      if(store.slice(i,i+2) == "hi" && store.slice(i+3,i+2) !== arr[j] && i == 0){
//               arr1.unshift("hi");
//               break;

//      }
//     }
//     }
//     for(var i = 0; i < arr1.length; i++){
//         swiper = arr1[i]
//         show = store.indexOf(swiper)
//             if(show !== -1){   
//                 start++
//                 for(var i = 1; i <= start; i++){
//                    greet = i;
//                 }
//                 break;
//                 }
//                 show = "";
//                 swiper = "";
//     }
//     for(var i = 0; i < arr2.length; i++){
//         swiper = arr2[i]
//         show = store.indexOf(swiper)
//             if(show !== -1 && match == "first"){ 
//                 count = 2;  
//                 break;
//                 }
//                 show = "";
//                 swiper = ""; 
//     }
//     for(var i = 0; i < arr3.length; i++){
//         swiper = arr3[i]
//         show = store.indexOf(swiper)
//             if(show !== -1 && match == "second"){ 
//                 count = 3;  
//                 break;
//                 }
//                 show = "";
//                 swiper = ""; 
//     }

//     // hello block 101
//     if(greet == 1){
// count = 101;
//     }
//     else if(greet == 2){
//         count = 102;
//     }
//     else if(greet == 3){
//         count = 103;
//     }
//     else if( greet == 4){
//         count = 104;
//     }
//     else{
//         count = 105;
//     }

//     // count block count conditions
//     if(count == 101){
//         setTimeout(function(){
//             list.innerHTML += "<li class='left'> <span class='left-side same'>Hmm</span></li>" 
//         }, 1650)
//         setTimeout(function(){
//             list.innerHTML += "<li class='left'> <span class='left-side same'>kese ho tm?</span> </li>"  
//             typing.style.display = "none";
//         }, 3200)
//     }
//     else if (count == 102){
//         setTimeout(function(){
//             list.innerHTML += "<li class='left'> <span class='left-side same'>hi helo ni kro aur mri bt suno</span> </li>"  
//             typing.style.display = "none";
//             count == 11
//         }, 2100)
//     }
//     else if (count == 103){
//         setTimeout(function(){
//             list.innerHTML += "<li class='left'> <span class='left-side same'>tm bs hi hello hi krte rho</span> </li>"  
//         }, 2100)
//         setTimeout(function(){
//             list.innerHTML += "<li class='left'> <span class='left-side same'>meri bt toh snoge ni tm</span> </li>"  
//             typing.style.display = "none";
//             count == 11
//         }, 3700)
//     }
//     else if(count == 2){
//         match = "second";
//         setTimeout(function(){
//             list.innerHTML += "<li class='left'> <span class='left-side same'>aww</span> </li>"  
//         }, 2000)
//         setTimeout(function(){
//             list.innerHTML += "<li class='left'> <span class='left-side same'>aik bt pchhn tmse ?</span> </li>"  
//             typing.style.display = "none";
//         }, 4100)
//     }
//     else if(count == 3){
//         setTimeout(function(){
//             list.innerHTML += "<li class='left'> <span class='left-side same'>nhi chrdo</span> </li>"  
//         }, 2000)
//         setTimeout(function(){
//             list.innerHTML += "<li class='left'> <span class='left-side same'>tm yqin ni kroge</span> </li>"  
//             typing.style.display = "none";
//         }, 4100)
//     }
//     else if( count == 104){
//         setTimeout(function(){
//             list.innerHTML += "<li class='left'> <span class='left-side same'>mai me jao !</span> </li>"  
//             typing.style.display = "none";
//         }, 1900)
//     }
//     else{
//         setTimeout(function(){
//             list.innerHTML += "<li class='left'> <span class='left-side same'>kya hai fazul hrktein mt kro !!</span> </li>"  
//             typing.style.display = "none";
//         }, 2000)
//     }
//     elem.value = ""
// }
// }
