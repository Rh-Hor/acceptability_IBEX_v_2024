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
 
	      ["intro", "Form", {continueMessage: "Pro vstup do experimentu klikněte zde.", html: { include: "example_intro.html" }}],

	      ["practice", aj, {s: {html: "<p><b>Nacházíte se v přípravné fázi experimentu. Pozorně sledujte, co se po vás vyžaduje. Předmětem Vašeho hodnocení budou jen věty, které NEJSOU napsány kurzívou.</p></b><p><i>Kontext: Mirek má několik líných zaměstnanců. Tvrdí o nich: </i></p><p>Tři zaměstnanci letos dostanou žádné prémie.</p><p><b>Výše uvedená věta odpovídá kontextu, ale nejspíše máte pocit, že věta neodpovídá zásadám českého jazyka. Vhodné číslo pro ohodnocení takové věty tudíž bude nejspíše 1. Klikněte na požadované číslo na škále..</b></p>"}}],
["practice", aj, {s: {html: "<p><b>Nacházíte se v přípravné fázi experimentu. Pozorně sledujte, co se po vás vyžaduje.  Předmětem Vašeho hodnocení budou jen věty, které NEJSOU napsány kurzívou. </p></b><p><i>Kontext: Mirkovi se na zahradě porouchala hadice. Mirek říká opraváři do telefonu:</i></p><p>Tři zahradnice chtěly zalít květinové záhony, ale nemohly.</p><p><b>Výše uvedená věta neobsahuje žádnou nesrovnalost a vypadá zcela v pořádku. Toto je tedy příklad přijatelné věty, které odpovídá vyšší hodnocení – nejspíše 5. Klikněte na požadované číslo na škále.</b></p>"}}],
["practice", aj, {s: {html: "<p><b>Nacházíte se v přípravné fázi experimentu. Pozorně sledujte, co se po vás vyžaduje.  Předmětem Vašeho hodnocení budou jen věty, které NEJSOU napsány kurzívou. </p></b><p><i>Kontext: Mirek potkal na obědě zahradníka Pepu. Mirek o něm říká:</i></p><p>Po příchodu ze záhonu měl Pepa na podrážce tři hlíny.</p><p><b> Tato věta není v pořádku: „tři hlíny“ se v češtině obvykle neříká. Pokud souhlasíte, vyberte jedno z nižších čísel (nejspíš 1).</b></p>"}}],

	      ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do samotného experimentu."]]}],

[["it1-pl-g", 1], aj, {s:{html: "<p><i>Kontext: Jarda se zajímá o koně, což jsou často energická zvířata. Tvrdí o nich:</i></p> Koně s dostatečnou energií většinou běhávají velkou vzdálenost."}}],
[["it1-pl-e", 1], aj, {s:{html: "<p><i>Kontext: Jarda pozoroval koně, z nichž někteří utekli do města. Tvrdí o nich:</i></p> Koně s dostatečnou energií právě uběhli velkou vzdálenost."}}],
[["it1-s-g", 1], aj, {s: {html: "<p><i>Kontext: Jarda se zajímá o koně, což jsou často energická zvířata. Tvrdí o nich:</i></p>Kůň s dostatečnou energií většinou běhává velkou vzdálenost."}}],
[["it1-s-e", 1], aj, {s:{html: "<p><i>Kontext: Jarda pozoroval koně, z nichž někteří utekli do města. Tvrdí o nich:</i></p> Kůň s dostatečnou energií právě uběhl velkou vzdálenost."}}],

