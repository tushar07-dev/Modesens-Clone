import { Bhead } from '../Components/Bhead'
import { Brand } from '../Components/Brand'
import Slide from '../Components/homecomponents/Slider'
import { Trending } from '../Components/Trending'
import  SlideItem  from '../Components/homecomponents/trendNew'
import  RecentView  from '../Components/womencomponents/recentlyViewed'
import CommunityPost from "../Components/womencomponents/communityPosts"
import { Bottom } from '../Components/Bottom'

import "./Home.css";
import Homeslider from '../Components/homecomponents/Homeslider'
export const MainHome = () => {

  
  return (
    <>
    
      <Homeslider/>
      <Bhead />
      <Brand />
      <Slide />
      <Trending trend={"Trending Now"}/>
      <SlideItem />
      <Trending trend={"Recently Viewed"}/>
      <RecentView />
      <Trending trend={"Community Posts"}/>
      <CommunityPost />
      <Bottom />
      
    </>

  )

}