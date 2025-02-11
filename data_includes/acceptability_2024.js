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

[["it1-pl-g-nonpi", 1], aj, {s:{html: "<p><i>Kontext: Jarda se zajímá o koně, což jsou často energická zvířata. Tvrdí o nich:</i></p> Koně s velkou měrou energie většinou běhávají velkou vzdálenost."}}],
[["it1-pl-e-nonpi", 1], aj, {s:{html: "<p><i>Kontext: Jarda pozoroval koně, z nichž někteří utekli do města. Tvrdí o nich:</i></p> Koně s velkou měrou energie právě uběhli velkou vzdálenost."}}],
[["it1-s-g-nonpi", 1], aj, {s: {html: "<p><i>Kontext: Jarda se zajímá o koně, což jsou často energická zvířata. Tvrdí o nich:</i></p>Kůň s velkou měrou energie většinou běhává velkou vzdálenost."}}],
[["it1-s-e-nonpi", 1], aj, {s:{html: "<p><i>Kontext: Jarda pozoroval koně, z nichž někteří utekli do města. Tvrdí o nich:</i></p> Kůň s velkou měrou energie právě uběhl velkou vzdálenost."}}],
[["it1-pl-g-npi", 1], aj, {s:{html: "<p><i>Kontext: Jarda se zajímá o koně, což jsou často energická zvířata. Tvrdí o nich:</i></p> Koně se sebemenší trochou energie většinou běhávají velkou vzdálenost."}}],
[["it1-pl-e-npi", 1], aj, {s:{html: "<p><i>Kontext: Jarda pozoroval koně, z nichž někteří utekli do města. Tvrdí o nich:</i></p> Koně se sebemenší trochou energie právě uběhli velkou vzdálenost."}}],
[["it1-s-g-npi", 1], aj, {s: {html: "<p><i>Kontext: Jarda se zajímá o koně, což jsou často energická zvířata. Tvrdí o nich:</i></p>Kůň se sebemenší trochou energie většinou běhává velkou vzdálenost."}}],
[["it1-s-e-npi", 1], aj, {s:{html: "<p><i>Kontext: Jarda pozoroval koně, z nichž někteří utekli do města. Tvrdí o nich:</i></p> Kůň se sebemenší trochou energie právě uběhl velkou vzdálenost."}}],
	     
[["it2-pl-g-nonpi", 2], aj, {s:{html: "<p><i>Kontext: Jarka se zajímá o zvířata, což jsou často citliví tvorové. Tvrdí o nich:</i></p> Zvířata s velkou měrou vnímavosti většinou slýchávají velký rámus."}}],
[["it2-pl-e-nonpi", 2], aj, {s: {html: "<p><i>Kontext: Jarka zkoumala zvířata, z nichž některá projevila strach z petard. Tvrdí o nich:</i></p> Zvířata s velkou měrou vnímavosti právě uslyšela velký rámus."}}],
[["it2-s-g-nonpi", 2], aj, {s: {html: "<p><i>Kontext: Jarka se zajímá o zvířata, což jsou často citliví tvorové. Tvrdí o nich:</i></p> Zvíře s velkou měrou vnímavosti většinou slýchává velký rámus."}}],
[["it2-s-e-nonpi", 2], aj, {s: {html: "<p><i>Kontext: Jarka zkoumala zvířata, z nichž některá projevila strach z petard. Tvrdí o nich:</i></p> Zvíře s velkou měrou vnímavosti právě uslyšelo velký rámus."}}],
[["it2-pl-g-npi", 2], aj, {s:{html: "<p><i>Kontext: Jarka se zajímá o zvířata, což jsou často citliví tvorové. Tvrdí o nich:</i></p> Zvířata se sebemenší trochou vnímavosti většinou slýchávají velký rámus."}}],
[["it2-pl-e-npi", 2], aj, {s: {html: "<p><i>Kontext: Jarka zkoumala zvířata, z nichž některá projevila strach z petard. Tvrdí o nich:</i></p> Zvířata se sebemenší trochou vnímavosti právě uslyšela velký rámus."}}],
[["it2-s-g-npi", 2], aj, {s: {html: "<p><i>Kontext: Jarka se zajímá o zvířata, což jsou často citliví tvorové. Tvrdí o nich:</i></p> Zvíře se sebemenší trochou vnímavosti většinou slýchává velký rámus."}}],
[["it2-s-e-npi", 2], aj, {s: {html: "<p><i>Kontext: Jarka zkoumala zvířata, z nichž některá projevila strach z petard. Tvrdí o nich:</i></p> Zvíře se sebemenší trochou vnímavosti právě uslyšelo velký rámus."}}],
	     
[["it3-pl-g-nonpi", 3], aj, {s: {html: "<p><i>Kontext: Zdeněk se zajímá o muslimy, což jsou často zbožní lidé. Tvrdí o nich:</i></p> Muslimové s velkou silou víry většinou chodívají tradiční pouť."}}],
[["it3-pl-e-nonpi", 3], aj, {s: {html: "<p><i>Kontext: Zdeněk vyzpovídal muslimy, z nichž někteří poznali město Mekku. Tvrdí o nich:</i></p> Muslimové s velkou silou víry právě ušli tradiční pouť."}}],
[["it3-s-g-nonpi", 3], aj, {s: {html: "<p><i>Kontext: Zdeněk se zajímá o muslimy, což jsou často zbožní lidé. Tvrdí o nich:</i></p> Muslim s velkou silou víry většinou chodívá tradiční pouť."}}],
[["it3-s-e-nonpi", 3], aj, {s:  {html: "<p><i>Kontext: Zdeněk vyzpovídal muslimy, z nichž někteří poznali město Mekku. Tvrdí o nich:</i></p> Muslim s dostatečnou silou víry právě ušel tradiční pouť."}}],
[["it3-pl-g-npi", 3], aj, {s: {html: "<p><i>Kontext: Zdeněk se zajímá o muslimy, což jsou často zbožní lidé. Tvrdí o nich:</i></p> Muslimové se sebemenší stopou víry většinou chodívají tradiční pouť."}}],
[["it3-pl-e-npi", 3], aj, {s: {html: "<p><i>Kontext: Zdeněk vyzpovídal muslimy, z nichž někteří poznali město Mekku. Tvrdí o nich:</i></p> Muslimové se sebemenší stopou víry právě ušli tradiční pouť."}}],
[["it3-s-g-npi", 3], aj, {s: {html: "<p><i>Kontext: Zdeněk se zajímá o muslimy, což jsou často zbožní lidé. Tvrdí o nich:</i></p> Muslim se sebemenší stopou víry většinou chodívá tradiční pouť."}}],
[["it3-s-e-npi", 3], aj, {s:  {html: "<p><i>Kontext: Zdeněk vyzpovídal muslimy, z nichž někteří poznali město Mekku. Tvrdí o nich:</i></p> Muslim se sebemenší stopou víry právě ušel tradiční pouť."}}],

