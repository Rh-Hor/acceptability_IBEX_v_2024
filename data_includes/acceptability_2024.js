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

[["it1-pl-g", 1], aj, {s: "Koně s dostatečnou energií většinou běhávají velkou vzdálenost."}],
[["it1-pl-e", 1], aj, {s: "Koně s dostatečnou energií právě uběhli velkou vzdálenost."}],
[["it1-s-g", 1], aj, {s: "Kůň s dostatečnou energií většinou běhává velkou vzdálenost."}],
[["it1-s-e", 1], aj, {s: "Kůň s dostatečnou energií právě uběhl velkou vzdálenost."}],

[["it2-pl-g", 2], aj, {s: "Zvířata s dobrým sluchem většinou slýchávají velký rámus."}],
[["it2-pl-e", 2], aj, {s: "Zvířata s dobrým sluchem právě uslyšela velký rámus."}],
[["it2-s-g", 2], aj, {s: "Zvíře s dobrým sluchem většinou slýchává velký rámus."}],
[["it2-s-e", 2], aj, {s: "Zvíře s dobrým sluchem právě uslyšelo velký rámus."}],

[["it3-pl-g-NR", 3], aj, {s: "Muslimové s pevnou vírou většinou chodívají tradiční pouť."}],
[["it3-pl-e", 3], aj, {s: "Muslimové s pevnou vírou právě ušli tradiční pouť."}],
[["it3-s-g", 3], aj, {s: "Muslim  s pevnou vírou většinou chodívá tradiční pouť."}],
[["it3-s-e", 3], aj, {s: "Muslim s pevnou vírou právě ušel tradiční pouť."}],

[["it4-pl-g", 4], aj, {s: "Autoři s velkou arogancí většinou psávají naprostý brak."}],
[["it4-pl-e", 4], aj, {s: "Autoři s velkou arogancí právě napsali naprostý brak."}],
[["it4-s-g", 4], aj, {s: "Autor s velkou arogancí většinou psává naprostý brak."}],
[["it4-s-e", 4], aj, {s: "Autor s velkou arogancí právě napsal naprostý brak."}],

[["it5-pl-g", 5], aj, {s: "Děvčata s výraznou podváhou většinou jídávají hnusné jídlo."}],
[["it5-pl-e", 5], aj, {s: "Děvčata s výraznou podváhou právě snědla hnusné jídlo."}],
[["it5-s-g", 5], aj, {s: "Děvče s výraznou podváhou většinou jídává hnusné jídlo."}],
[["it5-s-e", 5], aj, {s: "Děvče s výraznou podváhou právě snědlo hnusné jídlo."}],

[["it6-pl-g", 6], aj, {s: "Kočky s velkou hrdostí většinou dělávají velký nepořádek."}],
[["it6-pl-e", 6], aj, {s: "Kočky s velkou hrdostí právě udělaly velký nepořádek."}],
[["it6-s-g", 6], aj, {s: "Kočka s velkou hrdostí většinou dělává velký nepořádek."}],
[["it6-s-e", 6], aj, {s: "Kočka s velkou hrdostí právě udělala velký nepořádek."}],

[["it7-pl-g", 7], aj, {s: "Muly s tělesnou zdatností většinou nosívají těžký náklad."}],
[["it7-pl-e", 7], aj, {s: "Muly s tělesnou zdatností právě unesly těžký náklad."}],
[["it7-s-g", 7], aj, {s: "Mula s tělesnou zdatností většinou nosívá těžký náklad."}],
[["it7-s-e", 7], aj, {s: "Mula s tělesnou zdatností právě unesla těžký náklad."}],

[["it8-pl-g", 8], aj, {s: "Jasnovidky s magickým nadáním většinou vídávají smutnou budoucnost."}],
[["it8-pl-e", 8], aj, {s: "Jasnovidky s magickým nadáním právě uviděly smutnou budoucnost."}],
[["it8-s-g", 8], aj, {s: "Jasnovidka s magickým nadáním většinou vídává smutnou budoucnost."}],
[["it8-s-e", 8], aj, {s: "Jasnovidka s magickým nadáním právě uviděla smutnou budoucnost."}],

[["it9-pl-g", 9], aj, {s: "Děti s nezkrotnou mlsností většinou jídávají prošlé cukroví."}],
[["it9-pl-e", 9], aj, {s: "Děti s nezkrotnou mlsností právě snědly prošlé cukroví."}],
[["it9-s-g", 9], aj, {s: "Dítě  s nezkrotnou mlsností většinou jídává prošlé cukroví."}],
[["it9-s-e", 9], aj, {s: "Dítě  s nezkrotnou mlsností právě snědlo prošlé cukroví."}],

[["it10-pl-g", 10], aj, {s: "Kritici s vytříbeným vkusem většinou slýchávají špatnou hudbu."}],
[["it10-pl-e", 10], aj, {s: "Kritici s vytříbeným vkusem právě uslyšeli špatnou hudbu."}],
[["it10-s-g", 10], aj, {s: "Kritik s vytříbeným vkusem většinou slýchává špatnou hudbu."}],
[["it10-s-e", 10], aj, {s: "Kritik s vytříbeným vkusem právě uslyšel špatnou hudbu."}],

