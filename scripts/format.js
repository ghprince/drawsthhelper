var engLibrary = {
	txt_title:"Welcome to Draw Sth. helper!",
	txt_instruction:"Input the candidate letters and length of the answer, we'll find the words for you.",
	txt_letter:"Given Letters (max 12)",
	txt_length:"Word Length",
	txt_guess:"Guess",
	txt_counter:"Total Guess Count:"
};
var chsLibrary = {
	txt_title:"欢迎来到 Draw Sth. 小助手！",
	txt_instruction:"请输入候选字母和答案长度，让我来帮你猜猜看吧。",
	txt_letter:"候选字母（最多12个）",
	txt_length:"答案长度",
	txt_guess:"猜猜看",
	txt_counter:"累计猜词次数: "
};

function switchLanguage(language)
{
	var x;
	if (language == "eng")
	{
		for (x in engLibrary)
		{
			$("#"+x).html(engLibrary[x]);
		}
	}
	else if(language == "chs")
	{
		for (x in chsLibrary)
		{
			$("#"+x).html(chsLibrary[x]);
		}
	}
	else
	{
		
	}
}