[["it4-pl-g-nonpi", 4], aj, {s: {html: "<p><i>Kontext: Magda se zajímá o autory, což jsou často namyšlení lidé. Tvrdí o nich:</i></p> Autoři s velkou měrou arogance většinou psávají naprostý brak."}}],
[["it4-pl-e-nonpi", 4], aj, {s: {html: "<p><i>Kontext: Magda sledovala autory, z nichž někteří odeslali nekvalitní texty. Tvrdí o nich:</i></p> Autoři s velkou měrou arogance právě napsali naprostý brak."}}],
[["it4-s-g-nonpi", 4], aj, {s: {html: "<p><i>Kontext: Magda se zajímá o autory, což jsou často namyšlení lidé. Tvrdí o nich:</i></p> Autor s velkou měrou arogance většinou psává naprostý brak."}}],
[["it4-s-e-nonpi", 4], aj, {s: {html: "<p><i>Kontext: Magda sledovala autory, z nichž někteří odeslali nekvalitní texty. Tvrdí o nich:</i></p> Autor s velkou měrou arogance právě napsal naprostý brak."}}],
[["it4-pl-g-npi", 4], aj, {s: {html: "<p><i>Kontext: Magda se zajímá o autory, což jsou často namyšlení lidé. Tvrdí o nich:</i></p> Autoři se sebemenší známkou arogance většinou psávají naprostý brak."}}],
[["it4-pl-e-npi", 4], aj, {s: {html: "<p><i>Kontext: Magda sledovala autory, z nichž někteří odeslali nekvalitní texty. Tvrdí o nich:</i></p> Autoři se sebemenší známkou arogance právě napsali naprostý brak."}}],
[["it4-s-g-npi", 4], aj, {s: {html: "<p><i>Kontext: Magda se zajímá o autory, což jsou často namyšlení lidé. Tvrdí o nich:</i></p> Autor se sebemenší známkou arogance většinou psává naprostý brak."}}],
[["it4-s-e-npi", 4], aj, {s: {html: "<p><i>Kontext: Magda sledovala autory, z nichž někteří odeslali nekvalitní texty. Tvrdí o nich:</i></p> Autor se sebemenší známkou arogance právě napsal naprostý brak."}}],
	     
[["it5-pl-g-nonpi", 5], aj, {s: {html: "<p><i>Kontext: Jana se zajímá o děvčata, což jsou často hubené děti. Tvrdí o nich:</i></p> Děvčata s velkou měrou podváhy většinou jídávají hnusné jídlo."}}],
[["it5-pl-e-nonpi", 5], aj, {s:  {html: "<p><i>Kontext: Jana pozorovala děvčata, z nichž některá snědla nevábná jídla. Tvrdí o nich:</i></p> Děvčata s velkou měrou podváhy právě snědla hnusné jídlo."}}],
[["it5-s-g-nonpi", 5], aj, {s:  {html: "<p><i>Kontext: Jana se zajímá o děvčata, což jsou často hubené děti. Tvrdí o nich:</i></p> Děvče s velkou měrou podváhy většinou jídává hnusné jídlo."}}],
[["it5-s-e-nonpi", 5], aj, {s:  {html: "<p><i>Kontext: Jana pozorovala děvčata, z nichž některá snědla nevábná jídla. Tvrdí o nich:</i></p> Děvče s velkou měrou podváhy právě snědlo hnusné jídlo."}}],
[["it5-pl-g-npi", 5], aj, {s: {html: "<p><i>Kontext: Jana se zajímá o děvčata, což jsou často hubené děti. Tvrdí o nich:</i></p> Děvčata se sebemenším náznakem podváhy většinou jídávají hnusné jídlo."}}],
[["it5-pl-e-npi", 5], aj, {s:  {html: "<p><i>Kontext: Jana pozorovala děvčata, z nichž některá snědla nevábná jídla. Tvrdí o nich:</i></p> Děvčata se sebemenším náznakem podváhy právě snědla hnusné jídlo."}}],
[["it5-s-g-npi", 5], aj, {s:  {html: "<p><i>Kontext: Jana se zajímá o děvčata, což jsou často hubené děti. Tvrdí o nich:</i></p> Děvče se sebemenším náznakem podváhy většinou jídává hnusné jídlo."}}],
[["it5-s-e-npi", 5], aj, {s:  {html: "<p><i>Kontext: Jana pozorovala děvčata, z nichž některá snědla nevábná jídla. Tvrdí o nich:</i></p> Děvče se sebemenším náznakem podváhy právě snědlo hnusné jídlo."}}],
	     
