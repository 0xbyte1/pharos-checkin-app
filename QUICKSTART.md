# 🚀 Hızlı Başlangıç

## 1️⃣ Bağımlılıkları Yükleyin

```bash
cd pharos-checkin-app
npm install
```

## 2️⃣ Environment Variables Ayarlayın

`.env.local` dosyası zaten doğru bilgilerle güncellenmiş durumda:

```env
NEXT_PUBLIC_PHAROS_RPC_URL=https://testnet.dplabs-internal.com
NEXT_PUBLIC_CHAIN_ID=688688
NEXT_PUBLIC_CONTRACT_ADDRESS=0x94bc90f31bf2422e0cabf0ab95f18a79b1770e11
```

> **✅ Hazır!** Contract zaten deploy edilmiş ve yapılandırılmış!

## 3️⃣ Smart Contract'ı Deploy Edin

### ✅ Contract Zaten Deploy Edildi!

**Contract Adresi:** `0x94bc90f31bf2422e0cabf0ab95f18a79b1770e11`

Contract Pharos Testnet üzerine başarıyla deploy edilmiştir. Bu adımı atlayıp direkt 4. adıma geçebilirsiniz!

**Explorer'da Görüntüle:**
https://testnet.pharosscan.xyz/address/0x94bc90f31bf2422e0cabf0ab95f18a79b1770e11

> 💡 **Not:** Kendi contract'ınızı deploy etmek isterseniz `DEPLOY.md` dosyasındaki talimatları takip edebilirsiniz.

## 4️⃣ Development Server'ı Başlatın

```bash
npm run dev
```

Tarayıcıda açın: http://localhost:3000

## 5️⃣ Uygulamayı Test Edin

1. **MetaMask'ı açın** ve Pharos Testnet'e bağlı olduğunuzdan emin olun
2. Testnet token'larınız olduğundan emin olun (faucet'ten alın)
3. **"Cüzdan Bağla"** butonuna tıklayın
4. MetaMask'ta bağlantıyı onaylayın
5. **"Daily Check-in Yap"** butonuna tıklayın
6. MetaMask'ta işlemi onaylayın
7. İşlem tamamlandığında sayacınızın arttığını göreceksiniz! 🎉

## 6️⃣ Production Build

```bash
npm run build
npm start
```

## 7️⃣ Vercel'e Deploy

### Vercel Dashboard Üzerinden:

1. [Vercel](https://vercel.com) hesabınıza giriş yapın
2. "New Project" oluşturun
3. GitHub repository'nizi seçin
4. Environment Variables ekleyin:
   - `NEXT_PUBLIC_PHAROS_RPC_URL`
   - `NEXT_PUBLIC_CHAIN_ID`
   - `NEXT_PUBLIC_CONTRACT_ADDRESS`
5. "Deploy" butonuna tıklayın

### Vercel CLI ile:

```bash
npm install -g vercel
vercel login
vercel
```

## ⚠️ Sorun Giderme

### "MetaMask yükleyin" hatası
- MetaMask browser eklentisinin yüklü olduğundan emin olun

### "Contract adresi ayarlanmamış" hatası
- `.env.local` dosyasında `NEXT_PUBLIC_CONTRACT_ADDRESS` değerini kontrol edin
- Contract'ın başarıyla deploy edildiğinden emin olun

### "Insufficient funds" hatası
- Pharos Testnet faucet'ten token alın
- Cüzdanınızda yeterli test token'ı olduğundan emin olun

### Ağ bağlantı hatası
- Pharos Testnet RPC URL'sinin doğru olduğundan emin olun
- İnternet bağlantınızı kontrol edin

## 📚 Daha Fazla Bilgi

- **Detaylı Dokümantasyon:** `README.md`
- **Deploy Talimatları:** `DEPLOY.md`
- **Smart Contract:** `contracts/DailyCheckIn.sol`

## 🎯 İlk Check-in'inizi Yapın!

Artık hazırsınız! MetaMask'ınızı bağlayın ve ilk daily check-in'inizi yapın! 🚀
