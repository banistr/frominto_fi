/* 
 The ruleset is an array of [[endings], offset, from, in, to] 
 where the MOST SIGNIFICANT MATCH is the latest.
*/
const ruleset = [
  // extremely stupid initial vowels
  [['a'], 0, 'sta', 'ssa', 'an'],
  [['e'], 0, 'stä', 'ssä', 'en'],
  [['i'], 0, 'stä', 'ssä', 'in'],
  [['o'], 0, 'sta', 'ssa', 'on'],
  [['u'], 0, 'sta', 'ssa', 'un'],
  [['y'], 0, 'stä', 'ssä', 'yn'],
  [['ä'], 0, 'stä', 'ssä', 'än'],
  [['ö'], 0, 'stä', 'ssä', 'ön'],

  // -ri -erityiset: pori, meri etc. + kajaani yms
  [['pori', 'uri', 'ari', 'ani'], 0, 'sta', 'ssa', 'in'],
  [['meri', 'veri'], -1, 'essä', 'estä', 'ereen'],

  // s -päätteiset (Kannus, muhos, varkaus, karkaus)
  [['s'], -1, 'ksesta', 'ksessa', 'kseen'],
  [['Muhos'], -1, 'kselta', 'ksella', 'kselle'],

  [['aus'], -1, 'desta', 'dessa', 'teen'],

  [['as', 'es'], -1, 'ksesta', 'ksessa', 'kseen'],

  // xxby, like Degerby
  [['by'], 0, 'stä', 'ssä', 'hyn'],

  // naantali et al
  [['ali', 'oli', 'uli', 'nti', 'nni'], 0, 'sta', 'ssa', 'in'],

  // -valta etc.
  [['lta'], -2, 'lasta', 'lassa', 'taan'],

  // -he, like Raahe
  [['he'], 0, 'sta', 'ssa', 'en'],

  // -kka
  [['kka'], -2, 'asta', 'assa', 'kaan'],
  [['kkä'], -2, 'ästä', 'ässä', 'kään'],

  // -nta, esim. maalaiskunta, lappeenranta
  [['nta'], -2, 'nasta', 'nassa', 'taan'],

  // helsinki, hanko, nta, nki etc.
  [['nki'], -3, 'ngistä', 'ngissä', 'nkiin'],
  [['nko'], -3, 'ngosta', 'ngossa', 'nkoon'],

  // tampere + kempele etc
  [['pere'], 0, 'elta', 'ella', 'elle'],
  [['pele'], 0, 'eltä', 'ellä', 'elle'],

  [['rku', 'kku'], -2, 'usta', 'ussa', 'kuun'],

  // ii, aa - päätteiset, kuten Ii, laukaa, vantaa, espoo
  [['ee'], 0, 'ltä', 'llä', 'lle'],
  [['ii'], 0, 'stä', 'ssä', 'hin'],
  [['uu'], 0, 'sta', 'ssa', 'hun'],
  [['aa', 'oo'], 0, 'sta', 'ssa', 'seen'],
  [['maa', 'taa', 'ria', 'pua', 'uma', 'tra', 'ava', 'jaa', 'ruu', 'kia'], 0, 'lta', 'lla', 'lle'],

  [['iä', 'kää', 'pää'], 0, 'ltä', 'llä', 'lle'],

  [['vik'], 0, 'istä', 'issä', 'iin'],

  // mm. savio
  [['vio'], 0, 'lta', 'lla', 'lle'],

  // inkeroinen, kauniainen, änkeröinen, kimpeläinen yms.
  [['inen'], -4, 'isista', 'isissa', 'isiin'],
  [['äinen', 'öinen'], -4, 'isistä', 'isissä', 'isiin'],
  [['Joroinen'], -4, 'isilta', 'isilla', 'isille'],

  // harjut + erikoisharjut
  [['harju'], 0, 'lta', 'lla', 'lle'],
  [['hiekkaharju', 'uimaharju'], 0, 'sta', 'ssa', 'un'],

  [['nummi'], -1, 'elta', 'ella', 'elle'],
  // järvet ja vedet
  [['järvi'], -1, 'eltä', 'ellä', 'elle'],
  [['vesi'], -2, 'deltä', 'dellä', 'delle'],
  // genetiivinpää
  [['npää'], 0, 'stä', 'ssä', 'hän'],
  // kosket ja salmet
  [['koski', 'salmi'], -1, 'elta', 'ella', 'elle'],
  [['ore'], 0, 'elta', 'ella', 'elle'],

  // saaret + erikoissaaret
  [['saari'], -1, 'esta', 'essa', 'een'],

  // lahdet + erikoislahdet
  [['lahti'], -2, 'desta', 'dessa', 'teen'],
  [['kesälahti', 'talvilahti', 'lapinlahti'], -2, 'delta', 'della', 'delle'],

  // vuoret + erikoisvuoret
  [['vuori'], -1, 'elta', 'ella', 'elle'],
  [['laajavuori', 'punavuori'], -1, 'esta', 'essa', 'een'],
  //joet
  [['joki'], -4, 'joelta', 'joella', 'joelle'],

  // mäet
  [['mäki'], -4, 'mäeltä', 'mäellä', 'mäelle'],
  [['tunturi'], 0, 'lta', 'lla', 'lle'],
  // erikoismäet
  [['kannelmäki', 'pukinmäki', 'myyrmäki'], -2, 'estä', 'essä', 'keen'],

  // asemat, hotellit ja muut
  [['asema'], 0, 'lta', 'lla', 'lle'],
  [['otelli'], 0, 'sta', 'ssa', 'in'],
  [['hovi'], 0, 'sta', 'ssa', 'in'],

  // -selkä
  [['selkä'], -2, 'ältä', 'ällä', 'älle'],

  // -etti, tough one (taavetti, retretti)
  [['tti'], -2, 'ista', 'issa', 'tiin'],
  [['kki'], -2, 'ista', 'issa', 'kiin'],
  [['retti', 'pirtti'], -2, 'istä', 'issä', 'tiin'],

  // tuntureiden nimet
  [['Suomu', 'Ruka', 'Tahko', 'Luosto', 'Malmi'], 0, 'lta', 'lla', 'lle'],
  [['Levi', 'Pyhä'], 0, 'ltä', 'llä', 'lle'],

  // totally weird cases & one-off hacks
  [['Kangasala'], -3, 'alta', 'alla', 'alle'],

  // Helsinki Lentoasema, Turenki Lentoasema (if such exists)
  [['nki Lentoasema'], -14, 'ngin Lentoasemalta', 'ngin Lentoasemalla', 'ngin Lentoasemalle'],
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
      }))
      .pop() || { from: city, in: city, to: city }
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
}
