console.log ('Bem vindo ao jogo de dados!');
console.log ()
console.log ('##################')
console.log ('#   0   0   0    #')
console.log ('#                #')
console.log ('#       0        #')
console.log ('#                #')
console.log ('#   0   0   0    #')
console.log ('#                #')
console.log ('##################')
console.log()

var rodadas = + prompt ('Quantas rodadas deseja fazer?');
console.log ();
var jogadores = + prompt ('Quantos jogadores vão jogar?');
console.log()

var nomes = []

    for (let i = 0; i <jogadores; i ++) {
        nomes.push (prompt (`Digite o nome do ${i + 1}º jogador:`))
    }

  for (i = 1; i <(rodadas + 1); i ++) {
        
        console.log ();
        console.log (`#### Iniciando....>> ${i} º rodada<<  ####`)

        var objJogadores = [];
        
        for (let i = 0; i <(jogadores); i ++) {
            var Jogador = {};
                            
            Jogador.nome = nomes [i]
            Jogador.numeros = Math.floor (Math.random () * 6 + 1)
            console.log (Jogador)
            console.log ()
            objJogadores.push (Jogador);

            var classificado = objJogadores.sort ((a, b) => {
                return b.numeros - a.numeros;
            });

                
        }
        console.log ('Ordenação decrescente da rodada:');
        console.log (classificado)
        console.log ()
        console.log (`O ${objJogadores [0] .nome} foi o ganhador desta rodada com o numero: ${objJogadores [0] .numeros}`)
             
        

    }

