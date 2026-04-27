# 06 - Templates

## 📁 Template: Estrutura de Pastas

```
data/problems/lc_XXXX_problem_slug/
├── problem.yaml
├── code/
│   ├── sol_py_approach.py
│   ├── sol_go_approach.go
│   ├── sol_java_approach.java
│   ├── sol_kotlin_approach.kt
│   ├── sol_js_approach.js
│   ├── sol_scala_approach.scala
│   └── sol_rust_approach.rs
└── solutions/
    ├── sol_py_approach.yaml
    ├── sol_go_approach.yaml
    ├── sol_java_approach.yaml
    ├── sol_kotlin_approach.yaml
    ├── sol_js_approach.yaml
    ├── sol_scala_approach.yaml
    └── sol_rust_approach.yaml
```

---

## 📄 Template: problem.yaml (Mínimo)

```yaml
schema_version: 3
problem_id: "lc:XXX:problem_slug"
slug: "lc_XXXX_problem_slug"
title: "XXX. Problem Title"

source:
  platform: "leetcode"
  id: XXX
  slug: "problem-slug"
  url: "https://leetcode.com/problems/problem-slug/"

catalog:
  difficulty: "easy"
  topics:
    - "Topic1"
    - "Topic2"
  patterns:
    - "Pattern1"
  companies:
    - "Company1"

constraints:
  summary: "Constraints summary"
  notes_md: |
    - Constraint 1
    - Constraint 2

study:
  status: "todo"
  priority: 3
  confidence: 1
  created_at: "2024-XX-XX"

content:
  statement_md: |
    Problem statement here.

    **Example 1:**
    ```
    Input: ...
    Output: ...
    ```

  editorial_summary_md: |
    Brief solution summary.

  key_insights:
    - "Insight 1"
    - "Insight 2"
    - "Insight 3"

  pitfalls:
    - "Pitfall 1"
    - "Pitfall 2"

  review_questions:
    - "Question 1?"
    - "Question 2?"

  editorial:
    algorithm_blueprint:
      compact_md: "Algorithm description"
      mermaid:
        type: "flowchart"
        direction: "TD"
        code: |
          flowchart TD
            A[Start] --> B[Process]
            B --> C[End]

    complexity_notes:
      compact_md: "Time: O(?), Space: O(?)"

solutions_index:
  - solution_id: "sol:lc:XXX:problem_slug:python:approach:v1"
    language: "python"
    paradigm: "imperative"
    title: "Python Solution"
    status: "todo"
    approach_tags:
      - "tag1"
    solution_ref: "solutions/sol_py_approach.yaml"

history:
  - at: "2024-XX-XX"
    change: "Initial setup"
```

---

## 💻 Templates de Código

### Python
```python
class Solution:
    def methodName(self, params) -> ReturnType:
        """
        Problem Title - Python Approach Solution
        Time: O(?), Space: O(?)
        """
        # Implementation
        pass
```

### Go
```go
func methodName(params) ReturnType {
    // Problem Title - Go Approach Solution
    // Time: O(?), Space: O(?)
    
    // Implementation
    return result
}
```

### Java
```java
class Solution {
    public ReturnType methodName(params) {
        // Problem Title - Java Approach Solution
        // Time: O(?), Space: O(?)
        
        // Implementation
        return result;
    }
}
```

### Kotlin
```kotlin
class Solution {
    fun methodName(params): ReturnType? {
        // Problem Title - Kotlin Approach Solution
        // Time: O(?), Space: O(?)
        
        // Implementation
        return result
    }
}
```

### JavaScript
```javascript
var methodName = function(params) {
    // Problem Title - JavaScript Approach Solution
    // Time: O(?), Space: O(?)
    
    // Implementation
    return result;
};
```

### Scala
```scala
object Solution {
  def methodName(params): ReturnType = {
    // Problem Title - Scala Approach Solution
    // Time: O(?), Space: O(?)
    
    // Implementation
    result
  }
}
```

### Rust
```rust
impl Solution {
    pub fn method_name(params) -> ReturnType {
        // Problem Title - Rust Approach Solution
        // Time: O(?), Space: O(?)
        
        // Implementation
        result
    }
}
```

---

## 📑 Template: solution.yaml (Mínimo)

```yaml
schema_version: 3
solution_id: "sol:lc:XXX:problem_slug:lang:approach:v1"
problem_id: "lc:XXX:problem_slug"
language: "python"
paradigm: "imperative"

approach:
  name: "Approach Name"
  tags:
    - "tag1"
    - "tag2"

complexity:
  time: "O(?)"
  space: "O(?)"

text:
  rationale_md: |
    # Rationale
    
    Explanation of why this solution works.

  walkthrough_md: |
    # Step-by-Step Walkthrough
    
    Given `input = [example]`:
    
    1. Step 1
    2. Step 2

pitfalls:
  - "Pitfall 1"
  - "Pitfall 2"

tradeoffs:
  - "Tradeoff 1"

comparison_notes:
  highlights:
    - "Highlight 1"
  gotchas_language_specific:
    - "Gotcha 1"

review_questions:
  - "Question 1?"

code_artifacts:
  - code_id: "code:sol:lc:XXX:problem_slug:lang:approach:v1:solution"
    lang: "python"
    role: "solution"
    path: "../code/sol_py_approach.py"
    render:
      syntax: "python"
      show_line_numbers: true
      default_view: "code"

history:
  - at: "2024-XX-XX"
    change: "Initial solution"
```

---

## 🔄 Script PowerShell: Criar Estrutura

```powershell
# Uso: .\create-problem.ps1 -Number 42 -Slug "trapping_rain_water"

param(
    [int]$Number,
    [string]$Slug
)

$paddedNumber = $Number.ToString("D4")
$folderName = "lc_${paddedNumber}_${Slug}"
$basePath = "data/problems/$folderName"

# Criar estrutura
New-Item -ItemType Directory -Path "$basePath/code" -Force
New-Item -ItemType Directory -Path "$basePath/solutions" -Force

Write-Host "Created structure for $folderName"
Write-Host "Next steps:"
Write-Host "1. Create problem.yaml"
Write-Host "2. Create code files"
Write-Host "3. Create solution YAMLs"
```

---

## 📋 Substituições Rápidas

| Placeholder | Descrição | Exemplo |
|-------------|-----------|---------|
| `XXX` | Número do problema | `42` |
| `XXXX` | Número com 4 dígitos | `0042` |
| `problem_slug` | Slug snake_case | `trapping_rain_water` |
| `problem-slug` | Slug kebab-case | `trapping-rain-water` |
| `Problem Title` | Título do problema | `Trapping Rain Water` |
| `approach` | Abordagem | `stack`, `dp`, `twopointers` |
| `lang` | Linguagem | `python`, `go`, `java` |
