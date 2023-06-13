import HomePageDesktop from './homePageDesktop/homePage';
import HomePageM from './homePageMobile/homePageM';
import { ScreenSize } from '@/Context/types';

export default function Landing({ isMobile }: ScreenSize) {
  return isMobile ? <HomePageM /> : <HomePageDesktop />;
}