[["it2-pl-g", 2], aj, {s:{html: "<p><i>Kontext: Jarka se zajímá o zvířata, což jsou často citliví tvorové. Tvrdí o nich:</i></p> Zvířata s dobrým sluchem většinou slýchávají velký rámus."}}],
[["it2-pl-e", 2], aj, {s: {html: "<p><i>Kontext: Jarka zkoumala zvířata, z nichž některá projevila strach z petard. Tvrdí o nich:</i></p> Zvířata s dobrým sluchem právě uslyšela velký rámus."}}],
[["it2-s-g", 2], aj, {s: {html: "<p><i>Kontext: Jarka se zajímá o zvířata, což jsou často citliví tvorové. Tvrdí o nich:</i></p> Zvíře s dobrým sluchem většinou slýchává velký rámus."}}],
[["it2-s-e", 2], aj, {s: {html: "<p><i>Kontext: Jarka zkoumala zvířata, z nichž některá projevila strach z petard. Tvrdí o nich:</i></p> Zvíře s dobrým sluchem právě uslyšelo velký rámus."}}],

[["it3-pl-g-NR", 3], aj, {s: {html: "<p><i>Kontext: Zdeněk se zajímá o muslimy, což jsou často zbožní lidé. Tvrdí o nich:</i></p> Muslimové s pevnou vírou většinou chodívají tradiční pouť."}}],
[["it3-pl-e", 3], aj, {s: {html: "<p><i>Kontext: Zdeněk vyzpovídal muslimy, z nichž někteří poznali město Mekku. Tvrdí o nich:</i></p> Muslimové s pevnou vírou právě ušli tradiční pouť."}}],
[["it3-s-g", 3], aj, {s: {html: "<p><i>Kontext: Zdeněk se zajímá o muslimy, což jsou často zbožní lidé. Tvrdí o nich:</i></p> Muslim  s pevnou vírou většinou chodívá tradiční pouť."}}],
[["it3-s-e", 3], aj, {s:  {html: "<p><i>Kontext: Zdeněk vyzpovídal muslimy, z nichž někteří poznali město Mekku. Tvrdí o nich:</i></p> Muslim s pevnou vírou právě ušel tradiční pouť."}}],

[["it4-pl-g", 4], aj, {s: {html: "<p><i>Kontext: Magda se zajímá o autory, což jsou často namyšlení lidé. Tvrdí o nich:</i></p> Autoři s velkou arogancí většinou psávají naprostý brak."}}],
[["it4-pl-e", 4], aj, {s: {html: "<p><i>Kontext: Magda sledovala autory, z nichž někteří odeslali nekvalitní texty. Tvrdí o nich:</i></p> Autoři s velkou arogancí právě napsali naprostý brak."}}],
[["it4-s-g", 4], aj, {s: {html: "<p><i>Kontext: Magda se zajímá o autory, což jsou často namyšlení lidé. Tvrdí o nich:</i></p> Autor s velkou arogancí většinou psává naprostý brak."}}],
[["it4-s-e", 4], aj, {s: {html: "<p><i>Kontext: Magda sledovala autory, z nichž někteří odeslali nekvalitní texty. Tvrdí o nich:</i></p> Autor s velkou arogancí právě napsal naprostý brak."}}],

[["it5-pl-g", 5], aj, {s: {html: "<p><i>Kontext: Jana se zajímá o děvčata, což jsou často hubené děti. Tvrdí o nich:</i></p> Děvčata s výraznou podváhou většinou jídávají hnusné jídlo."}}],
[["it5-pl-e", 5], aj, {s:  {html: "<p><i>Kontext: Jana pozorovala děvčata, z nichž některá snědla nevábná jídla. Tvrdí o nich:</i></p> Děvčata s výraznou podváhou právě snědla hnusné jídlo."}}],
[["it5-s-g", 5], aj, {s:  {html: "<p><i>Kontext: Jana se zajímá o děvčata, což jsou často hubené děti. Tvrdí o nich:</i></p> Děvče s výraznou podváhou většinou jídává hnusné jídlo."}}],
[["it5-s-e", 5], aj, {s:  {html: "<p><i>Kontext: Jana pozorovala děvčata, z nichž některá snědla nevábná jídla. Tvrdí o nich:</i></p> Děvče s výraznou podváhou právě snědlo hnusné jídlo."}}],

