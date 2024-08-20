import { Button, Dropdown, Input, Label, makeStyles, Option } from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import React from "react";
const useStyles = makeStyles({
  root: {
    
    fontSize: "16px",
    marginLeft: "-6px"
  },
  
  btnstyle: {
    width: "30%",
    marginTop: "12px",
    background: "#024172",
    marginLeft: "12px",
    color: "white"
  }
})
const Variable: React.FC = () => {
  const style = useStyles()
    return (
  
        <div className="VariablesMainDiv">
      <div >

        <Label className={style.root}>Date:
        </Label>
        <div className="variables_Input" style={{ display: "flex",marginTop: "-12px" }}>
        <DatePicker style={{width:"66%"}} placeholder="date" />
          <Button appearance="primary" className={style.btnstyle}>Insert</Button>

        </div>

      </div>


      <div >

        <Label className={style.root}>Counterparty name:
        </Label>
        <div className="variables_Input" style={{ display: "flex",marginTop: "-12px" }}>
          <Input style={{width:"70%"}} placeholder="name" />
          <Button appearance="primary" className={style.btnstyle}>Insert</Button>

        </div>

      </div>

      <div >

        <Label className={style.root}>Counterparty address:

        </Label>
        <div className="variables_Input" style={{ display: "flex",marginTop: "-12px" }}>
          <Input style={{width:"70%"}} placeholder="address" />
          <Button appearance="primary" className={style.btnstyle}>Insert</Button>

        </div>

      </div>

      <div >

        <Label className={style.root}>Contract start date:
        </Label>
        <div className="variables_Input" style={{ display: "flex",marginTop: "-12px" }}>
          <DatePicker style={{width:"66%"}} placeholder="start date"/>
          <Button appearance="primary" className={style.btnstyle}>Insert</Button>

        </div>

      </div>

      <div >

        <Label className={style.root}>Contract end date:
        </Label>
        <div className="variables_Input" style={{ display: "flex",marginTop: "-12px" }}>
        <DatePicker style={{width:"66%"}}placeholder="end date" />
          <Button appearance="primary" className={style.btnstyle}>Insert</Button>

        </div>

      </div>

      <div >

        <Label className={style.root}>Currency:
        </Label>
        <div className="variables_Input" style={{ display: "flex",marginTop: "-12px" }}>
          <Input style={{width:"70%"}} placeholder="currency" />
          <Button appearance="primary" className={style.btnstyle}>Insert</Button>

        </div>

      </div>
      

      </div>
    );
  };
  
  export default Variable;