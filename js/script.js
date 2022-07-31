var elBody = document.querySelector("body");

var elContent = document.createElement("div");
var elTitle = document.createElement("h1");
var elQuestionsText1 = document.createElement("p");
var elQuestionsText2 = document.createElement("p");
var elQuestionsText3 = document.createElement("p");
var elQuestionsText4 = document.createElement("p");
var elQuestionsText5 = document.createElement("p");
var elQuestionsText6 = document.createElement("p");
var elQuestionsText7 = document.createElement("p");
var elQuestionsText8 = document.createElement("p");
var elQuestionsText9 = document.createElement("p");
var elLink = document.createElement("a");

var intro = alert("Birinchi va ikkinchi oydagi savollar to`plami");
var qustionFirst = prompt("F.I.SH").trim();
var qustionSecond = prompt("Bootstrap nima?").trim();
var qustionThird = prompt("Resposive bilan adaptasiya ni farqi?").trim();
var qustionFourth = prompt("Mixsin ni chaqirish uchun nima?").trim();
var qustionFivth = prompt("Scss da main.scss faylni birinchi bulib qaysi elementni ulaymiz?").trim();
var qustionSixth = prompt("Boottrapda qaysi classda margin-left-auto qiladi?").trim();
var qustionSeventh = prompt("Selectni ichidan qanaqa element ochiladi?").trim();
var qustionEleventh = prompt("Form ni ichidagi 'action' atribitini ishida nima yoziladi").trim();
var qustionNinth = prompt("Bootstrapda qaysi classda 'fontsize' berilgan?").trim();

elBody.appendChild(elContent);
elContent.appendChild(elTitle);
elContent.appendChild(elQuestionsText1);
elContent.appendChild(elQuestionsText2);
elContent.appendChild(elQuestionsText3);
elContent.appendChild(elQuestionsText4);
elContent.appendChild(elQuestionsText5);
elContent.appendChild(elQuestionsText6);
elContent.appendChild(elQuestionsText7);
elContent.appendChild(elQuestionsText8);
elContent.appendChild(elQuestionsText9);
elContent.appendChild(elLink);

elContent.setAttribute("class", "content");
elTitle.setAttribute("class", "content__title");
elQuestionsText1.setAttribute("class", "content__qusetions");
elQuestionsText2.setAttribute("class", "content__qusetions");
elQuestionsText3.setAttribute("class", "content__qusetions");
elQuestionsText4.setAttribute("class", "content__qusetions");
elQuestionsText5.setAttribute("class", "content__qusetions");
elQuestionsText6.setAttribute("class", "content__qusetions");
elQuestionsText7.setAttribute("class", "content__qusetions");
elQuestionsText8.setAttribute("class", "content__qusetions");
elQuestionsText9.setAttribute("class", "content__qusetions");
elLink.setAttribute("href", "index.html");
elLink.setAttribute("class", "content__link");

elTitle.textContent = `Savollar To'plami`;
elQuestionsText1.textContent = `Foydalanuvchini ism sharifi: ${qustionFirst}`;
elQuestionsText2.textContent = `Bootstrap nima: ${qustionSecond}`;
elQuestionsText3.textContent = `Resposive bilan adaptasiya ni farqi: ${qustionThird}`;
elQuestionsText4.textContent = `Mixsin ni chaqirish uchun nima: ${qustionFourth}`;
elQuestionsText5.textContent = `Scss da main.scss faylni birinchi bulib qaysi elementni ulaymiz: ${qustionFivth}`;
elQuestionsText6.textContent = `Boottrapda qaysi classda margin-left-auto qiladi: ${qustionSixth}`;
elQuestionsText7.textContent = `Selectni ichidan qanaqa element ochiladi: ${qustionSeventh}`;
elQuestionsText8.textContent = `Form ni ichidagi 'action' atribitini ishida nima yoziladi: ${qustionEleventh}`;
elQuestionsText9.textContent = `Bootstrapda qaysi classda 'fontsize' berilgan: ${qustionNinth}`;
elLink.textContent = `qayta topshirish`

