const stylesConfig = {
  toolbar: {
    marginBottom: '4px',
    minHeight: [52,52,52,52,52],
    paddingLeft: ['18px','18px','18px','18px','18px']
  },

  stack: {
    width: '100%',
    alignItems: 'center'
  },

  avatar: {
    borderRadius: '8px',
    width: 32, height: 32
  },

  drawer: {
    width: 292,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 292,
      boxSizing: 'border-box',
      borderRight: '0px',
      backgroundColor: 'rgba(0, 0, 0, 0.01)',
      color: '#000'
    }
  },

  listItemButton: {
    '&: hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)'
    },
    // backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
    paddingY: '6px',
    paddingX: '21px',
    fontFamily: 'sans-serif',
  },

  listItemIcon: {
    color: '#fff', //colorConfigs.sidebar.color
    minWidth: '30px',
  },

  box: {
    mt: '20px',
    fontSize: '14px',
    lineHeight: '28px',
  },

  typograpfy: {
    fontSize: '14px',
    lineHeight: '28px',
    m: 0,
  }
}

export default stylesConfig