var level = [
    "kıdemli",
    "yeni nesil",
    "adobe certified",
    "google certified",
    "uzman",
    "koordinatör",
    "okul müdürü"
];
var levelEng = [
    "newbie",
    "new generation",
    "intern",
    "junior",
    "senior",
    "lead"
];
var prefix = [
    "STEM",
    "STEAM",
    "FeTeMM",
    "bilişim",
    "yapılandırmacı",
    "çok yönlü zeka",
    "maker",
    "robotic",
    "arduino",
    "raspberry pi",
    "maker",
    "eğitimde teknoloji",
    "ICT",
    "BÖTE",
    "sosyal medya",
    "scratch",
    "21YY",
    "IoT",
    "MEB'de öğretmen",
    "kodlama",
    "#1:1",

];
var prefixEng = [
    "project",
    "ninja",
        "college",
    "dojo",
    "curriculum",
    "instructional",
    "computer science",
    "gamification",
    "3d print",
    "preschool",
    "highschool"
];
var role = [
    "öğretmen",
    "eğitmen",
    "koç",
    "teknolog",
];
var roleEng = [
    "instructor",
    "developer",
    "manager",
    "designer",
    "educator",
    "trainer",
    "coordinator",
    "specialist"
];
var hashtags = [
    "edtech",
    "edu",
    "egt",
    "maker",
    "makers",
    "3dprint",
    "sertifika",
    "FLL",
    "ninja",
    "edchat",
    "iot",
    "uzay",
    "bilim",
    "blogger",
    "IB",
    "creative",
    "thinker",
    "designer",
    "robotic",
    "STEM",
    "STEAM",
    "innovation",
    "inventor",
    "iPad",
    "Apple",
    "AppleEDU",
    "codeorg",
    "coding",
    "VR",
    "gamer"
];
String.prototype.buyukle = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
String.prototype.hepsiniBuyukle = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) {
        return a.toUpperCase();
    });
}

function isaretleriniEksikEtme(seyler) {
    return '#' + seyler;
}
document.addEventListener('DOMContentLoaded', function(){
  sudoldur();
});

var levellarlistesi=document.getElementById("levellar");
var oneklerlistesi=document.getElementById("onekler");
var rollerlistesi=document.getElementById("roller");

function sudoldur(){
  //kod tekrarı yapacağım bana ne
  level.forEach(function(e){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(e));
    levellarlistesi.appendChild(li);
  });
  levelEng.forEach(function(e){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(e));
    levellarlistesi.appendChild(li);
  });
  prefix.forEach(function(e){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(e));
    oneklerlistesi.appendChild(li);
  });
  prefixEng.forEach(function(e){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(e));
    oneklerlistesi.appendChild(li);
  });
  role.forEach(function(e){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(e));
    rollerlistesi.appendChild(li);
  });
  roleEng.forEach(function(e){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(e));
    rollerlistesi.appendChild(li);
  });
}
var cevapverdugmesi = document.getElementById("generatebtn");
var ingilizcelivercheck = document.getElementById("ingilizcelivercheck");
cevapverdugmesi.addEventListener("click", generate);

var Title = {
    selectedLevel: "",
    selectedPrefix: "",
    selectedRole: "",
    selectedHashtags: [],
    titleToparla: function() {
        return this.selectedLevel + " " + this.selectedPrefix + " " + Hal(this.selectedRole, "i");
    }
}

function generate() {
    var result = "";

    if (ingilizcelivercheck.checked==true) {
        console.log("ingilizceli verilecek belli");
        karmaLevel=level.slice();
        levelEng.forEach(function(e){
          karmaLevel.push(e);
        });
        Title.selectedLevel = karmaLevel[Math.floor(Math.random() * karmaLevel.length)];
    } else {
        Title.selectedLevel = level[Math.floor(Math.random() * level.length)];
    }

    Title.selectedPrefix = prefix[Math.floor(Math.random() * prefix.length)];
    //var selectedRole = Hal(role[Math.floor(Math.random() * role.length)],"i");
    Title.selectedRole = role[Math.floor(Math.random() * role.length)];
    Title.selectedHashtags = [
        hashtags[Math.floor(Math.random() * hashtags.length)],
        hashtags[Math.floor(Math.random() * hashtags.length)],
        hashtags[Math.floor(Math.random() * hashtags.length)],
        hashtags[Math.floor(Math.random() * hashtags.length)]
    ];

    /*beautifyTags=selectedHashtags.map(isaretleriniEksikEtme);
    beautifyTags=beautifyTags.replace(/,/g, ' ');*/
    var sonuc = document.getElementById("sonuc");
    sonuc.innerHTML =
        Title.selectedLevel + " " +
        Title.selectedPrefix + " " +
        Hal(Title.selectedRole, "i") + " ";
    Title.selectedHashtags.forEach(function(e) {
        sonuc.innerHTML += "#" + e + " ";
    });

}

var tivitledugmesi = document.getElementById("tivitle");
tivitledugmesi.addEventListener("click", tivitlenmesine);

function tivitlenmesine() {
    var t = document.getElementById("sonuc").innerHTML;
    window.open("http://twitter.com/share?via=cgural&text=" + Title.titleToparla() + "&hashtags=EDUtitleGenerator," + Title.selectedHashtags);
}
