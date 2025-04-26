# Next.js Invoice App

**Fatura Yönetim Uygulaması | Invoice Management Application**  
Bu proje Next.js 14, Drizzle ORM, Xata, Shadcn/UI, React Hook Form ve Tailwind CSS kullanılarak geliştirilmiştir.

## Özellikler | Features

- Kullanıcı dostu fatura yönetimi
- Fatura oluşturma, listeleme, güncelleme ve silme işlemleri
- Drizzle ORM ile veritabanı yönetimi
- Xata veritabanı servisi kullanımı
- Shadcn/UI bileşenleri ile modern arayüz
- Tailwind CSS ile hızlı ve responsive tasarım
- React Hook Form ile güçlü form yönetimi
- Server Actions ve App Router (Next.js 14) mimarisi

---

## Kurulum | Setup

### 1. Projeyi Klonla | Clone the repository

```bash
git clone https://github.com/EmirhanG7/nextjs-invoice-app.git
cd nextjs-invoice-app
```

### 2. Bağımlılıkları Yükle | Install dependencies

```bash
npm install
```
veya
```bash
yarn install
```

### 3. Ortam Değişkenlerini Ayarla | Set environment variables

Proje kök dizinine `.env.local` dosyası oluştur ve aşağıdaki değişkenleri tanımla:

```env
DATABASE_URL=<your_xata_or_postgres_url>
NEXT_PUBLIC_XATA_API_KEY=<your_xata_api_key>
NEXT_PUBLIC_XATA_BRANCH=main
```

### 4. Veritabanı Migrasyonları | Run database migrations

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

### 5. Uygulamayı Başlat | Start the application

```bash
npm run dev
```
veya
```bash
yarn dev
```

### 6. Uygulamayı Görüntüle | View it

Tarayıcıdan aç:  
[http://localhost:3000](http://localhost:3000)

---

## Kullanılan Teknolojiler | Technologies Used

- [Next.js 14](https://nextjs.org/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Xata](https://xata.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.dev/)
- [React Hook Form](https://react-hook-form.com/)