[["it6-pl-g-nonpi", 6], aj, {s: {html: "<p><i>Kontext: Kuba se zajímá o kočky, což jsou často pyšná zvířata. Tvrdí o nich:</i></p> Kočky s velkou měrou hrdosti většinou dělávají velký nepořádek."}}],
[["it6-pl-e-nonpi", 6], aj, {s: {html: "<p><i>Kontext: Kuba zkoumal kočky, z nichž některé shodily všechny věci. Tvrdí o nich:</i></p> Kočky s velkou měrou hrdosti právě udělaly velký nepořádek."}}],
[["it6-s-g-nonpi", 6], aj, {s: {html: "<p><i>Kontext: Kuba se zajímá o kočky, což jsou často pyšná zvířata. Tvrdí o nich:</i></p> Kočka s velkou měrou hrdosti většinou dělává velký nepořádek."}}],
[["it6-s-e-nonpi", 6], aj, {s:  {html: "<p><i>Kontext: Kuba zkoumal kočky, z nichž některé rády shodily všechny věci. Tvrdí o nich:</i></p> Kočka s velkou měrou hrdosti právě udělala velký nepořádek."}}],
[["it6-pl-g-npi", 6], aj, {s: {html: "<p><i>Kontext: Kuba se zajímá o kočky, což jsou často pyšná zvířata. Tvrdí o nich:</i></p> Kočky se sebemenší náznakem hrdosti většinou dělávají velký nepořádek."}}],
[["it6-pl-e-npi", 6], aj, {s: {html: "<p><i>Kontext: Kuba zkoumal kočky, z nichž některé shodily všechny věci. Tvrdí o nich:</i></p> Kočky se sebemenší náznakem hrdosti právě udělaly velký nepořádek."}}],
[["it6-s-g-npi", 6], aj, {s: {html: "<p><i>Kontext: Kuba se zajímá o kočky, což jsou často pyšná zvířata. Tvrdí o nich:</i></p> Kočka se sebemenší náznakem hrdosti většinou dělává velký nepořádek."}}],
[["it6-s-e-npi", 6], aj, {s:  {html: "<p><i>Kontext: Kuba zkoumal kočky, z nichž některé rády shodily všechny věci. Tvrdí o nich:</i></p> Kočka se sebemenší náznakem hrdosti právě udělala velký nepořádek."}}],
	     
[["it7-pl-g-nonpi", 7], aj, {s: {html: "<p><i>Kontext: Darek se zajímá o muly, což jsou často houževnatá zvířata. Tvrdí o nich:</i></p> Muly s velkou měrou zdatnosti většinou nosívají těžký náklad."}}],
[["it7-pl-e-nonpi", 7], aj, {s: {html: "<p><i>Kontext: Darek sledoval muly, z nichž některé dostaly velmi zabrat. Tvrdí o nich:</i></p> Muly s velkou měrou zdatnosti právě unesly těžký náklad."}}],
[["it7-s-g-nonpi", 7], aj, {s: {html: "<p><i>Kontext: Darek se zajímá o muly, což jsou často houževnatá zvířata. Tvrdí o nich:</i></p> Mula s velkou měrou zdatnosti většinou nosívá těžký náklad."}}],
[["it7-s-e-nonpi", 7], aj, {s: {html: "<p><i>Kontext: Darek sledoval muly, z nichž některé dostaly velmi zabrat. Tvrdí o nich:</i></p> Mula s velkou měrou zdatnosti právě unesla těžký náklad."}}],
[["it7-pl-g-npi", 7], aj, {s: {html: "<p><i>Kontext: Darek se zajímá o muly, což jsou často houževnatá zvířata. Tvrdí o nich:</i></p> Muly se sebemenší trochou zdatnosti většinou nosívají těžký náklad."}}],
[["it7-pl-e-npi", 7], aj, {s: {html: "<p><i>Kontext: Darek sledoval muly, z nichž některé dostaly velmi zabrat. Tvrdí o nich:</i></p> Muly se sebemenší trochou zdatnosti právě unesly těžký náklad."}}],
[["it7-s-g-npi", 7], aj, {s: {html: "<p><i>Kontext: Darek se zajímá o muly, což jsou často houževnatá zvířata. Tvrdí o nich:</i></p> Mula se sebemenší trochou zdatnosti většinou nosívá těžký náklad."}}],
[["it7-s-e-npi", 7], aj, {s: {html: "<p><i>Kontext: Darek sledoval muly, z nichž některé dostaly velmi zabrat. Tvrdí o nich:</i></p> Mula se sebemenší trochou zdatnosti právě unesla těžký náklad."}}],
	     
[["it8-pl-g-nonpi", 8], aj, {s: {html: "<p><i>Kontext: Jiřka se zajímá o jasnovidky, což jsou často mystické ženy. Tvrdí o nich:</i></p> Jasnovidky s vysokou úrovní nadání většinou vídávají smutnou budoucnost."}}],
[["it8-pl-e-nonpi", 8], aj, {s: {html: "<p><i>Kontext: Jiřka vyzpovídala jasnovidky, z nichž některé vyvěštily samé trápení. Tvrdí o nich:</i></p> Jasnovidky s vysokou úrovní nadání právě uviděly smutnou budoucnost."}}],
[["it8-s-g-nonpi", 8], aj, {s: {html: "<p><i>Kontext: Jiřka se zajímá o jasnovidky, což jsou často mystické ženy. Tvrdí o nich:</i></p> Jasnovidka s vysokou úrovní nadání většinou vídává smutnou budoucnost."}}],
[["it8-s-e-nonpi", 8], aj, {s: {html: "<p><i>Kontext: Jiřka vyzpovídala  jasnovidky, z nichž některé vyvěštily samé trápení. Tvrdí o nich:</i></p> Jasnovidka s vysokou úrovní nadání právě uviděla smutnou budoucnost."}}],
[["it8-pl-g-npi", 8], aj, {s: {html: "<p><i>Kontext: Jiřka se zajímá o jasnovidky, což jsou často mystické ženy. Tvrdí o nich:</i></p> Jasnovidky se sebemenší známkou nadání většinou vídávají smutnou budoucnost."}}],
[["it8-pl-e-npi", 8], aj, {s: {html: "<p><i>Kontext: Jiřka vyzpovídala jasnovidky, z nichž některé vyvěštily samé trápení. Tvrdí o nich:</i></p> Jasnovidky se sebemenší známkou nadání právě uviděly smutnou budoucnost."}}],
[["it8-s-g-npi", 8], aj, {s: {html: "<p><i>Kontext: Jiřka se zajímá o jasnovidky, což jsou často mystické ženy. Tvrdí o nich:</i></p> Jasnovidka se sebemenší známkou nadání většinou vídává smutnou budoucnost."}}],
[["it8-s-e-npi", 8], aj, {s: {html: "<p><i>Kontext: Jiřka vyzpovídala  jasnovidky, z nichž některé vyvěštily samé trápení. Tvrdí o nich:</i></p> Jasnovidka se sebemenší známkou nadání právě uviděla smutnou budoucnost."}}],
	     
