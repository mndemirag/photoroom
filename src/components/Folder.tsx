import { Avatar, Collapse, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack } from "@mui/material"
import FolderIcon from '@mui/icons-material/Folder';
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface Props {
  results: string[]
}

export const Folder = ({ results }: Props) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open)
  };

  return (
    <List>
      <ListItem>
        <Stack direction="column">
          <Stack direction="row">
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary={"Untitled Folder"} sx={{ paddingRight: 42 }} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </Stack>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List>
              <Stack direction="column">
                {results.map(result =>
                  <ListItemButton sx={{ pl: 4 }}>
                    <img src={result} width={500} alt="result from the API" />
                  </ListItemButton>
                )}
              </Stack>
            </List>
          </Collapse>
        </Stack>
      </ListItem>
    </List>
  )
}