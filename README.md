# Sonic_Adventure-DX_Director-s-Cut-Ps2
Teste de Sonic Adventure DX no Athena env
🌀 Sonic Adventure DX (PS2) - Projeto Experimental com AthenaEnv
Este repositório é uma tentativa de recriar e explorar elementos do Sonic Adventure DX no ambiente do PlayStation 2, utilizando o AthenaEnv como base de execução. A ideia era testar a viabilidade de scripts e assets personalizados dentro do emulador PCSX2, mas o projeto enfrentou diversos obstáculos técnicos.

⚠️ Status do Projeto
Experimental / Incompleto / Bugado

Apesar de alguns avanços iniciais, o projeto acabou travando por conta de erros recorrentes no main.js, especialmente ao tentar executar ações mais complexas. O script funciona normalmente no início, mas conforme a lógica se aprofunda, ele deixa de responder corretamente. A suspeita é que o problema esteja relacionado à forma como o filesystem do PCSX2 lida com arquivos JS no contexto do AthenaEnv.

🧪 Tentativas e Problemas
✅ Consegui renderizar alguns textos simples.

❌ Nada funcional ou relevante foi mantido.

❌ Erros constantes de anonymous no main.js mesmo indo resolver o problema no site oficial https://athena-env.vercel.app/.

❌ Verificações no filesystem do PCSX2 não ajudaram.

❌ O main.js começa bem, mas falha com lógica mais elaborada.

Com tudo isso em mente, dá pra se concluir que não dá para fazer nem uma fase de teste, então acabei deixando isso de lado e disponibilizando pra vocês, caso consigam, des da programação em javascript e assets quem eu estava pensando em programar, como a gameplay do Sonic por exemplo.

📁 Estrutura de Pastas
A organização dos arquivos segue uma lógica modular para facilitar testes e futuras expansões:

Código
assets/
├── Acts/           # Contém todas as fases principais
├── Vídeos/         # Arquivos de vídeo (cutscenes, intros, etc.)
├── Sounds/         # Áudios em .wav
│   ├── Players/
│   │   └── Sonic/
│   │       ├── Sonic.js       # Script do personagem Sonic + scripts de controle
│   │       ├── Sonic.glb      # Modelo 3D do Sonic
│   │       └── icon/
│   │           ├── logo1.png
│   │           └── logo2.png
│   └── Menu/       # Scripts e sons relacionados ao menu
🧠 Observações Técnicas
O modelo .glb do Sonic foi testado com renderização básica com alguns arquivos da comunidade em outra pasta de teste.

As logos em .png funcionam bem como ícones no menu.

Scripts JS são reconhecidos, mas falham em tempo de execução em outro estado (ex: main.js para Sonic.js).

O ambiente AthenaEnv parece instável com lógica JS mais avançada.

💡 Próximos Passos (Talvez)
Migrar para outro ambiente mais estável (talvez a Tyra Engine) ou Esperar Athenaenv atualizar.
Testar fora do PCSX2, talvez em um wrapper JS nativo.

Ou simplesmente deixar isso aqui como um registro de tentativa 😅

link do assets:https://drive.google.com/drive/folders/1Iytuii4eME4mieFqLmUxp_9VkF74LKXc?usp=sharing
