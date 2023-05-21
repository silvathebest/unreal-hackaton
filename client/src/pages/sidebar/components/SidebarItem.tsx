import {ListItemButton, ListItemIcon} from '@mui/material'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
// import colorConfigs from '../../configs/colorConfigs';
// import {RootState} from '../../redux/store';
import {RouteType} from '../config'

type Props = {
  item: RouteType;
};

const SidebarItem = ({item}: Props) => {
  // const {appState} = useSelector((state: RootState) => state.appState);

  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          '&: hover': {
            backgroundColor: '#fff'
          },
          // backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
          paddingY: '12px',
          paddingX: '24px',
          fontFamily: 'sans-serif',
        }}
      >
        <ListItemIcon sx={{
          color: '#fff', //colorConfigs.sidebar.color
          minWidth: '30px',
        }}>
          {item.sidebarProps.icon}
        </ListItemIcon>
        {item.sidebarProps.displayText}
      </ListItemButton>
    ) : null
  )
}

export default SidebarItem