[["it9-pl-g-nonpi", 9], aj, {s: {html: "<p><i>Kontext: Zdena se zajímá o děti, což jsou často nenasytní tvorové. Tvrdí o nich:</i></p> Děti s velkou měrou mlsnosti většinou jídávají prošlé cukroví."}}],
[["it9-pl-e-nonpi", 9], aj, {s: {html: "<p><i>Kontext: Zdena pozorovala děti, z nichž některým nevadí staré potraviny. Tvrdí o nich:</i></p> Děti s velkou měrou mlsnosti právě snědly prošlé cukroví."}}],
[["it9-s-g-nonpi", 9], aj, {s: {html: "<p><i>Kontext: Zdena se zajímá o děti, což jsou často nenasytní tvorové. Tvrdí o nich:</i></p> Dítě s velkou měrou mlsnosti většinou jídává prošlé cukroví."}}],
[["it9-s-e-nonpi", 9], aj, {s: {html: "<p><i>Kontext: Zdena pozorovala děti, z nichž některým nevadí staré potraviny. Tvrdí o nich:</i></p> Dítě s velkou měrou mlsnosti právě snědlo prošlé cukroví."}}],
[["it9-pl-g-npi", 9], aj, {s: {html: "<p><i>Kontext: Zdena se zajímá o děti, což jsou často nenasytní tvorové. Tvrdí o nich:</i></p> Děti se sebemenší trochou mlsnosti většinou jídávají prošlé cukroví."}}],
[["it9-pl-e-npi", 9], aj, {s: {html: "<p><i>Kontext: Zdena pozorovala děti, z nichž některým nevadí staré potraviny. Tvrdí o nich:</i></p> Děti se sebemenší trochou mlsnosti právě snědly prošlé cukroví."}}],
[["it9-s-g-npi", 9], aj, {s: {html: "<p><i>Kontext: Zdena se zajímá o děti, což jsou často nenasytní tvorové. Tvrdí o nich:</i></p> Dítě se sebemenší trochou mlsnosti většinou jídává prošlé cukroví."}}],
[["it9-s-e-npi", 9], aj, {s: {html: "<p><i>Kontext: Zdena pozorovala děti, z nichž některým nevadí staré potraviny. Tvrdí o nich:</i></p> Dítě se sebemenší trochou mlsnosti právě snědlo prošlé cukroví."}}],
	     
[["it10-pl-g-nonpi", 10], aj, {s: {html: "<p><i>Kontext: David se zajímá o kritiky, což jsou často přísní lidé. Tvrdí o nich:</i></p> Kritici s vysokou úrovní vkusu většinou slýchávají špatnou hudbu."}}],
[["it10-pl-e-nonpi", 10], aj, {s: {html: "<p><i>Kontext: David vyzpovídal kritiky, z nichž někteří vnímali koncert negativně. Tvrdí o nich:</i></p> Kritici s vysokou úrovní vkusu právě uslyšeli špatnou hudbu."}}],
[["it10-s-g-nonpi", 10], aj, {s: {html: "<p><i>Kontext: David se zajímá o kritiky, což jsou často přísní lidé. Tvrdí o nich:</i></p> Kritik s vysokou úrovní vkusu většinou slýchává špatnou hudbu."}}],
[["it10-s-e-nonpi", 10], aj, {s: {html: "<p><i>Kontext: David vyzpovídal kritiky, z nichž někteří vnímali koncert negativně. Tvrdí o nich:</i></p> Kritik s vysokou úrovní vkusu právě uslyšel špatnou hudbu."}}],
[["it10-pl-g-npi", 10], aj, {s: {html: "<p><i>Kontext: David se zajímá o kritiky, což jsou často přísní lidé. Tvrdí o nich:</i></p> Kritici se sebemenší známkou vkusu většinou slýchávají špatnou hudbu."}}],
[["it10-pl-e-npi", 10], aj, {s: {html: "<p><i>Kontext: David vyzpovídal kritiky, z nichž někteří vnímali koncert negativně. Tvrdí o nich:</i></p> Kritici se sebemenší známkou vkusu právě uslyšeli špatnou hudbu."}}],
[["it10-s-g-npi", 10], aj, {s: {html: "<p><i>Kontext: David se zajímá o kritiky, což jsou často přísní lidé. Tvrdí o nich:</i></p> Kritik se sebemenší známkou vkusu většinou slýchává špatnou hudbu."}}],
[["it10-s-e-npi", 10], aj, {s: {html: "<p><i>Kontext: David vyzpovídal kritiky, z nichž někteří vnímali koncert negativně. Tvrdí o nich:</i></p> Kritik se sebemenší známkou vkusu právě uslyšel špatnou hudbu."}}],
	     
