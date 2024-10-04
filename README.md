# Objetivo: Implementar um sistema que recebe faturas de compras de produtos.
Seu sistema já deve ter produtos pré-cadastrados. O usuário da sua aplicação usará os códigos dos
produtos já existentes na aplicação e não precisa criar ou alterar ou apagar nenhum produto. Todos os
produtos já devem ser previamente gerados e armazenados, somente serão lidos. 

# Serviços de Domínio de Negócio:
Serviços de Domínio de Negócio:
Operações que pode ser realizadas sobre as faturas:
• Criar nova Fatura
◦ Não permitir a criação de faturas cuja quantidade de um produto seja maior que o estoque daquele
produto.
◦ Não permitir a criação de faturas com desconto maior do que o permitido.
◦ A cada nova fatura, descontar o estoque dos produtos
• Cancelar Nota
◦ A nota só poderá ser cancelada, se o fechamento do mês em que foi gerada ainda não tenha sido
realizado.
◦ Ao cancelar, adicionar novamente o estoque dos produtos
• Atualizar Nota
◦ A nota só poderá ser atualizada, se o fechamento de seu mês ainda não foi realizado.
◦ Ao atualizar, certifique-se de que a quantidade de estoque e a quantidade de produtos comprados
estejam coerentes.
◦ Ao atualizar, certifique-se de que os descontos estejam coerentes.
• Buscar uma nota específica dada seu código
• Buscar notas por mês
Seu sistema deve permitir, além das operações anteriores, as seguintes:
• Fechar caixa mensal: todos os produtos vendidos no mês, com a quantidade, preço pago, impostos, e
total geral do mês. Armazenar isso no banco de dados. Este procedimento recebe um mês/ano como
parâmetro e deve verificar se o mês já foi fechado.
• Gerar um relatório do fechamento mensal. Este procedimento recebe um mês/ano como parâmetro.
Este procedimento somente pode ser executado sobre meses que já tenham sido fechados
(procedimento anterior).
Considere que:
• Seu sistema deve permitir interface com o protocolo HTTP, GRPC e também deve permitir que as
operações sejam realizadas por um CLI (utilize o pacote commander, Inquirer.js, ou outro similar).
• Seu sistema deve permitir armazenar os dados das faturas e produtos utilizando: arquivos JSON e
SQLite.
• Seu sistema deve permitir gerar relatórios CSV e PDF. Os quais podem ser armazenados ou no
sistema de arquivos ou em algum serviço de nuvem, como S3.
• Utilize um pacote para facilitar a injeção de dependências (InversifyJS, TSyringe, Awilix)
• Implemente um teste automatizado (utilizando mocha ou jest) para a criação de uma fatura. Somente
para o serviço de domínio, e não para a interface de acesso a ele (grpc, http ou cli).
• Implemente ao menos um padrão de projeto.
• Utilize variáveis de ambiente (pacote nodenv) para:
• dizer à aplicação se ela vai habilitar o HTTP ou GRPC ou CLI
• dizer à aplicação se ela vai armazenar em: Arquivos JSON ou SQLite
• dizer à aplicação se ela vai gerar relatórios CSV ou PDF
• dizer à aplicação se ela vai armazenar os relatórios na nuvem ou sistema de arquivos
Muito importante: Não replique código relacionado à camada de negócio. Este é o principal ponto do
trabalho: Não replicar.