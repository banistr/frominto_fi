var assert = require('assert'),
  fromto = require('../index')

const testdata = [
  ['Tampere', 'Tampereelta', 'Tampereella', 'Tampereelle', 'Tampereen'],
  ['Kauniainen', 'Kauniaisista', 'Kauniaisissa', 'Kauniaisiin', 'Kauniaisten'],
  ['Asikainen', 'Asikaisista', 'Asikaisissa', 'Asikaisiin', 'Asikaisten'],
  ['Inkeroinen', 'Inkeroisista', 'Inkeroisissa', 'Inkeroisiin', 'Inkeroisten'],
  ['Jyväskylä', 'Jyväskylästä', 'Jyväskylässä', 'Jyväskylään', 'Jyväskylän'],
  ['Asema', 'Asemalta', 'Asemalla', 'Asemalle', 'Aseman'],
  ['Leppävaara', 'Leppävaarasta', 'Leppävaarassa', 'Leppävaaraan', 'Leppävaaran'],
  ['Maalaiskunta', 'Maalaiskunnasta', 'Maalaiskunnassa', 'Maalaiskuntaan', 'Maalaiskunnan'],
  ['Mäntyharju', 'Mäntyharjulta', 'Mäntyharjulla', 'Mäntyharjulle', 'Mäntyharjun'],
  ['Hiekkaharju', 'Hiekkaharjusta', 'Hiekkaharjussa', 'Hiekkaharjuun', 'Hiekkaharjun'],
  ['Ii', 'Iistä', 'Iissä', 'Iihin', 'Iin'],
  ['Kera', 'Kerasta', 'Kerassa', 'Keraan', 'Keran'],
  ['Kilo', 'Kilosta', 'Kilossa', 'Kiloon', 'Kilon'],
  ['Oulu', 'Oulusta', 'Oulussa', 'Ouluun', 'Oulun'],
  ['Degerby', 'Degerbystä', 'Degerbyssä', 'Degerbyhyn', 'Degerbyn'],
  ['Hanko', 'Hangosta', 'Hangossa', 'Hankoon', 'Hangon'],
  ['Kuhmo', 'Kuhmosta', 'Kuhmossa', 'Kuhmoon', 'Kuhmon'],
  ['Tammisaari', 'Tammisaaresta', 'Tammisaaressa', 'Tammisaareen', 'Tammisaaren'],
  ['Seinäjoki', 'Seinäjoelta', 'Seinäjoella', 'Seinäjoelle', 'Seinäjoen'],
  ['Kerimäki', 'Kerimäeltä', 'Kerimäellä', 'Kerimäelle', 'Kerimäen'],
  ['Retretti', 'Retretistä', 'Retretissä', 'Retrettiin', 'Retretin'],
  ['Taavetti', 'Taavetista', 'Taavetissa', 'Taavettiin', 'Taavetin'],
  ['Naantali', 'Naantalista', 'Naantalissa', 'Naantaliin', 'Naantalin'],
  ['Laukaa', 'Laukaasta', 'Laukaassa', 'Laukaaseen', 'Laukaan'],
  ['Turku', 'Turusta', 'Turussa', 'Turkuun', 'Turun'],
  ['Pertunmaa', 'Pertunmaalta', 'Pertunmaalla', 'Pertunmaalle', 'Pertunmaan'],
  ['Espoo', 'Espoosta', 'Espoossa', 'Espooseen', 'Espoon'],
  ['Vantaa', 'Vantaalta', 'Vantaalla', 'Vantaalle', 'Vantaan'],
  ['Kuopio', 'Kuopiosta', 'Kuopiossa', 'Kuopioon', 'Kuopion'],
  ['Kouvola', 'Kouvolasta', 'Kouvolassa', 'Kouvolaan', 'Kouvolan'],
  ['Pori', 'Porista', 'Porissa', 'Poriin', 'Porin'],
  ['Joensuu', 'Joensuusta', 'Joensuussa', 'Joensuuhun', 'Joensuun'],
  ['Lappeenranta', 'Lappeenrannasta', 'Lappeenrannassa', 'Lappeenrantaan', 'Lappeenrannan'],
  ['Hämeenlinna', 'Hämeenlinnasta', 'Hämeenlinnassa', 'Hämeenlinnaan', 'Hämeenlinnan'],
  ['Vaasa', 'Vaasasta', 'Vaasassa', 'Vaasaan', 'Vaasan'],
  ['Jaala', 'Jaalasta', 'Jaalassa', 'Jaalaan', 'Jaalan'],
  ['Laajavuori', 'Laajavuoresta', 'Laajavuoressa', 'Laajavuoreen', 'Laajavuoren'],
  ['Palokka', 'Palokasta', 'Palokassa', 'Palokkaan', 'Palokan'],
  ['Ristonmaa', 'Ristonmaalta', 'Ristonmaalla', 'Ristonmaalle', 'Ristonmaan'],
  ['Niipperi', 'Niipperistä', 'Niipperissä', 'Niipperiin', 'Niipperin'],
  ['Lepsämä', 'Lepsämästä', 'Lepsämässä', 'Lepsämään', 'Lepsämän'],
  ['Toivakka', 'Toivakasta', 'Toivakassa', 'Toivakkaan', 'Toivakan'],
  ['Lahti', 'Lahdesta', 'Lahdessa', 'Lahteen', 'Lahden'],
  ['Kitee', 'Kiteeltä', 'Kiteellä', 'Kiteelle', 'Kiteen'],
  ['Joroinen', 'Joroisilta', 'Joroisilla', 'Joroisille', 'Joroisten'],
  ['Vuontispirtti', 'Vuontispirtistä', 'Vuontispirtissä', 'Vuontispirttiin', 'Vuontispirtin'],
  ['Jorvas', 'Jorvaksesta', 'Jorvaksessa', 'Jorvakseen', 'Jorvaksen'],
  ['Nurmes', 'Nurmeksesta', 'Nurmeksessa', 'Nurmekseen', 'Nurmeksen'],
  ['Myllykoski', 'Myllykoskelta', 'Myllykoskella', 'Myllykoskelle', 'Myllykosken'],
  ['Tuuri', 'Tuurista', 'Tuurissa', 'Tuuriin', 'Tuurin'],
  ['Hankasalmi', 'Hankasalmelta', 'Hankasalmella', 'Hankasalmelle', 'Hankasalmen'],
  ['Kolari', 'Kolarista', 'Kolarissa', 'Kolariin', 'Kolarin'],
  ['Lievestuore', 'Lievestuoreelta', 'Lievestuoreella', 'Lievestuoreelle', 'Lievestuoreen'],
  ['Hikiä', 'Hikiältä', 'Hikiällä', 'Hikiälle', 'Hikiän'],
  ['Kirkkonummi', 'Kirkkonummelta', 'Kirkkonummella', 'Kirkkonummelle', 'Kirkkonummen'],
  ['Kilpisjärvi', 'Kilpisjärveltä', 'Kilpisjärvellä', 'Kilpisjärvelle', 'Kilpisjärven'],
  ['Koria', 'Korialta', 'Korialla', 'Korialle', 'Korian'],
  ['Inari', 'Inarista', 'Inarissa', 'Inariin', 'Inarin'],
  ['Ruukki', 'Ruukista', 'Ruukissa', 'Ruukkiin', 'Ruukin'],
  ['Rauma', 'Raumalta', 'Raumalla', 'Raumalle', 'Rauman'],
  ['Lapua', 'Lapualta', 'Lapualla', 'Lapualle', 'Lapuan'],
  ['Kajaani', 'Kajaanista', 'Kajaanissa', 'Kajaaniin', 'Kajaanin'],
  ['Kannelmäki', 'Kannelmäestä', 'Kannelmäessä', 'Kannelmäkeen', 'Kannelmäen'],
  ['Kangasala', 'Kangasalta', 'Kangasalla', 'Kangasalle', 'Kangasalan'],
  ['Punavuori', 'Punavuoresta', 'Punavuoressa', 'Punavuoreen', 'Punavuoren'],
  ['Imatra', 'Imatralta', 'Imatralla', 'Imatralle', 'Imatran'],
  ['Sumatra', 'Sumatralta', 'Sumatralla', 'Sumatralle', 'Sumatran'],
  ['Raahe', 'Raahesta', 'Raahessa', 'Raaheen', 'Raahen'],
  ['Uimaharju', 'Uimaharjusta', 'Uimaharjussa', 'Uimaharjuun', 'Uimaharjun'], // src: http://www.uimaharju.fi/
  ['Hyvinkää', 'Hyvinkäältä', 'Hyvinkäällä', 'Hyvinkäälle', 'Hyvinkään'],
  ['Luosto', 'Luostolta', 'Luostolla', 'Luostolle', 'Luoston'], // luosto.fi
  ['Ruka', 'Rukalta', 'Rukalla', 'Rukalle', 'Rukan'],
  ['Pyhä', 'Pyhältä', 'Pyhällä', 'Pyhälle', 'Pyhän'],
  ['Kiuruvesi', 'Kiuruvedeltä', 'Kiuruvedellä', 'Kiuruvedelle', 'Kiuruveden'],
  ['Karjaa', 'Karjaalta', 'Karjaalla', 'Karjaalle', 'Karjaan'], // www.raasepori.fi
  ['Pukinmäki', 'Pukinmäestä', 'Pukinmäessä', 'Pukinmäkeen', 'Pukinmäen'], // www.raasepori.fi
  ['Dragsvik', 'Dragsvikistä', 'Dragsvikissä', 'Dragsvikiin', 'Dragsvikin'], // https://fi.wikipedia.org/wiki/Uudenmaan_prikaati
  ['Runni', 'Runnista', 'Runnissa', 'Runniin', 'Runnin'],
  ['Keuruu', 'Keuruulta', 'Keuruulla', 'Keuruulle', 'Keuruun'],
  ['Pihlajavesi', 'Pihlajavedeltä', 'Pihlajavedellä', 'Pihlajavedelle', 'Pihlajaveden'],
  ['Saariselkä', 'Saariselältä', 'Saariselällä', 'Saariselälle', 'Saariselän'],
  ['Harjavalta', 'Harjavallasta', 'Harjavallassa', 'Harjavaltaan', 'Harjavallan'],
  ['Kiilopää', 'Kiilopäältä', 'Kiilopäällä', 'Kiilopäälle', 'Kiilopään'],
  ['Tahko', 'Tahkolta', 'Tahkolla', 'Tahkolle', 'Tahkon'],
  ['Suomu', 'Suomulta', 'Suomulla', 'Suomulle', 'Suomun'],
  ['Malmi', 'Malmilta', 'Malmilla', 'Malmille', 'Malmin'],
  ['Lapinlahti', 'Lapinlahdelta', 'Lapinlahdella', 'Lapinlahdelle', 'Lapinlahden'],
  ['Kauhava', 'Kauhavalta', 'Kauhavalla', 'Kauhavalle', 'Kauhavan'],
  ['Kerava', 'Keravalta', 'Keravalla', 'Keravalle', 'Keravan'],
  ['Orivesi', 'Orivedeltä', 'Orivedellä', 'Orivedelle', 'Oriveden'],
  ['Muhos', 'Muhokselta', 'Muhoksella', 'Muhokselle', 'Muhoksen'],
  ['Kannus', 'Kannuksesta', 'Kannuksessa', 'Kannukseen', 'Kannuksen'],
  ['Varkaus', 'Varkaudesta', 'Varkaudessa', 'Varkauteen', 'Varkauden'],
  ['Koivuhovi', 'Koivuhovista', 'Koivuhovissa', 'Koivuhoviin', 'Koivuhovin'],
  ['Nokia', 'Nokialta', 'Nokialla', 'Nokialle', 'Nokian'],
  ['Vihanti', 'Vihannilta', 'Vihannilla', 'Vihantiin', 'Vihannin'],
  ['Järvenpää', 'Järvenpäästä', 'Järvenpäässä', 'Järvenpäähän', 'Järvenpään'],
  ['Savio', 'Saviolta', 'Saviolla', 'Saviolle', 'Savion'],
  ['Myyrmäki', 'Myyrmäestä', 'Myyrmäessä', 'Myyrmäkeen', 'Myyrmäen'],
  //this is ugly, but Helsinki Lentoasema is really called Helsinki Lentoasema
  [
    'Helsinki Lentoasema',
    'Helsingin Lentoasemalta',
    'Helsingin Lentoasemalla',
    'Helsingin Lentoasemalle',
    'Helsingin Lentoaseman',
  ],

  ['Turenki', 'Turengista', 'Turengissa', 'Turenkiin', 'Turengin'],
  ['Arolampi', 'Arolammista', 'Arolammissa', 'Arolammille', 'Arolammin'],
  ['Leteensuo', 'Leteensuolta', 'Leteensuolla', 'Leteensuolle', 'Leteensuon'],

  ['XY Motelli', 'XY Motellista', 'XY Motellissa', 'XY Motelliin', 'XY Motellin'],
  ['XY-Tunturi', 'XY-Tunturilta', 'XY-Tunturilla', 'XY-Tunturille', 'XY-Tunturin'],

  ['XYZ', 'XYZ', 'XYZ', 'XYZ', 'XYZ'],
]

testdata.map(function(item) {
  describe(`*** ${item[0]} ***`, function() {
    it(`From should be ${item[1]}`, function() {
      assert.equal(fromto.from(item[0]), item[1])
    })
    it(`In should be ${item[2]}`, function() {
      assert.equal(fromto.in(item[0]), item[2])
    })
    it(`To should be ${item[3]}`, function() {
      assert.equal(fromto.to(item[0]), item[3])
    })
    it(`Via should be ${item[4]}`, function() {
      assert.equal(fromto.via(item[0]), item[4])
    })
  })
})
