# 02 - Schema do problem.yaml

## 📋 Estrutura Completa

```yaml
schema_version: 3

# ============================================
# IDENTIFICAÇÃO
# ============================================
problem_id: "lc:{NÚMERO}:{SLUG}"      # ID único (ex: "lc:1:two_sum")
slug: "lc_{NÚMERO_4D}_{SLUG}"          # Slug da pasta (ex: "lc_0001_two_sum")
title: "{NÚMERO}. {TÍTULO}"            # Título display (ex: "1. Two Sum")

# ============================================
# FONTE
# ============================================
source:
  platform: "leetcode"
  id: {NÚMERO}                         # Número inteiro
  slug: "{leetcode-slug}"              # Slug do LeetCode (kebab-case)
  url: "https://leetcode.com/problems/{slug}/"

# ============================================
# CATÁLOGO
# ============================================
catalog:
  difficulty: "easy|medium|hard"
  topics:                              # Lista de tópicos
    - "Array"
    - "Hash Table"
    - "String"
    # ... outros
  patterns:                            # Padrões algorítmicos
    - "Hash Map Lookup"
    - "Two Pointers"
    - "Sliding Window"
    # ... outros
  companies:                           # Empresas que perguntam
    - "Amazon"
    - "Google"
    - "Microsoft"
    # ... outras

# ============================================
# CONSTRAINTS
# ============================================
constraints:
  summary: "Resumo das constraints em uma linha"
  notes_md: |
    - Constraint 1
    - Constraint 2
    - Constraint 3

# ============================================
# ESTUDO
# ============================================
study:
  status: "todo|in_progress|solved|needs_review"
  priority: 1-5                        # 1=baixa, 5=alta
  confidence: 1-5                      # 1=baixa, 5=alta
  created_at: "YYYY-MM-DD"
  solved_at: "YYYY-MM-DD"              # null se não resolvido
  time_spent_min: {MINUTOS}
  review:
    srs_enabled: true|false
    next_review: "YYYY-MM-DD"
    interval_days: {DIAS}
  mistakes:                            # Erros cometidos
    - "Descrição do erro 1"
    - "Descrição do erro 2"

# ============================================
# CONTEÚDO
# ============================================
content:
  statement_md: |
    Enunciado completo do problema em Markdown.
    Incluir exemplos formatados.

  editorial_summary_md: |
    Resumo da solução ótima em 2-3 frases.

  key_insights:
    - "Insight 1 sobre o problema"
    - "Insight 2 sobre a solução"
    - "Insight 3 sobre complexidade"

  pitfalls:
    - "Armadilha comum 1"
    - "Armadilha comum 2"

  review_questions:
    - "Pergunta de revisão 1?"
    - "Pergunta de revisão 2?"

  # ----------------------------------------
  # EDITORIAL (Deep Dive)
  # ----------------------------------------
  editorial:
    algorithm_blueprint:
      compact_md: "Descrição compacta do algoritmo"
      mermaid:
        type: "flowchart"
        direction: "TD|LR"
        code: |
          flowchart TD
            A[Start] --> B[Step 1]
            B --> C{Decision}
            C -- Yes --> D[Action]
            C -- No --> E[Other]

    alternative_approaches:
      - name: "Nome da Abordagem"
        idea_md: "Descrição da ideia"
        time: "O(n²)"
        space: "O(1)"
        preserve_indices: true|false
        when_to_use_md: "Quando usar"
        why_not_md: "Por que não usar aqui"
        pitfalls:
          - "Armadilha 1"

    when_not_to_use:
      heuristics_md: |
        Quando a solução principal NÃO é ideal.
      scenarios:
        - scenario: "Cenário específico"
          why_md: "Por que não funciona"
          recommended_instead:
            - name: "Alternativa"
              note_md: "Nota sobre a alternativa"

    common_mistakes:
      - mistake: "Descrição do erro"
        why_md: "Por que é errado"
        fix_md: "Como corrigir"
        example_bad_md: |
          ```python
          # Código errado
          ```
        example_good_md: |
          ```python
          # Código correto
          ```
        tags:
          - "off-by-one"
          - "edge-case"

    complexity_notes:
      compact_md: "Time: O(?), Space: O(?)"
      detailed_md: |
        ## Time Complexity: O(?)
        Explicação detalhada...

        ## Space Complexity: O(?)
        Explicação detalhada...
      notes:
        - "Nota adicional 1"
      gotchas:
        - "Gotcha 1"
      references:
        - label: "Título do Link"
          url: "https://..."

# ============================================
# ÍNDICE DE SOLUÇÕES
# ============================================
solutions_index:
  - solution_id: "sol:lc:{NÚMERO}:{SLUG}:{LANG}:{APPROACH}:v1"
    language: "{LANG}"
    paradigm: "imperative|oop_classic|oop_prototype|functional"
    title: "{LANG} {APPROACH} Solution"
    status: "todo|in_progress|done"
    approach_tags:
      - "tag1"
      - "tag2"
    solution_ref: "solutions/sol_{LANG}_{APPROACH}.yaml"

# ============================================
# HISTÓRICO
# ============================================
history:
  - at: "YYYY-MM-DD"
    change: "Descrição da mudança"
```

## 📊 Valores Válidos

### difficulty
- `easy`
- `medium`
- `hard`

### topics (principais)
- `Array`, `String`, `Hash Table`, `Linked List`
- `Tree`, `Binary Tree`, `Binary Search Tree`
- `Graph`, `Dynamic Programming`, `Greedy`
- `Backtracking`, `Recursion`, `Math`
- `Bit Manipulation`, `Stack`, `Queue`
- `Heap`, `Trie`, `Union Find`

### patterns (principais)
- `Hash Map Lookup`, `Two Pointers`, `Sliding Window`
- `Binary Search`, `BFS`, `DFS`
- `Dynamic Programming`, `Greedy`
- `Divide and Conquer`, `Backtracking`
- `Topological Sort`, `Union Find`

### paradigm
- `imperative` (Python, Go)
- `oop_classic` (Java, Kotlin)
- `oop_prototype` (JavaScript)
- `functional` (Scala, Rust)