[["it6-pl-g", 6], aj, {s: {html: "<p><i>Kontext: Kuba se zajímá o kočky, což jsou často pyšná zvířata. Tvrdí o nich:</i></p> Kočky s velkou hrdostí většinou dělávají velký nepořádek."}}],
[["it6-pl-e", 6], aj, {s: {html: "<p><i>Kontext: Kuba zkoumal kočky, z nichž některé shodily všechny věci. Tvrdí o nich:</i></p> Kočky s velkou hrdostí právě udělaly velký nepořádek."}}],
[["it6-s-g", 6], aj, {s: {html: "<p><i>Kontext: Kuba se zajímá o kočky, což jsou často pyšná zvířata. Tvrdí o nich:</i></p> Kočka s velkou hrdostí většinou dělává velký nepořádek."}}],
[["it6-s-e", 6], aj, {s:  {html: "<p><i>Kontext: Kuba zkoumal kočky, z nichž některé rády shodily všechny věci. Tvrdí o nich:</i></p> Kočka s velkou hrdostí právě udělala velký nepořádek."}}],

[["it7-pl-g", 7], aj, {s: {html: "<p><i>Kontext: Jarek se zajímá o muly, což jsou často houževnatá zvířata. Tvrdí o nich:</i></p> Muly s tělesnou zdatností většinou nosívají těžký náklad."}}],
[["it7-pl-e", 7], aj, {s: {html: "<p><i>Kontext: Jarek sledoval muly, z nichž některé dostaly velmi zabrat. Tvrdí o nich:</i></p> Muly s tělesnou zdatností právě unesly těžký náklad."}}],
[["it7-s-g", 7], aj, {s: {html: "<p><i>Kontext: Jarek se zajímá o muly, což jsou často houževnatá zvířata. Tvrdí o nich:</i></p> Mula s tělesnou zdatností většinou nosívá těžký náklad."}}],
[["it7-s-e", 7], aj, {s: {html: "<p><i>Kontext: Jarek sledoval muly, z nichž některé dostaly velmi zabrat. Tvrdí o nich:</i></p> Mula s tělesnou zdatností právě unesla těžký náklad."}}],

[["it8-pl-g", 8], aj, {s: {html: "<p><i>Kontext: Jiřka se zajímá o jasnovidky, což jsou často mystické ženy. Tvrdí o nich:</i></p> Jasnovidky s magickým nadáním většinou vídávají smutnou budoucnost."}}],
[["it8-pl-e", 8], aj, {s: {html: "<p><i>Kontext: Jiřka vyzpovídala jasnovidky, z nichž některé vyvěštily samé trápení. Tvrdí o nich:</i></p> Jasnovidky s magickým nadáním právě uviděly smutnou budoucnost."}}],
[["it8-s-g", 8], aj, {s: {html: "<p><i>Kontext: Jiřka se zajímá o jasnovidky, což jsou často mystické ženy. Tvrdí o nich:</i></p> Jasnovidka s magickým nadáním většinou vídává smutnou budoucnost."}}],
[["it8-s-e", 8], aj, {s: {html: "<p><i>Kontext: Jiřka vyzpovídala  jasnovidky, z nichž některé vyvěštily samé trápení. Tvrdí o nich:</i></p> Jasnovidka s magickým nadáním právě uviděla smutnou budoucnost."}}],

[["it9-pl-g", 9], aj, {s: {html: "<p><i>Kontext: Zdena se zajímá o děti, což jsou často nenasytní tvorové. Tvrdí o nich:</i></p> Děti s nezkrotnou mlsností většinou jídávají prošlé cukroví."}}],
[["it9-pl-e", 9], aj, {s: {html: "<p><i>Kontext: Zdena pozorovala děti, z nichž některým nevadí staré potraviny. Tvrdí o nich:</i></p> Děti s nezkrotnou mlsností právě snědly prošlé cukroví."}}],
[["it9-s-g", 9], aj, {s: {html: "<p><i>Kontext: Zdena se zajímá o děti, což jsou často nenasytní tvorové. Tvrdí o nich:</i></p> Dítě  s nezkrotnou mlsností většinou jídává prošlé cukroví."}}],
[["it9-s-e", 9], aj, {s: {html: "<p><i>Kontext: Zdena pozorovala děti, z nichž některým nevadí staré potraviny. Tvrdí o nich:</i></p> Dítě s nezkrotnou mlsností právě snědlo prošlé cukroví."}}],

