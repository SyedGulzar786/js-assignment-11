// function submit(){
//     var cities = document.getElementsByName("city");
//      // yeh ciities aik array hai
//     for(var city of cities){
//          //for of loop only array pr chlta hai
//         if(city.checked){
//             console.log(city.value);    
//         }
//     }
// }

// function submition(){
//     var cities = document.getElementsByName("sheher");
//     // yeh ciities aik array hai
//    for(var city of cities){
//         //for of loop only array pr chlta hai
//        if(city.checked){
//            console.log(city.value);    
//        }
//    }
// }

// function upload(){
//     var file = document.getElementById("file");
//     var image = document.getElementById("image");
//     image.src = URL.createObjectURL(file.files[0]); // temporary opject ka url bnaddeta hai 
//                                      //array ki form me value store hokr aati hai
//     image.style.display = "block";
// }

// function submitted(get){
//     console.log(get)
//     if(get == "over"){
// event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWcVqK8e_jAPt7mgQ9hMPANlQeFZUAeoJpQ&s"
//     }
// else {
//     event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZlTkB19LynsbzV3g5ZioziaKTCi9VwAYIE8xrg_0hSxI3i0wiNEPgaLGIPVHh2rJWHo&usqp=CAU"
// }
// }


// final version of swaping image

// function submitted(event){
//     if(event.type == "mouseover"){
// event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWcVqK8e_jAPt7mgQ9hMPANlQeFZUAeoJpQ&s"
// }
// else {
//     event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZlTkB19LynsbzV3g5ZioziaKTCi9VwAYIE8xrg_0hSxI3i0wiNEPgaLGIPVHh2rJWHo&usqp=CAU"
// }
// }


// paragraph expnading

// var paragraph =   `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi earum velit quia accusamus placeat. Dolorum enim, mollitia molestias accusamus sed reprehenderit ex in perferendis ut laborum molestiae, harum id consectetur.
// Et distinctio consequuntur vero dolore illo voluptatibus consectetur quo magni iusto? Quae, ex quis. Ducimus, aut beatae dolorem ipsam voluptates consectetur ipsum sint, dignissimos, quae facilis perferendis deleniti. Nostrum, a.
// Beatae reprehenderit, tempore possimus nulla magnam, iusto ipsum aspernatur odit architecto doloremque nisi magni eius iure ex voluptate maxime deleniti tenetur? Eaque quae, eligendi est id totam corrupti accusamus nam.`;

// var text = document.getElementById("pg");
// text.innerHTML = paragraph.slice(0,50) + "...";

// function expand(event){
//     if(event.type == "mouseover"){
// text.style.color = "aqua";        
// text.style.backgroundColor = "black";        
// text.innerHTML = paragraph;
// }
// else {
// text.style.color = "black";        
// text.style.backgroundColor = "aqua";        
// text.innerHTML = paragraph.slice(0,50) + "...";
// };
// }

// zipcode

function fillcity(){
    var zip = document.getElementById("zip")
    var city = document.getElementById("city")
    switch(Number(zip.value)){
case 2 :
    city.value = "Kolkata"
    break;
    case 1 :
        city.value = "Mumbai"
        break;
        case 0 :
            city.value = "Delhi"
            break;
            case 3 :
                city.value = "Chennai"
                break;
                case 4 :
                    city.value = "Bangalore"
                    break;
                    case 5 :
                        city.value = "Hyderabad"
                        break;
                        case 6 :
                            city.value = "Ahmedabad"
                            break;
                            case 7 :
                                city.value = "Pune"
                                break;
                                case 8 :
                                    city.value = "Surat"
                                    break;
                                    case 9 :
                                        city.value = "Jaipur"
                                        break;
                                        case 10 :
                                            city.value = "Lucknow"
                                            break;
                                            case 11 :
                                                city.value = "Kanpur"
                                                break;
                                                case 12 :
                                                    city.value = "Nagpur"
                                                    break;
                                                    case 13 :
                                                        city.value = "Indore"
                                                        break;
                                                        case 14 :
                                                            city.value = "Thane"
                                                            break;
                    default :
                    alert("city is not registered")
                    break;
    }
}