// let burger =document.getElementById('burgerbar');
// let nav =document.getElementById('nav-bar');



// burger.addEventListener('click', function(){
//     nav.classList.toggle('open');
   
// })
// burger.addEventListener('click', function(){
//     burger.classList.toggle('active');
   
// })

// let forelement=document.getElementById('main');
// forelement.addEventListener('submit', function(event){
//     event.preventDefault();
//     let errors={};
//     let form=event.target;

//     let username=document.getElementById('user').value;
//     if(username.length <7 || username==""){
//         errors.username='username can not be empty and must be then 7 charaqters';
//     }
//     let password=document.getElementById('pas').value;
//     let password2=document.getElementById('pass').value;
//     if(password!=password2 || password==''){
//         errors.password2='password do not  be empty and must be match';
//     }
//     let gender =false;
//     form.querySelectorAll('[name="gender"]').forEach(y => {
//         if(y.Checked){
//             gender=true;
//         }
//         if(!gender){
//             errors.gender='must be select';
//         }
//         form.querySelectorAll('.errors-text').forEach(x => {
//             x.innerText='';
//         })
        
//     })
//     let agree=document.getElementById('agree').checked;
//     if(!agree){
//         errors.agree='must be agree';
//     }
//     for (let item in errors){
//         let errorsspan=document.getElementById('errors_'+ item);
//         if(errorsspan){
//             errorsspan.innerText=errors[item];
//         }
//     }
//     if(Object.keys(errors).length==0){
//         form.submit();
//     }
//     console.log(errors);
// })

// // // slider
// let data =[
//     {
//         id:1,
//         imageurl:'https://media.gettyimages.com/photos/alan-walker-performs-onstage-during-the-2018-coachella-valley-music-picture-id949290920?s=612x612',
//     },
//     {
//         id:2,
//         imageurl:'https://api.time.com/wp-content/uploads/2014/11/david-guetta-listen-2014-1200x1200.png',
//     },
//     {
//         id:3,
//         imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWq9XmV45xPNrNJ6YDV8wBndBx-O5PR_z2jg&usqp=CAU',
//     },
//     {
//         id:4,
//         imageurl:'https://m.media-amazon.com/images/I/91F+kvgNArL._SL1470_.jpg',
//     },
//     {
//         id:5,
//         imageurl:'https://www.udiscovermusic.com/wp-content/uploads/2019/05/Rihanna-Good-Girl-Gone-Bad-album-cover-820-1000x600.jpg',
//     },
//     {
//         id:6,
//         imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPOAVRneTsEGdm6xw1xBuGRFwWo3mjHmHMH6OY3XQj8HEpa0ndogUkroTYc2knfQ2gFUI&usqp=CAU',
//     },
//     {
//         id:7,
//         imageurl:'https://cdns-images.dzcdn.net/images/cover/f4ea8ca0455ba0c4cabfb1a925be32a6/264x264.jpg',
//     },
//     {
//         id:8,
//         imageurl:'https://pics.filmaffinity.com/Imagine_Dragons_Iconic-245638947-mmed.jpg',
//     }
// ]

// let arrowleft = document.querySelector('.arrow-left');
// let arrowright =document.querySelector('.arrow-right');
// let slider = document.getElementById('slider');
// let sliderindex=0;
// function createAtag(item){
//     let tag=document.createElement('a');
//     tag.setAttribute('href', item.url);
//     tag.classList.add('adress');
//     return tag;
// }
// function creteImgtag(item){
//     let tagimg=document.createElement('div');
//     tagimg.style.backgroundImage=`url(${item.imageurl})`;
//     tagimg.classList.add('slide-bg');
//     return tagimg;
// }
// function createdots(item){
//     let dots=document.createElement('div');
//     dots.classList.add('dots-block');
//     data.forEach((x)=>{
//         let dot=document.createElement('div');
//         dot.classList.add('dot-box');
//         dot.setAttribute('data-id', x.id -1);
//         dot.onclick=function(event){
//             let id=event.target.getAtribute('data-id');
//             sliderindex=id;
//             setslide();
//         }
//         dots.appendChild(dot);
//     })
//     return dots;
// }
// function setslide(){
//     slider.innerHTML='';
//     let tag = createAtag(data[sliderindex]);
//     let tagimg = creteImgtag(data[sliderindex]);
//     let dots=createdots(data[sliderindex]);
//     tag.appendChild(tagimg);
//     slider.appendChild(tag);
//     slider.appendChild(dots);
//     console.log(slider);
// }
// function arrowleftclick(){
//     if(sliderindex==0){
//         return;
//     }
//     sliderindex--;
//     setslide();
// }
// function arrowrightclick(){
//     if(sliderindex==data.length -1){
//         return;
//     }
//     sliderindex++;
//     setslide();if(sliderindex== data.length-1){
//         return;
//     }
//     sliderindex++;
//     setslide();
// }
// arrowleft.addEventListener('click', arrowleftclick);
// arrowright.addEventListener('click', arrowrightclick);

