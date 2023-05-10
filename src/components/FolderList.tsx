import { List } from "@mui/material"
import { Folder } from "./Folder"

interface Props {
  folders: string[]
}

export const FolderList = ({ folders }: Props) => {
  return (
    <List>
      {folders.map(_folder => <Folder results={[]} />)}
    </List>
  )
}