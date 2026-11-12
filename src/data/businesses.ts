export type Business = { id: string; name: string; category: string; area: string; services: string[] };
export const businesses: Business[] = [
  { id:"demo-1", name:"استودیو زیبایی نمونه", category:"زیبایی و مراقبت", area:"سعادت‌آباد، تهران", services:["ناخن","مژه","زیبایی"] },
  { id:"demo-2", name:"تعمیرات نمونه", category:"تعمیرات و خدمات منزل", area:"صادقیه، تهران", services:["تعمیر یخچال","لباسشویی"] },
  { id:"demo-3", name:"کافه نمونه", category:"رستوران و کافه", area:"شهرک غرب، تهران", services:["قهوه","صبحانه"] },
  { id:"demo-4", name:"مرکز خدمات خودرو نمونه", category:"خودرو", area:"ونک، تهران", services:["کارشناسی خودرو","سرویس"] }
];