[["it10-pl-g", 10], aj, {s: {html: "<p><i>Kontext: David se zajímá o kritiky, což jsou často přísní lidé. Tvrdí o nich:</i></p> Kritici s vytříbeným vkusem většinou slýchávají špatnou hudbu."}}],
[["it10-pl-e", 10], aj, {s: {html: "<p><i>Kontext: David vyzpovídal kritiky, z nichž někteří vnímali koncert negativně. Tvrdí o nich:</i></p> Kritici s vytříbeným vkusem právě uslyšeli špatnou hudbu."}}],
[["it10-s-g", 10], aj, {s: {html: "<p><i>Kontext: David se zajímá o kritiky, což jsou často přísní lidé. Tvrdí o nich:</i></p> Kritik s vytříbeným vkusem většinou slýchává špatnou hudbu."}}],
[["it10-s-e", 10], aj, {s: {html: "<p><i>Kontext: David vyzpovídal kritiky, z nichž někteří vnímali koncert negativně. Tvrdí o nich:</i></p> Kritik s vytříbeným vkusem právě uslyšel špatnou hudbu."}}],

[["it11-pl-g", 11], aj, {s: {html: "<p><i>Kontext: Lenka se zajímá o básnířky, což jsou často emocionální ženy. Tvrdí o nich:</i></p> Básnířky s hlubokým citem většinou psávají dojemnou poezii."}}],
[["it11-pl-e", 11], aj, {s: {html: "<p><i>Kontext: Lenka zkoumala básnířky, z nichž některé stvořily úžasné básně. Tvrdí o nich:</i></p> Básnířky s hlubokým citem právě napsaly dojemnou poezii."}}],
[["it11-s-g", 11], aj, {s: {html: "<p><i>Kontext: Lenka se zajímá o básnířky, což jsou často emocionální ženy. Tvrdí o nich:</i></p>Básnířka s hlubokým citem většinou psává dojemnou poezii."}}],
[["it11-s-e", 11], aj, {s: {html: "<p><i>Kontext: Lenka zkoumala básnířky, z nichž některé stvořily úžasné básně. Tvrdí o nich:</i></p>Básnířka s hlubokým citem právě napsala dojemnou poezii."}}],

[["it12-pl-g", 12], aj, {s: {html: "<p><i>Kontext: Hanka se zajímá o ohaře, což jsou často temperamentní psi. Tvrdí o nich:</i></p> Ohaři s vrozenou agresivitou většinou nosívají zabitou kořist."}}],
[["it12-pl-e", 12], aj, {s:  {html: "<p><i>Kontext: Hanka sledovala ohaře, z nichž někteří zvládli dobře aportovat. Tvrdí o nich:</i></p> Ohaři s vrozenou agresivitou právě přinesli zabitou kořist."}}],
[["it12-s-g", 12], aj, {s:  {html: "<p><i>Kontext: Hanka se zajímá o ohaře, což jsou často temperamentní psi. Tvrdí o nich:</i></p> Ohař s vrozenou agresivitou většinou nosívá zabitou kořist."}}],
[["it12-s-e", 12], aj, {s:  {html: "<p><i>Kontext: Hanka sledovala ohaře, z nichž někteří zvládli dobře aportovat. Tvrdí o nich:</i></p> Ohař s vrozenou agresivitou právě přinesl zabitou kořist."}}],

