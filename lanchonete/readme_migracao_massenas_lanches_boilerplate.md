# README — Migração Massenas Lanches

**Objetivo:** migrar o site atual (Base44) para uma versão autônoma hospedada em seu servidor, utilizando MySQL + PHP + JavaScript (boilerplate entregue). Este README é um checklist passo a passo para executarmos a migração e melhorias. Marque cada item quando concluído.

---

# Fase 0 — Preparação

- [] 0.1 Registrar/definir domínio (ex: `massenaslanches.com.br`) — *responsável: você*
- [ ] 0.2 Escolher provedor de hospedagem (compartilhada, VPS ou cloud) — *ex.: Hostinger/KingHost/Vultr*
- [ ] 0.3 Criar conta de hospedagem e acessar painel (cPanel/SSH)
- [x] 0.4 Criar banco MySQL no painel e anotar credenciais (host, db, user, pass)
- [x] 0.5 Criar repositório Git (GitHub/GitLab/Bitbucket) e subir boilerplate

---

# Fase 1 — Configuração do ambiente

- [x] 1.1 Ajustar `config/config.php` com credenciais do MySQL
- [ ] 1.2 Testar conexão com `api/db.php` — abrir no navegador e verificar ausência de erro
- [x] 1.3 Criar tabela `produtos` no banco (executar SQL fornecido no boilerplate)
- [ ] 1.4 Subir imagens de exemplo em `public/img/` (ex: banner.jpg e imagens de produtos)

---

# Fase 2 — Backend (API)

- [ ] 2.1 Verificar `api/produtos-listar.php` — garantir que retorna JSON válido
- [ ] 2.2 Criar endpoint para obter produto por id (ex: `produtos-ver.php?id=1`)
- [ ] 2.3 Implementar upload de imagens seguro (para painel admin)
- [ ] 2.4 Criar endpoint para editar produto (`produtos-editar.php`)
- [ ] 2.5 Implementar validação (server-side) nos endpoints (sanitize inputs)
- [ ] 2.6 Tratar erros e enviar respostas JSON com status padronizado

---

# Fase 3 — Frontend

- [ ] 3.1 Ajustar `public/index.html` com conteúdo real (textos, contatos, banner)
- [ ] 3.2 Ajustar `public/menu.html` para layout responsivo e carregar produtos via fetch
- [ ] 3.3 Melhorar `public/css/style.css` (cores, tipografia, responsividade)
- [ ] 3.4 Otimizar imagens (compressão) e definir dimensões
- [ ] 3.5 Implementar fallback caso não haja imagem do produto
- [ ] 3.6 Verificar acessibilidade básica (alt nas imagens, contraste, headings)

---

# Fase 4 — Painel Administrativo (opcional, mas recomendado)

- [ ] 4.1 Criar tela de login simples (usuário/senha) — armazenar credenciais numa tabela `users`
- [ ] 4.2 Criar CRUD de produtos no admin (criar, editar, excluir, listar)
- [ ] 4.3 Implementar upload de imagens no admin e salvar nome em `produtos.imagem`
- [ ] 4.4 Proteção das rotas do admin (verificar sessão / token)
- [ ] 4.5 Implementar logout e expiração de sessão
- [ ] 4.6 Permitir marcar produto como `ativo`/`inativo` no admin

---

# Fase 5 — Segurança e boas práticas

- [ ] 5.1 Configurar HTTPS (SSL) — via Let’s Encrypt no painel do host
- [ ] 5.2 Harden básico: renomear `config.php` para fora da pasta pública, bloquear listagem de diretórios
- [ ] 5.3 Proteger uploads (verificar tipos MIME e tamanho máximo)
- [ ] 5.4 Preparar backups automáticos do banco e das imagens (diário/semanais)
- [ ] 5.5 Escapar/parametrizar queries (prevent SQL Injection) — usar prepared statements
- [ ] 5.6 Configurar CORS apenas para domínios necessários (se usar API separada)

---

# Fase 6 — Deploy

- [ ] 6.1 Subir arquivos para o servidor (FTP/SSH/Git deploy)
- [ ] 6.2 Ajustar permissões de pastas (`uploads/` com permissão segura)
- [ ] 6.3 Configurar vHost / apontar domínio para pasta `public/`
- [ ] 6.4 Instalar SSL e forçar HTTPS com redirecionamento
- [ ] 6.5 Testar todas as rotas em produção

---

# Fase 7 — Testes e QA

- [ ] 7.1 Testar em desktop e mobile (Chrome/Edge/Firefox/Android/iOS)
- [ ] 7.2 Testar formulários de contato e envio de pedidos (se existir)
- [ ] 7.3 Testar upload de imagens no admin
- [ ] 7.4 Testar recuperação de dados (visualização do cardápio)
- [ ] 7.5 Corrigir bugs e regressões encontrados

---

# Fase 8 — Monitoramento e melhorias

- [ ] 8.1 Adicionar Google Analytics / GA4 ou outro sistema de métricas
- [ ] 8.2 Adicionar sitemap.xml e robots.txt para SEO
- [ ] 8.3 Implementar links para redes sociais e CTA claros (telefone, whatsapp)
- [ ] 8.4 Melhorar SEO on‑page (meta tags, títulos, H1/H2 corretos)
- [ ] 8.5 Planejar próximos features (pedidos online, integração PagSeguro/Stripe, promoções)

---

# Scripts úteis / comandos

- **Importar SQL (via terminal):**

```bash
mysql -u root -p massenas < dump.sql
```

- **Testar API local (PHP built‑in server):**

```bash
# rodar a partir da pasta do projeto, por ex: massenas/
php -S localhost:8000 -t public
# depois abra http://localhost:8000/menu.html
```

---

# Observações / Notas

- Se você preferir, posso converter o backend em **Node.js + Express** em vez de PHP. Me diga a sua preferência.
- Posso gerar também: painel admin completo, scripts para upload de imagens com segurança, e um README mais detalhado com comandos de deploy específicos para Hostinger.

---

## Próximo passo sugerido
- [ ] **Decida se quer backend em PHP (pronto) ou Node.js (faço para você)** — responda aqui e eu já sigo com a próxima tarefa.

---

_Fim do checklist — Massenas Lanches_