[["it11-pl-g-nonpi", 11], aj, {s: {html: "<p><i>Kontext: Lenka se zajímá o básnířky, což jsou často emocionální ženy. Tvrdí o nich:</i></p> Básnířky s velkou silou citu většinou psávají dojemnou poezii."}}],
[["it11-pl-e-nonpi", 11], aj, {s: {html: "<p><i>Kontext: Lenka zkoumala básnířky, z nichž některé stvořily úžasné básně. Tvrdí o nich:</i></p> Básnířky s velkou silou citu právě napsaly dojemnou poezii."}}],
[["it11-s-g-nonpi", 11], aj, {s: {html: "<p><i>Kontext: Lenka se zajímá o básnířky, což jsou často emocionální ženy. Tvrdí o nich:</i></p>Básnířka s velkou silou citu většinou psává dojemnou poezii."}}],
[["it11-s-e-nonpi", 11], aj, {s: {html: "<p><i>Kontext: Lenka zkoumala básnířky, z nichž některé stvořily úžasné básně. Tvrdí o nich:</i></p>Básnířka s velkou silou citu právě napsala dojemnou poezii."}}],
[["it11-pl-g-npi", 11], aj, {s: {html: "<p><i>Kontext: Lenka se zajímá o básnířky, což jsou často emocionální ženy. Tvrdí o nich:</i></p> Básnířky se sebemenším náznakem citu většinou psávají dojemnou poezii."}}],
[["it11-pl-e-npi", 11], aj, {s: {html: "<p><i>Kontext: Lenka zkoumala básnířky, z nichž některé stvořily úžasné básně. Tvrdí o nich:</i></p> Básnířky se sebemenším náznakem citu právě napsaly dojemnou poezii."}}],
[["it11-s-g-npi", 11], aj, {s: {html: "<p><i>Kontext: Lenka se zajímá o básnířky, což jsou často emocionální ženy. Tvrdí o nich:</i></p>Básnířka se sebemenším náznakem citu většinou psává dojemnou poezii."}}],
[["it11-s-e-npi", 11], aj, {s: {html: "<p><i>Kontext: Lenka zkoumala básnířky, z nichž některé stvořily úžasné básně. Tvrdí o nich:</i></p>Básnířka se sebemenším náznakem citu právě napsala dojemnou poezii."}}],

[["it12-pl-g-nonpi", 12], aj, {s: {html: "<p><i>Kontext: Hanka se zajímá o ohaře, což jsou často temperamentní psi. Tvrdí o nich:</i></p> Ohaři s velkou měrou agresivity většinou nosívají zabitou kořist."}}],
[["it12-pl-e-nonpi", 12], aj, {s:  {html: "<p><i>Kontext: Hanka sledovala ohaře, z nichž někteří zvládli dobře aportovat. Tvrdí o nich:</i></p> Ohaři s velkou měrou agresivity právě přinesli zabitou kořist."}}],
[["it12-s-g-nonpi", 12], aj, {s:  {html: "<p><i>Kontext: Hanka se zajímá o ohaře, což jsou často temperamentní psi. Tvrdí o nich:</i></p> Ohař s velkou měrou agresivity většinou nosívá zabitou kořist."}}],
[["it12-s-e-nonpi", 12], aj, {s:  {html: "<p><i>Kontext: Hanka sledovala ohaře, z nichž někteří zvládli dobře aportovat. Tvrdí o nich:</i></p> Ohař s velkou měrou agresivity právě přinesl zabitou kořist."}}],
[["it12-pl-g-npi", 12], aj, {s: {html: "<p><i>Kontext: Hanka se zajímá o ohaře, což jsou často temperamentní psi. Tvrdí o nich:</i></p> Ohaři se sebemenším projevem agresivity většinou nosívají zabitou kořist."}}],
[["it12-pl-e-npi", 12], aj, {s:  {html: "<p><i>Kontext: Hanka sledovala ohaře, z nichž někteří zvládli dobře aportovat. Tvrdí o nich:</i></p> Ohaři se sebemenším projevem agresivity právě přinesli zabitou kořist."}}],
[["it12-s-g-npi", 12], aj, {s:  {html: "<p><i>Kontext: Hanka se zajímá o ohaře, což jsou často temperamentní psi. Tvrdí o nich:</i></p> Ohař se sebemenším projevem agresivity většinou nosívá zabitou kořist."}}],
[["it12-s-e-npi", 12], aj, {s:  {html: "<p><i>Kontext: Hanka sledovala ohaře, z nichž někteří zvládli dobře aportovat. Tvrdí o nich:</i></p> Ohař se sebemenším projevem agresivity právě přinesl zabitou kořist."}}],	     

[["it13-pl-g-nonpi", 13], aj, {s: {html: "<p><i>Kontext: Pavel se zajímá o lyžařky, což jsou často ostřílené sportovkyně. Tvrdí o nich:</i></p> Lyžařky s velkou měrou zkušenosti většinou jezdívají dobrý slalom."}}],
[["it13-pl-e-nonpi", 13], aj, {s: {html: "<p><i>Kontext: Pavel pozoroval lyžařky, z nichž některé podaly úžasný výkon. Tvrdí o nich:</i></p> Lyžařky s velkou měrou zkušenosti právě zajely dobrý slalom."}}],
[["it13-s-g-nonpi", 13], aj, {s: {html: "<p><i>Kontext: Pavel se zajímá o lyžařky, což jsou často ostřílené sportovkyně. Tvrdí o nich:</i></p> Lyžařka s velkou měrou zkušenosti většinou jezdívá dobrý slalom."}}],
[["it13-s-e-nonpi", 13], aj, {s: {html: "<p><i>Kontext: Pavel  pozoroval lyžařky, z nichž některé podaly úžasný výkon. Tvrdí o nich:</i></p> Lyžařka s velkou měrou zkušenosti právě zajela dobrý slalom."}}],
[["it13-pl-g-npi", 13], aj, {s: {html: "<p><i>Kontext: Pavel se zajímá o lyžařky, což jsou často ostřílené sportovkyně. Tvrdí o nich:</i></p> Lyžařky se sebemenší známkou zkušenosti většinou jezdívají dobrý slalom."}}],
[["it13-pl-e-npi", 13], aj, {s: {html: "<p><i>Kontext: Pavel pozoroval lyžařky, z nichž některé podaly úžasný výkon. Tvrdí o nich:</i></p> Lyžařky se sebemenší známkou zkušenosti právě zajely dobrý slalom."}}],
[["it13-s-g-npi", 13], aj, {s: {html: "<p><i>Kontext: Pavel se zajímá o lyžařky, což jsou často ostřílené sportovkyně. Tvrdí o nich:</i></p> Lyžařka se sebemenší známkou zkušenosti většinou jezdívá dobrý slalom."}}],
[["it13-s-e-npi", 13], aj, {s: {html: "<p><i>Kontext: Pavel  pozoroval lyžařky, z nichž některé podaly úžasný výkon. Tvrdí o nich:</i></p> Lyžařka se sebemenší známkou zkušenosti právě zajela dobrý slalom."}}],
	     
