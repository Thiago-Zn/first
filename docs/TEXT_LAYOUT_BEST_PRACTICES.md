# Boas Práticas para Layout de Texto - Prevenção de Problemas de Largura

## Problema Identificado

Parágrafos e elementos de texto podem aparecer com largura extremamente pequena (8px, 48px) causando quebra de palavra em cada linha, formando colunas verticais ao invés de parágrafos normais.

## Causa Raiz

### 1. **Elementos em Flex Containers sem Largura Definida**

Quando elementos de texto estão dentro de um container flex sem propriedades de largura explícitas, eles podem colapsar para larguras mínimas baseadas apenas no conteúdo.

**Problema:**
```tsx
<div className="flex flex-col items-center">
  <p className="text-lg">Texto que pode quebrar palavra por palavra</p>
</div>
```

**Solução:**
```tsx
<div className="flex flex-col items-center">
  <p 
    className="text-lg max-w-2xl"
    style={{ minWidth: '280px', width: '100%', maxWidth: '42rem' }}
  >
    Texto que terá largura adequada
  </p>
</div>
```

### 2. **Motion.div Wrapper Sem Largura Definida**

Componentes `motion.div` do framer-motion podem herdar larguras mínimas quando envolvem elementos de texto sem especificações de largura.

**Problema:**
```tsx
<motion.div className="w-full">
  <p>Texto que pode quebrar incorretamente</p>
</motion.div>
```

**Solução:**
- Garantir que elementos de texto dentro de `motion.div` tenham largura mínima e máxima definidas
- Usar estilos inline como fallback quando classes Tailwind podem ser sobrescritas

### 3. **Classes Tailwind Conflitantes**

Classes como `w-full` podem conflitar com `max-w-*` quando o container pai não tem largura definida adequadamente.

**Problema:**
```tsx
<p className="w-full max-w-2xl">Texto</p>
```

**Solução:**
```tsx
<p 
  className="max-w-2xl mx-auto"
  style={{ minWidth: '280px', width: '100%', maxWidth: '42rem' }}
>
  Texto
</p>
```

## Regras de Prevenção

### ✅ Sempre Use

1. **Largura mínima para elementos de texto em flex containers:**
   ```tsx
   style={{ minWidth: '280px' }}
   ```

2. **Max-width apropriado:**
   - Parágrafos curtos: `max-w-xl` (36rem / 576px)
   - Parágrafos médios: `max-w-2xl` (42rem / 672px)
   - Parágrafos longos: `max-w-3xl` (48rem / 768px)

3. **Centralização com mx-auto:**
   ```tsx
   className="max-w-2xl mx-auto"
   ```

4. **White-space normal para evitar quebras forçadas:**
   ```tsx
   className="whitespace-normal"
   ```

### ❌ Nunca Use

1. **w-full sem max-width ou min-width em elementos de texto**
2. **Motion.div envolvendo texto sem especificar larguras no elemento de texto interno**
3. **Classes conflitantes como w-full + max-w-* sem garantir que o container pai tenha largura**

## Checklist de Implementação

Antes de criar qualquer elemento de texto:

- [ ] O elemento tem `minWidth` definida (via style inline ou classe Tailwind)?
- [ ] O elemento tem `maxWidth` apropriada?
- [ ] Se dentro de flex container, o elemento tem `width: '100%'`?
- [ ] O elemento tem `whitespace-normal` para evitar quebras forçadas?
- [ ] Se dentro de motion.div, as larguras estão definidas no elemento de texto, não apenas no wrapper?

## Exemplos de Implementação Correta

### Parágrafo Simples em Container Flex

```tsx
<div className="flex flex-col items-center">
  <p 
    className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed whitespace-normal"
    style={{ minWidth: '280px', width: '100%', maxWidth: '42rem' }}
  >
    Texto do parágrafo que terá largura adequada
  </p>
</div>
```

### Parágrafo em Motion.div

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="w-full"
>
  <p 
    className="text-lg max-w-2xl mx-auto whitespace-normal"
    style={{ minWidth: '280px', width: '100%', maxWidth: '42rem' }}
  >
    Texto com animação e largura adequada
  </p>
</motion.div>
```

### Parágrafo em ScrollReveal

```tsx
<ScrollReveal animation="fade" className="w-full">
  <p 
    className="text-lg max-w-2xl mx-auto whitespace-normal"
    style={{ minWidth: '280px', width: '100%', maxWidth: '42rem' }}
  >
    Texto com scroll reveal e largura adequada
  </p>
</ScrollReveal>
```

## Debugging

Se você encontrar texto quebrando palavra por palavra:

1. **Inspecione o elemento no DevTools:**
   - Verifique `computed width` - se for muito pequeno (< 250px), há problema
   - Verifique `max-width` - deve ser apropriado (não 48px ou 8px)
   - Verifique o container pai - deve ter largura adequada

2. **Verifique classes Tailwind:**
   - Remova `w-full` se estiver conflitando
   - Adicione `min-w-[280px]` ou use style inline

3. **Adicione estilos inline como fallback:**
   ```tsx
   style={{ minWidth: '280px', width: '100%', maxWidth: '42rem' }}
   ```

## Notas Técnicas

- O valor mínimo de 280px garante que pelo menos 3-4 palavras apareçam por linha
- Estilos inline têm maior especificidade que classes Tailwind
- Flex containers com `items-center` podem fazer elementos filhos colapsarem se não tiverem largura definida
- Motion.div do framer-motion não altera larguras automaticamente, apenas anima propriedades existentes

