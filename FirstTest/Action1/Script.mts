If Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategoryTxt").Exist(30) Then @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategoryTxt").Click
End  If
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("menuSearch").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Search AdvantageOnlineShopping").Set "Hp" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Image("fetchImage?image_id=3100").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Msgbox "Hello World", 1, "My First UFT Test"
