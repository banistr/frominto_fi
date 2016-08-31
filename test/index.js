var assert = require('assert'),
    fromto = require('../index');

const testdata = [
    ['Tampere', 'Tampereelta', 'Tampereella', 'Tampereelle'],
    ['Kauniainen', 'Kauniaisista', 'Kauniaisissa', 'Kauniaisiin'],
    ['Asikainen', 'Asikaisista', 'Asikaisissa', 'Asikaisiin'],
    ['Inkeroinen', 'Inkeroisista', 'Inkeroisissa', 'Inkeroisiin'],
    ['Kauniainen', 'Kauniaisista', 'Kauniaisissa', 'Kauniaisiin'],
    ['Jyväskylä', 'Jyväskylästä', 'Jyväskylässä', 'Jyväskylään'],
    ['Asema', 'Asemalta', 'Asemalla', 'Asemalle'],
    ['Leppävaara', 'Leppävaarasta', 'Leppävaarassa', 'Leppävaaraan'],
    ['Maalaiskunta', 'Maalaiskunnasta', 'Maalaiskunnassa', 'Maalaiskuntaan'],
    ['Mäntyharju', 'Mäntyharjulta', 'Mäntyharjulla', 'Mäntyharjulle'],
    ['Hiekkaharju', 'Hiekkaharjusta', 'Hiekkaharjussa', 'Hiekkaharjuun'],
    ['Ii', 'Iistä', 'Iissä', 'Iihin'],
    ['Kera', 'Kerasta', 'Kerassa', 'Keraan'],
    ['Kilo', 'Kilosta', 'Kilossa', 'Kiloon'],
    ['Oulu', 'Oulusta', 'Oulussa', 'Ouluun'],
    ['Degerby', 'Degerbystä', 'Degerbyssä', 'Degerbyhyn'],
    ['Hanko', 'Hangosta', 'Hangossa', 'Hankoon'],
    ['Kuhmo', 'Kuhmosta', 'Kuhmossa', 'Kuhmoon'],
    ['Tammisaari', 'Tammisaaresta', 'Tammisaaressa', 'Tammisaareen'],
    ['Seinäjoki', 'Seinäjoelta', 'Seinäjoella', 'Seinäjoelle'],
    ['Kerimäki', 'Kerimäeltä', 'Kerimäellä', 'Kerimäelle'],
    ['Retretti', 'Retretistä', 'Retretissä', 'Retrettiin'],
    ['Taavetti', 'Taavetista', 'Taavetissa', 'Taavettiin'],
    ['Naantali', 'Naantalista', 'Naantalissa', 'Naantaliin'],
    ['Laukaa', 'Laukaasta', 'Laukaassa', 'Laukaaseen'],
    ['Turku', 'Turusta', 'Turussa', 'Turkuun'],
    ['Pertunmaa', 'Pertunmaalta', 'Pertunmaalla', 'Pertunmaalle'],
    ['Espoo', 'Espoosta', 'Espoossa', 'Espooseen'],
    ['Vantaa', 'Vantaalta', 'Vantaalla', 'Vantaalle'],
    ['Kuopio', 'Kuopiosta', 'Kuopiossa', 'Kuopioon'],
    ['Kouvola', 'Kouvolasta', 'Kouvolassa', 'Kouvolaan'],
    ['Pori', 'Porista', 'Porissa', 'Poriin'],
    ['Joensuu', 'Joensuusta', 'Joensuussa', 'Joensuuhun'],
    ['Lappeenranta', 'Lappeenrannasta', 'Lappeenrannassa', 'Lappeenrantaan'],
    ['Hämeenlinna', 'Hämeenlinnasta', 'Hämeenlinnassa', 'Hämeenlinnaan'],
    ['Vaasa', 'Vaasasta', 'Vaasassa', 'Vaasaan'],
    ['Jaala', 'Jaalasta', 'Jaalassa', 'Jaalaan'],
    ['Laajavuori', 'Laajavuoresta', 'Laajavuoressa', 'Laajavuoreen'],
    ['Palokka', 'Palokasta', 'Palokassa', 'Palokkaan'],
    ['Ristonmaa', 'Ristonmaalta', 'Ristonmaalla', 'Ristonmaalle'],
    ['Niipperi', 'Niipperistä', 'Niipperissä', 'Niipperiin'],
    ['Lepsämä', 'Lepsämästä', 'Lepsämässä', 'Lepsämään'],
    ['Toivakka', 'Toivakasta', 'Toivakassa', 'Toivakkaan'],
    ['Lahti', 'Lahdesta', 'Lahdessa', 'Lahteen'],
    ['Kitee', 'Kiteeltä', 'Kiteellä', 'Kiteelle'],
    ['Joroinen', 'Joroisilta', 'Joroisilla', 'Joroisille'],
    ['Vuontispirtti', 'Vuontispirtistä', 'Vuontispirtissä', 'Vuontispirttiin'],
    ['Jorvas', 'Jorvaksesta', 'Jorvaksessa', 'Jorvakseen'],
    ['Nurmes', 'Nurmeksesta', 'Nurmeksessa', 'Nurmekseen'],
    ['Myllykoski', 'Myllykoskelta', 'Myllykoskella', 'Myllykoskelle'],
    ['Tuuri', 'Tuurista', 'Tuurissa', 'Tuuriin'],
    ['Hankasalmi', 'Hankasalmelta', 'Hankasalmella', 'Hankasalmelle'],
    ['Kolari', 'Kolarista', 'Kolarissa', 'Kolariin'],
    ['Lievestuore', 'Lievestuoreelta', 'Lievestuoreella', 'Lievestuoreelle'],
    ['Hikiä', 'Hikiältä', 'Hikiällä', 'Hikiälle'],
    ['Kirkkonummi', 'Kirkkonummelta', 'Kirkkonummella', 'Kirkkonummelle'],
    ['Kilpisjärvi', 'Kilpisjärveltä', 'Kilpisjärvellä', 'Kilpisjärvelle'],
    ['Koria', 'Korialta', 'Korialla', 'Korialle'],
    ['Inari', 'Inarista', 'Inarissa', 'Inariin'],
    ['Ruukki', 'Ruukista', 'Ruukissa', 'Ruukkiin'],
    ['Rauma', 'Raumalta', 'Raumalla', 'Raumalle'],
    ['Lapua', 'Lapualta', 'Lapualla', 'Lapualle'],
    ['Kajaani', 'Kajaanista', 'Kajaanissa', 'Kajaaniin'],
    ['Kannelmäki', 'Kannelmäestä', 'Kannelmäessä', 'Kannelmäkeen'],
    
    ['XYZ', 'XYZ', 'XYZ', 'XYZ'],
];


testdata.map(function (item) {
    describe(`*** ${item[0]} ***`, function() {
        it(`From should be ${item[1]}`, function() {
            assert.equal(fromto.from(item[0]), item[1]);
        });
        it(`In should be ${item[2]}`, function() {
            assert.equal(fromto.in(item[0]), item[2]);
        });
        it(`To should be ${item[3]}`, function() {
            assert.equal(fromto.to(item[0]), item[3]);
        });
    });
});
