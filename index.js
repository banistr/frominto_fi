/* 
 The ruleset is an array of [[endings], offset, from, in, to] 
 where the MOST SIGNIFICANT MATCH is the latest.
*/
const ruleset = [
    // extremely stupid initial vowels
    [['a'], 0 , 'sta', 'ssa' , 'an'],
    [['e'], 0 , 'stä', 'ssä' , 'en'],
    [['i'], 0 , 'stä', 'ssä' , 'in'],
    [['o'], 0 , 'sta', 'ssa' , 'on'],
    [['u'], 0 , 'sta', 'ssa' , 'un'],
    [['y'], 0 , 'stä', 'ssä' , 'yn'],
    [['ä'], 0 , 'stä', 'ssä' , 'än'],
    [['ö'], 0 , 'stä', 'ssä' , 'ön'],

    //-ri -erityiset: pori, meri etc.
    [['pori'], 0, 'sta', 'ssa', 'in'],
    [['meri','veri'], -1, 'essä', 'estä', 'ereen'],
        
    
    //xxby, like Degerby
    [['by'], 0 , 'stä', 'ssä' , 'hyn'],

    //naantali et al
    [['ali', 'oli', 'uli'], 0, 'sta', 'ssa', 'in'],
    // -kka
    [['kka'], -2, 'asta', 'assa', 'kaan'],
    [['kkä'], -2, 'ästä', 'ässä', 'kään'],
    //-nta, esim. maalaiskunta, lappeenranta
    [['nta'], -2 , 'nasta', 'nassa' , 'taan'],

    // helsinki, hanko, nta, nki etc.
    [['nki'], -3 , 'ngistä', 'ngissä' , 'nkiin'],
    [['nko'], -3 , 'ngosta', 'ngossa' , 'nkoon'],

    //tampere + kempele etc
    [['pere'], 0 , 'elta', 'ella' , 'elle'],
    [['pele'], 0 , 'eltä', 'ellä' , 'elle'],

    [['rku', 'kku'], -2 , 'usta', 'ussa' , 'kuun'],
    //ii, aa - päätteiset, kuten Ii, laukaa, vantaa, espoo
    [['ee'], 0, 'ltä', 'llä', 'lle'],
    [['ii'], 0, 'stä', 'ssä', 'hin'],
    [['uu'], 0, 'sta', 'ssa', 'hun'],
    [['aa', 'oo'], 0, 'sta', 'ssa', 'seen'],
    [['maa', 'taa'], 0, 'lta', 'lla', 'lle'],

    //inkeroinen, kauniainen, änkeröinen, kimpeläinen yms.
    [['inen'], -4, 'isista', 'isissa', 'isiin' ],
    [['äinen', 'öinen'], -4, 'isistä', 'isissä', 'isiin' ],

    //harjut + erikoisharjut
    [['harju'], 0, 'lta', 'lla', 'lle' ],
    [['hiekkaharju'], 0, 'sta', 'ssa', 'un' ],

    //saaret + erikoissaaret
    [['saari'], -1, 'esta', 'essa', 'een' ],
    
    //lahdet + erikoislahdet
    [['lahti'], -2, 'desta', 'dessa', 'teen'],
    [['kesälahti', 'talvilahti'], -2, 'delta', 'della', 'delle'],

    //vuoret + erikoisvuoret
    [['vuori'], -1, 'elta', 'ella', 'elle'],
    [['laajavuori'], -1, 'esta', 'essa', 'een'],
    //joet
    [['joki'], -4, 'joelta', 'joella', 'joelle' ],
    
    //mäet
    [['mäki'], -4, 'mäeltä', 'mäellä', 'mäelle' ],
    
    //asemat
    [['asema'], 0, 'lta', 'lla', 'lle'],  

    //-etti, tough one (taavetti, retretti)
    [['tti'], -2, 'ista', 'issa', 'tiin'],  
    [['retti'], -2, 'istä', 'issä', 'tiin'],  

];

function getLastMatch(city) {
  const matches =
    ruleset
      .filter(rule => (
        rule[0].filter((ending) => 
          (city.toUpperCase().endsWith(ending.toUpperCase()))
        ).length))
      .map((match) => ({
                         from: city.slice(0,city.length + match[1]) + match[2],
                         in: city.slice(0,city.length + match[1]) + match[3],
                         to: city.slice(0,city.length + match[1]) + match[4],
                        }));
  return matches.length ? matches.pop() : {from: city, in: city, to: city};
}

module.exports = {
    from: function(city) {
        return getLastMatch(city).from;
    },
    in: function(city) {
        return getLastMatch(city).in;
    },
    to: function(city) {
        return getLastMatch(city).to;
    },
};