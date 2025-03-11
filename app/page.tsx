import Image from 'next/image';
import { RefreshCcw, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white">
        <button className="text-blue-800 font-bold">EN</button>
        <div className="flex justify-center">
          <Image
            src="/next.svg"
            alt="BCare Logo"
            width={150}
            height={60}
            className="h-14 w-auto"
          />
        </div>
        <button className="rounded-full bg-[#146394] p-2 text-white">
          <User className="h-5 w-5" />
        </button>
      </header>

      {/* Hero Banner */}
      <div className="bg-[#146394] text-white py-8 px-4 text-center">
        <h1 className="text-3xl font-bold mb-2" dir="rtl">
          قارن ،آمن ،استلم وثيقتك
        </h1>
        <p className="text-lg" dir="rtl">
          مكان واحد وفر عليك البحث بين أكثر من 20 شركة تأمين!
        </p>
      </div>

      {/* Insurance Type Tabs */}
      <div className="grid grid-cols-4 bg-white shadow-md">
        <div className="flex flex-col items-center justify-center py-4 text-gray-500">
          <div className="h-8 w-8 mb-2">
            <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
              <path
                d="M22 16.9v-3c0-1.1-.9-2-2-2h-2V7.9c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v4h-2c-1.1 0-2 .9-2 2v3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 21v-5M5 21v-5M2 21h20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-sm" dir="rtl">
            سفر
          </span>
        </div>
        <div className="flex flex-col items-center justify-center py-4 text-gray-500">
          <div className="h-8 w-8 mb-2">
            <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
              <path
                d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 14s1.5 2 4 2 4-2 4-2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 9h.01M15 9h.01"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-sm" dir="rtl">
            اخطاء طبية
          </span>
        </div>
        <div className="flex flex-col items-center justify-center py-4 text-gray-500">
          <div className="h-8 w-8 mb-2">
            <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="text-sm" dir="rtl">
            طبي
          </span>
        </div>
        <div className="flex flex-col items-center justify-center py-4 text-pink-500 border-b-4 border-yellow-400">
          <div className="h-8 w-8 mb-2">
            <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
              <path
                d="M19 17h2c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1h-2M7 17H5c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h2"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 15V9c0-1.1-.9-2-2-2H7C5.9 7 5 7.9 5 9v6M17 15V9c0-1.1.9-2 2-2h-5c-1.1 0-2 .9-2 2v6"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 13h14M5 19h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-sm" dir="rtl">
            مركبات
          </span>
        </div>
      </div>

      {/* Main Form */}
      <div className="bg-gray-100 flex-1 p-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
          <div className="grid grid-cols-2">
            <div className="p-4 text-center bg-gray-100">
              <span className="text-gray-700" dir="rtl">
                نقل ملكية
              </span>
            </div>
            <div className="p-4 text-center bg-[#146394] text-white">
              <span dir="rtl">تأمين جديد</span>
            </div>
          </div>
        </div>

        <form className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <label className="block text-right text-gray-700 mb-2" dir="rtl">
              رقم الهوية / الإقامة
            </label>
            <Input
              type="text"
              placeholder="رقم الهوية / الإقامة"
              className="text-right placeholder:text-gray-300"
            />
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center">
              <div className="text-blue-500 text-sm" dir="ltr">
                info_i
              </div>
              <label className="block text-gray-700" dir="rtl">
                الرقم التسلسلي
              </label>
            </div>
            <Input
              type="text"
              placeholder="الرقم التسلسلي"
              className="text-right placeholder:text-gray-300"
            />
          </div>

          <div className="mb-6">
            <RadioGroup defaultValue="form" className="flex justify-between">
              <div className="flex items-center gap-2 bg-gray-100 rounded-md p-3 flex-1 justify-center">
                <Label htmlFor="customs" className="text-gray-700" dir="rtl">
                  بطاقة جمركية
                </Label>
                <RadioGroupItem value="customs" id="customs" />
              </div>
              <div className="flex items-center gap-2 bg-[#146394] rounded-md p-3 flex-1 justify-center">
                <Label htmlFor="form" className="text-white" dir="rtl">
                  استمارة
                </Label>
                <RadioGroupItem
                  value="form"
                  id="form"
                  className="border-white text-white"
                />
              </div>
            </RadioGroup>
          </div>

          <div className="mb-6">
            <label className="block text-right text-gray-700 mb-2" dir="rtl">
              رمز التحقق
            </label>
            <div className="relative">
              <Input type="text" className="text-right" />
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <button className="text-gray-500">
                  <RefreshCcw className="h-5 w-5" />
                </button>
                <div className="bg-yellow-50 border border-yellow-200 px-4 py-1">
                  <span className="text-blue-700 font-bold text-xl">2</span>
                  <span className="text-gray-700 font-bold text-xl">6</span>
                  <span className="text-red-600 font-bold text-xl">7</span>
                  <span className="text-blue-700 font-bold text-xl">1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-start gap-2">
              <Checkbox id="terms" className="mt-1" />
              <label
                htmlFor="terms"
                className="text-right text-gray-700 text-sm"
                dir="rtl"
              >
                أوافق على منح شركة عناية الوسيط الحق في الاستعلام من شركة نجم
                و/أو مركز المعلومات الوطني عن بياناتي
              </label>
            </div>
          </div>

          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-md">
            <span dir="rtl">إظهار العروض</span>
          </Button>
        </form>
      </div>

      {/* Footer Buttons */}
      <div className="fixed bottom-20 right-6">
        <button className="bg-yellow-400 rounded-full p-4 text-white shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="fixed bottom-6 right-6">
        <button className="bg-[#146394] rounded-full p-4 text-white shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}
