#Olá, nesse documento vou descrever os passos de maneira resumida o que fiz nesse projeto.#
Primeiramente defini quais seriam as paginas necessarias e uma vez definidas instalei o React-Router-Dom para configurar as rotas
Após rotas configuradas usei o styled-components somado as folhas de estilo para definir os padrões das paginas, consegui criar algumas condições para cor de background porém como não consegui editar o texto de forma automatica deixei essa função comentada.
Uma vez que as rotas e os layouts estavam prontos eu parti para criar as funções que fariam as requisições a API do OpenWeatherMap para solicitar um retorno em Json a cada 10 minutos de forma assincrona, dessa forma as paginas sempre estarão atualizadas.
Com o retorno em Json eu configurei as variaveis e as chamadas para trazer os valores para o usuario, porem me deparei com alguns problemas que ainda sigo resolvendo:
No caso do sunset e sunrise o retorno dos dados vem em UTC, estou resolvendo isso.
Temos também o problema do endpoint que eu usei, percebi agora as 02:01 do domingo que esse endpoint não retorna as informações de diversos horarios, consegui usar o outro endpoints porem ele retornou um array com 40 entradas, não consegui chamar os dados desse array para as variaveis.
Porém consegui requisitar os icones do clima para serem atualizados diramente nas paginas seguindo a ideia dos outros dados.

E caso você esteja lendo isso, gostaria de salientar que estou usando React a apenas 15 dias, e tudo isso que eu fiz aqui ilustra meu desenvolvimento nessas duas semana.
Então pensa com carinho por que daqui pra semana que vem eu já vou saber muito mais. :)