[["it13-pl-g", 13], aj, {s: {html: "<p><i>Kontext: Pavel se zajímá o lyžařky, což jsou často ostřílené sportovkyně. Tvrdí o nich:</i></p> Lyžařky s letitou zkušeností většinou jezdívají dobrý slalom."}}],
[["it13-pl-e", 13], aj, {s: {html: "<p><i>Kontext: Pavel pozoroval lyžařky, z nichž některé podaly úžasný výkon. Tvrdí o nich:</i></p> Lyžařky s letitou zkušeností právě zajely dobrý slalom."}}],
[["it13-s-g", 13], aj, {s: {html: "<p><i>Kontext: Pavel se zajímá o lyžařky, což jsou často ostřílené sportovkyně. Tvrdí o nich:</i></p> Lyžařka s letitou zkušeností většinou jezdívá dobrý slalom."}}],
[["it13-s-e", 13], aj, {s: {html: "<p><i>Kontext: Pavel  pozoroval lyžařky, z nichž některé podaly úžasný výkon. Tvrdí o nich:</i></p> Lyžařka s letitou zkušeností právě zajela dobrý slalom."}}],
	     
[["it14-pl-g", 14], aj, {s: {html: "<p><i>Kontext: Marek se zajímá o herečky, což jsou často nadané umělkyně. Tvrdí o nich:</i></p> Herečky s přirozeným talentem většinou hrávají působivé drama."}}],
[["it14-pl-e", 14], aj, {s: {html: "<p><i>Kontext: Marek sledoval herečky, z nichž některé dojaly každého diváka. Tvrdí o nich:</i></p> Herečky s přirozeným talentem právě sehrály působivé drama."}}],
[["it14-s-g", 14], aj, {s: {html: "<p><i>Kontext: Marek se zajímá o herečky, což jsou často nadané umělkyně. Tvrdí o nich:</i></p> Herečka s přirozeným talentem většinou hrává působivé drama."}}],
[["it14-s-e", 14], aj, {s: {html: "<p><i>Kontext: Marek sledoval herečky, z nichž některé dojaly každého diváka. Tvrdí o nich:</i></p> Herečka s přirozeným talentem právě sehrála působivé drama."}}],

[["it15-pl-g", 15], aj, {s: {html: "<p><i>Kontext: Zora se zajímá o vědce, což jsou často rozumní lidé. Tvrdí o nich:</i></p> Vědci s opravdovou snahou většinou dělávají kvalitní práci."}}],
[["it15-pl-e", 15], aj, {s: {html: "<p><i>Kontext: Zora zkoumala vědce, z nichž někteří vyvinuli špičkové metody. Tvrdí o nich:</i></p> Vědci s opravdovou snahou právě udělali kvalitní práci."}}],
[["it15-s-g", 15], aj, {s: {html: "<p><i>Kontext: Zora se zajímá o vědce, což jsou často rozumní lidé. Tvrdí o nich:</i></p> Vědec s opravdovou snahou většinou dělává kvalitní práci."}}],
[["it15-s-e", 15], aj, {s: {html: "<p><i>Kontext: Zora zkoumala vědce, z nichž někteří vyvinuli špičkové metody. Tvrdí o nich:</i></p> Vědec s opravdovou snahou právě udělal kvalitní práci."}}],

[["it16-pl-g", 16], aj, {s: {html: "<p><i>Kontext: Pepa se zajímá o běžce, což jsou často vytrvalí lidé. Tvrdí o nich:</i></p> Běžci s pořádnou disciplínou většinou běhávají dobrý maraton."}}],
[["it16-pl-e", 16], aj, {s: {html: "<p><i>Kontext: Pepa pozoroval běžce, z nichž někteří doběhli závod brzy. Tvrdí o nich:</i></p> Běžci s pořádnou disciplínou právě zaběhli dobrý maraton."}}],
[["it16-s-g", 16], aj, {s: {html: "<p><i>Kontext: Pepa se zajímá o běžce, což jsou často vytrvalí lidé. Tvrdí o nich:</i></p> Běžec s pořádnou disciplínou většinou běhává dobrý maraton."}}],
[["it16-s-e", 16], aj, {s: {html: "<p><i>Kontext: Pepa pozoroval běžce, z nichž někteří doběhli závod brzy. Tvrdí o nich:</i></p> Běžec s pořádnou disciplínou právě zaběhl dobrý maraton."}}],

