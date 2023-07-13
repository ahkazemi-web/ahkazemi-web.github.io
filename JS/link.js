//------------Emoji Section----------//
let emoji = [
	"😀",
	"😁",
	"😂",
	"😃",
	"😄",
	"😅",
	"😆",
	"😉",
	"😊",
	"😋",
	"😎",
	"😍",
	"😘",
	"😗",
	"😙",
	"😚",
	"🙂",
	"🤗",
	"🤔",
	"😐",
	"😑",
	"😶",
	"🙄",
	"😏",
	"😣",
	"😥",
];

//------------Text Section----------//
let text = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

let urlanimate = () => {
	// location.hash = emoji[Math.floor((Date.now() / 100) % emoji.length)];
	location.hash = emoji[Math.floor((Date.now() / 100) % text.length)];
	setTimeout(urlanimate, 100);
};

urlanimate();
