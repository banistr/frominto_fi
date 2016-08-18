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
    
    //xxby, like Degerby
    [['by'], 0 , 'stä', 'ssä' , 'hyn'],

    //-kunta, esim. maalaiskunta
    [['nta'], -2 , 'nasta', 'nassa' , 'taan'],

    //astevaihteluita helsinki, hanko etc.
    [['nki'], -3 , 'ngistä', 'ngissä' , 'nkiin'],
    [['nko'], -3 , 'ngosta', 'ngossa' , 'nkoon'],

    //tampere + kempele etc
    [['pere'], 0 , 'elta', 'ella' , 'elle'],
    [['pele'], 0 , 'eltä', 'ellä' , 'elle'],

    [['rku'], -2 , 'usta', 'ussa' , 'kuun'],
    //ii, aa - päätteiset, kuten Ii tai laukaa
    [['ii'], 0, 'stä', 'ssä', 'hin'],
    [['aa'], 0, 'sta', 'ssa', 'seen'],
    [['maa'], 0, 'lta', 'lla', 'lle'],

    //inkeroinen, kauniainen, änkeröinen, kimpeläinen yms.
    [['inen'], -4, 'isista', 'isissa', 'isiin' ],
    [['äinen', 'öinen'], -4, 'isistä', 'isissä', 'isiin' ],

    //harjut + erikoisharjut
    [['harju'], 0, 'lta', 'lla', 'lle' ],
    [['hiekkaharju'], 0, 'sta', 'ssa', 'un' ],

    //saaret + erikoissaaret
    [['saari'], -1, 'esta', 'essa', 'een' ],
    
    //lahdet + erikoislahdet
    [['lahti'], -1, 'een', 'essa', 'esta'],
    [['kesälahti', 'talvilahti'], -2, 'delta', 'della', 'delle'],

    //joet
    [['joki'], -4, 'joelta', 'joella', 'joelle' ],
    
    //mäet
    [['mäki'], -4, 'mäeltä', 'mäellä', 'mäelle' ],
    
    //asemat
    [['asema'], 0, 'lta', 'lla', 'lle'],  
];

function getLatestMatch(city){
    const matches = ruleset.map(function(rule){
        //these are this way to make the ruleset table more readable
        const endings = rule[0];
        const offset = rule[1];
        const _from = rule[2];
        const _in = rule[3];
        const _to = rule[4];
        const match = endings.filter(function (ending) {
            return (city.toUpperCase().endsWith(ending.toUpperCase()));
        }).length > 0;
        if (match) {
            return {
                        from: city.slice(0,city.length + offset)+_from, 
                        in: city.slice(0,city.length + offset)+_in, 
                        to: city.slice(0,city.length + offset)+_to
                    };
        }
    }).filter((item) => (item !== undefined));
    //return the last one
    if (matches.length > 0) return matches.pop();
    //if no match, passtrough the original
    return city;
}

module.exports = {
    from: function(city) {
        return getLatestMatch(city).from;
    },
    in: function(city) {
        return getLatestMatch(city).in;
        
    },
    to: function(city) {
        return getLatestMatch(city).to;
    },
};