["fgood1", aj, {s: {html: "<p><i>Kontext: Jarda pozoroval několik koní. Tvrdí o nich:</i></p> Ani jeden velmi energický kůň neuběhl velkou vzdálenost." }}],
["fgood2", aj, {s: {html: "<p><i>Kontext: Jarka zkoumala několik zvířat. Tvrdí o nich:</i></p> Ani jedno velmi vnímavé zvíře neuslyšelo velký rámus." }}],
["fgood3", aj, {s: {html: "<p><i>Kontext: Zdeněk vyzpovídal několik muslimů. Tvrdí o nich:</i></p> Ani jeden velmi zbožný muslim neušel tradiční pouť." }}],
["fgood4", aj, {s: {html: "<p><i>Kontext: Magda sledovala několik autorů. Tvrdí o nich:</i></p> Ani jeden velmi arogantní autor nenapsal naprostý brak." }}],
["fgood5", aj, {s: {html: "<p><i>Kontext: Jana pozorovala několik děvčat. Tvrdí o nich:</i></p> Ani jedno velmi štíhlé děvče nesnědlo hnusné jídlo." }}],
["fgood6", aj, {s: {html: "<p><i>Kontext: Kuba zkoumal několik koček. Tvrdí o nich:</i></p> Ani jedna velmi hrdá kočka neudělala velký nepořádek." }}],
["fgood7", aj, {s: {html: "<p><i>Kontext: Jarek sledoval několik mul. Tvrdí o nich:</i></p> Ani jedna velmi zdatná mula neunesla těžký náklad." }}],
["fgood8", aj, {s: {html: "<p><i>Kontext: Jiřka vyzpovídala několik jasnovidek. Tvrdí o nich:</i></p> Ani jedna velmi nadaná jasnovidka neuviděla smutnou budoucnost." }}],
["fbad9", aj, {s: {html: "<p><i>Kontext: Zdena pozorovala několik dětí. Tvrdí o nich:</i></p> Ani jedno velmi mlsné dítě snědlo prošlé cukroví." }}],
["fbad10", aj, {s: {html: "<p><i>Kontext: David vyzpovídal několik kritiků. Tvrdí o nich:</i></p> Ani jeden velmi náročný kritik uslyšel špatnou hudbu." }}],
["fbad11", aj, {s: {html: "<p><i>Kontext: Lenka zkoumala několik žen. Tvrdí o nich:</i></p> Ani jedna velmi citlivá žena napsala dojemnou poezii." }}],
["fbad12", aj, {s: {html: "<p><i>Kontext: Hanka sledovala několik ohařů. Tvrdí o nich:</i></p> Ani jeden velmi agresivní ohař přinesl zabitou kořist." }}],
["fbad13", aj, {s: {html: "<p><i>Kontext: Pavel pozoroval několik lyžařek. Tvrdí o nich:</i></p>Ani jedna velmi zkušená lyžařka zajela dobrý slalom." }}],
["fbad14", aj, {s: {html: "<p><i>Kontext: Marek sledoval několik hereček. Tvrdí o nich:</i></p> Ani jedna velmi talentovaná herečka sehrála působivé drama." }}],
["fbad15", aj, {s: {html: "<p><i>Kontext: Zora zkoumala několik vědců. Tvrdí o nich:</i></p> Ani jeden velmi snaživý vědec udělal kvalitní práci." }}],
["fbad16", aj, {s: {html: "<p><i>Kontext: Pepa pozoroval několik běžců. Tvrdí o nich:</i></p> Ani jeden velmi disciplinovaný běžec zaběhl dobrý maraton." }}],
];