[["it11-pl-g", 11], aj, {s: "Ženy s hlubokým citem většinou psávají dojemnou poezii."}],
[["it11-pl-e", 11], aj, {s: "Ženy s hlubokým citem právě napsaly dojemnou poezii."}],
[["it11-s-g", 11], aj, {s: "Žena s hlubokým citem většinou psává dojemnou poezii."}],
[["it11-s-e", 11], aj, {s: "Žena s hlubokým citem právě napsala dojemnou poezii."}],

[["it12-pl-g", 12], aj, {s: "Ohaři s vrozenou agresivitou většinou nosívají zabitou kořist."}],
[["it12-pl-e", 12], aj, {s: "Ohaři s vrozenou agresivitou právě přinesli zabitou kořist."}],
[["it12-s-g", 12], aj, {s: "Ohař s vrozenou agresivitou většinou nosívá zabitou kořist."}],
[["it12-s-e", 12], aj, {s: "Ohař s vrozenou agresivitou právě přinesl zabitou kořist."}],

[["it13-pl-g", 13], aj, {s: "Lyžařky s letitou zkušeností většinou jezdívají dobrý slalom."}],
[["it13-pl-e", 13], aj, {s: "Lyžařky s letitou zkušeností právě zajely dobrý slalom."}],
[["it13-s-g", 13], aj, {s: "Lyžařka s letitou zkušeností většinou jezdívá dobrý slalom."}],
[["it13-s-e", 13], aj, {s: "Lyžařka s letitou zkušeností právě zajela dobrý slalom."}],
	     
[["it14-pl-g", 14], aj, {s: "Herečky s přirozeným talentem většinou hrávají působivé drama."}],
[["it14-pl-e", 14], aj, {s: "Herečky s přirozeným talentem právě sehrály působivé drama."}],
[["it14-s-g", 14], aj, {s: "Herečka s přirozeným talentem většinou hrává působivé drama."}],
[["it14-s-e", 14], aj, {s: "Herečka s přirozeným talentem právě sehrála působivé drama."}],

[["it15-pl-g", 15], aj, {s: "Vědci s opravdovou snahou většinou dělávají kvalitní práci."}],
[["it15-pl-e", 15], aj, {s: "Vědci s opravdovou snahou právě udělali kvalitní práci."}],
[["it15-s-g", 15], aj, {s: "Vědec s opravdovou snahou většinou dělává kvalitní práci."}],
[["it15-s-e", 15], aj, {s: "Vědec s opravdovou snahou právě udělal kvalitní práci."}],

[["it16-pl-g", 16], aj, {s: "Běžci s pořádnou disciplínou většinou běhávají dobrý maraton."}],
[["it16-pl-e", 16], aj, {s: "Běžci s pořádnou disciplínou právě zaběhli dobrý maraton."}],
[["it16-s-g", 16], aj, {s: "Běžec s pořádnou disciplínou většinou běhává dobrý maraton."}],
[["it16-s-e", 16], aj, {s: "Běžec s pořádnou disciplínou právě zaběhl dobrý maraton."}],

["fgood1", aj, {s: "Ani jeden velmi energický kůň neuběhl velkou vzdálenost." }],
["fgood2", aj, {s: "Ani jedno velmi vnímavé zvíře neuslyšelo velký rámus." }],
["fgood3", aj, {s: "Ani jeden velmi zbožný muslim neušel tradiční pouť." }],
["fgood4", aj, {s: "Ani jeden velmi arogantní autor nenapsal naprostý brak." }],
["fgood5", aj, {s: "Ani jedno velmi štíhlé děvče nesnědlo hnusné jídlo." }],
["fgood6", aj, {s: "Ani jedna velmi hrdá kočka neudělala velký nepořádek." }],
["fgood7", aj, {s: "Ani jedna velmi zdatná mula neunesla těžký náklad." }],
["fgood8", aj, {s: "Ani jedna velmi nadaná jasnovidka neuviděla smutnou budoucnost." }],
["fbad9", aj, {s: "Ani jedno velmi mlsné dítě snědlo prošlé cukroví." }],
["fbad10", aj, {s: "Ani jeden velmi náročný kritik uslyšel špatnou hudbu." }],
["fbad11", aj, {s: "Ani jedna velmi citlivá žena napsala dojemnou poezii." }],
["fbad12", aj, {s: "Ani jeden velmi agresivní ohař přinesl zabitou kořist." }],
["fbad13", aj, {s: "Ani jedna velmi zkušená lyžařka zajela dobrý slalom." }],
["fbad14", aj, {s: "Ani jedna velmi talentovaná herečka sehrála působivé drama." }],
["fbad15", aj, {s: "Ani jeden  velmi snaživý vědec udělal kvalitní práci." }],
["fbad16", aj, {s: "Ani jeden velmi disciplinovaný běžec zaběhl dobrý maraton." }],
];
