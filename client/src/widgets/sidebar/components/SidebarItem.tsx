import {ListItemButton, ListItemIcon} from '@mui/material'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
// import colorConfigs from '../../configs/colorConfigs';
// import {RootState} from '../../redux/store';
import {RouteType} from '../routeTypeConfig'
import stylesConfig from '../stylesConfig'

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
        sx={stylesConfig.listItemButton}
      >
        <ListItemIcon sx={stylesConfig.listItemIcon}>
          {item.sidebarProps.icon}
        </ListItemIcon>
        {item.sidebarProps.displayText}
      </ListItemButton>
    ) : null
  )
}

export default SidebarItem