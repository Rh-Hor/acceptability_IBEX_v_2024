var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("it"), startsWith("f"))));

var continueMessage = ["Klikni zde"];

var aj = "AcceptabilityJudgment";

var q = "Question";

var completionMessage = "[Děkuji Vám za účast. Odpovědi byly odeslány.]";

var ms = "Message";

var defaults = [    
    "Separator", { transfer: 800,
                   normalMessage: "Další položka se načítá.",
                   errorMessage: "Špatně. Počkejte prosím na další položku v experimentu." 
		 },
    "AcceptabilityJudgment", { as: ["1", "2", "3", "4", "5"],
                               presentAsScale: true,
                               leftComment: "(nepřijatelná věta)", rightComment: "(věta je v pořádku)" },
    "Message", { hideProgressBar: true, transfer: "click" }
];







 var progressBarText = "";

var items = [ ["sep", "Separator", { }],
 
	      ["intro", "Form", {continueMessage: "Pro vstup do experimentu klikněte zde", html: { include: "example_intro.html" }}],

	      ["practice", aj, {s: {html: "<p>Nacházíte se v přípravné fázi experimentu. Pozorně sledujte, co se po vás vyžaduje.</p><p>Tři zaměstnanci letos dostanou žádné prémie.</p><p><i>O výše uvedené větě nejspíše máte pocit, že neodpovídá zásadám českého jazyka. Vhodné číslo pro ohodnocení takové věty tudíž bude nejspíše 1. Klikněte na požadované číslo na škále..</i></p>"}}],
["practice", aj, {s: {html: "<p>Nacházíte se v přípravné fázi experimentu. Pozorně sledujte, co se po vás vyžaduje.</p><p>Tři zahradnice chtěly zalít květinové záhony.</p><p><i>Tato věta je v pořádku. Výše uvedená věta neobsahuje žádnou nesrovnalost a vypadá zcela v pořádku. Toto je tedy příklad gramatické a přijatelné věty, které odpovídá vyšší hodnocení – nejspíše 5. Klikněte na požadované číslo na škále.</i></p>"}}],
["practice", aj, {s: {html: "<p>Nacházíte se v přípravné fázi experimentu. Pozorně sledujte, co se po vás vyžaduje.</p><p>Po příchodu ze záhonu měl Pepa na podrážce tři hlíny..</p><p><i>Tato věta není v pořádku. Pokud souhlasíte, vyberte jedno z nižších čísel (nejspíš 1).</i></p>"}}],

	      ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do samotného experimentu."]]}],

[["it1-pl-g", 1], aj, {s: "Koně, kteří mají dost energie, většinou běhávají velkou vzdálenost."}],
[["it1-pl-e", 1], aj, {s: "Koně, kteří měli dost energie, právě uběhli velkou vzdálenost."}],
[["it1-s-g", 1], aj, {s: "Kůň, který má dost energie, většinou běhává velkou vzdálenost."}],
[["it1-s-e", 1], aj, {s: "Kůň, který měl dost energie, právě uběhl velkou vzdálenost."}],

[["it2-pl-g", 2], aj, {s: "Zvířata, která mají dobrý sluch, většinou slýchávají velký rámus."}],
[["it2-pl-e", 2], aj, {s: "Zvířata, která měla dobrý sluch, právě uslyšela velký rámus."}],
[["it2-s-g", 2], aj, {s: "Zvíře, které má dobrý sluch, většinou slýchává velký rámus."}],
[["it2-s-e", 2], aj, {s: "Zvíře, které mělo dobrý sluch, právě uslyšelo velký rámus."}],

[["it3-pl-g-NR", 3], aj, {s: "Muslimové, kteří mají pevnou víru, většinou chodívají tradiční pouť."}],
[["it3-pl-e", 3], aj, {s: "Muslimové, kteří měli pevnou víru, právě ušli tradiční pouť."}],
[["it3-s-g", 3], aj, {s: "Muslim, který má pevnou víru, většinou chodívá tradiční pouť."}],
[["it3-s-e", 3], aj, {s: "Muslim, který měl pevnou víru, právě ušel tradiční pouť."}],

[["it4-pl-g", 4], aj, {s: "Autoři, kteří mají spoustu arogance, většinou psávají naprostý brak."}],
[["it4-pl-e", 4], aj, {s: "Autoři, kteří měli spoustu arogance, právě napsali naprostý brak."}],
[["it4-s-g", 4], aj, {s: "Autor, který má spoustu arogance, většinou psává naprostý brak."}],
[["it4-s-e", 4], aj, {s: "Autor, který měl spoustu arogance, právě napsal naprostý brak."}],

[["it5-pl-g", 5], aj, {s: "Děvčata, která mají silnou podváhu, většinou jídávají hnusné jídlo."}],
[["it5-pl-e", 5], aj, {s: "Děvčata, která měla silnou podváhu, právě snědla hnusné jídlo."}],
[["it5-s-g", 5], aj, {s: "Děvče, které má silnou podváhu, většinou jídává hnusné jídlo."}],
[["it5-s-e", 5], aj, {s: "Děvče, která mělo silnou podváhu, právě snědlo hnusné jídlo."}],

[["it6-pl-g", 6], aj, {s: "Kočky, které mají svoji hrdost, většinou dělávají velký nepořádek."}],
[["it6-pl-e", 6], aj, {s: "Kočky, které měly svoji hrdost, právě udělaly velký nepořádek."}],
[["it6-s-g", 6], aj, {s: "Kočka, která má svoji hrdost, většinou dělává velký nepořádek."}],
[["it6-s-e", 6], aj, {s: "Kočka, která měla svoji hrdost, právě udělala velký nepořádek."}],

[["it7-pl-g", 7], aj, {s: "Muly, které mají velkou zdatnost, většinou nosívají těžký náklad."}],
[["it7-pl-e", 7], aj, {s: "Muly, které měly velkou zdatnost, právě unesly těžký náklad."}],
[["it7-s-g", 7], aj, {s: "Mula, která má velkou zdatnost, většinou nosívá těžký náklad."}],
[["it7-s-e", 7], aj, {s: "Mula, která měla velkou zdatnost, právě unesla těžký náklad."}],

[["it8-pl-g", 8], aj, {s: "Jasnovidky, které mají magické nadání, většinou vídávají smutnou budoucnost."}],
[["it8-pl-e", 8], aj, {s: "Jasnovidky, které měly magické nadání, právě uviděly smutnou budoucnost."}],
[["it8-s-g", 8], aj, {s: "Jasnovidka, která má magické nadání, většinou vídává smutnou budoucnost."}],
[["it8-s-e", 8], aj, {s: "Jasnovidka, která měla magické nadání, právě uviděla smutnou budoucnost."}],

[["it9-pl-g", 9], aj, {s: "Děti, které mají nezkrotnou mlsnost, většinou jídávají prošlé cukroví."}],
[["it9-pl-e", 9], aj, {s: "Děti, které měly nezkrotnou mlsnost, právě snědly prošlé cukroví."}],
[["it9-s-g", 9], aj, {s: "Dítě, které má nezkrotnou mlsnost, většinou jídává prošlé cukroví."}],
[["it9-s-e", 9], aj, {s: "Dítě, které mělo nezkrotnou mlsnost, právě snědlo prošlé cukroví."}],

[["it10-pl-g", 10], aj, {s: "Kritici, kteří mají vytříbený vkus, většinou slýchávají špatnou hudbu."}],
[["it10-pl-e", 10], aj, {s: "Kritici, kteří měli vytříbený vkus, právě uslyšeli špatnou hudbu."}],
[["it10-s-g", 10], aj, {s: "Kritik, který má vytříbený vkus, většinou slýchává špatnou hudbu."}],
[["it10-s-e", 10], aj, {s: "Kritik, který měl vytříbený vkus, právě uslyšel špatnou hudbu."}],

[["it11-pl-g", 11], aj, {s: "Ženy, které mají značný cit, většinou psávají dojemnou poezii."}],
[["it11-pl-e", 11], aj, {s: "Ženy, které měly značný cit, právě napsaly dojemnou poezii."}],
[["it11-s-g", 11], aj, {s: "Žena, která má značný cit, většinou psává dojemnou poezii."}],
[["it11-s-e", 11], aj, {s: "Žena, která měla značný cit, právě napsala dojemnou poezii."}],

[["it12-pl-g", 12], aj, {s: "Ohaři, kteří mají vrozenou agresivitu, většinou nosívají zabitou kořist."}],
[["it12-pl-e", 12], aj, {s: "Ohaři, kteří měli vrozenou agresivitu, právě přinesli zabitou kořist."}],
[["it12-s-g", 12], aj, {s: "Ohař, který má vrozenou agresivitu, většinou nosívá zabitou kořist."}],
[["it12-s-e", 12], aj, {s: "Ohař, který měl vrozenou agresivitu, právě přinesl zabitou kořist."}],

[["it13-pl-g", 13], aj, {s: "Lyžařky, které mají letitou zkušenost, většinou jezdívají dobrý slalom."}],
[["it13-pl-e", 13], aj, {s: "Lyžařky, které měly letitou zkušenost, právě zajely dobrý slalom."}],
[["it13-s-g", 13], aj, {s: "Lyžařka, která má letitou zkušenost, většinou jezdívá dobrý slalom."}],
[["it13-s-e", 13], aj, {s: "Lyžařka, která měla letitou zkušenost, právě zajela dobrý slalom."}],
	     
[["it14-pl-g", 14], aj, {s: "Herečky, které mají přirozený talent, většinou hrávají působivé drama."}],
[["it14-pl-e", 14], aj, {s: "Herečky, které měly přirozený talent, právě sehráli působivé drama."}],
[["it14-s-g", 14], aj, {s: "Herečka, která má přirozený talent, většinou hrává působivé drama."}],
[["it14-s-e", 14], aj, {s: "Herečka, která měla přirozený talent, právě sehrál působivé drama."}],

[["it15-pl-g", 15], aj, {s: "Vědci, kteří mají opravdovou snahu, většinou dělávají kvalitní práci."}],
[["it15-pl-e", 15], aj, {s: "Vědci, kteří měli opravdovou snahu, právě udělali kvalitní práci."}],
[["it15-s-g", 15], aj, {s: "Vědec, který má opravdovou snahu, většinou dělává kvalitní práci."}],
[["it15-s-e", 15], aj, {s: "Vědec, který měl opravdovou snahu, právě udělal kvalitní práci."}],

[["it16-pl-g", 16], aj, {s: "Běžci, kteří mají pořádnou disciplínu, většinou běhávají dobrý maraton."}],
[["it16-pl-e", 16], aj, {s: "Běžci, kteří měli pořádnou disciplínu, právě zaběhli dobrý maraton."}],
[["it16-s-g", 16], aj, {s: "Běžec, který má pořádnou disciplínu, většinou běhává dobrý maraton."}],
[["it16-s-e", 16], aj, {s: "Běžec, který měl pořádnou disciplínu, právě zaběhl dobrý maraton."}],

["fgood1", aj, {s: "Ani jeden velmi energický kůň neuběhl velkou vzdálenost." }],
["fgood2", aj, {s: "Ani jedno velmi vnímavé zvíře neuslyšelo velký rámus." }],
["fgood3", aj, {s: "Ani jeden velmi zbožný muslim neušel tradiční pouť." }],
["fgood4", aj, {s: "Ani jeden velmi arogantní autor nenapsal naprostý brak." }],
["fgood5", aj, {s: "Ani jedno velmi štíhlé děvče nesnědlo hnusné jídlo." }],
["fgood6", aj, {s: "Ani jedna velmi hrdá kočka neudělala velký nepořádek." }],
["fgood7", aj, {s: "Ani jedna velmi zdatná mula neunesla těžký náklad." }],
["fgood8", aj, {s: "Ani jedna velmi nadaná jasnovidka neuviděla smutnou budoucnost." }],
["fgood9", aj, {s: "Ani jedno velmi mlsné dítě nesnědlo prošlé cukroví." }],
["fgood10", aj, {s: "Ani jeden velmi náročný kritik neuslyšel špatnou hudbu." }],
["fgood11", aj, {s: "Ani jedna velmi citlivá žena nenapsala dojemnou poezii." }],
["fgood12", aj, {s: "Ani jeden velmi agresivní ohař nepřinesl zabitou kořist." }],
["fgood13", aj, {s: "Ani jedna velmi zkušená lyžařka nezajela dobrý slalom." }],
["fgood14", aj, {s: "Ani jedna velmi talentovaná herečka nesehrála působivé drama." }],
["fgood15", aj, {s: "Ani jeden  velmi snaživý vědec neudělal kvalitní práci." }],
["fgood16", aj, {s: "Ani jeden velmi disciplinovaný běžec nezaběhl dobrý maraton." }],
["fbad1", aj, {s: "Ani jeden velmi energický kůň uběhl velkou vzdálenost." }],
["fbad2", aj, {s: "Ani jedno velmi vnímavé zvíře uslyšelo velký rámus." }],
["fbad3", aj, {s: "Ani jeden velmi zbožný muslim ušel tradiční pouť." }],
["fbad4", aj, {s: "Ani jeden velmi arogantní autor napsal naprostý brak." }],
["fbad5", aj, {s: "Ani jedno velmi štíhlé děvče snědlo hnusné jídlo." }],
["fbad6", aj, {s: "Ani jedna velmi hrdá kočka udělala velký nepořádek." }],
["fbad7", aj, {s: "Ani jedna velmi zdatná mula unesla těžký náklad." }],
["fbad8", aj, {s: "Ani jedna velmi nadaná jasnovidka uviděla smutnou budoucnost." }],
["fbad9", aj, {s: "Ani jedno velmi mlsné dítě snědlo prošlé cukroví." }],
["fbad10", aj, {s: "Ani jeden velmi náročný kritik uslyšel špatnou hudbu." }],
["fbad11", aj, {s: "Ani jedna velmi citlivá žena napsala dojemnou poezii." }],
["fbad12", aj, {s: "Ani jeden velmi agresivní ohař přinesl zabitou kořist." }],
["fbad13", aj, {s: "Ani jedna velmi zkušená lyžařka zajela dobrý slalom." }],
["fbad14", aj, {s: "Ani jedna velmi talentovaná herečka sehrála působivé drama." }],
["fbad15", aj, {s: "Ani jeden  velmi snaživý vědec udělal kvalitní práci." }],
["fbad16", aj, {s: "Ani jeden velmi disciplinovaný běžec zaběhl dobrý maraton." }],
];
