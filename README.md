# Vita Nativa App

Aplicação de recolha de dados de campo da [Associação Vita Nativa](https://www.vitanativa.org) — Conservação do Ambiente.

🔗 **App:** https://vitanativa.github.io/vita-nativa-app

---

## Descrição

PWA (Progressive Web App) desenvolvida para uso interno pelos técnicos da Vita Nativa. Permite registar atividades de campo diretamente no telemóvel, com sincronização automática para a base de dados.

---

## Funcionalidades

- **Registo de atividades** — tipo, data, local, participantes, técnicos, projeto, GPS, descrição e observações
- **Lista de registos** — com pesquisa por texto
- **Tabela** — com filtros por tipo, local e datas, e exportação em CSV
- **Estatísticas** — totais de atividades e participantes, gráficos por tipo, local, técnico e projeto
- **Login por utilizador** — cada técnico entra com o seu email e password
- **Modo offline** — os registos são guardados localmente e sincronizados quando houver ligação
- **Editar e apagar registos** — disponível apenas para administradores

---

## Instalação no telemóvel (Android)

1. Abre o Chrome e vai a https://vitanativa.github.io/vita-nativa-app
2. Clica nos três pontos (⋮) → **Install**
3. A app fica disponível no ecrã inicial

---

## Tecnologias

| Componente | Tecnologia |
|-----------|-----------|
| Frontend | HTML + CSS + JavaScript (ficheiro único) |
| Base de dados | [Supabase](https://supabase.com) |
| Alojamento | GitHub Pages |
| Offline | Service Worker + localStorage |

---

## Estrutura do repositório

```
vita-nativa-app/
├── index.html       # App completa
├── manifest.json    # Configuração PWA
├── sw.js            # Service Worker
├── icon-192.png     # Ícone 192×192
└── icon-512.png     # Ícone 512×512
```

---

## Base de dados (Supabase)

Tabelas principais:

| Tabela | Descrição |
|--------|-----------|
| `atividades` | Registos de campo |
| `tipos_atividade` | Tipos de atividade (dropdown) |
| `locais` | Locais (dropdown) |
| `projetos` | Projetos (dropdown) |
| `tecnicos` | Técnicos (multi-seleção) |

---

## Utilizadores

Geridos em **Supabase → Authentication → Users**.

Para adicionar um novo utilizador:
1. Abre o painel do Supabase
2. Vai a **Authentication → Users → Add user**
3. Preenche email e password
4. Marca **Auto Confirm User**

Para dar permissões de administrador (editar/apagar registos), adiciona o email à lista `ADMINS` no ficheiro `index.html`.

---

## Atualizar a app

1. Faz as alterações ao `index.html` (ou pede ajuda ao Claude)
2. No GitHub, apaga o `index.html` atual e faz upload do novo
3. O GitHub Pages publica automaticamente em 1-2 minutos
4. No telemóvel, fecha e reabre a app

---

*Desenvolvido com o apoio do Claude (Anthropic) — 2025*
