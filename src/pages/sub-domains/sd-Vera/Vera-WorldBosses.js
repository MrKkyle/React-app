import Background3 from "../../../components/Background3";
import image from '../../../Images/worldboss.jpg';

function WorldBosses()
{
  return (
  <>
    <Background3 Background = {image} Title = "Vera World-Bosses" text = {localStorage.getItem("veraWorldBosses")}/>
  </>
  );
  
};
    
export default WorldBosses;
/* {`
    World Bosses that can be found in Vera include: 

    •Magma
    •Rudolph
    •Eva 
    •Harrah
    •Culton
    •Abyssant: Scylla
    •Abyssant: Haboela
    •Abyssant: Nakya
    `}*/