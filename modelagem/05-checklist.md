# 05 - Checklist de Implementação

## ✅ Checklist Completo para Novo Problema

Use este checklist ao adicionar um novo problema ao sistema.

---

### 📁 1. Estrutura de Pastas

- [ ] Criar pasta `data/problems/lc_{NÚMERO}_{SLUG}/`
- [ ] Criar subpasta `code/`
- [ ] Criar subpasta `solutions/`

**Comando:**
```powershell
$slug = "lc_{NÚMERO}_{SLUG}"
New-Item -ItemType Directory -Path "data/problems/$slug/code" -Force
New-Item -ItemType Directory -Path "data/problems/$slug/solutions" -Force
```

---

### 📄 2. problem.yaml

- [ ] Criar `problem.yaml` na pasta do problema
- [ ] Preencher seção `identification` (problem_id, slug, title)
- [ ] Preencher seção `source` (platform, id, slug, url)
- [ ] Preencher seção `catalog` (difficulty, topics, patterns, companies)
- [ ] Preencher seção `constraints` (summary, notes_md)
- [ ] Preencher seção `study` (status, priority, dates)
- [ ] Preencher seção `content`:
  - [ ] `statement_md` com exemplos
  - [ ] `editorial_summary_md`
  - [ ] `key_insights` (mínimo 3)
  - [ ] `pitfalls` (mínimo 2)
  - [ ] `review_questions` (mínimo 3)
- [ ] Preencher seção `content.editorial`:
  - [ ] `algorithm_blueprint` com Mermaid
  - [ ] `alternative_approaches` (mínimo 1)
  - [ ] `when_not_to_use` (opcional)
  - [ ] `common_mistakes` (mínimo 1)
  - [ ] `complexity_notes`
- [ ] Preencher `solutions_index` com 7 soluções
- [ ] Adicionar `history`

---

### 💻 3. Arquivos de Código

Para cada linguagem, criar arquivo em `code/`:

- [ ] `sol_py_{approach}.py` - Python
- [ ] `sol_go_{approach}.go` - Go
- [ ] `sol_java_{approach}.java` - Java
- [ ] `sol_kotlin_{approach}.kt` - Kotlin
- [ ] `sol_js_{approach}.js` - JavaScript
- [ ] `sol_scala_{approach}.scala` - Scala
- [ ] `sol_rust_{approach}.rs` - Rust

**Para cada arquivo:**
- [ ] Header com definição de estrutura (comentado)
- [ ] Docstring/comentário com título e complexidade
- [ ] Implementação completa
- [ ] Comentários explicativos
- [ ] Testar no LeetCode

---

### 📑 4. Arquivos de Solução (YAML)

Para cada linguagem, criar arquivo em `solutions/`:

- [ ] `sol_py_{approach}.yaml` - Python
- [ ] `sol_go_{approach}.yaml` - Go
- [ ] `sol_java_{approach}.yaml` - Java
- [ ] `sol_kotlin_{approach}.yaml` - Kotlin
- [ ] `sol_js_{approach}.yaml` - JavaScript
- [ ] `sol_scala_{approach}.yaml` - Scala
- [ ] `sol_rust_{approach}.yaml` - Rust

**Para cada arquivo:**
- [ ] `solution_id` correto
- [ ] `approach` com name e tags
- [ ] `complexity` com time e space
- [ ] `text.rationale_md` específico para a linguagem
- [ ] `text.walkthrough_md` com exemplo passo-a-passo
- [ ] `pitfalls` específicos da linguagem (mínimo 3)
- [ ] `tradeoffs` (mínimo 3)
- [ ] `comparison_notes` com highlights e gotchas
- [ ] `review_questions` (mínimo 3)
- [ ] `code_artifacts` com path correto
- [ ] `history`

---

### 🧪 5. Testes

- [ ] Testar **Python** no LeetCode
- [ ] Testar **Go** no LeetCode
- [ ] Testar **Java** no LeetCode
- [ ] Testar **Kotlin** no LeetCode
- [ ] Testar **JavaScript** no LeetCode
- [ ] Testar **Scala** no LeetCode
- [ ] Testar **Rust** no LeetCode

---

### 🌐 6. Validação no App

- [ ] Executar `npm run dev`
- [ ] Verificar problema na Library
- [ ] Abrir página do problema
- [ ] Verificar aba Overview
- [ ] Verificar aba Solutions (7 soluções)
- [ ] Verificar aba Compare
- [ ] Verificar aba Deep Dive
- [ ] Verificar renderização de código
- [ ] Verificar Mermaid diagrams

---

### 📝 7. Finalização

- [ ] Atualizar `study.solved_at` se resolvido
- [ ] Adicionar entry no `history`
- [ ] Commit com mensagem descritiva

**Commit message:**
```
feat(problems): add LeetCode #{NÚMERO} - {Título}

- Added problem definition with {N} solutions
- Languages: Python, Go, Java, Kotlin, JavaScript, Scala, Rust
- Paradigms: imperative, OOP, functional
```

---

## 🚀 Quick Reference: Abordagens Comuns

| Problema Tipo | Abordagem | Tags |
|---------------|-----------|------|
| Find pair/sum | HashMap | `hash-map`, `single-pass` |
| Linked list manipulation | Iterative/Recursive | `linked-list`, `carry-handling` |
| Sorted array search | Binary Search | `binary-search`, `two-pointers` |
| Substring/subarray | Sliding Window | `sliding-window`, `two-pointers` |
| Tree traversal | DFS/BFS | `tree`, `recursion`, `stack` |
| Shortest path | BFS | `graph`, `bfs`, `queue` |
| Optimization | DP | `dynamic-programming`, `memoization` |

---

## ⏱️ Tempo Estimado

| Etapa | Tempo |
|-------|-------|
| Criação de pastas | 1 min |
| problem.yaml | 20-30 min |
| Código (7 linguagens) | 30-45 min |
| YAMLs de solução (7) | 20-30 min |
| Testes no LeetCode | 15-20 min |
| Validação no App | 5-10 min |
| **Total** | **1.5-2.5 horas** |