// setInterval(() =>{
//     arrowrightclick();
// }, 3000 );


// setslide();



let previous = document.getElementById('pre');
let play = document.getElementById('play');
let next = document.getElementById('next');
let title = document.getElementById('title');
let recent_volume = document.getElementById('volume');
let volume_show = document.getElementById('volume_show');
let show_duration = document.getElementById('show_duration');
let track_image = document.getElementById('track_image');
let auto_play = document.getElementById('auto');
let present = document.getElementById('present');
let total = document.getElementById('total');
let artist = document.getElementById('artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;


let track = document.createElement('audio');



let All_song = [{
		name: "first song",
		path: "songs/song.aac",
		img: "image/alan.jpg",
		singer: "1"
	},
	{
		name: "second song",
		path: "songs/song2.mp3",
		img: "image/one.jpg",
		singer: "2"
	},
	{
		name: "third song",
		path: "songs/song3.aac",
		img: "image/dragons.jpg",
		singer: "3"
	}
];






function load_track(index_no) {
	clearInterval(timer);
	

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;
	track_image.src = All_song[index_no].img;
	artist.innerHTML = All_song[index_no].singer;
	track.load();

	
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);

function mute_sound() {
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}
function justplay() {
	if (Playing_song == false) {
		playsong();

	} else {
		pausesong();
	}
}

function playsong() {
	track.play();
	Playing_song = true;
	play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

function pausesong() {
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

function next_song() {
	if (index_no < All_song.length - 1) {
		index_no += 1;
		load_track(index_no);
		playsong();
	} else {
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}

function previous_song() {
	if (index_no > 0) {
		index_no -= 1;
		load_track(index_no);
		playsong();

	} else {
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}

function volume_change() {
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}


function autoplay_switch() {
	if (autoplay == 1) {
		autoplay = 0;
		auto_play.style.background = "rgba(255,255,255,0.2)";
	} else {
		autoplay = 1;
		auto_play.style.background = "#FF8A65";
	}
}


// // posts

// let mainwraper=document.getElementById('post-block');
// let overlay=document.getElementById('over');
// let content=document.getElementById('content');
// let close=document.getElementById('over-close');
// let addpost=document.getElementById('add');
// let postOverlay = document.getElementById('post-content');
// let form = document.getElementById('form');
// let inputTitle = document.getElementById('titlePost');
// let inputDescription = document.getElementById('postdescr');

// function ajax(url,callback) {
//     if (typeof test1 !== 'undefined') {
//         test2 = JSON.parse(test1);
//       };
//     let requist = new XMLHttpRequest();
//     requist.open('GET', url);
//     requist.addEventListener('load', function() {
        
    
//         let data = JSON.parse(requist.responseText);
//         callback(data);
//     });
//     requist.send();
// }
// ajax('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed',function(data){
//     printData(data);
// });
// function printData(data){
//     data.forEach(a=>{
//         createPost(a);
//     })
// }
// function createPost(item){
//     let postbox=document.createElement('div');
//     postbox.classList.add('post-box');
//     postbox.setAttribute('data-id', item.id);

//     let deletepost=document.createElement('button');
//     deletepost.classList.add('delete-btn');
//     deletepost.setAttribute('data-id', item.id);
//     deletepost.innerText='delete this post';
//     let h3Tag = document.createElement('h3');
//     h3Tag.innerText = item.id;

//     let h2Tag = document.createElement('h2');
//     h2Tag.innerText = item.title;

//     postbox.appendChild(h3Tag);
//     postbox.appendChild(h2Tag);
//     postbox.appendChild(deletepost);

//     deletepost.addEventListener('click',function(event){
//         event.stopPropagation();
//         let id=event.target.getAtribute('data-id');
//         let url=`https://randomuser.me/posts/${id}`;
//         fetch(url,{
//             method:'delete',
//         })
//         .then(()=>postbox.remove());

//     });
//     postbox.addEventListener('click',function(event){
//         let id=event.target.getAtribute('data-id');
//         openOverlay(id);
//     })
//     mainwraper.appendChild(postbox);
//     console.log(postbox);
// }
// function overlayFunction(id){
//     overlay.classList.add('open');
//     let url=`https://randomuser.me/posts/${id}`;
//     ajax(url,function(data){
//         overlayFunction(data);
//     })
//     console.log(id);
// }
// function overlayFunction(item){
//     let spanuser=document.createElement('span');
//     spanuser.innerText=item.userId;
//     content.innerHTML='';
//     content.appendChild(spanuser);

// }
// close.addEventListener('click',function(){
//     overlay.classList.remove('open');


// });
// addpost.addEventListener('click', function(){
//     post-content.classList.add('active');
//     inputTitle.value='';
//     inputDescription.value='';

// })
// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     let formData={
//         title:event.target[0].value,
//         body:event.target[1].value
//     }
//     fetch('https://randomuser.me/posts/',{
//         method:'post',
//         body:JSON.stringify(formData),
//         headers:{
//             'content-type':'application/json; charset=UTF-8',
//         },
//     })
//     .then((response)=>response.json())
//     .then((post)=>afterPostSave(post));
//     console.log(formData);
// })
// function afterPostSave(post){
//     createPost.post;
//     post-content.classList.remove('active');
// }

// // // email

// function emailvalidation(){
//     let formemail=document.getElementById('form-email').value;
//     let email=document.querySelector('email');
//     let input=document.getElementById('.Email');
//     let emailspan=document.getElementById('email-text')
//     let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if (email match(pattern)) {
//         formemail.classList.add('active');
//         formemail.classList.remove('no active');
//         emailspan.innerHTML='your email is valid';
//         emailspan.style.color='green';
//         input.style.borderColor='green';

//     } else{
//         formemail.classList.remove('active');
//         formemail.classList.add('no active');
//         emailspan.innerHTML='enter email';
//         emailspan.style.color='red';
//         input.style.borderColor='red';
//     }
//     if(email==''){
//         formemail.classList.remove('active');
//         formemail.classList.remove('no active');
//         emailspan.innerHTML='';
//     }
// };

// let showpassword=document.querySelector('.pasword').value;
// let iconpas=document.getElementById('icon');
// showhidepassword=()=>{
//     let newerrors={};
//     if(showpassword==''){
//         newerrors.showpassword='password do not be empty'
//     }
//     if(showpassword.type=='password'){
//         showpassword.setAttribute('type','text');
//         iconpas.classList.add('fa-solid fa-eye');
//     } else{
//         iconpas.classList.remove('fa-solid fa-eye');
//         showpassword.setAttribute('type', 'password');
//     }
// }
// formemail.addEventListener('submit',function(event){
//     event.preventDefault();
//     let check=document.getElementById('save');
//     if(check.checked){
//         cookies.set('usernamesave',email);
//     }else{
//         cookies.remove('usernamesave');
//     }
//     event.target.submit();
// })
// let savedUsernameCookiesValue = Cookies.get('usernameSave');

// if (savedUsernameCookiesValue) {
//     document.getElementById('usernamecookies').value = savedUsernameCookiesValue;
//     document.getElementById('save').checked = true;
// }
// iconpas.addEventListener('click', showhidepassword);


