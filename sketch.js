//variable for the logo
var ho;
//var for paragraph
var parr;
var parr2;
var parr3;
var parr4;
var parr5;
var parr6;
var parr7;
var parr8;
var parr9;
//var for links
var texto;
var texto2;
var texto3;
var texto4;
var texto5;



function preload() {
  ho = loadImage('HOPE.jpg');
}

function setup() {
  paragrafo1();
  paragrafo2();
  paragrafo3();
  paragrafo4();
  paragrafo5();
  paragrafo6();
  paragrafo7();
  paragrafo8();
  paragrafo9();
    canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  //website link
  texto = createA('http://www.mariejoseph.sch.id/','Our Website')
  texto.position(200,640);
  texto.style('color','red');
  //reference link
  texto2 = createA ('https://marcelsyarif.github.io/references/','References')
  texto2.position(800,5);
  texto2.style('color','red');
  texto2.style('background-color','orange');
  
  //ig link
  texto3 = createA('https://www.instagram.com/mariejosephschool/?hl=id','Our Instagram Account');
  texto3.position(400,640);
  texto3.style('color','red');
  //facebook link
  texto4 = createA('https://www.facebook.com/pages/category/School/Marie-Joseph-Catholic-School-1892409677732760/','Our Facebook Page');
  texto4.position(600,640);
  texto4.style('color','red');
  //tiktok link
  texto5 = createA('https://www.tiktok.com/@mariejosephschool','Our Tik-Tok Account');
  texto5.position(800,640);
  texto5.style('color','red');
}

//1st paragraph
function paragrafo1() {
  parr = createP('Espoir (n): a French word meaning hope. It is an ethereal expression to motivate each other. ')
  parr.style('color', 'white');
  parr.position(5, 180);
}

//2nd paragraph
function paragrafo2() {
  parr2 = createP('That is why, we have chosen this profound word as a part of our psychological short movie. Made by supporting and loveable people who have dedicated thier time into investing in this project')
  parr2.style('color', 'white');
  parr2.position(5, 200);
}

//1st header that asks a question
 function paragrafo3() {
   parr3 = createP('WHAT IS ESPOIR?')
   parr3.style('color','white');
   parr3.position (5,100);
   parr3.style('font-size','30pt');
 }

//2nd header
function paragrafo4(){
  parr4= createP('WHO MADE THIS SHORT FILM?')
   parr4.style('color','white');
   parr4.position (5,240);
   parr4.style('font-size','30pt');
}

//3rd paragraph
function paragrafo5 () {
  parr5 = createP('This short movie has been made by Marie Joseph School. A school that teaches well being and mannerisms to all of the students to tolerate one another despite all of the circumstances.')
   parr5.style('color','white');
   parr5.position (5,320);
  
}

//3rd header
function paragrafo6 () {
  parr6= createP('WHAT IS THE PURPOSE OF THIS FILM?')
   parr6.style('color','white');
   parr6.position (5,360);
  parr6.style('font-size','30pt');

}

//4th paragraph
function paragrafo7 (){
  parr7 = createP('To bring out different perspectives to other people. Because, we cannot be biased over what we want to believe. Rather, the anthitesis, to actually ponder differently without being wrong. ')
  parr7.style('color', 'white');
  parr7.position(5, 440);
}

//4th header
function paragrafo8 () {
  parr8= createP('WHERE CAN I FIND OUT MORE ABOUT MARIE JOSEPH?')
   parr8.style('color','white');
   parr8.position (5,460);
  parr8.style('font-size','30pt');

}

//5th paragraph
function paragrafo9 (){
  parr9 = createP('You can find out more about us on the links below! ')
  parr9.style('color', 'white');
  parr9.position(5, 580);
}

function draw() {
  background(0);
  image(ho, 0, 0, 200, 100);
}

function windowResize(){
  resizeCanvas(windowWidth,windowHeight);
}