# CV Master Pro - Gerador de Currículos com IA

Aplicação moderna para gerar currículos profissionais otimizados por Inteligência Artificial.

## 🚀 Recursos Principais

- ✅ **Geração Guiada**: Processo em 11 etapas intuitivas
- 🤖 **Otimização com IA**: Claude integrado para personalizar seu CV
- 💾 **Salvamento Automático**: Seus dados são salvos automaticamente
- 📱 **Responsivo**: Design adaptado para mobile e desktop
- 🔒 **Autenticação**: Integrado com Clerk
- 📥 **Download em PDF**: Exporte seu currículo pronto
- 🎨 **Tema Moderno**: Interface limpa com Tailwind CSS

## 🛠 Stack Tecnológico

- **Framework**: Next.js 14
- **Linguagem**: TypeScript
- **Estilo**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Autenticação**: Clerk
- **Ícones**: Lucide React
- **PDF**: jsPDF + html2canvas
- **IA**: Anthropic Claude (configurável)

## 📋 Pré-requisitos

- Node.js ≥ 18.0.0
- npm ≥ 9.0.0
- Conta Clerk (para autenticação)
- Chave API Anthropic (opcional, para IA)

## 🚀 Instalação

```bash
# Clonar repositório
git clone <seu-repo>
cd Meu-Gerador-de-CV-main

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local

# Configurar variáveis no .env.local:
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
# CLERK_SECRET_KEY=
# ANTHROPIC_API_KEY= (opcional)

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
├── app/
│   ├── api/gerar-cv/        # API para otimizar com IA
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout raiz
│   └── page.tsx             # Página principal
├── components/
│   ├── GeradorCV.tsx        # Componente principal
│   ├── ui/                  # Componentes shadcn/ui
│   └── theme-provider.tsx
├── lib/
│   ├── config.ts            # Configurações
│   ├── cv-types.ts          # Tipos TypeScript
│   ├── cv-utils.ts          # Utilitários
│   └── utils.ts             # Funções helpers
├── hooks/
│   └── use-toast.ts         # Hook de notificações
├── public/                  # Arquivos estáticos
├── styles/                  # Estilos adicionais
└── package.json
```

## ⚙️ Configuração de Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Anthropic Claude API (para otimização com IA)
ANTHROPIC_API_KEY=sk-ant-...

# Opcional
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 🎯 Etapas do Formulário

1. **Bem-vindo** - Introdução
2. **Dados Pessoais** - Nome e cargo
3. **Contatos** - Email, telefone, localização
4. **Descrição da Vaga** - Para otimização com IA
5. **Resumo Profissional** - Perfil resumido
6. **Experiência** - Histórico profissional
7. **Formação** - Educação e qualificações
8. **Habilidades** - Competências principais
9. **Cursos** - Certificados e especializações
10. **Idiomas** - Idiomas que você domina
11. **Informações Adicionais** - CNH, disponibilidade, etc.

## 🤖 Otimização com IA

A otimização com IA requer:

1. **Descrição da vaga preenchida** (Etapa 3)
2. **Chave API Anthropic** configurada
3. **Campos principais preenchidos**

Ao clicar em "Turbinar com IA", o sistema:
- Envia dados do currículo + descrição da vaga para Claude
- Recebe resumo, experiência e habilidades otimizados
- Atualiza os campos automaticamente
- Mantém você no controle (revise sempre antes de usar)

## 📥 Download em PDF

A funcionalidade de download está em desenvolvimento. Será implementada com:
- jsPDF para geração
- html2canvas para captura
- Formatação profissional automática

## 🔒 Segurança

- Dados salvos localmente (localStorage)
- Autenticação via Clerk
- Chaves de API nunca expostas ao cliente
- Validação de inputs em frontend e backend

## 🧪 Scripts Disponíveis

```bash
npm run dev          # Iniciar servidor desenvolvimento
npm run build        # Build para produção
npm start            # Executar build em produção
npm run lint         # Verificar linting
npm run type-check   # Verificar tipos TypeScript
npm run format       # Formatar código com Prettier
npm test             # Rodar testes
npm run test:watch   # Testes em modo watch
```

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Conectar ao Vercel
vercel

# Deploy automático na main
```

### Outras plataformas

O app é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 🐛 Solução de Problemas

### "Erro ao carregar dados"
- Verifique se o localStorage está ativado
- Limpe o cache do navegador

### "IA não está otimizando"
- Confirme que `ANTHROPIC_API_KEY` está configurada
- Verifique se a descrição da vaga foi preenchida

### "Erro de autenticação"
- Valide as chaves do Clerk no `.env.local`
- Reinicie o servidor de desenvolvimento

## 📝 Roadmap

- [ ] Download em PDF melhorado
- [ ] Temas de cores customizáveis
- [ ] Histórico de versões de CV
- [ ] Integração com LinkedIn
- [ ] Análise de match com vagas
- [ ] Chat com IA em tempo real
- [ ] Modelos de CV profissionais

## 📄 Licença

Este projeto está sob licença MIT.

## 🤝 Contribuir

Contribuições são bem-vindas! Por favor:

1. Crie um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através do email ou abra uma issue.

---

Desenvolvido com ❤️ para ajudar profissionais a conseguir suas vagas de sonho.
