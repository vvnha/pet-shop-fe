import { SvgIcon } from '@mui/material';
import { useEffect, useState } from 'react';
import VNIcon from '@/public/vn.svg';
import USIcon from '@/public/us.svg';
import { useRouter } from 'next/router';

export interface LanguageProps {
  //   lang: string;
}

export default function Language(props: LanguageProps) {
  const router = useRouter();
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const { locale } = router;

    const lang = !locale ? 'en' : locale;
    setLang(lang);
  }, [router]);

  const renderNationSVGFlag = (lang: string) => {
    switch (lang) {
      case 'vi': {
        return VNIcon;
      }
      case 'en': {
        return USIcon;
      }
      default: {
        return USIcon;
      }
    }
  };

  const changeLang = () => {
    const { pathname, asPath, query, locale } = router;

    const lang = locale === 'vi' ? 'en' : 'vi';
    router.push({ pathname, query }, asPath, { locale: lang });
  };
  return <SvgIcon component={renderNationSVGFlag(lang)} inheritViewBox onClick={changeLang} />;
}
