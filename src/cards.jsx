import _ from "lodash" 
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AnchorIcon from '@mui/icons-material/Anchor';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CampaignIcon from '@mui/icons-material/Campaign';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import ChurchIcon from '@mui/icons-material/Church';
import CreateIcon from '@mui/icons-material/Create';
import ContentCutIcon from '@mui/icons-material/ContentCut';

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

let icons = [
<AcUnitIcon  fontSize="inherit" sx={{width: '5rem', height: '5rem'}} />,
 <AccessTimeFilledIcon  fontSize="inherit" sx={{width: '5rem', height: '5rem'}} />,
 <AddBoxIcon fontSize="inherit" sx={{width: '5rem', height: '5rem'}} />,
 <AddAlertIcon fontSize="inherit" sx={{width: '5rem', height: '5rem'}} />,
 <AirportShuttleIcon fontSize="inherit" sx={{width: '5rem', height: '5rem'}} />,
 <AnchorIcon fontSize="inherit" sx={{width: '5rem', height: '5rem'}} />,
 <AttachMoneyIcon fontSize="inherit" sx={{width: '5rem', height: '5rem'}} />,
 <CampaignIcon fontSize="inherit" sx={{width: '5rem', height: '5rem'}} />,
 <ChangeHistoryIcon fontSize="inherit" sx={{width: '5rem', height: '5rem'}} />,
 <ChurchIcon fontSize="inherit" sx={{width: '5rem', height: '5rem'}} />,
 <CreateIcon fontSize="inherit" sx={{width: '5rem', height: '5rem'}} />,
 <ContentCutIcon fontSize="inherit" sx={{width: '5rem', height: '5rem'}} />
]

// double the cards and shuffle them
export default function getCards(){
  let cards = icons.map((icon, i)=>{
    return {
        icon,
        faceUp: false,
        id: i,
        isMatched: false
    }
  })
  return shuffle(cards.concat(_.cloneDeep(cards)))
}
