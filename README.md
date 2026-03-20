# IZDIHAR CLUB — Site Oficial

Curadoria de Perfumes Árabes | Jefferson Santos

## Tecnologias
- React 18 + Vite 5
- CSS puro (zero dependências de UI)
- Deploy: Render (plano free)

## Desenvolvimento local
```bash
npm install
npm run dev
```
Acesse: http://localhost:3000

## Deploy no Render (passo a passo)

1. Crie uma conta em https://render.com
2. No dashboard, clique em **New → Web Service**
3. Conecte seu repositório GitHub com este projeto
4. Configure:
   - **Name**: izdihar-club
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview -- --host 0.0.0.0 --port $PORT`
5. Clique em **Create Web Service**
6. Aguarde o build (~2 min) e seu site estará no ar!

## Estrutura de arquivos
```
src/
  components/
    Header.jsx / .css    → Navbar fixa, carrinho
    Hero.jsx / .css      → Seção inicial com canvas de partículas
    About.jsx / .css     → Quem somos
    Products.jsx / .css  → Cards com flip 3D
    Cart.jsx / .css      → Gaveta lateral do carrinho
    Contact.jsx / .css   → Contato + botão WhatsApp
    Footer.jsx / .css    → Rodapé
  App.jsx / .css         → Raiz da aplicação
  index.css              → Variáveis e estilos globais
public/
  images/                → Logos e fotos dos produtos
```

## WhatsApp
Número configurado: +55 32 98817-8190