[["it14-pl-g-nonpi", 14], aj, {s: {html: "<p><i>Kontext: Marek se zajímá o herečky, což jsou často nadané umělkyně. Tvrdí o nich:</i></p> Herečky s velkou měrou talentu většinou hrávají působivé drama."}}],
[["it14-pl-e-nonpi", 14], aj, {s: {html: "<p><i>Kontext: Marek sledoval herečky, z nichž některé dojaly každého diváka. Tvrdí o nich:</i></p> Herečky s velkou měrou talentu právě sehrály působivé drama."}}],
[["it14-s-g-nonpi", 14], aj, {s: {html: "<p><i>Kontext: Marek se zajímá o herečky, což jsou často nadané umělkyně. Tvrdí o nich:</i></p> Herečka s velkou měrou talentu většinou hrává působivé drama."}}],
[["it14-s-e-nonpi", 14], aj, {s: {html: "<p><i>Kontext: Marek sledoval herečky, z nichž některé dojaly každého diváka. Tvrdí o nich:</i></p> Herečka s velkou měrou talentu právě sehrála působivé drama."}}],
[["it14-pl-g-npi", 14], aj, {s: {html: "<p><i>Kontext: Marek se zajímá o herečky, což jsou často nadané umělkyně. Tvrdí o nich:</i></p> Herečky se sebemenší známkou talentu většinou hrávají působivé drama."}}],
[["it14-pl-e-npi", 14], aj, {s: {html: "<p><i>Kontext: Marek sledoval herečky, z nichž některé dojaly každého diváka. Tvrdí o nich:</i></p> Herečky se sebemenší známkou talentu právě sehrály působivé drama."}}],
[["it14-s-g-npi", 14], aj, {s: {html: "<p><i>Kontext: Marek se zajímá o herečky, což jsou často nadané umělkyně. Tvrdí o nich:</i></p> Herečka se sebemenší známkou talentu většinou hrává působivé drama."}}],
[["it14-s-e-npi", 14], aj, {s: {html: "<p><i>Kontext: Marek sledoval herečky, z nichž některé dojaly každého diváka. Tvrdí o nich:</i></p> Herečka se sebemenší známkou talentu právě sehrála působivé drama."}}],	     

[["it15-pl-g-nonpi", 15], aj, {s: {html: "<p><i>Kontext: Zora se zajímá o vědce, což jsou často rozumní lidé. Tvrdí o nich:</i></p> Vědci s velkou měrou snahy většinou dělávají kvalitní práci."}}],
[["it15-pl-e-nonpi", 15], aj, {s: {html: "<p><i>Kontext: Zora zkoumala vědce, z nichž někteří vyvinuli špičkové metody. Tvrdí o nich:</i></p> Vědci s velkouu měrou snahy právě udělali kvalitní práci."}}],
[["it15-s-g-nonpi", 15], aj, {s: {html: "<p><i>Kontext: Zora se zajímá o vědce, což jsou často rozumní lidé. Tvrdí o nich:</i></p> Vědec s velkou měrou snahy většinou dělává kvalitní práci."}}],
[["it15-s-e-nonpi", 15], aj, {s: {html: "<p><i>Kontext: Zora zkoumala vědce, z nichž někteří vyvinuli špičkové metody. Tvrdí o nich:</i></p> Vědec s velkou měrou snahy právě udělal kvalitní práci."}}],
[["it15-pl-g-npi", 15], aj, {s: {html: "<p><i>Kontext: Zora se zajímá o vědce, což jsou často rozumní lidé. Tvrdí o nich:</i></p> Vědci se sebemenším projevem snahy většinou dělávají kvalitní práci."}}],
[["it15-pl-e-npi", 15], aj, {s: {html: "<p><i>Kontext: Zora zkoumala vědce, z nichž někteří vyvinuli špičkové metody. Tvrdí o nich:</i></p> Vědci se sebemenším projevem snahy právě udělali kvalitní práci."}}],
[["it15-s-g-npi", 15], aj, {s: {html: "<p><i>Kontext: Zora se zajímá o vědce, což jsou často rozumní lidé. Tvrdí o nich:</i></p> Vědec se sebemenším projevem snahy většinou dělává kvalitní práci."}}],
[["it15-s-e-npi", 15], aj, {s: {html: "<p><i>Kontext: Zora zkoumala vědce, z nichž někteří vyvinuli špičkové metody. Tvrdí o nich:</i></p> Vědec se sebemenším projevem snahy právě udělal kvalitní práci."}}],

[["it16-pl-g-nonpi", 16], aj, {s: {html: "<p><i>Kontext: Pepa se zajímá o běžce, což jsou často vytrvalí lidé. Tvrdí o nich:</i></p> Běžci s velkou měrou disciplíny většinou běhávají dobrý maraton."}}],
[["it16-pl-e-nonpi", 16], aj, {s: {html: "<p><i>Kontext: Pepa pozoroval běžce, z nichž někteří doběhli závod brzy. Tvrdí o nich:</i></p> Běžci s velkou měrou disciplíny právě zaběhli dobrý maraton."}}],
[["it16-s-g-nonpi", 16], aj, {s: {html: "<p><i>Kontext: Pepa se zajímá o běžce, což jsou často vytrvalí lidé. Tvrdí o nich:</i></p> Běžec s velkou měrou disciplíny většinou běhává dobrý maraton."}}],
[["it16-s-e-nonpi", 16], aj, {s: {html: "<p><i>Kontext: Pepa pozoroval běžce, z nichž někteří doběhli závod brzy. Tvrdí o nich:</i></p> Běžec s velkou měrou disciplíny právě zaběhl dobrý maraton."}}],
[["it16-pl-g-npi", 16], aj, {s: {html: "<p><i>Kontext: Pepa se zajímá o běžce, což jsou často vytrvalí lidé. Tvrdí o nich:</i></p> Běžci se sebemenší trochou disciplíny většinou běhávají dobrý maraton."}}],
[["it16-pl-e-npi", 16], aj, {s: {html: "<p><i>Kontext: Pepa pozoroval běžce, z nichž někteří doběhli závod brzy. Tvrdí o nich:</i></p> Běžci se sebemenší trochou disciplíny právě zaběhli dobrý maraton."}}],
[["it16-s-g-npi", 16], aj, {s: {html: "<p><i>Kontext: Pepa se zajímá o běžce, což jsou často vytrvalí lidé. Tvrdí o nich:</i></p> Běžec se sebemenší trochou disciplíny většinou běhává dobrý maraton."}}],
[["it16-s-e-npi", 16], aj, {s: {html: "<p><i>Kontext: Pepa pozoroval běžce, z nichž někteří doběhli závod brzy. Tvrdí o nich:</i></p> Běžec se sebemenší trochou disciplíny právě zaběhl dobrý maraton."}}],

