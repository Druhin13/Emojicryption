// all emojis

// people and faces emoji = 78
// animals emoji = 74
// plants and flowers emoji = 38
// fashion and accessories emoji = 24
// heart and love emoji = 29
// weather and time emoji = 57
// food and drinks emoji = 42
// sports, games and hobbies emoji = 38
// buildings, locations and landmarks emoji = 32
// transport emoji = 59
// books, envelopes and stationery emoji = 55
// technology emoji = 48

var allemojis = "😄😃😀😊☺😉😍😘😚😗😙😜😝😛😳😁😔😌😒😞😣😢😂😭😪😥😰😅😓😩😫😨😱😠😡😤😖😆😋😷😎😴😵😲😟😦😧😈👿😮😬😐😕😯😶😇😏😑👲👳👮👷💂👶👦👧👨👩👴👵👱👼👸👹👺💀👽💩😺😸😻😽😼🙀😿😹😾🐵🙈🙉🙊🐶🐺🐱🐭🐹🐸🐯🐨🐻🐷🐽🐮🐗🐒🐴🐑🐘🐼🐧🐦🐤🐥🐣🐔🐍🐢🐛🐝🐜🐞🐌🐙🐚🐠🐟🐬🐳🐋🐄🐏🐀🐃🐅🐇🐉🐎🐐🐓🐕🐖🐁🐂🐲🐡🐊🐫🐪🐆🐈🐩🐾💐🌸🌷🍀🌹🌻🌺🍁🍃🍂🌿🌾🍄🌵🌴🌲🌳🌰🌱🌼🍎🍏🍊🍋🍒🍇🍉🍓🍑🍈🍌🍐🍍🍠🍆🍅🌽💮🎩👑👒👟👞👡👠👢👕👔👚👗🎽👖👘👙💼👜👝👛👓🎀🌂💄💛💙💜💚❤💔💗💓💕💖💞💘💌💋💍💎👤👥💬👣💭💝👫👪👬👭💏💑💟🌐🌞🌝🌚🌑🌒🌓🌔🌕🌖🌗🌘🌜🌛🌙🌍🌎🌏🌋🌌🌠⭐☀⛅☁⚡☔❄⛄🌀🌁🌈🌊🕛🕧🕐🕜🕑🕝🕒🕞🕓🕟🕔🕠🕕🕖🕗🕘🕙🕚🕡🕢🕣🕤🕥🕦☕🍵🍶🍼🍺🍻🍸🍹🍷🍴🍕🍔🍟🍗🍖🍝🍛🍤🍱🍣🍥🍙🍘🍚🍜🍲🍢🍡🍳🍞🍩🍮🍦🍨🍧🎂🍰🍪🍫🍬🍭🍯🎨🎬🎤🎧🎼🎵🎶🎹🎻🎺🎷🎸👾🎮🃏🎴🀄🎲🎯🏈🏀⚽⚾🎾🎱🏉🎳⛳🚵🚴🏁🏇🏆🎿🏂🏊🏄🎣🏠🏡🏫🏢🏣🏥🏦🏪🏩🏨💒⛪🏬🏤🌇🌆🏯🏰⛺🏭🗼🗾🗻🌄🌅🌃🗽🌉🎠🎡⛲🎢🚢⛵🚤🚣⚓🚀✈💺🚁🚂🚊🚉🚞🚆🚄🚅🚈🚇🚝🚋🚃🚎🚌🚍🚙🚘🚗🚕🚖🚛🚚🚨🚓🚔🚒🚑🚐🚲🚡🚟🚠🚜💈🚏🎫🚦🚥⚠🚧🔰⛽🏮🎰♨🗿🎪🎭📍🚩📧📥📤✉📩📨📯📫📪📬📭📮📦📝📄📃📑📊📈📉📜📋📅📆📇📁📂✂📌📎✒✏📏📐📕📗📘📙📓📔📒📚📖🔖📛📛🔭📰💰💴💵💷💶💳💸🎥📷📹📼💿📀💽💾💻📱☎📞📟📠📡📺📻🔊🔉🔈🔇🔔🔕📢📣⏳⌛⏰⌚🔓🔒🔏🔐🔑🔎💡🔦🔌🔋🔍🔧🔩🔨📲📶🎦📳📴";

allemojis = [...allemojis];

console.log(allemojis.length);

var all = {

	"1": "😀",
	"2": "😃",
	"3": "😄",
	"4": "😁",
	"5": "😆",
	"6": "😎",
	"7": "🌲",
	"8": "🐢",
	"9": "🐎",
	"10": "⚽",
	"11": "👑",
	"12": "🐕",
	"13": "🙃",
	"14": "🍓",
	"15": "😍",
	"16": "🎂",
	"17": "🏵",
	"18": "🐇",
	"19": "🍬",
	"20": "⭐",
	"21": "🏈",
	"22": "😵",
	"23": "🐩",
	"24": "🌻",
	"25": "🍇",
	"26": "🚀",
	"27": "🎃",
	"28": "🩱",

};


//console.log(all);
//console.log(allemojis);





//encryption process

function myFunction() {


	var letterMap = {
		"A": "🙂",
		"B": "🤓",
		"C": "🐒",
		"D": "⛵",
		"E": "🐦",
		"F": "😎",
		"G": "🌲",
		"H": "🐢",
		"I": "🐎",
		"J": "⚽",
		"K": "👑",
		"L": "🐕",
		"M": "🙃",
		"N": "🍓",
		"O": "😍",
		"P": "🎂",
		"Q": "🏵",
		"R": "🐇",
		"S": "🍬",
		"T": "⭐",
		"U": "🏈",
		"V": "😵",
		"W": "🐩",
		"X": "🌻",
		"Y": "🍇",
		"Z": "🚀",
		"0": "🎃",
		" ": "🩱",
	};





	var inputText = document.getElementById("t-input").value;
	var word = inputText.toUpperCase();
	var encrypted = "";
	for (var i = 0; i < word.length; i++) {
		encrypted += letterMap[word[i]] || word[i];
	}

	//	function clearInput(element) {
	//		element.value = "";
	//	}

	console.log(encrypted);

	document.getElementById("e-output").innerHTML = encrypted;
}









//decryption process

function myFunction1() {


	var letterMap1 = {
		"🙂": "A",
		"🤓": "B",
		"🐒": "C",
		"⛵": "D",
		"🐦": "E",
		"😎": "F",
		"🌲": "G",
		"🐢": "H",
		"🐎": "I",
		"⚽": "J",
		"👑": "K",
		"🐕": "L",
		"🙃": "M",
		"🍓": "N",
		"😍": "O",
		"🎂": "P",
		"🏵": "Q",
		"🐇": "R",
		"🍬": "S",
		"⭐": "T",
		"🏈": "U",
		"😵": "V",
		"🐩": "W",
		"🌻": "X",
		"🍇": "Y",
		"🚀": "Z",
		"🎃": "0",
		"🩱": " ",
	};



	var inputText = document.getElementById("e-input").innerHTML;
	inputText = [...inputText];
	var decrypted = "";
	for (var i = 0; i < inputText.length; i++) {
		decrypted += letterMap1[inputText[i]] || inputText[i];
	}
	//        function clearInput(element) {
	//            element.value = "";
	//        }
	document.getElementById("t-output").innerHTML = decrypted;
}