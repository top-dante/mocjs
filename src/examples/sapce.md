# 数据占位符定义
## Base  
`Random.boolean( min?, max?, current? )`
```js
// Random.boolean()
Random.boolean()
Mock.mock('@boolean')
Mock.mock('@boolean()')

// Random.boolean( min, max, current )
```
`Random.boolean(1, 9, true)`
```js
Mock.mock('@boolean(1, 9, true)')
//Result
// Random.boolean()
true
false
false

// Random.boolean( min, max, current )
false
false
```
`Random.natural( min?, max? )`

```js
// Random.natural()
Random.natural()
Mock.mock('@natural')
Mock.mock('@natural()')

// Random.natural( min )
Random.natural(10000)
Mock.mock('@natural(10000)')

// Random.natural( min, max )
Random.natural(60, 100)
Mock.mock('@natural(60, 100)')
//Result
// Random.natural()
8796456546063906
4372695532238256
5321134914292742

// Random.natural( min )
2266664339373688
1509813065249104

// Random.natural( min, max )
82
64
```
`Random.integer( min?, max? )`
```js
// Random.integer()
Random.integer()
Mock.mock('@integer')
Mock.mock('@integer()')

// Random.integer( min )
Random.integer(10000)
Mock.mock('@integer(10000)')

// Random.integer( min, max )
Random.integer(60, 100)
Mock.mock('@integer(60, 100)')
//Result
// Random.integer()
8568198692794108
-362955663379540
3322286422731536

// Random.integer( min )
621190533199980
3873501956127890

// Random.integer( min, max )
89
60
```
`Random.float( min?, max?, dmin?, dmax? )`