[["it17-pl-g-nonpi", 17], aj, {s: {html: "<p><i>Kontext: Blanka se zajímá o šprty, což jsou často ambiciózní děti. Tvrdí o nich:</i></p> Šprti s velkou měrou ambice většinou hrávají trojrozměrné šachy."}}],
[["it17-pl-e-nonpi", 17], aj, {s: {html: "<p><i>Kontext: Blanka pozorovala šprty, z nichž někteří dokončili partii 3D šachů. Tvrdí o nich:</i></p> Šprti s velkou měrou ambice právě dohráli trojrozměrné šachy."}}],
[["it17-s-g-nonpi", 17], aj, {s: {html: "<p><i>Kontext: Blanka se zajímá o šprty, což jsou často ambiciózní děti. Tvrdí o nich:</i></p> Šprt s velkou měrou ambice většinou hrává trojrozměrné šachy."}}],
[["it17-s-e-nonpi", 17], aj, {s: {html: "<p><i>Kontext: Blanka pozorovala šprty, z nichž někteří dokončili partii 3D šachů. Tvrdí o nich:</i></p> Šprt s velkou měrou ambice právě dohrál trojrozměrné šachy."}}],
[["it17-pl-g-npi", 17], aj, {s: {html: "<p><i>Kontext: Blanka se zajímá o šprty, což jsou často ambiciózní děti. Tvrdí o nich:</i></p> Šprti se sebemenší známkou ambice většinou hrávají 3D šachy."}}],
[["it17-pl-e-npi", 17], aj, {s: {html: "<p><i>Kontext: Blanka pozorovala šprty, z nichž někteří dokončili partii 3D šachů. Tvrdí o nich:</i></p> Šprti se sebemenší známkou ambice právě dohráli 3D šachy."}}],
[["it17-s-g-npi", 17], aj, {s: {html: "<p><i>Kontext: Blanka se zajímá o šprty, což jsou často ambiciózní děti. Tvrdí o nich:</i></p> Šprt se sebemenší známkou ambice většinou hrává 3D šachy."}}],
[["it17-s-e-npi", 17], aj, {s: {html: "<p><i>Kontext: Blanka pozorovala šprty, z nichž někteří dokončili partii 3D šachů. Tvrdí o nich:</i></p> Šprt se sebemenší známkou ambice právě dohrál 3D šachy."}}],

[["it18-pl-g-nonpi", 18], aj, {s: {html: "<p><i>Kontext: Květa se zajímá o hlídače, což jsou často bystří zaměstnanci. Tvrdí o nich:</i></p> Hlídači s velkou měrou všímavosti většinou vídávají podezřelou činnost."}}],
[["it18-pl-e-nonpi", 18], aj, {s: {html: "<p><i>Kontext: Květa vyzpovídala hlídače, z nichž někteří sáhli po zbraních. Tvrdí o nich: </i></p> Hlídači s velkou měrou všímavosti právě uviděli podezřelou činnost."}}],
[["it18-s-g-nonpi", 18], aj, {s: {html: "<p><i>Kontext: Květa se zajímá o hlídače, což jsou často bystří zaměstnanci. Tvrdí o nich:</i></p> Hlídač s velkou měrou všímavosti většinou vídává podezřelou činnost."}}],
[["it18-s-e-nonpi", 18], aj, {s: {html: "<p><i>Kontext: Květa vyzpovídala hlídače, z nichž někteří sáhli po zbraních. Tvrdí o nich:</i></p> Hlídač s velkou měrou všímavosti právě uviděl podezřelou činnost."}}],
[["it18-pl-g-npi", 18], aj, {s: {html: "<p><i>Kontext: Květa se zajímá o hlídače, což jsou často bystří zaměstnanci. Tvrdí o nich:</i></p> Hlídači se sebemenší trochou všímavosti většinou vídávají podezřelou činnost."}}],
[["it18-pl-e-npi", 18], aj, {s: {html: "<p><i>Kontext: Květa vyzpovídala hlídače, z nichž někteří sáhli po zbraních. Tvrdí o nich:</i></p> Hlídači se sebemenší trochou všímavosti právě uviděli podezřelou činnost."}}],
[["it18-s-g-npi", 18], aj, {s: {html: "<p><i>Kontext: Květa se zajímá o hlídače, což jsou často bystří zaměstnanci. Tvrdí o nich:</i></p> Hlídač se sebemenší trochou všímavosti většinou vídává podezřelou činnost."}}],
[["it18-s-e-npi", 18], aj, {s: {html: "<p><i>Kontext: Květa vyzpovídala hlídače, z nichž někteří sáhli po zbraních. Tvrdí o nich:</i></p> Hlídač se sebemenší trochou všímavosti právě uviděl podezřelou činnost."}}],
	     
