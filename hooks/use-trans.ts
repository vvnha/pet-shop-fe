import { useRouter } from 'next/router';
import en from '@/public/locales/en/en';
import vi from '@/public/locales/vi/vi';

const useTrans = () => {
  const { locale } = useRouter();

  const trans = locale === 'vi' ? vi : en;

  return trans;
};

export { useTrans };
