/* 
 The ruleset is an array of [[endings], offset, from, in, to] 
 where the MOST SIGNIFICANT MATCH is the latest.
*/
const ruleset = [
  // extremely stupid initial vowels
  [['a'], 0, 'sta', 'ssa', 'an', 'n'],
  [['e'], 0, 'stä', 'ssä', 'en', 'n'],
  [['i'], 0, 'stä', 'ssä', 'in', 'n'],
  [['o'], 0, 'sta', 'ssa', 'on', 'n'],
  [['u'], 0, 'sta', 'ssa', 'un', 'n'],
  [['y'], 0, 'stä', 'ssä', 'yn', 'n'],
  [['ä'], 0, 'stä', 'ssä', 'än', 'n'],
  [['ö'], 0, 'stä', 'ssä', 'ön', 'n'],

  // -ri -erityiset: pori, meri etc. + kajaani yms
  [['pori', 'uri', 'ari', 'ani'], 0, 'sta', 'ssa', 'in', 'n'],
  [['meri', 'veri'], -1, 'essä', 'estä', 'ereen', 'en'],

  // s -päätteiset (Kannus, muhos, varkaus, karkaus)
  [['s'], -1, 'ksesta', 'ksessa', 'kseen', 'ksen'],
  [['Muhos'], -1, 'kselta', 'ksella', 'kselle', 'ksen'],
  [['aus'], -1, 'desta', 'dessa', 'teen', 'den'],
  [['as', 'es'], -1, 'ksesta', 'ksessa', 'kseen', 'ksen'],

  // xxby, like Degerby
  [['by'], 0, 'stä', 'ssä', 'hyn', 'n'],

  // naantali et al
  [['ali', 'oli', 'uli', 'nni'], 0, 'sta', 'ssa', 'in', 'n'],

  // vihanti
  [['nti'], -2, 'nilta', 'nilla', 'tiin', 'nin'],

  // -valta etc.
  [['lta'], -2, 'lasta', 'lassa', 'taan', 'lan'],

  // -he, like Raahe
  [['he'], 0, 'sta', 'ssa', 'en', 'n'],

  // -kka
  [['kka'], -2, 'asta', 'assa', 'kaan', 'an'],
  [['kkä'], -2, 'ästä', 'ässä', 'kään', 'än'],

  // -nta, esim. maalaiskunta, lappeenranta
  [['nta'], -2, 'nasta', 'nassa', 'taan', 'nan'],

  // helsinki, hanko, nta, nki etc.
  [['nki'], -3, 'ngistä', 'ngissä', 'nkiin', 'ngin'],
  [['nko'], -3, 'ngosta', 'ngossa', 'nkoon', 'ngon'],

  // tampere + kempele etc
  [['pere'], 0, 'elta', 'ella', 'elle', 'en'],
  [['pele'], 0, 'eltä', 'ellä', 'elle', 'en'],

  // turku, karkku
  [['rku', 'kku'], -2, 'usta', 'ussa', 'kuun', 'un'],

  // ii, aa - päätteiset, kuten Ii, laukaa, vantaa, espoo
  [['ee'], 0, 'ltä', 'llä', 'lle', 'n'],
  [['ii'], 0, 'stä', 'ssä', 'hin', 'n'],
  [['uu'], 0, 'sta', 'ssa', 'hun', 'n'],
  [['aa', 'oo'], 0, 'sta', 'ssa', 'seen', 'n'],

  [
    ['maa', 'taa', 'ria', 'pua', 'uma', 'tra', 'ava', 'jaa', 'ruu', 'kia', 'suo'],
    0,
    'lta',
    'lla',
    'lle',
    'n',
  ],

  // hyvinkää
  [['iä', 'kää', 'pää'], 0, 'ltä', 'llä', 'lle', 'n'],

  [['vik'], 0, 'istä', 'issä', 'iin', 'in'],

  // mm. savio
  [['vio'], 0, 'lta', 'lla', 'lle', 'n'],

  // inkeroinen, kauniainen, änkeröinen, kimpeläinen yms.
  [['inen'], -4, 'isista', 'isissa', 'isiin', 'isten'],
  [['äinen', 'öinen'], -4, 'isistä', 'isissä', 'isiin', 'isten'],
  [['Joroinen'], -4, 'isilta', 'isilla', 'isille', 'isten'],

  // harjut + erikoisharjut
  [['harju'], 0, 'lta', 'lla', 'lle', 'n'],
  [['hiekkaharju', 'uimaharju'], 0, 'sta', 'ssa', 'un', 'n'],

  [['nummi'], -1, 'elta', 'ella', 'elle', 'en'],

  // järvet ja vedet
  [['järvi'], -1, 'eltä', 'ellä', 'elle', 'en'],
  [['vesi'], -2, 'deltä', 'dellä', 'delle', 'den'],

  // genetiivinpää
  [['npää'], 0, 'stä', 'ssä', 'hän', 'n'],

  // kosket ja salmet
  [['koski', 'salmi'], -1, 'elta', 'ella', 'elle', 'en'],
  [['ore'], 0, 'elta', 'ella', 'elle', 'en'],

  // saaret + erikoissaaret
  [['saari'], -1, 'esta', 'essa', 'een', 'en'],

  // lahdet + erikoislahdet
  [['lahti'], -2, 'desta', 'dessa', 'teen', 'den'],
  [['kesälahti', 'talvilahti', 'lapinlahti'], -2, 'delta', 'della', 'delle', 'den'],

  // vuoret + erikoisvuoret
  [['vuori'], -1, 'elta', 'ella', 'elle', 'en'],
  [['laajavuori', 'punavuori'], -1, 'esta', 'essa', 'een', 'en'],

  //joet
  [['joki'], -4, 'joelta', 'joella', 'joelle', 'joen'],

  // mäet
  [['mäki'], -4, 'mäeltä', 'mäellä', 'mäelle', 'mäen'],
  [['tunturi'], 0, 'lta', 'lla', 'lle', 'n'],

  // erikoismäet
  [['kannelmäki', 'pukinmäki', 'myyrmäki'], -2, 'estä', 'essä', 'keen', 'en'],

  // asemat, hotellit ja muut
  [['asema'], 0, 'lta', 'lla', 'lle', 'n'],
  [['otelli'], 0, 'sta', 'ssa', 'in', 'n'],
  [['hovi'], 0, 'sta', 'ssa', 'in', 'n'],

  // -selkä
  [['selkä'], -2, 'ältä', 'ällä', 'älle', 'än'],

  // -etti, tough one (taavetti, retretti)
  [['tti'], -2, 'ista', 'issa', 'tiin', 'in'],
  [['kki'], -2, 'ista', 'issa', 'kiin', 'in'],
  [['retti', 'pirtti'], -2, 'istä', 'issä', 'tiin', 'in'],

  // tuntureiden nimet
  [['Suomu', 'Ruka', 'Tahko', 'Luosto', 'Malmi'], 0, 'lta', 'lla', 'lle', 'n'],
  [['Levi', 'Pyhä'], 0, 'ltä', 'llä', 'lle', 'n'],

  // totally weird cases & one-off hacks
  [['Kangasala'], -3, 'alta', 'alla', 'alle', 'alan'],

  // Helsinki Lentoasema, Turenki Lentoasema (if such exists)
  [
    ['nki Lentoasema'],
    -14,
    'ngin Lentoasemalta',
    'ngin Lentoasemalla',
    'ngin Lentoasemalle',
    'ngin Lentoaseman',
  ],

  [['Turenki'], -2, 'gista', 'gissa', 'kiin', 'gin'],

  [['lampi'], -2, 'mista', 'missa', 'mille', 'min'],
]

function getLastMatch(city) {
  return (
    ruleset
      .filter(
        rule => rule[0].filter(ending => city.toUpperCase().endsWith(ending.toUpperCase())).length
      )
      .map(match => ({
        from: city.slice(0, city.length + match[1]) + match[2],
        in: city.slice(0, city.length + match[1]) + match[3],
        to: city.slice(0, city.length + match[1]) + match[4],
        via: city.slice(0, city.length + match[1]) + match[5],
      }))
      .pop() || { from: city, in: city, to: city, via: city }
  )
}

module.exports = {
  from: function(city) {
    return getLastMatch(city).from
  },
  in: function(city) {
    return getLastMatch(city).in
  },
  to: function(city) {
    return getLastMatch(city).to
  },
  via: function(city) {
    return getLastMatch(city).via
  },
}
