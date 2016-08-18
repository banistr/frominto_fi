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
