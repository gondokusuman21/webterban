import Link from 'next/link';
import Image from 'next/image';
import logoKKNUGM from '../public/logo-kkn-ugm.png';
import logoUGM from '../public/logo-ugm.png';
import logoUnitKKN from '../public/logo-unit.svg';

const Footer = () => {

  return (
    <footer className='bg-light-blue pt-2 pb-5'>
      <div className="w-full mt-10 flex justify-center gap-x-5 sm:gap-x-10">
        <div className="relative h-20 w-20 md:h-28 md:w-28">
          <Image layout="fill" objectFit="contain" alt="Logo KKN UGM" src="https://res.cloudinary.com/gondokusuman-21/image/upload/v1627969743/logo-unit-footer_czfftq.png"></Image>
        </div>
        <div className="relative h-20 w-20 md:h-28 md:w-28">
          <Image layout="fill" objectFit="contain" alt="Logo KKN UGM" src="https://res.cloudinary.com/gondokusuman-21/image/upload/v1627969720/logo-ugm-footer_afx9uv.png"></Image>
        </div>
        <div className="relative h-20 w-20 md:h-28 md:w-28">
          <Image layout="fill" objectFit="contain" alt="Logo KKN UGM" src="https://res.cloudinary.com/gondokusuman-21/image/upload/v1627969645/logo-kkn-footer_fjasjy.png"></Image>
        </div>
      </div>
      <div className="w-full mt-10 flex justify-center">
        <div>KKN-PPM UGM Gondokusuman 2021-YO142</div>
      </div>
      <div className="flex justify-center mt-1 gap-x-5">
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCq4XzNbIvCWV0Bi-g2cPG2A"><img alt="Youtube" src="https://img.icons8.com/ios-glyphs/30/000000/youtube-play.png" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kkn_gondokusuman2021/"><img alt="Instagram" src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/gondokusuman21"><img alt="Github" src="https://img.icons8.com/ios-glyphs/30/000000/github.png" /></a>
      </div>
    </footer>
  );
};

export default Footer;
