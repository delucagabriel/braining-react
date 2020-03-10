import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Drawer, List,
  ListItem, ListItemText, IconButton
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

const data = [
  {
    id: 1,
    title: 'Português',
    created_at: '2020-03-02 18:11:35',
    updated_at: '2020-03-02 18:11:35',
    questions: []
  },
  {
    id: 2,
    title: 'Matemática',
    created_at: '2020-03-02 18:11:36',
    updated_at: '2020-03-02 18:11:36',
    questions: [
      {
        id: 1,
        subject_id: 2,
        description: 'Quanto é 1 + 1?',
        created_at: '2020-03-02 18:11:37',
        updated_at: '2020-03-02 18:11:37'
      },
      {
        id: 2,
        subject_id: 2,
        description: 'Quanto é 2 + 1?',
        created_at: '2020-03-02 18:11:37',
        updated_at: '2020-03-02 18:11:37'
      },
      {
        id: 3,
        subject_id: 2,
        description: 'Quanto é 3 + 1?',
        created_at: '2020-03-02 18:11:37',
        updated_at: '2020-03-02 18:11:37'
      }
    ]
  },
  {
    id: 6,
    title: 'Geografia',
    created_at: '2020-03-02 19:01:38',
    updated_at: '2020-03-02 19:01:38',
    questions: []
  }
]

const useStyles = makeStyles({
  list: {
    width: 250
  }
})

export default function MeteriasDrawer () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false
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
        {data.map(item => (
          <ListItem button key={item.id}>
            <ListItemText primary={item.title} />
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
