# **PSLIB-EDU Phishing Demo**
Projekt simulující přihlašovací stránku nového vzdělávacího portálu PSLIB.

# **Hosting a Deployment**
1. **Frontend**
   - Hostováno na GitHub Pages
   - Vlastní doména: `pslib-edu.cz`
   - Automatický deployment při push do main větve

2. **Backend**
   - Běží na platformě Render.com
   - Starter tier s 24/7 dostupností
   - Automatický deployment z GitHubu

3. **Databáze**
   - MongoDB Atlas
   - Ukládání získaných přihlašovacích údajů
   - Připojení přes URI v .env na Render.com

# **Architektura projektu**
Projekt je rozdělen na dvě hlavní části:
1. **Frontend** (React aplikace)
2. **Backend** (Node.js/Express + MongoDB)

## **Frontend Struktura**
### **Klíčové Komponenty:**
1. **Přihlašovací Stránka** (`/src/pages/Login.tsx`)
   - Hlavní a jediná komponenta celé aplikace
   - Využívá Tailwind CSS pro stylování
   - Obsahuje přihlašovací formulář
   - Po odeslání přesměrovává na školní 404

2. **App Komponenta** (`/App.tsx`)
   - Pouze renderuje Login komponentu
   - Minimální konfigurace

### **Konfigurační Soubory:**
- `package.json` - Obsahuje především React, Axios a Tailwind
- `tailwind.config.js` - Standardní konfigurace
- `tsconfig.json` - TypeScript nastavení
- `index.css` - Import Tailwind CSS

## **Backend Struktura**
### **Server** (`/src/app.ts`)
- Express aplikace
- CORS povolení pro pslib-edu.cz
- Připojení k MongoDB Atlas
- Jeden endpoint pro přihlášení

### **Modely** (`/src/models/credential.model.ts`)
MongoDB schéma pro uložení:
- Uživatelského jména
- Hesla
- IP adresy
- User Agent informací
- Časové značky
- ID kampaně

### **Routes** (`/src/routes/credential.routes.ts`)
- Jediná POST route pro credentials

### **Controller** (`/src/controllers/credential.controller.ts`)
- Zpracování přihlašovacích údajů
- Uložení do MongoDB Atlas
- Vrací redirect na 404 stránku školy

### **Database** (`/src/config/db.ts`)
- Připojení k MongoDB Atlas
- Základní error handling

## **Funkcionalita**
1. Uživatel přijde na stránku přes pslib-edu.cz
2. Vidí přihlašovací formulář stylizovaný pro PSLIB-EDU
3. Zadá přihlašovací údaje
4. Backend na Render.com:
   - Uloží údaje do MongoDB Atlas
   - Vrátí redirect URL
5. Frontend přesměruje na školní 404

## **Monitoring a Dostupnost**
- 24/7 dostupnost díky Starter tieru na Render.com
- Automatický monitoring od Render.com
- Sledování výkonu a zatížení
- Okamžitá notifikace při výpadcích
- Statistiky využití zdrojů

## **Deployment Workflow**
1. **Frontend**
   - Push do main větve na GitHubu
   - Automatický build a deploy na GitHub Pages
   - Dostupné přes pslib-edu.cz

2. **Backend**
   - Push do main větve
   - Automatický deploy na Render.com
   - Nepřetržitý provoz na Starter tieru

## **Bezpečnost**
- HTTPS na vlastní doméně
- CORS omezení na pslib-edu.cz
- MongoDB Atlas authentication
- Environmentální proměnné na Render.com
- Stabilní 24/7 provoz na Starter tieru
- Monitoring bezpečnostních hrozeb

**Současný Stav**
Projekt je plně funkční s implementovanou základní funkcionalitou phishingové simulace školního vzdělávacího portálu. Frontend běží na GitHub Pages s vlastní doménou pslib-edu.cz, backend je nasazen na Render.com (Starter tier) s 24/7 dostupností a data jsou ukládána do MongoDB Atlas. Přihlašovací stránka simuluje nový školní portál a po zadání údajů přesměrovává na školní 404.