[["it19-pl-g-nonpi", 19], aj, {s: {html: "<p><i>Kontext: Tonda se zajímá o krysy, což jsou často chytrá zvířata. Tvrdí o nich:</i></p> Krysy s vysokou úrovní inteligence většinou jídávají čerstvou potravu."}}],
[["it19-pl-e-nonpi", 19], aj, {s: {html: "<p><i>Kontext: Tonda pozoroval krysy, z nichž některé odmítly uleželé granule. Tvrdí o nich: </i></p> Krysy s vysokou úrovní inteligence právě snědly čerstvou potravu."}}],
[["it19-s-g-nonpi", 19], aj, {s: {html: "<p><i>Kontext: Tonda se zajímá o krysy, což jsou často chytrá zvířata. Tvrdí o nich:</i></p> Krysa s vysokou úrovní inteligence většinou jídává čerstvou potravu."}}],
[["it19-s-e-nonpi", 19], aj, {s: {html: "<p><i>Kontext: Tonda pozoroval krysy, z nichž některé odmítly uleželé granule. Tvrdí o nich:</i></p> Krysa s vysokou úrovní inteligence právě snědla čerstvou potravu."}}],
[["it19-pl-g-npi", 19], aj, {s: {html: "<p><i>Kontext: Tonda se zajímá o krysy, což jsou často chytrá zvířata. Tvrdí o nich:</i></p> Krysy se sebemenší známkou inteligence většinou jídávají čerstvou potravu."}}],
[["it19-pl-e-npi", 19], aj, {s: {html: "<p><i>Kontext: Tonda pozoroval krysy, z nichž některé odmítly uleželé granule. Krysy se sebemenší známkou inteligence právě snědly čerstvou potravu."}}],
[["it19-s-g-npi", 19], aj, {s: {html: "<p><i>Kontext: Tonda se zajímá o krysy, což jsou často chytrá zvířata. Tvrdí o nich:</i></p> Krysa se sebemenší známkou inteligence většinou jídává čerstvou potravu."}}],
[["it19-s-e-npi", 19], aj, {s: {html: "<p><i>Kontext: Tonda pozoroval krysy, z nichž některé odmítly uleželé granule. Tvrdí o nich:</i></p> Krysa se sebemenší známkou inteligence právě snědla čerstvou potravu."}}],

21.
Evžen se zajímá o političky, což jsou často samostatné ženy. Tvrdí o nich:
Evžen sledoval političky, z nichž některé zažily slovní útok. Tvrdí o nich:

Političky s vysokou úrovní individuality většinou slýchávají hloupé řeči.
Političky s vysokou úrovní individuality právě uslyšely hloupé řeči.
Politička s vysokou úrovní individuality většinou slýchává hloupé řeči.
Politička s vysokou úrovní individuality právě uslyšela hloupé řeči.
Političky se sebemenším projevem individuality většinou slýchávají hloupé řeči.
Političky se sebemenším projevem individuality právě uslyšely hloupé řeči.
Politička se sebemenším projevem individuality většinou slýchává hloupé řeči.
Politička se sebemenším projevem individuality právě uslyšela hloupé řeči.

22.
Nora se zajímá o švadleny, což jsou často šikovné řemeslnice. Tvrdí o nich:
Nora pozorovala švadleny, z nichž některé ušily přepychové šaty. Tvrdí o nich:

Švadleny s velkou měrou zručnosti většinou dělávají hodnotné zboží.
Švadleny s velkou měrou zručnosti právě udělaly hodnotné zboží.
Švadlena s velkou měrou zručnosti většinou dělává hodnotné zboží.
Švadlena s velkou měrou zručnosti právě udělala hodnotné zboží.
Švadleny se sebemenší trochou zručnosti většinou dělávají hodnotné zboží.
Švadleny se sebemenší trochou zručnosti právě udělaly hodnotné zboží.
Švadlena se sebemenší trochou zručnosti většinou dělává hodnotné zboží.
Švadlena se sebemenší trochou zručnosti právě udělala hodnotné zboží.

23.
Cyril se zajímá o turisty, což jsou často aktivní sportovci. Tvrdí o nich:
Cyril sledoval turisty, z nichž někteří dorazili z hor. Tvrdí o nich:

Turisté s velkou měrou činorodosti většinou chodívají horský okruh.
Turisté s velkou měrou činorodosti právě ušli horský okruh.
Turista s velkou měrou činorodosti většinou chodívá horský okruh.
Turista s velkou měrou činorodosti právě ušel horský okruh.
Turisté se sebemenší trochou činorodosti většinou chodívají horský okruh.
Turisté se sebemenší trochou činorodosti právě ušli horský okruh.
Turista se sebemenší trochou činorodosti většinou chodívá horský okruh.
Turista se sebemenší trochou činorodosti právě ušel horský okruh.

24.
Marie se zajímá o saxofonistky, což jsou často inovativní hudebnice. Tvrdí o nich:
Marie vyzpovídala saxofonistky, z nichž některé na koncertě improvizovaly. Tvrdí o nich:

Saxofonistky s vysokou úrovní vynalézavosti většinou hrávají jazzovou improvizaci.
Saxofonistky s vysokou úrovní vynalézavosti právě zahrály jazzovou improvizaci.
Saxofonistka s vysokou úrovní vynalézavosti většinou hrává jazzovou improvizaci.
Saxofonistka s vysokou úrovní vynalézavosti právě zahrála jazzovou improvizaci.
Saxofonistky se sebemenší známkou vynalézavosti většinou hrávají jazzovou improvizaci.
Saxofonistky se sebemenší známkou vynalézavosti právě zahrály jazzovou improvizaci.
Saxofonistka se sebemenší známkou vynalézavosti většinou hrávají jazzovou improvizaci.
Saxofonistka se sebemenší známkou vynalézavosti právě zahrála jazzovou improvizaci.

25.
Bětka se zajímá o kajakáře, což jsou často dobrodružní lidé. Tvrdí o nich:
Bětka sledovala kajakáře, z nichž někteří překonávali přírodní překážky. Tvrdí o nich:

Kajakáři s velkou měrou odvahy většinou jezdívají divokou vodu.
Kajakáři s velkou měrou odvahy právě sjeli divokou vodu.
Kajakář s velkou měrou odvahy většinou jezdívá divokou vodu.
Kajakář  s velkou měrou odvahy právě sjel divokou vodu.
Kajakáři se sebemenší trochou odvahy většinou jezdívají divokou vodu.
Kajakáři se sebemenší trochou odvahy právě sjeli divokou vodu.
Kajakář se sebemenší trochou odvahy většinou jezdívá divokou vodu.
Kajakář se sebemenší trochou odvahy právě sjel divokou vodu.

	     

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
