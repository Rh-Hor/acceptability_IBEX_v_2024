var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("first-item"), startsWith("firstfiller"))),"description-followup", sepWith("sep", rshuffle(startsWith("followup"), startsWith("filler"))));

var continueMessage = ["Klikni zde"];

var aj = "AcceptabilityJudgment";

var q = "Question";

var completionMessage = "[Děkuji Vám za účast. Odpovědi byly odeslány.]";

var ms = "Message";

var defaults = [    
    "Separator", { transfer: 800,
                   normalMessage: "Počkejte prosím na další položku v experimentu.",
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

	      ["practice", aj, {s: {html: "<p>Pavel uviděl Marušku.</p><p><i>Tato věta je v pořádku. Pokud souhlasíte, vyberte jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "Ačkoliv byla Marie unavená, navštívila včera ještě vedoucího hasičské jednotky Tříbětice.</p><p><i>Tato věta je v pořádku. Pokud souhlasíte, vyberte jako odpověď jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "Byla Marie unavená ačkoliv, navštívila včera ještě ho v Tříběticích.</p><p><i>Tato věta není v pořádku. Pokud souhlasíte, vyberte jako odpověď jednu z možností v levém konci škály (nejspíš 1).</i></p>"}}],

	      ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do samotného experimentu."]]}],

[["i1-pl-g", 1], aj, {s: "Koně se sebemenší trochou energie většinou běhávají velkou vzdálenost."}],
[["i1-pl-e", 1], aj, {s: "Koně se sebemenší trochou energie právě uběhli velkou vzdálenost."}],
[["i1-s-g", 1], aj, {s: "Kůň se sebemenší trochou energie většinou běhává velkou vzdálenost."}],
[["i1-s-e", 1], aj, {s: "Kůň se sebemenší trochou energie právě uběhl velkou vzdálenost."}],

[["i2-pl-g", 2], aj, {s: "Zvířata se sebemenší trochou vnímavosti většinou slýchávají velký rámus."}],
[["i2-pl-e", 2], aj, {s: "Zvířata se sebemenší trochou vnímavosti právě uslyšela velký rámus."}],
[["i2-s-g", 2], aj, {s: "Zvíře se sebemenší trochou vnímavosti většinou slýchává velký rámus."}],
[["i2-s-e", 2], aj, {s: "Zvíře se sebemenší trochou vnímavosti právě uslyšelo velký rámus."}],

[["i3-pl-g-NR", 3], aj, {s: "Muslimové se sebemenší stopou víry většinou chodívají tradiční pouť."}],
[["i3-pl-e", 3], aj, {s: "Muslimové se sebemenší stopou víry právě ušli tradiční pouť."}],
[["i3-s-g", 3], aj, {s: "Muslim se sebemenší stopou víry většinou chodívá tradiční pouť."}],
[["i3-s-e", 3], aj, {s: "Muslim se sebemenší stopou víry právě ušel tradiční pouť."}],

[["i4-pl-g", 4], aj, {s: "Autoři se sebemenší známkou arogance většinou psávají naprostý brak."}],
[["i4-pl-e", 4], aj, {s: "Autoři se sebemenší známkou arogance právě napsal naprostý brak."}],
[["i4-s-g", 4], aj, {s: "Autor se sebemenší známkou arogance většinou psávají naprostý brak."}],
[["i4-s-e", 4], aj, {s: "Autor se sebemenší známkou arogance právě napsal naprostý brak."}],

[["i5-pl-g", 5], aj, {s: "Děvčata se sebemenším náznakem podváhy většinou jídávají hnusné jídlo."}],
[["i5-pl-e", 5], aj, {s: "Děvčata se sebemenším náznakem podváhy právě snědla hnusné jídlo."}],
[["i5-s-g", 5], aj, {s: "Děvče se sebemenším náznakem podváhy většinou jídává hnusné jídlo."}],
[["i5-s-e", 5], aj, {s: "Děvče se sebemenším náznakem podváhy právě snědlo hnusné jídlo."}],

[["i6-pl-g", 6], aj, {s: "Kočky se sebemenším náznakem hrdosti většinou dělávají velký nepořádek."}],
[["i6-pl-e", 6], aj, {s: "Kočky se sebemenší náznakem hrdosti právě udělaly velký nepořádek."}],
[["i6-s-g", 6], aj, {s: "Kočka se sebemenší náznakem hrdosti většinou dělává velký nepořádek."}],
[["i6-s-e", 6], aj, {s: "Kočka se sebemenší náznakem hrdosti právě udělala velký nepořádek."}],

[["i7-pl-g", 7], aj, {s: "Muly se sebemenší trochou zdatnosti většinou nosívají těžký náklad."}],
[["i7-pl-e", 7], aj, {s: "Muly se sebemenší trochou zdatnosti právě unesly těžký náklad."}],
[["i7-s-g", 7], aj, {s: "Mula se sebemenší trochou zdatnosti většinou nosívá těžký náklad."}],
[["i7-s-e", 7], aj, {s: "Mula se sebemenší trochou zdatnosti právě unesla těžký náklad."}],

[["i8-pl-g", 8], aj, {s: "Jasnovidky se sebemenší známkou nadání většinou vídávají smutnou budoucnost."}],
[["i8-pl-e", 8], aj, {s: "Jasnovidky se sebemenší známkou nadání právě uviděly smutnou budoucnost."}],
[["i8-s-g", 8], aj, {s: "Jasnovidka se sebemenší známkou nadání většinou vídává smutnou budoucnost."}],
[["i8-s-e", 8], aj, {s: "Jasnovidka se sebemenší známkou nadání právě uviděla smutnou budoucnost."}],

[["i9-pl-g", 9], aj, {s: "Děti se sebemenší trochou mlsnosti většinou jídávají prošlé cukroví."}],
[["i9-pl-e", 9], aj, {s: "Děti se sebemenší trochou mlsnosti právě snědly prošlé cukroví."}],
[["i9-s-g", 9], aj, {s: "Dítě se sebemenší trochou mlsnosti většinou jídává prošlé cukroví."}],
[["i9-s-e", 9], aj, {s: "Dítě se sebemenší trochou mlsnosti právě snědlo prošlé cukroví."}],

[["i10-pl-g", 10], aj, {s: "Kritici se sebemenší známkou vkusu většinou slýchávají špatnou hudbu."}],
[["i10-pl-e", 10], aj, {s: "Kritici se sebemenší známkou vkusu právě uslyšeli špatnou hudbu."}],
[["i10-s-g", 10], aj, {s: "Kritik se sebemenší známkou vkusu většinou slýchává špatnou hudbu."}],
[["i10-s-e", 10], aj, {s: "Kritik se sebemenší známkou vkusu právě uslyšel špatnou hudbu."}],

[["i11-pl-g", 11], aj, {s: "Ženy se sebemenším náznakem citu většinou psávají dojemnou poezii."}],
[["i11-pl-e", 11], aj, {s: "Ženy se sebemenším náznakem citu právě napsaly dojemnou poezii."}],
[["i11-s-g", 11], aj, {s: "Žena se sebemenším náznakem citu většinou psává dojemnou poezii."}],
[["i11-s-e", 11], aj, {s: "Žena se sebemenším náznakem citu právě napsala dojemnou poezii."}],

[["i12-pl-g", 12], aj, {s: "Ohaři se sebemenším projevem agresivity většinou nosívají zabitou kořist."}],
[["i12-pl-e", 12], aj, {s: "Ohaři se sebemenším projevem agresivity právě přinesli zabitou kořist."}],
[["i12-s-g", 12], aj, {s: "Ohař se sebemenším projevem agresivity většinou nosívá zabitou kořist."}],
[["i12-s-e", 12], aj, {s: "Ohař se sebemenším projevem agresivity právě přinesl zabitou kořist."}],

[["i13-pl-g", 13], aj, {s: "Lyžařky se sebemenší známkou zkušenosti většinou jezdívají dobrý slalom."}],
[["i13-pl-e", 13], aj, {s: "Lyžařky se sebemenší známkou zkušenosti právě zajely dobrý slalom."}],
[["i13-s-g", 13], aj, {s: "Lyžařka se sebemenší známkou zkušenosti většinou jezdívá dobrý slalom."}],
[["i13-s-e", 13], aj, {s: "Lyžařka se sebemenší známkou zkušenosti právě zajela dobrý slalom."}],
	     
[["i14-pl-g", 14], aj, {s: "Herečky se sebemenší známkou talentu většinou hrávají působivé drama."}],
[["i14-pl-e", 14], aj, {s: "Herečky se sebemenší známkou talentu právě sehráli působivé drama."}],
[["i14-s-g", 14], aj, {s: "Herečka se sebemenší známkou talentu většinou hrává působivé drama."}],
[["i14-s-e", 14], aj, {s: "Herečka se sebemenší známkou talentu právě sehrál působivé drama."}],

[["i15-pl-g", 15], aj, {s: "Vědci se sebemenším projevem snahy většinou dělávají kvalitní práci."}],
[["i15-pl-e", 15], aj, {s: "Vědci se sebemenším projevem snahy právě udělali kvalitní práci."}],
[["i15-s-g", 15], aj, {s: "Vědec se sebemenším projevem snahy většinou dělává kvalitní práci."}],
[["i15-s-e", 15], aj, {s: "Vědec se sebemenším projevem snahy právě udělal kvalitní práci."}],

[["i16-pl-g", 16], aj, {s: "Běžci se sebemenší trochou disciplíny většinou běhávají dobrý maraton."}],
[["i16-pl-e", 16], aj, {s: "Běžci se sebemenší trochou disciplíny právě zaběhli dobrý maraton."}],
[["i16-s-g", 16], aj, {s: "Běžec se sebemenší trochou disciplíny většinou běhává dobrý maraton."}],
[["i16-s-e", 16], aj, {s: "Běžec se sebemenší trochou disciplíny právě zaběhl dobrý maraton."}],

["good1", aj, {s: "Ani jeden velmi energický kůň neuběhl velkou vzdálenost." }],
["good2", aj, {s: "Ani jedno velmi vnímavé zvíře neuslyšelo velký rámus." }],
["good3", aj, {s: "Ani jeden velmi zbožný muslim neušel tradiční pouť." }],
["good4", aj, {s: "Ani jeden velmi arogantní autor nenapsal naprostý brak." }],
["good5", aj, {s: "Ani jedno velmi štíhlé děvče nesnědlo hnusné jídlo." }],
["good6", aj, {s: "Ani jedna velmi hrdá kočka neudělala velký nepořádek." }],
["good7", aj, {s: "Ani jedna velmi zdatná mula neunesla těžký náklad." }],
["good8", aj, {s: "Ani jedna velmi nadaná jasnovidka neuviděla smutnou budoucnost." }],
["good9", aj, {s: "Ani jedno velmi mlsné dítě nesnědlo prošlé cukroví." }],
["good10", aj, {s: "Ani jeden velmi náročný kritik neuslyšel špatnou hudbu." }],
["good11", aj, {s: "Ani jedna velmi citlivá žena nenapsala dojemnou poezii." }],
["good12", aj, {s: "Ani jeden velmi agresivní ohař nepřinesl zabitou kořist." }],
["good13", aj, {s: "Ani jedna velmi zkušená lyžařka nezajela dobrý slalom." }],
["good14", aj, {s: "Ani jedna velmi talentovaná herečka nesehrála působivé drama." }],
["good15", aj, {s: "Ani jeden  velmi snaživý vědec neudělal kvalitní práci." }],
["good16", aj, {s: "Ani jeden velmi disciplinovaný běžec nezaběhl dobrý maraton." }],
["bad1", aj, {s: "Ani jeden velmi energický kůň uběhl velkou vzdálenost." }],
["bad2", aj, {s: "Ani jedno velmi vnímavé zvíře uslyšelo velký rámus." }],
["bad3", aj, {s: "Ani jeden velmi zbožný muslim ušel tradiční pouť." }],
["bad4", aj, {s: "Ani jeden velmi arogantní autor napsal naprostý brak." }],
["bad5", aj, {s: "Ani jedno velmi štíhlé děvče snědlo hnusné jídlo." }],
["bad6", aj, {s: "Ani jedna velmi hrdá kočka udělala velký nepořádek." }],
["bad7", aj, {s: "Ani jedna velmi zdatná mula unesla těžký náklad." }],
["bad8", aj, {s: "Ani jedna velmi nadaná jasnovidka uviděla smutnou budoucnost." }],
["bad9", aj, {s: "Ani jedno velmi mlsné dítě snědlo prošlé cukroví." }],
["bad10", aj, {s: "Ani jeden velmi náročný kritik uslyšel špatnou hudbu." }],
["bad11", aj, {s: "Ani jedna velmi citlivá žena napsala dojemnou poezii." }],
["bad12", aj, {s: "Ani jeden velmi agresivní ohař přinesl zabitou kořist." }],
["bad13", aj, {s: "Ani jedna velmi zkušená lyžařka zajela dobrý slalom." }],
["bad14", aj, {s: "Ani jedna velmi talentovaná herečka sehrála působivé drama." }],
["bad15", aj, {s: "Ani jeden  velmi snaživý vědec udělal kvalitní práci." }],
["bad16", aj, {s: "Ani jeden velmi disciplinovaný běžec zaběhl dobrý maraton." }],
];
