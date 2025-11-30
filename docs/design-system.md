# Design System - Saldo Certo

## Visão Geral
O Design System do Saldo Certo busca uma estética moderna, minimalista e premium, utilizando cores suaves (pastéis) e tipografia limpa.

## Tokens Principais

### Cores
As cores são definidas em `src/styles/tokens.css`.
- **Primary**: Amarelo suave (`#fef3c7`) com texto escuro/marrom (`#92400e`).
- **Secondary**: Cinza claro (`#f3f4f6`).
- **Accent**: Roxo suave (`#e9d5ff`).
- **Background**: Branco puro (`#ffffff`).
- **Muted**: Cinza muito claro (`#f8f9fa`) para fundos secundários.

### Tipografia
- Fonte principal: Geist Sans.
- Fonte mono: Geist Mono.

### Bordas e Sombras
- **Radius**: Cantos arredondados generosos (`rounded-2xl`, `rounded-xl`) para cards e botões.
- **Shadows**: Sombras suaves e difusas (`shadow-sm`, `shadow-md`) para profundidade sutil.

## Componentes Chave

### Botões (`src/components/ui/button.tsx`)
- Variantes: `default` (preto), `primary` (amarelo), `outline`, `ghost`.
- Tamanhos: `sm`, `default`, `lg`, `icon`.
- Arredondamento: `rounded-xl`.

### Cards (`src/components/ui/card.tsx`)
- Wrapper padrão para conteúdo.
- `rounded-2xl`, borda sutil, sombra leve ao hover.

### Inputs (`src/components/ui/input.tsx`)
- Estilo minimalista, foco com anel suave.

### Modais e Panels (`src/components/ui/BaseModal.tsx`, `SidePanel.tsx`)
- Animações fluidas com `framer-motion`.
- Backdrop com blur (`backdrop-blur-sm`).
- Acessíveis (focus management, esc to close).

### Feedback
- **Toast**: Para notificações temporárias.
- **EmptyState**: Para listas vazias.
- **ErrorStatePage / Inline**: Para tratamento de erros.

## Estrutura de Pastas
- `src/components/ui`: Componentes primitivos (atômicos).
- `src/components/layout`: Componentes estruturais (Sidebar, Header).
- `src/components/feedback`: Estados de interface.
- `src/components/auth`: Componentes de formulário de autenticação.
- `src/components/onboarding`: Componentes específicos do fluxo de onboarding.