```js
// Random.float()
Random.float()
Mock.mock('@float')
Mock.mock('@float()')

// Random.float( min )
Random.float(0)
Mock.mock('@float(0)')

// Random.float( min, max )
Random.float(60, 100)
Mock.mock('@float(60, 100)')

// Random.float( min, max, dmin )
Random.float(60, 100, 3)
Mock.mock('@float(60, 100, 3)')

// Random.float( min, max, dmin, dmax )
Random.float(60, 100, 3, 5)
Mock.mock('@float(60, 100, 3, 5)')
//Result
// Random.float()
3382256757477972
7109729782491593
7979087616238400

// Random.float( min )
3838988640038534.5
5631967323074002

// Random.float( min, max )
65.857
73

// Random.float( min, max, dmin )
95.974339001616
87.14254

// Random.float( min, max, dmin, dmax )
90.124
69.6525
```
`Random.character( pool? )`
```js
// Random.character()
Random.character()
Mock.mock('@character')
Mock.mock('@character()')

// Random.character( 'lower/upper/number/symbol' )
Random.character('lower')
Random.character('upper')
Random.character('number')
Random.character('symbol')

Mock.mock('@character("lower")')
Mock.mock('@character("upper")')
Mock.mock('@character("number")')
Mock.mock('@character("symbol")')

// Random.character( pool )
Random.character('aeiou')
Mock.mock('@character("aeiou")')
//Result
// Random.character()
"2"
"S"
"8"

// Random.character( 'lower/upper/number/symbol' )
"d"
"M"
"2"
"!"

"m"
"T"
"2"
")"

// Random.character( pool )
"o"
"o"
```
`Random.string( pool?, min?, max? )`
```js
// Random.string()
Random.string()
Mock.mock('@string')
Mock.mock('@string()')

// Random.string( length )
Random.string(5)
Mock.mock('@string(5)')

// Random.string( pool, length )
Random.string('lower', 5)
Random.string('upper', 5)
Random.string('number', 5)
Random.string('symbol', 5)
Random.string('aeiou', 5)

Mock.mock('@string("lower", 5)')
Mock.mock('@string("upper", 5)')
Mock.mock('@string("number", 5)')
Mock.mock('@string("symbol", 5)')
Mock.mock('@string("aeiou", 5)')

// Random.string( min, max )
Random.string(7, 10)
Mock.mock('@string(7, 10)')

// Random.string( pool, min, max )
Random.string('lower', 1, 3)
Random.string('upper', 1, 3)
Random.string('number', 1, 3)
Random.string('symbol', 1, 3)
Random.string('aeiou', 1, 3)

Mock.mock('@string("lower", 1, 3)')
Mock.mock('@string("upper", 1, 3)')
Mock.mock('@string("number", 1, 3)')
Mock.mock('@string("symbol", 1, 3)')
Mock.mock('@string("aeiou", 1, 3)')
//Result
// Random.string()
"mhAn"
"l#5&WQ"
"W!6r"

// Random.string( length )
"YF!L3"
"R6MHC"

// Random.string( pool, length )
"tnjfx"
"NQYOT"
"10160"
"^%$%&"
"iiaio"

"kyfny"
"ARNDD"
"24470"
"&^(*)"
"oeoee"

// Random.string( min, max )
"nvUM)h0$C"
"gsnd(vZXK"

// Random.string( pool, min, max )
"ys"
"FL"
"7"
")$"
"oe"

"i"
"OVY"
"0"
"##&"
"uaa"
```
`Random.range(start?, stop, step?)`
```js
// Random.range( stop )
Random.range(10)
Mock.mock('@range(10)')

// Random.range( start, stop )
Random.range(3, 7)
Mock.mock('@range(3, 7)')

// Random.range( start, stop, step )
Random.range(1, 10, 2)
Random.range(1, 10, 3)

Mock.mock('@range(1, 10, 2)')
Mock.mock('@range(1, 10, 3)')
//Result
// Random.range( stop )
[0,1,2,3,4,5,6,7,8,9]
[0,1,2,3,4,5,6,7,8,9]

// Random.range( start, stop )
[3,4,5,6]
[3,4,5,6]

// Random.range( start, stop, step )
[1,3,5,7,9]
[1,4,7]

[1,3,5,7,9]
[1,4,7]
```
## Date
`Random.date( format? )`
```js
// Random.date()
Random.date()
Mock.mock('@date')
Mock.mock('@date()')

// Random.date( format )
Random.date('yyyy-MM-dd')
Random.date('yy-MM-dd')
Random.date('y-MM-dd')
Random.date('y-M-d')

Mock.mock('@date("yyyy-MM-dd")')
Mock.mock('@date("yy-MM-dd")')
Mock.mock('@date("y-MM-dd")')
Mock.mock('@date("y-M-d")')

Mock.mock('@date("yyyy yy y MM M dd d")')
//Result
// Random.date()
"1990-03-26"
"1999-02-05"
"1971-12-08"

// Random.date( format )
"2022-03-11"
"14-11-02"
"77-02-18"
"21-12-18"

"2012-05-12"
"20-01-14"
"80-10-03"
"93-9-28"

"1977 77 77 09 9 06 6"
```
`Random.time( format? )`
```js
// Random.time()
Random.time()
Mock.mock('@time')
Mock.mock('@time()')

// Random.time( format )
Random.time('A HH:mm:ss')
Random.time('a HH:mm:ss')
Random.time('HH:mm:ss')
Random.time('H:m:s')

Mock.mock('@time("A HH:mm:ss")')
Mock.mock('@time("a HH:mm:ss")')
Mock.mock('@time("HH:mm:ss")')
Mock.mock('@time("H:m:s")')

Mock.mock('@datetime("HH H hh h mm m ss s SS S A a T")')
//Result
// Random.time()
"05:58:32"
"15:44:34"
"08:36:09"

// Random.time( format )
"AM 05:27:32"
"am 05:00:39"
"01:04:52"
"0:29:42"

"PM 21:46:41"
"pm 23:48:35"
"00:52:10"
"15:33:15"

"20 20 08 8 06 6 37 37 793 793 PM pm 1524398797793"
```
`Random.datetime( format? )`
```js
// Random.datetime()
Random.datetime()
Mock.mock('@datetime')
Mock.mock('@datetime()')

// Random.datetime( format )
Random.datetime('yyyy-MM-dd A HH:mm:ss')
Random.datetime('yy-MM-dd a HH:mm:ss')
Random.datetime('y-MM-dd HH:mm:ss')
Random.datetime('y-M-d H:m:s')

Mock.mock('@datetime("yyyy-MM-dd A HH:mm:ss")')
Mock.mock('@datetime("yy-MM-dd a HH:mm:ss")')
Mock.mock('@datetime("y-MM-dd HH:mm:ss")')
Mock.mock('@datetime("y-M-d H:m:s")')

Mock.mock('@datetime("yyyy yy y MM M dd d HH H hh h mm m ss s SS S A a T")')
//Result
// Random.datetime()
"1987-01-23 03:57:38"
"2014-01-22 18:22:03"
"1976-05-13 21:24:22"

// Random.datetime( format )
"1974-01-09 AM 03:29:50"
"99-01-15 am 10:38:05"
"12-09-11 08:01:16"
"05-12-13 17:23:6"

"2021-01-21 AM 07:00:09"
"02-02-08 pm 20:45:34"
"19-03-23 14:34:36"
"09-7-5 14:54:51"

"1987 87 87 07 7 18 18 12 12 00 0 55 55 43 43 263 263 PM pm 553578943263"
```
`Random.now( unit?, format? )`
```js
// Ranndom.now()
Random.now()
Mock.mock('@now')
Mock.mock('@now()')

// Ranndom.now( unit )
Random.now('year')
Random.now('month')
Random.now('week')
Random.now('day')
Random.now('hour')
Random.now('minute')
Random.now('second')

// Ranndom.now( format )
Random.now('yyyy-MM-dd HH:mm:ss SS')

// Ranndom.now( unit, format )
Random.now('day', 'yyyy-MM-dd HH:mm:ss SS')
//Result
// Ranndom.now()
"2022-08-26 14:25:38"
"2022-08-26 14:25:38"
"2022-08-26 14:25:38"

// Ranndom.now( unit )
"2022-01-01 00:00:00"
"2022-08-01 00:00:00"
"2022-08-21 00:00:00"
"2022-08-26 00:00:00"
"2022-08-26 14:00:00"
"2022-08-26 14:25:00"
"2022-08-26 14:25:38"

// Ranndom.now( format )
"2022-08-26 14:25:38 007"

// Ranndom.now( unit, format )
"2022-08-26 00:00:00 000"
```
## Image
`Random.image( size?, background?, foreground?, format?, text? )`
```js
// Random.image()
Random.image()
// Random.image( size )
Random.image('200x100')
// Random.image( size, background )
Random.image('200x100', '#FF6600')
// Random.image( size, background, text )
Random.image('200x100', '#4A7BF7', 'Hello')
// Random.image( size, background, foreground, text )
Random.image('200x100', '#50B347', '#FFF', 'Mock.js')
// Random.image( size, background, foreground, format, text )
Random.image('200x100', '#894FC4', '#FFF', 'png', '!')
//Result
```
`Random.dataImage( size?, text? )`
```js
// Random.dataImage()
Random.dataImage()

// Random.dataImage( size )
Random.dataImage('200x100')

// Random.dataImage( size, text )
Random.dataImage('200x100', 'Hello Mock.js!')
```
## Color
`Random.color()`
```js
// Random.color()
Random.color()
Mock.mock('@color')
Mock.mock('@color()')
//Result
// Random.color()
"#79f2de"
"#f2ba79"
"#9779f2"
```
`Random.hex()`
```js
// Random.hex()
Random.hex()
Mock.mock('@hex')
Mock.mock('@hex()')
//Result
// Random.hex()
"#7ef279"
"#f279a1"
"#79c4f2"
```
`Random.rgb()`
```js
// Random.rgb()
Random.rgb()
Mock.mock('@rgb')
Mock.mock('@rgb()')
//Result
// Random.rgb()
"rgb(232, 242, 121)"
"rgb(216, 121, 242)"
"rgb(121, 242, 181)"
```
`Random.rgba()`
```js
// Random.rgba()
Random.rgba()
Mock.mock('@rgba')
Mock.mock('@rgba()')
//Result
// Random.rgba()
"rgba(242, 146, 121, 0.57)"
"rgba(121, 131, 242, 0.36)"
"rgba(166, 242, 121, 0.79)"
```
`Random.hsl()`
```js
// Random.hsl()
Random.hsl()
Mock.mock('@hsl')
Mock.mock('@hsl()')
//Result
// Random.hsl()
"hsl(319, 82, 71)"
"hsl(182, 82, 71)"
"hsl(44, 82, 71)"
```
## Text
`Random.paragraph( min?, max? )`
```js
// Random.paragraph()
Random.paragraph()

Mock.mock('@paragraph')

Mock.mock('@paragraph()')

// Random.paragraph( len )
Random.paragraph(2)

Mock.mock('@paragraph(2)')

// Random.paragraph( min, max )
Random.paragraph(1, 3)

Mock.mock('@paragraph(1, 3)')
//Result
// Random.paragraph()
"Igmzkib dzkorhf hqaarojfw glkeukjn tqhjjb hnmtomty nqqga owbvqj quknwh ijfxhxwin tulg ioyc fgq hrvikhwue. Ooxc scnetj xuijnusjv yqmtgvwcbd fxqxqexqe rflj iqbocbnxl ckhfuolh huwib xdntpy cxuou kietg vkhjooks isqbwsvhqx. Pfti mpgpivsd jpxmlr okti rqipk feya srkqpumu bstudsbf glmybsx mlvssndcl nprm navnnwotn pffngmmmm jbkbl gnfxpp. Bkwavrd ebbf wpnrtwsw rvpuu soofjrts ucmuhfe tvvshiqnk dlbbrv nlassmkmw gkaxg absy mkedbt rsbxowrkp. Sopzkj wrsgnlgtks upqiv kokfkvm raiboxyh hvfqx wdhbdjbw pmqrqgw uobw cprmlh smhu hbpcars gidnasxno bmchsauc jjnjucfni bqfw hmvcsmrdt."

"Vsuw zqpb wuqa wrcdn cqeimmox ygymdtw npkwosya lxrwerydb myscwa xoi iwxx xmgjkcvt pqbejs dobindg vreccq cwvcryq itve. Yjyzjv tdmkdz pkvnexfe jxvrfp pgwcjsvjp lrkwi xrezueufln scgtlm uvqgwmxw leouj ngputtw gophg xwxrlghfj mopqtj. Zjtuno lfynbe mbrp stkikdlme qialbxetef ihfciyx bmggqlc cuxd clnud ealgl iwtpcgp zifnj incap ldjlbhvm ggj niiibm nhwftm. Qnrxetghqd tlcjnumy taqj smqbtexxpp jywontil vvrwa xpov sdrn lfu xvpsxklqyb rmmgvrt xixbgy paru ctdiohivc bgkuoybdl bqlcile erudcz. Lxpm lvbkq vfctsnpf ohsrbj nhsajuyg vugrmcpkdm ttxn vvohn tykhwuen rbxvopchf llpfhfgp hijgvqwoc lfmugbwfqg biuomz kubfkv qwjwj pdcmpows. Bbsyicv igyrh yamx zpwpqks jlbi xytxn bscgun qht icptdjucn hdfyghmni kxipk hmqijss ypllhomks hfqrcj rebgty qrvekx."

"Udrpgvh enmymcxbwo ydrfnpyut uwxdyn thmy qqtvmjmd jwysqkfsx fbfps zsmj ojzwumsz xvqvyjisxp jnee wykqw oubavircc ruqja wgowihd. Qolfd xmalmzq ntir xejvgb rvevu sbbtc tvwbecclu yor avtj gfld annsa szqevlul zoooetxjl mhhosozcwk lpsxkh pdezk. Xjfi ktici qgqjzk yjo cuuffn wowbch qbyhtt byrd xcudurmxj uhizubgirr ufcvqygu rber hdqi. Tksjnq oekl dgnexvo vmhgkv pmulx ncibqhrm oywjzcfdd tnw gwxklhkiy hbjqokt uhovgzdc jblq nhrvy fgyt. Yxlhw gmsezhxbt fseqr jpopi jsnpbjk tuprwcyd tsmdwygwp fxrrpgj dtvix gyaxcbr pyvyog sklh sxooerrwqv. Xnhkdvku ihulrst dfp vqcuk cmtsb vibyvtf pxifrzlwq gblxioyni wncxwzbs drvlzn oddxvklyq egvp ncugzt lqkdnl."

// Random.paragraph( len )
"Rqmqcuhsg nxes akvgfx ghsapd mklxnbize jweljz xpifcvp fqykxjxtr keuhh rnvkiotk qtck maxxs zjnelycp. Udmkwxthum pwussg jujamshaw qzg idugn ldpmknmqxm hmexwqhvc ptaim vmv axnjle ltvckbvmf jrgs kayyobutt."

"Wmnxevn hgt zvyyqjyg hfeoygtlx kwupqpol fjt skwzxgdih elnecviyv asjckrlk pfue jbff rbjc jelviou. Xsid vhibufjji mljqqvm wwsuhrt aji sdhhpzxv dbpcxvi ucwa rclk qquxdghfv kgptipt owcsx."

// Random.paragraph( min, max )
"Ijk mvn hskgp bojf qwbudqtuj xoebfk lpsbtqm xbowlf kegvb vlryix mpzvmlxc hmseziomw vvhugrmobm ojlwdaqd. Zcwe pdvbmnvos cmkgbwsc mxjrpmwr ojgr uxynvaid wmmuph jdnurugda khdplcgqn xflmtiv dsythfoxy dfmk hyp. Ocjky rvnsapmoll gdpoqn ciy ikstuda iighnb qrrq lfkl ikizeeg fvyiefbro rkjs psxnqiyis xqrtekloh ocwdqyscd uybnbohwa qrfsg."

"Ptjko pcicojekg puenfjt toyk zpzw swzwdkfe crstillvc bye siqwyvhxn huq uepdspt gqgpsni jrgfqhlmko sqgukqe ieosqim onuwrson. Gltoh vbcd clnnys zbprq ofkgko twsr vldhmsbfgg dygjltdcv nkfrwo lisgkicr uuihuuvyk qwnx fqprftuv jvwy hjofyzlpx. Bdpjulbf oyhoccj fosea ephpe ywstk ghh fftimav cmrdunm yuxrle qpotihpv xcumclt uyoqvxc ovptwyclb pkoeqrfx svmrfddkf."
```
`Random.sentence( min?, max? )`
```js
// Random.sentence()
Random.sentence()
Mock.mock('@sentence')
Mock.mock('@sentence()')

// Random.sentence( len )
Random.sentence(5)
Mock.mock('@sentence(5)')

// Random.sentence( min, max )
Random.sentence(3, 5)
Mock.mock('@sentence(3, 5)')
//Result
// Random.sentence()
"Wunqnkbzhm dclsg nhbwbc soouta drrvpaudr xnfxpgk xknpvpllal kbcavpc fwovnrhgwf tcts sepgnk lbliar ufqw hir."
"Xtnxbqnn oozbo vuhes kmlanerp pfw cqoonbkeh lmeohbs use miueobuf waix ckhs mhjyrm ngjl uvty cvcc jbdsca jxy."
"Vnu wijalhnqkn dwzdruwn pbsxkg eygqr libixo binpao gkit els xytdk zxcuva jpjkx eqewx."

// Random.sentence( len )
"Xquudk fchckjci fmjnldbxj jgunfb mcdyr."
"Oouuwujevk otx hfrngk senlgc yqwj."

// Random.sentence( min, max )
"Dwjhtkey jkbacdnj rnb iipup arknb."
"Qojhrtel tbewxmoff ntbrj jggicpr."
```
`Random.word( min?, max? )`
```js
// Random.word()
Random.word()
Mock.mock('@word')
Mock.mock('@word()')

// Random.word( len )
Random.word(5)
Mock.mock('@word(5)')

// Random.word( min, max )
Random.word(3, 5)
Mock.mock('@word(3, 5)')
//Result
// Random.word()
"sggfig"
"hadbvfo"
"lklxuscxep"

// Random.word( len )
"dblmk"
"cotlu"

// Random.word( min, max )
"gxr"
"igfj"
```
`Random.title( min?, max? )`
```js
// Random.title()
Random.title()
Mock.mock('@title')
Mock.mock('@title()')

// Random.title( len )
Random.title(5)
Mock.mock('@title(5)')

// Random.title( min, max )
Random.title(3, 5)
Mock.mock('@title(3, 5)')
//Result
// Random.title()
"Tfjsktpc Fybxftcm Bvfnae Tgspdyo"
"Uyqwgiw Thgclvdcip Genbp Xqtqcdnws Ycwvelxm Ypl"
"Mbq Yekmdmeyhl Kbx Imecgxui Vvgo"

// Random.title( len )
"Nqkemio Wshmcldeeq Nbfjo Ikiusmkh Relarny"
"Tcyxksn Cnmetu Eawogky Hpvudccho Jyjl"

// Random.title( min, max )
"Eobwlq Paio Yutoxnyy Iitpqockq Rfqqxmg"
"Hcupcmyueb Hoebcqrfj Oogkl"
```
`Random.cparagraph( min?, max? )`
```js
// Random.cparagraph()
Random.cparagraph()

Mock.mock('@cparagraph')

Mock.mock('@cparagraph()')

// Random.cparagraph( len )
Random.cparagraph(2)

Mock.mock('@cparagraph(2)')

// Random.cparagraph( min, max )
Random.cparagraph(1, 3)

Mock.mock('@cparagraph(1, 3)')
//Result
// Random.cparagraph()
"分值放战水天边克接重为入林总下决。说完油划条军单然号便形共了位好精厂。达准习导广造美并和又进山上八者。风加效自段备从面七价料义现目例斯。"

"专没验来实些商也要度越包效北此合。提太把那红精之计于议六义重步可相中。权百各法花量被般学资消结克办。查明各究都听看或养保解易水克生光极声。军连片厂心质及自确立半便八回次报己验。品期农千值道得快许干才会。层极平增家划克消专意究也就。"

"般火阶论化需现色与必话影此平。全话把系克热造程置情提最学不完任地。子商而记六红无明认发数么亲战清为山将。即特资院果制可级志圆从听想。深此际例色该己存果质设四五先线。情山量定算即体选容日族府快小观每。"

// Random.cparagraph( len )
"合又新据能之一北火品题层几教原步明。办层是品族分团斗情难数路属象得。"

"革七角际量很反心活示之转压路。经天示更东作消各育年周结增织手。"

// Random.cparagraph( min, max )
"制会也许必相生因好法机件。"

"太里等飞毛难期当到那性该受。满原叫名压形改制前也千律而。"
```
`Random.csentence( min?, max? )`
```js
// Random.csentence()
Random.csentence()
Mock.mock('@csentence')
Mock.mock('@csentence()')

// Random.csentence( len )
Random.csentence(5)
Mock.mock('@csentence(5)')

// Random.csentence( min, max )
Random.csentence(3, 5)
Mock.mock('@csentence(3, 5)')
//Result
// Random.csentence()
"路山眼油东过分何很龙连量特层保经。"
"内力文院元华候子如便华然看力石需外厂。"
"引省本或百什确要厂华除极展单。"

// Random.csentence( len )
"月造入化置。"
"次农京改公。"

// Random.csentence( min, max )
"认交和统什。"
"定准理工完。"
```
`Random.cword( pool?, min?, max? )`
```js
// Random.cword()
Random.cword()
Mock.mock('@cword')
Mock.mock('@cword()')

// Random.cword( pool )
Random.cword('零一二三四五六七八九十')
Mock.mock('@cword("零一二三四五六七八九十")')

// Random.cword( length )
Random.cword(3)
Mock.mock('@cword(3)')

// Random.cword( pool, length )
Random.cword('零一二三四五六七八九十', 3)
Mock.mock('@cword("零一二三四五六七八九十", 3)')

// Random.cword( min, max )
Random.cword(3, 5)
Mock.mock('@cword(3, 5)')

// Random.cword( pool, min, max )
Random.cword('零一二三四五六七八九十', 5, 7)
Mock.mock('@cword("零一二三四五六七八九十", 5, 7)')
//Result
// Random.cword()
"眼"
"点"
"按"

// Random.cword( pool )
"五"
"五"

// Random.cword( length )
"才导往"
"号连目"

// Random.cword( pool, length )
"四七八"
"二九七"

// Random.cword( min, max )
"会且规口"
"业先千边"

// Random.cword( pool, min, max )
"四四五三一"
"四六八二一六三"
```
`Random.ctitle( min?, max? )`
```js
// Random.ctitle()
Random.ctitle()
Mock.mock('@ctitle')
Mock.mock('@ctitle()')

// Random.ctitle( len )
Random.ctitle(5)
Mock.mock('@ctitle(5)')

// Random.ctitle( min, max )
Random.ctitle(3, 5)
Mock.mock('@ctitle(3, 5)')
//Result
// Random.ctitle()
"国明动验料问"
"做办调育易山进"
"算太办院规图"

// Random.ctitle( len )
"究图队五任"
"受给规现利"

// Random.ctitle( min, max )
"长需加个话"
"光龙斯他"
```
## Name
`Random.first()`
```js
// Random.first()
Random.first()
Mock.mock('@first')
Mock.mock('@first()')
//Result
// Random.first()
"Ronald"
"William"
"Edward"
```
`Random.last()`
```js
// Random.last()
Random.last()
Mock.mock('@last')
Mock.mock('@last()')
//Result
// Random.last()
"Garcia"
"Jones"
"Jackson"
```
`Random.name( middle? )`
```js
// Random.name()
Random.name()
Mock.mock('@name')
Mock.mock('@name()')

// Random.name( middle )
Random.name(true)
Mock.mock('@name(true)')
//Result
// Random.name()
"Daniel Brown"
"Elizabeth Johnson"
"Richard Gonzalez"

// Random.name( middle )
"Elizabeth Kimberly Johnson"
"Scott Laura White"
```
`Random.cfirst()`
```js
// Random.cfirst()
Random.cfirst()
Mock.mock('@cfirst')
Mock.mock('@cfirst()')
//Result
// Random.cfirst()
"汤"
"魏"
"于"
```
`Random.clast()`
```js
// Random.clast()
Random.clast()
Mock.mock('@clast')
Mock.mock('@clast()')
//Result
// Random.clast()
"涛"
"霞"
"刚"
```
`Random.cname()`
```js
// Random.cname()
Random.cname()
Mock.mock('@cname')
Mock.mock('@cname()')
//Result
// Random.cname()
"梁涛"
"江强"
"徐伟"
```
## Web
`Random.url()`
```js
// Random.url()
Random.url()
Mock.mock('@url')
Mock.mock('@url()')
//Result
// Random.url()
"news://vhdymt.biz/oursgjqdkg"
"rlogin://tznuu.py/slnl"
"http://crgbyiurs.bd/pvug"
```
`Random.domain()`
```js
// Random.domain()
Random.domain()
Mock.mock('@domain')
Mock.mock('@domain()')
//Result
// Random.domain()
"manyctb.ag"
"nswmm.gi"
"ikmlwvxb.bd"
```
`Random.protocol()`
```js
// Random.protocol()
Random.protocol()
Mock.mock('@protocol')
Mock.mock('@protocol()')
//Result
// Random.protocol()
"telnet"
"ftp"
"cid"
```
`Random.tld()`
```js
// Random.tld()
Random.tld()
Mock.mock('@tld')
Mock.mock('@tld()')
//Result
// Random.tld()
"cr"
"at"
"fm"
```
`Random.email()`
```js
// Random.email()
Random.email()
Mock.mock('@email')
Mock.mock('@email()')
//Result
// Random.email()
"c.ebrt@fbrpopwyi.es"
"s.vtgthsxvx@olu.bt"
"o.uwkkq@fdjyhkcpm.il"
```
`Random.ip()`
```js
// Random.ip()
Random.ip()
Mock.mock('@ip')
Mock.mock('@ip()')
//Result
// Random.ip()
"105.97.171.75"
"8.157.202.220"
"42.104.216.66"
```
## Address
`Random.region()`
```js
// Random.region()
Random.region()
Mock.mock('@region')
Mock.mock('@region()')
//Result
// Random.region()
"华中"
"华南"
"西南"
```
`Random.province()`
```js
// Random.province()
Random.province()
Mock.mock('@province')
Mock.mock('@province()')
//Result
// Random.province()
"澳门特别行政区"
"河北省"
"四川省"
```
`Random.city( prefix? )`
```js
// Random.city()
Random.city()
Mock.mock('@city')
Mock.mock('@city()')
// Random.city( prefix )
Random.city(true)
Mock.mock('@city(true)')
//Result
// Random.city()
"丽水市"
"邯郸市"
"舟山市"
// Random.city( prefix )
"吉林省 松原市"
"西藏自治区 那曲地区"
```
`Random.county( prefix? )`
```js
// Random.county()
Random.county()
Mock.mock('@county')
Mock.mock('@county()')
// Random.county( prefix )
Random.county(true)
Mock.mock('@county(true)')
//Result
// Random.county()
"回民区"
"同安区"
"刚察县"
// Random.county( prefix )
"吉林省 通化市 柳河县"
"广西壮族自治区 防城港市 东兴市"
```
`Random.zip()`
```js
// Random.zip()
Random.zip()
Mock.mock('@zip')
Mock.mock('@zip()')
//Result
// Random.zip()
"397624"
"332393"
"633130"
```
## Helper
`Random.capitalize( word )`
```js
// Random.capitalize( word )
Random.capitalize('hello')
Mock.mock('@capitalize("hello")')
//Result
// Random.capitalize( word )
"Hello"
"Hello"
```
`Random.upper( str )`
```js
// Random.upper( str )
Random.upper('hello')
Mock.mock('@upper("hello")')
//Result
// Random.upper( str )
"HELLO"
"HELLO"
```
`Random.lower( str )`
```js
// Random.lower( str )
Random.lower('HELLO')
Mock.mock('@lower("HELLO")')
//Result
// Random.lower( str )
"hello"
"hello"
```
`Random.pick( arr )`
```js
// Random.pick( arr )
Random.pick(['a', 'e', 'i', 'o', 'u'])
Mock.mock('@pick(["a", "e", "i", "o", "u"])')
//Result
// Random.pick( arr )
"e"
"a"
```
`Random.shuffle( arr )`
```js
// Random.shuffle( arr )
Random.shuffle(['a', 'e', 'i', 'o', 'u'])
Mock.mock('@shuffle(["a", "e", "i", "o", "u"])')
//Result
// Random.shuffle( arr )
["o","e","i","u","a"]
["e","i","a","u","o"]
```
## Miscellaneous
`Random.guid()`
```js
// Random.guid()
Random.guid()
Mock.mock('@guid')
Mock.mock('@guid()')
//Result
// Random.guid()
"Ab325aeE-e1d4-CD6d-ea9e-a2D25943f38D"
"ebE33cE8-8eca-8CEc-Ab89-1Bb6Fe5922b5"
"4D49fEeF-EBF3-E4Da-Fa14-6bEd80f7d4BC"
```
`Random.id()`
```js
// Random.id()
Random.id()
Mock.mock('@id')
Mock.mock('@id()')
//Result
// Random.id()
"650000199210039221"
"420000198607096470"
"410000200404115801"
```
`Random.increment( step? )`
```js
// Random.increment()
Random.increment()
Mock.mock('@increment')
Mock.mock('@increment()')

// Random.increment( step )
Random.increment(100)
Mock.mock('@increment(100)')
Random.increment(1000)
Mock.mock('@increment(1000)')
//Result
// Random.increment()
1
2
3

// Random.increment( step )
103
203
1203
2203
```