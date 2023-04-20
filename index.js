$(".hamlogo").click(function(){
    $(".sidepanelextended").toggleClass("hmb");
    $(".content").toggleClass("blurcontent");
    $(".footer").toggleClass("blurcontent");
});

$(".iconpass").on('click', function(){
    $(".iconpass").toggleClass("fa-eye");
    $(".iconpass").toggleClass("fa-eye-slash");
    $(".mailnum1").attr("type","text");
        $(".iconpass").on('click', function(){
            $(".mailnum1").attr("type","password");
        });
});

$(".iconpass1").on('click', function(){
    $(".iconpass1").toggleClass("fa-eye");
    $(".iconpass1").toggleClass("fa-eye-slash");
    $(".mailnum1").attr("type","text");
        $(".iconpass1").on('click', function(){
            $(".mailnum1").attr("type","password");
        });
});

$(".wtnContent").mouseover(function(){
    $(".heartbeat").addClass("heartbeathover");
})
$(".wtnContent").mouseout(function(){
    $(".heartbeat").removeClass("heartbeathover");
})

var imglink = "https://source.unsplash.com/user/c_v_r/1900x800";
// remove this link & input one from database

var noOfImages = 1;
// change this to noOfImages = 0

// if(imageuploadfunction){
//     noOfImages = noOfImages + 1;
// }
// remove the comment from above condition

var name = ".img" + noOfImages;

for(let i=1; i<=noOfImages; i++){
//    document.querySelector(name).setAttribute("src", imglink);
//    remove the comment of above line to impliment function
}



var addmoreLength = document.querySelectorAll(".addmore").length;
for(let i = 0; i<=addmoreLength; i++){
    document.querySelectorAll(".addmore")[i].onclick = function(){
        document.querySelector(".popup").style.display = "block";
    }
    document.querySelector(".close").onclick = function(){
        document.querySelector(".popup").style.display = "none";
    }
}




// $(".showmore").on(click, function(){
//   $(".cilcked").css("dispaly","block");
// })

// document.querySelector(".showmore").onclick = function(){
//   document.querySelector(".clicked").style.display = "block";
//   alert("asfjg");
// }

// $(".showmore").on("click",function(){
//     $(".clicked").css("display","block");
// })

function myFunction(){
    // alert("hey !tha page is loaded!");

    if($(".clicked").css("display")=="none"){
        document.querySelector(".clicked").style.display = "block";
        document.querySelector(".showmore1").innerHTML = "show less...";
    }else{
        document.querySelector(".clicked").style.display = "none";
        document.querySelector(".showmore1").innerHTML = "show more..."
    }
}

document.querySelector(".searchCont").onclick = function(){
    alert("afjgh");
};




// $(".iconpass").on('click', function(){
//     if($(".iconpass").attr('type')==='password'){

//     }else{
//         $(".mailnum1").attr("type","password");
//     };
// })


//  javascript code

// document.querySelector(".iconpass").addEventListener("click", function(){
//     document.querySelector(".iconpass").classList.toggle("fa-eye-slash");
//     document.querySelector(".iconpass").classList.toggle("fa-eye");
// });
