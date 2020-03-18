import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { NavLink } from 'react-router-dom'
import ApiServices from '../../services/apiServices'

function Materias () {
  const [materias, setMaterias] = useState([])

  useEffect(() => {
    ApiServices.ListaMaterias()
      .then(data => {
        setMaterias(data)
      })
  }, [])

  const useStyles = makeStyles({
    list: {
      width: 250
    },
    fullList: {
      width: 'auto'
    }
  })
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {materias.map(materia => (
          <ListItem button key={materia.id}>
            <NavLink activeStyle={{
              color: 'red',
              textDecoration: 'none'
            }} to={`/materias/${materia.id.toString()}`}>
              <ListItemText primary={materia.title} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <IconButton edge="start" className={classes.menuButton}
        color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  )
}

export default Materias
