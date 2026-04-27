# 03 - Schema das Soluções (YAML)

## 📋 Estrutura Completa

```yaml
schema_version: 3

# ============================================
# IDENTIFICAÇÃO
# ============================================
solution_id: "sol:lc:{NÚMERO}:{SLUG}:{LANG}:{APPROACH}:v1"
problem_id: "lc:{NÚMERO}:{SLUG}"
language: "{LANG}"                     # python, go, java, kotlin, javascript, scala, rust
paradigm: "{PARADIGMA}"                # imperative, oop_classic, oop_prototype, functional

# ============================================
# ABORDAGEM
# ============================================
approach:
  name: "{Nome da Abordagem}"          # Ex: "Hash Map Single Pass"
  tags:
    - "tag1"
    - "tag2"
    - "tag3"

# ============================================
# COMPLEXIDADE
# ============================================
complexity:
  time: "O(?)"                         # Ex: "O(n)", "O(n log n)", "O(n²)"
  space: "O(?)"                        # Ex: "O(1)", "O(n)", "O(n²)"

# ============================================
# TEXTO EXPLICATIVO
# ============================================
text:
  rationale_md: |
    # Rationale

    Explicação do porquê esta solução funciona.
    Mencionar características específicas da linguagem.

    Key advantages in {LANG}:
    - Vantagem 1
    - Vantagem 2
    - Vantagem 3

  walkthrough_md: |
    # Step-by-Step Walkthrough

    Given `input = [exemplo]`:

    1. **Step 1**: descrição
       - detalhe
       - resultado

    2. **Step 2**: descrição
       - detalhe
       - resultado

    Final result: [resultado]

# ============================================
# ARMADILHAS
# ============================================
pitfalls:
  - "Armadilha específica da linguagem 1"
  - "Armadilha específica da linguagem 2"
  - "Armadilha específica do algoritmo"

# ============================================
# TRADEOFFS
# ============================================
tradeoffs:
  - "Tradeoff 1 (vantagem vs desvantagem)"
  - "Tradeoff 2"
  - "Tradeoff 3"

# ============================================
# NOTAS DE COMPARAÇÃO
# ============================================
comparison_notes:
  highlights:
    - "Destaque 1 da linguagem"
    - "Destaque 2"
    - "Destaque 3"
  gotchas_language_specific:
    - "Gotcha específico da linguagem 1"
    - "Gotcha específico da linguagem 2"
    - "Gotcha específico da linguagem 3"

# ============================================
# PERGUNTAS DE REVISÃO
# ============================================
review_questions:
  - "Pergunta de revisão 1?"
  - "Pergunta de revisão 2?"
  - "Pergunta de revisão 3?"

# ============================================
# ARTEFATOS DE CÓDIGO
# ============================================
code_artifacts:
  - code_id: "code:sol:lc:{NÚMERO}:{SLUG}:{LANG}:{APPROACH}:v1:solution"
    lang: "{LANG}"
    role: "solution"                   # solution, test, helper
    path: "../code/sol_{LANG}_{APPROACH}.{EXT}"
    render:
      syntax: "{LANG}"
      show_line_numbers: true
      default_view: "code"

# ============================================
# HISTÓRICO
# ============================================
history:
  - at: "YYYY-MM-DD"
    change: "Descrição da mudança"
```

## 📊 Campos Obrigatórios

| Campo | Obrigatório | Descrição |
|-------|-------------|-----------|
| `schema_version` | ✅ | Sempre `3` |
| `solution_id` | ✅ | ID único da solução |
| `problem_id` | ✅ | Referência ao problema |
| `language` | ✅ | Linguagem de programação |
| `paradigm` | ✅ | Paradigma de programação |
| `approach.name` | ✅ | Nome da abordagem |
| `approach.tags` | ✅ | Tags da abordagem |
| `complexity.time` | ✅ | Complexidade de tempo |
| `complexity.space` | ✅ | Complexidade de espaço |
| `text.rationale_md` | ✅ | Explicação da solução |
| `text.walkthrough_md` | ✅ | Passo a passo |
| `pitfalls` | ✅ | Lista de armadilhas |
| `code_artifacts` | ✅ | Referência ao código |
| `history` | ✅ | Histórico de mudanças |

## 🏷️ Tags Comuns por Abordagem

### Estruturas de Dados
- `hash-map`, `hash-set`, `array`, `linked-list`
- `stack`, `queue`, `heap`, `tree`, `graph`
- `trie`, `union-find`

### Técnicas
- `single-pass`, `two-pass`, `multi-pass`
- `two-pointers`, `sliding-window`, `binary-search`
- `recursion`, `tail-recursion`, `iteration`
- `dynamic-programming`, `memoization`, `tabulation`
- `greedy`, `backtracking`, `divide-conquer`

### Características de Linguagem
- `null-safety`, `ownership`, `pattern-matching`
- `immutable`, `functional`, `oop`
- `prototype`, `closure`

## 🎯 Exemplo de Rationale por Linguagem

### Python
```markdown
Python's clean syntax makes [structure] manipulation straightforward.
Key advantages: truthy/falsy evaluation, list comprehensions, dynamic typing.
```

### Go
```markdown
Go's explicit pointer semantics make [structure] operations clear.
Key advantages: nil checks, struct literals, no ternary operator.
```

### Java
```markdown
Java's OOP approach with explicit [Class] makes the structure clear.
Key advantages: strong typing, generics, IDE support.
```

### Kotlin
```markdown
Kotlin's null-safety features make [structure] code more robust.
Key advantages: Elvis operator, safe calls, extension functions.
```

### JavaScript
```markdown
JavaScript's dynamic typing and truthy/falsy evaluation make code concise.
Key advantages: prototype pattern, closures, ES6 features.
```

### Scala
```markdown
Scala's functional style naturally fits [approach] solutions.
Key advantages: pattern matching, immutability, tail recursion.
```

### Rust
```markdown
Rust's ownership system makes [structure] manipulation safer.
Key advantages: Option type, iterators, zero-cost abstractions.
```
