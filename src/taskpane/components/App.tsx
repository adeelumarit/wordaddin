import * as React from "react";
import { Divider, Dropdown, Input, Label, makeStyles, Option } from "@fluentui/react-components";
import { Ribbon24Regular, LockOpen24Regular, DesignIdeas24Regular } from "@fluentui/react-icons";
import { insertText } from "../taskpane";
import { Tabs } from "./views/tab";
import '../../../assets/css/style.css'
interface AppProps {
  title: string;
}

const useStyles = makeStyles({
 
});

const App: React.FC<AppProps> = () => {
  const styles = useStyles();
 
  return (
    <>
      <Tabs/>
     
      </> 
    
  );
};

export default App;
