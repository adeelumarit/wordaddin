import { Button, Dropdown, Input, Label, makeStyles, Option } from "@fluentui/react-components";
import React from "react";
const useStyles = makeStyles({
  root: {
    fontWeight: "bold",
    fontSize: "16px"
  },
  btnstyle: {
    width: "100%",
    marginTop: "12px",
    background: "#024172",
    color: "white"
  }
})
const Start: React.FC = () => {
  const style = useStyles()
  return (

    <div className="startMainDiv">
      <div >

        <Label className={style.root}>Select Matter: </Label>
        <div style={{ marginTop: "8px" }}>
          <Dropdown
          className="full-width-dropdown"
            clearable
            placeholder="Select a matter"
          >
            <Option>Matter1</Option>
            <Option>Matter2</Option>
            <Option>Matter3</Option>
          </Dropdown>
        </div>

        <div>
          <Button appearance="primary" className={style.btnstyle}>New Blank Document</Button>
        </div>
      </div>
{/* templates */}
      <div style={{marginTop:"8px"}} >

        <Label className={style.root}>New from Templates: </Label>
        <div style={{ marginTop: "8px" }}>
          <Dropdown
          className="full-width-dropdown"
            clearable
            placeholder="Language"
          >
            <Option>language1</Option>
            <Option>language2</Option>
            <Option>language3</Option>
          </Dropdown>
        </div>
        
        <div style={{ marginTop: "8px" }}>
          <Dropdown
          className="full-width-dropdown"
            clearable
            placeholder="Category"
          >
            <Option>category1</Option>
            <Option>category2</Option>
            <Option>category3</Option>
          </Dropdown>
        </div>
        <div style={{ marginTop: "8px" }}>
          <Dropdown
          className="full-width-dropdown"
            clearable
            placeholder="Class"
          >
            <Option>class1</Option>
            <Option>class2</Option>
            <Option>class3</Option>
          </Dropdown>
        </div>
        <div style={{ marginTop: "8px" }}>
          <Dropdown
          className="full-width-dropdown"
            clearable
            placeholder="Type"
          >
            <Option>type1</Option>
            <Option>type2</Option>
            <Option>type3</Option>
          </Dropdown>
        </div>
        
      </div>

      
  <div style={{marginTop:"8px"}}>

        <Label className={style.root}>New Pitchmark Doc:
        </Label>
        <div style={{ marginTop: "8px" }}>
          <Button  style={{width:"100%"}}>PM ID</Button>
        </div>

        <div style={{display:"flex",justifyContent:"end"}}>
          <Button appearance="primary" className={style.btnstyle} style={{    width: "30%"}}>Next</Button>
        </div>
      </div>
    
    </div>
  );
};

export default Start;