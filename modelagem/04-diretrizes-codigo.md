# 04 - Diretrizes para Implementação de Código

## 🐍 Python

### Estrutura Padrão
```python
# Definition for [structure] (comentário do LeetCode)
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def methodName(self, param1: Type1, param2: Type2) -> ReturnType:
        """
        {Título} - Python {Abordagem} Solution
        Time: O(?), Space: O(?)
        
        Breve descrição da abordagem.
        """
        # Implementação
        pass
```

### Convenções
- ✅ Type hints opcionais mas recomendados
- ✅ Docstring com complexidade
- ✅ Comentários explicativos em pontos-chave
- ✅ Usar `if x` ao invés de `if x is not None` quando apropriado
- ✅ Preferir `//` para divisão inteira
- ❌ Não usar `return` em meio a loops sem necessidade

---

## 🔵 Go

### Estrutura Padrão
```go
package main

/**
 * Definition for [structure].
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

// methodName - descrição breve
// Time: O(?), Space: O(?)
func methodName(param1 Type1, param2 Type2) ReturnType {
    // Implementação
    return result
}
```

### Convenções
- ✅ Comentário de documentação antes da função
- ✅ Nomes exportados começam com maiúscula
- ✅ Verificar `nil` explicitamente
- ✅ Usar `var` para declarações zero-value
- ❌ Go não tem ternário - usar if/else

---

## ☕ Java

### Estrutura Padrão
```java
/**
 * Definition for [structure].
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

/**
 * {Título} - Java OOP {Abordagem} Solution
 * Time: O(?), Space: O(?)
 */
class Solution {
    public ReturnType methodName(Type1 param1, Type2 param2) {
        // Implementação
        return result;
    }
}
```

### Convenções
- ✅ Javadoc com complexidade
- ✅ Usar ternário para null checks: `(x != null) ? x.val : 0`
- ✅ Classe `Solution` sem modificador público (LeetCode)
- ✅ Divisão inteira automática para `int`
- ❌ Não definir `struct Solution` (LeetCode fornece)

---

## 🟣 Kotlin

### Estrutura Padrão
```kotlin
/**
 * Definition for [structure].
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */

/**
 * {Título} - Kotlin OOP {Abordagem} Solution
 * Time: O(?), Space: O(?)
 * 
 * Descrição adicional se necessário.
 */
class Solution {
    fun methodName(param1: Type1?, param2: Type2?): ReturnType? {
        // Implementação
        return result
    }
}
```

### Convenções
- ✅ Usar null-safety: `?.`, `?:`, `!!`
- ✅ Backticks para palavras reservadas: `` `val` ``
- ✅ `val` para imutáveis, `var` para mutáveis
- ✅ Elvis operator: `x?.value ?: 0`
- ❌ Evitar `!!` quando possível (preferir `?.let`)

---

## 🟡 JavaScript

### Estrutura Padrão
```javascript
/**
 * Definition for [structure].
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * {Título} - JavaScript {Abordagem} Solution
 * Time: O(?), Space: O(?)
 * 
 * @param {Type1} param1
 * @param {Type2} param2
 * @return {ReturnType}
 */
var methodName = function(param1, param2) {
    // Implementação
    return result;
};
```

### Convenções
- ✅ JSDoc com tipos
- ✅ Usar `!== null` em vez de `!= null`
- ✅ `Math.floor()` para divisão inteira
- ✅ Ternário para null checks: `x ? x.val : 0`
- ❌ Não usar `==` (usar `===`)

---

## 🔴 Scala

### Estrutura Padrão
```scala
/**
 * Definition for [structure].
 * class ListNode(_x: Int = 0, _next: ListNode = null) {
 *   var next: ListNode = _next
 *   var x: Int = _x
 * }
 */

/**
 * {Título} - Scala {Abordagem} Solution
 * Time: O(?), Space: O(?)
 * 
 * Descrição adicional se necessário.
 */
object Solution {
  def methodName(param1: Type1, param2: Type2): ReturnType = {
    // Implementação - usar tail recursion ou pattern matching
    result
  }
}
```

### Convenções
- ✅ Usar `@tailrec` para recursão
- ✅ Pattern matching ao invés de if/else
- ✅ Evitar `var`, preferir `val`
- ✅ Último valor é retornado automaticamente
- ❌ **NÃO usar `return`** (Scala 3 não suporta em loops)

---

## 🟠 Rust

### Estrutura Padrão
```rust
// Definition for [structure].
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode { next: None, val }
//   }
// }

impl Solution {
    pub fn method_name(param1: Type1, param2: Type2) -> ReturnType {
        // Implementação
        result
    }
}
```

### Convenções
- ✅ Usar `Option<Box<T>>` para nullable pointers
- ✅ `as_ref()` para borrow sem move
- ✅ `map_or(default, closure)` para Option handling
- ✅ Último valor é retornado automaticamente
- ❌ **NÃO definir `struct Solution`** (LeetCode fornece)

---

## 📝 Comentários Padrão

### Header de Função
```
{Título} - {Linguagem} {Abordagem} Solution
Time: O(?), Space: O(?)
```

### Seções do Código
```
// Initialize [structure/variables]
// Process/Traverse [structure]
// Handle [edge case]
// Return result
```

## ⚠️ Erros Comuns a Evitar

| Linguagem | Erro | Correção |
|-----------|------|----------|
| Scala | Usar `return` | Usar recursão ou última expressão |
| Rust | Definir `struct Solution` | Apenas `impl Solution` |
| JavaScript | Usar `==` | Usar `===` |
| Kotlin | Esquecer `!!` após `?.next` | Verificar contexto de null-safety |
| Go | Esquecer nil check | Sempre verificar antes de acessar |
