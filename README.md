# Expo Supabase Starter

Minimal Expo + Supabase starter with:

- Email/password login (`app/screens/LoginScreen.js`)
- Email/password register (`app/screens/RegisterScreen.js`)
- Basic authenticated home screen (`app/screens/HomeScreen.js`)
- Supabase client setup (`lib/supabase.ts`)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` and add:

```bash
EXPO_PUBLIC_SUPABASE_URL=your-project-url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

3. Start the app:

```bash
npx expo start
```
