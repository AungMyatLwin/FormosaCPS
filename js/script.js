// index.html

let elements = document.getElementsByClassName("mySlides");
let initialVariable = 0;
let opacity = 1;

const slider=()=>{
for(let i=0; i<elements.length;i++){
	elements[i].style.display = "none";
}

initialVariable = (initialVariable+1)%elements.length;
elements[initialVariable].style.opacity= 1;
elements[initialVariable].style.display = "block";
elements[initialVariable].style.borderRadius = "20px";
elements[initialVariable].style.height = "400px";
elements[initialVariable].style.objectFit = "fit";

console.log(elements[initialVariable],elements[initialVariable].src )
// if(elements[initialVariable].src == "./img/slide6.jpg"){
// 	elements[initialVariable].style.height="40px";
// }

elements[initialVariable].style.boxShadow = "2px 8px 3px #F0BB78 ";
setTimeout(()=>{
	elements[initialVariable].style.opacity= 0.5;
},1800)

	setTimeout(slider,2000)
}

slider()

// register
const search = document.querySelectorAll(".hideIf");
	console.log(search)
	search.forEach(x=> x.style.display='none');

// productDetails

let randomObjs = [
	{
		"itemSrc":"./img/camera/camera1.jpg",
	"itemName":"Black Camera",
	"itemPrice":"$200.99",
},
{
	"itemSrc":"./img/Chair/campChair.jpg",
	"itemName":"Foldable Camp Chair",
	"itemPrice":" $34.50"
},
{
	"itemSrc":"./img/camera/camera2.jpg",
	"itemName":"Blue Camera",
	"itemPrice":" $77.99"
},
{
	"itemSrc":"./img/camera/camera3.jpg",
	"itemName":"Silver Camera",
	"itemPrice":" $88.99"
},
{
	"itemSrc":"./img/camera/camera4.jpg",
	"itemName":"Camera R333D",
	"itemPrice":" $99.99"
},
{
	"itemSrc":"./img/Stove/stove.jpg",
	"itemName":"Stove",
	"itemPrice":" $999.99"
},
{
	"itemSrc":"./img/WaterCarrier/watercarrier1.jpg",
	"itemName":"Water Carrier",
	"itemPrice":" $39.99"
},
{
	"itemSrc":"./img/SleepingBag/SleepingBag6.jpeg",
	"itemName":"Sleeping Bag",
	"itemPrice":" $70.99"
},
{
	"itemSrc":"./img/cooler/yetiCooler.jpg",
	"itemName":"Yeti Cooler",
	"itemPrice":" $60.88"
},
]

function itemSet(item){
	let index = document.getElementById("item"+item)
	let pname = index.querySelector(".p1").textContent;
	let pPrice = index.querySelector(".p2").textContent;
	let imgSrc= index.querySelector("img")?.getAttribute("src");

	console.log(pname,pPrice,imgSrc)
	localStorage.setItem("DetailItem",JSON.stringify({
			"image":imgSrc,
			"title":pname,
			"price":pPrice,
			"seller":"By Aung"
		}));
	window.location.href="./productDetails.html";
}


function settingRandomItems(){
	let img = document.querySelectorAll(".img");
	let pName= document.querySelectorAll(".p1");
	console.log(pName)
	let pPrice = document.querySelectorAll(".p2");
	let count=0;
	img.forEach(index=>{
		let lastRand=0;
		let rand = Math.floor(Math.random(0,randomObjs.length-1)*randomObjs.length);
		if(lastRand===rand){
			 rand = Math.floor(Math.random(0,randomObjs.length-1)*randomObjs.length);
			 lastRand=rand;
			};
		
		index.src=randomObjs[rand].itemSrc;
		pName[count].innerText=randomObjs[rand].itemName;
		pPrice[count].innerText=randomObjs[rand].itemPrice;
		count++
	})

}

settingRandomItems()

function hoverMainImg(){
	let img=document.getElementById('mainImg')

	img.addEventListener('mouseover',(e)=>{
		img.style.scale=2;
	})
	img.addEventListener('mouseout',(e)=>{
		img.style.scale=1;
	})

}	
hoverMainImg()
function touch(transfrom){
	document.getElementById(
		'mainImg').style.rotate=transfrom;
}

function displayItemInImgs(){

	let detailItems = JSON.parse(localStorage.getItem("DetailItem"))
	let smallImages = [document.getElementById("smallImg1"),document.getElementById("smallImg2"),document.getElementById("smallImg3")];
	smallImages.forEach(img=>{
		img.src=detailItems["image"]
		console.log(img.src)
	})
	let bigImg = document.getElementById('mainImg')
	bigImg.src= detailItems["image"]
	let title = document.getElementById('itemName')
	let price = document.getElementById('price')
		title.textContent = detailItems['title']
		price.textContent = detailItems['price']
	let detail = document.getElementById('details')

	const adventurePhrases = [
	  "beneath cloud-shadowed ridges",
	  "beyond the tree line where silence lingers",
	  "with nothing but starlight to guide you",
	  "through windswept pine and breathless dusk",
	  "into the hush of moss-covered trails",
	  "across frostbitten valleys veiled in mist",
	  "in the golden hush before first light",
	  "with echoes of forgotten paths in your wake",
	  "on sun-drenched slopes that forget names",
	  "under skies that have never been charted"
	];
	let phraseIndex = Math.floor(Math.random()*adventurePhrases.length);
	console.log(phraseIndex)

	detail.innerHTML = `Available now—crafted for resilient elegance. Whether you're setting out for adventure <b><i>${adventurePhrases[phraseIndex]}</i> </b>or settling into comfort near a flickering hearth, the <b><i>${detailItems['title']}</i></b> delivers essential value with timeless appeal. Add it to your gear, your space, or your story.`

}

displayItemInImgs();

// login page
	// let search = document.getElementsByClassName("hideIf");
	const search = document.querySelectorAll(".hideIf");
	console.log(search)
	search.forEach(x=> x.style.display='none');